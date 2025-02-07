import { Stringify } from '.';
import { Callable, Newable, Primitive, Structure } from '../types';
import { ISyntaxJavaScript } from '../types/settings';
import { LanguageIdentifier } from '../types/vscode';
import {
    isAnyPrimitive,
    isExactArray,
    isExactClass,
    isExactDate,
    isExactFunction,
    isExactObject,
} from '../utils/data-types';
import { exhaustiveSwitch } from '../utils/exhaustive';

export class StringifyJavaScript extends Stringify {
    public languageId: LanguageIdentifier = 'javascript';
    public extensions: string[] = ['js', 'cjs', 'mjs'];

    private syntax: ISyntaxJavaScript;
    private quotationMark: string;

    constructor(syntax: ISyntaxJavaScript) {
        super();
        this.syntax = syntax;
        this.quotationMark = this.getQuotationMark();
    }

    from(data: any): string {
        return isAnyPrimitive(data)
            ? this.fromPrimitive(data as Primitive)
            : this.fromStructure(data as Structure);
    }

    fromPrimitive(primitive: Primitive): string {
        switch (true) {
            case typeof primitive === 'undefined':
                return this.fromUndefined();
            case primitive === null:
                return this.fromNull(); // keyword and `typeof null === 'object'
            case typeof primitive === 'boolean':
                return this.fromBoolean(primitive);
            case typeof primitive === 'number':
                return this.fromNumber(primitive);
            case typeof primitive === 'bigint':
                return this.fromBigInt(primitive);
            case typeof primitive === 'string':
                return this.fromString(primitive);
            case typeof primitive === 'symbol':
                return this.fromSymbol(primitive);
            default:
                return String(primitive); // `never` hit that case
        }
    }

    fromStructure(structure: Structure): string {
        // Here the order is important since almost everything is an instance of `Object`.
        // Therefore, we must check particular objects first, and the object in general.
        switch (true) {
            case isExactDate(structure):
                return this.fromString(structure.toISOString());
            case isExactArray(structure):
                return this.fromArray(structure);
            case isExactClass(structure):
                return this.fromClass(structure as Newable);
            case isExactFunction(structure):
                return this.fromFunction(structure as Callable);
            case isExactObject(structure):
                return this.fromObject(structure);
            default:
                return String(structure);
        }
    }

    /* LANGUAGE-SPECIFIC METHODS */

    fromUndefined(): string {
        return 'undefined';
    }

    fromNull(): string {
        return 'null';
    }

    fromBoolean(value: boolean): string {
        return String(value);
    }

    fromNumber(value: number): string {
        return String(value);
    }

    fromBigInt(value: BigInt): string {
        // prettier-ignore
        switch (this.syntax.bigint.insertMode) {
            case 'inline': return String(value);
            case 'literal': return value + 'n';
            case 'wrapper': return "BigInt(" + value + ")";
        }

        return exhaustiveSwitch(this.syntax.bigint.insertMode);
    }

    fromString(value: string): string {
        // prettier-ignore
        switch (this.syntax.string.insertMode) {
            case 'inline': return value;
            case 'literal': return this.quotationMark + value + this.quotationMark;
        }

        return exhaustiveSwitch(this.syntax.string.insertMode);
    }

    fromSymbol(value: symbol): string {
        return typeof value.description === 'string'
            ? 'Symbol(' + this.fromString(value.description) + ')'
            : 'Symbol()';
    }

    fromArray(array: Array<any>): string {
        if (array.length === 0) {
            return '[]';
        }

        const stringified = array.map((element) => {
            // avoid circular references
            if (isExactArray(element)) {
                return this.fromArray(element);
            }

            return this.from(element);
        });

        return '[' + stringified.join(', ') + ']';
    }

    fromObject(object: Record<string, any>, depth = 0): string {
        const keys = Object.keys(object);

        if (keys.length === 0) {
            return '{}';
        }

        let result: string = '{';

        for (let index = 0; index < keys.length; index++) {
            const key = keys[index];
            const value = object[key];

            result += ` '${key}': `;

            // avoid circular references
            if (isExactObject(value)) {
                result += `${this.fromObject(value, depth + 1)}`;
            } else {
                result += `${this.from(value)}`;
            }

            result += index !== keys.length - 1 ? ',' : '';
        }

        result += '}';

        return result;
    }

    fromFunction(func: Callable): string {
        const result = func();

        // avoid circular references
        if (isExactFunction(result)) {
            return this.fromFunction(result);
        }

        return this.from(result);
    }

    fromClass(ctor: Newable): string {
        const instance = new ctor();

        // avoid circular references
        if (isExactClass(instance)) {
            return this.fromClass(instance);
        }

        return this.from(instance);
    }

    private getQuotationMark() {
        // prettier-ignore
        switch(this.syntax.string.quotes) {
            case 'single': return '\'';
            case 'double': return '"';
            case 'backticks': return '`';
        }

        return exhaustiveSwitch(this.syntax.string.quotes);
    }
}
