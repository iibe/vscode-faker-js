import { CallableStructure, InstanceStructure, Primitive, Structure } from './types';
import { IFakerConfigType } from './types/faker';

export class Stringify {
    private config: IFakerConfigType;
    private stringQuote: string;
    private symbolQuote: string;

    constructor(config: IFakerConfigType) {
        this.config = config;
        this.stringQuote = this.getStringQuote();
        this.symbolQuote = this.getSymbolQuote();
    }

    /* PUBLIC API */

    from(data: any): string {
        return Stringify.isAnyPrimitive(data)
            ? this.fromPrimitive(data as Primitive)
            : this.fromStructure(data as Structure);
    }

    fromPrimitive(primitive: Primitive): string {
        switch (true) {
            case primitive === null: // keyword, `typeof null === 'object'`
            case typeof primitive === 'undefined':
            case typeof primitive === 'boolean':
            case typeof primitive === 'number':
                return String(primitive);
            case typeof primitive === 'bigint':
                return this.serializeBigInt(primitive);
            case typeof primitive === 'string':
                return this.serializeString(primitive);
            case typeof primitive === 'symbol':
                return this.serializeSymbol(primitive);
            default:
                return primitive; // `never` hit that case
        }
    }

    fromStructure(structure: Structure): string {
        // NOTE: Here order is matter...
        switch (true) {
            case Stringify.isExactArray(structure):
                return this.serializeArray(structure);
            case Stringify.isExactClass(structure):
                return this.serializeClass(structure as InstanceStructure);
            case Stringify.isExactFunction(structure):
                return this.serializeFunction(structure as CallableStructure);
            case Stringify.isExactObject(structure): // should be the last case statement
                return this.serializeObject(structure); // almost everything is an instance of `Object`
            default:
                return `${structure}`;
        }
    }

    /* INTERNAL DETAILS */

    serializeArray(array: Array<any>): string {
        if (!array.length) {
            return '[]';
        }

        const stringified = array.map((element) => {
            // avoid circular references
            if (Stringify.isExactArray(element)) {
                return this.serializeArray(element);
            }

            return this.from(element);
        });

        return `[ ${stringified.join(', ')} ]`;
    }

    serializeClass(ctor: InstanceStructure): string {
        const instanceObject = new ctor();

        // avoid circular references
        if (Stringify.isExactClass(instanceObject)) {
            return this.serializeClass(instanceObject);
        }

        return this.from(instanceObject);
    }

    serializeFunction(func: CallableStructure): string {
        const functionResult = func();

        // avoid circular references
        if (Stringify.isExactFunction(functionResult)) {
            return this.serializeFunction(functionResult);
        }

        return this.from(functionResult);
    }

    serializeObject(object: Record<string, any>, depth = 0): string {
        const keys = Object.keys(object);

        if (!keys.length) {
            return '{}';
        }

        let result: string = '{ ';

        for (let index = 0; index < keys.length; index++) {
            const key = keys[index];
            const value = object[key];
            const comma = index !== keys.length - 1 ? ',' : '';

            result += `'${key}': `;

            // avoid circular references
            if (Stringify.isExactObject(value)) {
                result += `${this.serializeObject(value, depth + 1)}`;
            } else {
                result += `${this.from(value)}`;
            }

            result += `${comma} `;
        }

        result += '}';

        return result;
    }

    private serializeBigInt(value: BigInt): string {
        // prettier-ignore
        switch (this.config.bigint.insert) {
            case 'inline': return String(value);
            case 'literal': return String(value) + 'n';
            case 'wrapper': return `BigInt(${value})`;
        }
    }

    private serializeString(value: string): string {
        // prettier-ignore
        switch (this.config.string.insert) {
            case 'inline': return String(value);
            case 'literal': return `${this.stringQuote}${value}${this.stringQuote}`;
        }
    }

    private getStringQuote() {
        // prettier-ignore
        switch(this.config.string.quotes) {
            case 'single': return '\'';
            case 'double': return '"';
            case 'backticks': return '`';
        }
    }

    private getSymbolQuote() {
        // prettier-ignore
        switch(this.config.symbol.quotes) {
            case 'single': return '\'';
            case 'double': return '"';
            case 'backticks': return '`';
        }
    }

    private serializeSymbol(value: symbol): string {
        return typeof value.description === 'string'
            ? `Symbol(${this.symbolQuote}${value.description}${this.symbolQuote})`
            : 'Symbol()';
    }

    /** Any of these: undefined, null, boolean, string, symbol, number, bigint. */
    static isAnyPrimitive(data: any) {
        return !this.isAnyStructure(data);
    }

    /** Any of these: array, object, function (class). */
    static isAnyStructure(data: any) {
        return (typeof data === 'object' && data !== null) || typeof data === 'function';
    }

    static isExactArray(data: any) {
        return Array.isArray(data);
    }

    static isExactClass(data: any) {
        const strictTypeCheck = typeof data === 'function';

        if (!strictTypeCheck) {
            return false;
        }

        const descriptor = Object.getOwnPropertyDescriptor(data, 'prototype');
        if (!descriptor) {
            return false; // omit Promise.resolve() function, since it doesn't have prototype
        }

        const naiveToStringCheck = /^\s*class[^\w]+/.test(data.toString());
        const naiveNativeCheck =
            globalThis[data.name as keyof typeof globalThis] === data && /^[A-Z]/.test(data.name);
        const naiveImmutablePrototypeCheck = !Boolean(descriptor.writable);

        return naiveToStringCheck || naiveNativeCheck || naiveImmutablePrototypeCheck;
    }

    static isExactFunction(data: any) {
        return typeof data === 'function';
    }

    static isExactObject(data: any) {
        return typeof data === 'object' && data !== null && !Array.isArray(data);
    }
}
