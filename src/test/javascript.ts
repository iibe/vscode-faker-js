import { Callable, Newable, Primitive, Structure } from '../types';
import { ISyntaxJavaScript } from '../types/settings';
import {
    isAnyPrimitive,
    isExactArray,
    isExactClass,
    isExactDate,
    isExactFunction,
    isExactObject,
} from '../utils/data-types';
import { exhaustiveSwitch } from '../utils/exhaustive';

class Stringify {
    private settings: ISyntaxJavaScript;
    private quotationMark: string;

    constructor(config: ISyntaxJavaScript) {
        this.settings = config;
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
        switch (this.settings.bigint.insertMode) {
            case 'inline': return String(value);
            case 'literal': return value + 'n';
            case 'wrapper': return "BigInt(" + value + ")";
        }

        return exhaustiveSwitch(this.settings.bigint.insertMode);
    }

    fromString(value: string): string {
        // prettier-ignore
        switch (this.settings.string.insertMode) {
            case 'inline': return value;
            case 'literal': return this.quotationMark + value + this.quotationMark;
        }

        return exhaustiveSwitch(this.settings.string.insertMode);
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

            result += index !== keys.length - 1 ? ', ' : ' ';
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
        switch(this.settings.string.quotes) {
            case 'single': return '\'';
            case 'double': return '"';
            case 'backticks': return '`';
        }

        return exhaustiveSwitch(this.settings.string.quotes);
    }
}

export const stringify = new Stringify({
    bigint: {
        insertMode: 'literal',
    },
    string: {
        insertMode: 'literal',
        quotes: 'single',
    },
});

const primitivesSimple = {
    j1: undefined,
    j2: void 0,
    j3: null,
    j4: true,
    j5: false,
    j6: 0,
    j7: +0,
    j8: -0,
    j9: 1,
    j10: -1,
    j11: 2.3,
    j12: -2.3,
    j13: Number.MAX_SAFE_INTEGER,
    j14: -Number.MAX_SAFE_INTEGER,
    j15: Infinity,
    j16: -Infinity,
    j17: NaN,
    j18: -NaN,
    j19: 0n,
    j20: -0n,
    j21: 1n,
    j23: -1n,
    j24: BigInt(Number.MAX_SAFE_INTEGER) ** 2n,
};

const primitivesComplex = {
    j1: Symbol(),
    j2: Symbol(''),
    j3: Symbol('foo'),
    j4: '',
    j5: ' ',
    j6: '\xFF',
    j7: 'foo',
    j8: `${123}`,
};

// console.log(primitivesSimple);
// console.log(stringify.from(primitivesSimple));
// console.log(primitivesComplex);
// console.log(stringify.from(primitivesComplex));

const edgeCases = {
    foo: ['foo', () => () => 'bar', { baz: 'qux', x: { y: 1, z: 2 } }],
    bar: {},
    baz: () => () => () => 'smth',
    qux: class {
        constructor(
            abc: string,
            private ijk: boolean,
            protected xyz: string
        ) {}

        opened(a: number, b: number) {
            return a + b;
        }

        #secret(a: number, b: number) {
            return a - b;
        }
    },
};

console.log('\nINPUT:');
console.log(edgeCases);

console.log('\nOUTPUT:');
console.log(stringify.from(edgeCases));
