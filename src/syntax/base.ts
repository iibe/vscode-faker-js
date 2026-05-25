import {
    assertUnreachable,
    isArray,
    isClass,
    isDate,
    isFunction,
    isObject,
    isPrimitive
} from '../base/utils.js';
import type { Callable, Newable, Primitive, Structure } from '../types/base.js';
import type { ISyntaxVariant } from '../types/extension-config.js';
import type { LanguageID } from '../types/vscode.js';

export abstract class Stringify {
    protected abstract readonly id: LanguageID;
    protected abstract readonly syntax: ISyntaxVariant;

    protected abstract readonly quotationMark: string;
    protected abstract readonly arrayOpener: string;
    protected abstract readonly arrayCloser: string;
    protected abstract readonly objectOpener: string;
    protected abstract readonly objectCloser: string;

    from(data: unknown): string {
        return isPrimitive(data)
            ? this.fromPrimitive(data)
            : this.fromStructure(data);
    }

    fromPrimitive(primitive: Primitive): string {
        switch (true) {
            // keyword and `typeof null === 'object'
            case primitive === null:
                return this.fromNull();
            case typeof primitive === 'undefined':
                return this.fromUndefined();
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
                return assertUnreachable(primitive);
        }
    }

    fromStructure(structure: Structure): string {
        // Here the order is important since almost everything is an instance of `Object`.
        // Therefore, we must check particular objects first, and the object in general.
        switch (true) {
            case isDate(structure):
                return this.fromString(structure.toISOString());
            case isArray(structure):
                return this.fromArray(structure);
            case isClass(structure):
                return this.fromClass(structure);
            case isFunction(structure):
                return this.fromFunction(structure);
            case isObject(structure):
                return this.fromObject(structure);
            default:
                return assertUnreachable(structure);
        }
    }

    abstract fromNull(): string;
    abstract fromUndefined(): string;
    abstract fromBoolean(value: boolean): string;
    abstract fromNumber(value: number): string;
    abstract fromBigInt(value: bigint): string;
    abstract fromString(value: string): string;
    abstract fromSymbol(value: symbol): string;

    abstract fromArray(array: unknown[]): string;
    abstract fromObject(object: object): string;

    fromFunction(callable: Callable): string {
        const v = callable();

        // avoid circular references
        return isFunction(v) ? this.fromFunction(v) : this.from(v);
    }

    fromClass(newable: Newable): string {
        const value = new newable();

        // avoid circular references
        return isClass(value) ? this.fromClass(value) : this.from(value);
    }
}
