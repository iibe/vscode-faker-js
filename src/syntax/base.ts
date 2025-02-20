import {
    isNativeArray,
    isNativeClass,
    isNativeDate,
    isNativeFunction,
    isNativeObject,
    isPrimitive,
} from '../base/data-types';
import { assertNever } from '../base/exhaustive';
import { Callable, Newable, Primitive, Structure } from '../types';
import { ISyntaxVariant } from '../types/settings';
import { LanguageIdentifier } from '../types/vscode';

export abstract class Stringify {
    protected abstract readonly id: LanguageIdentifier;
    protected abstract readonly syntax: ISyntaxVariant;

    protected abstract readonly quotationMark: string;
    protected abstract readonly arrayOpener: string;
    protected abstract readonly arrayCloser: string;
    protected abstract readonly objectOpener: string;
    protected abstract readonly objectCloser: string;

    from(data: any): string {
        return isPrimitive(data) ? this.fromPrimitive(data) : this.fromStructure(data);
    }

    fromPrimitive(primitive: Primitive): string {
        // prettier-ignore
        switch (true) {
            // keyword and `typeof null === 'object'
            case primitive === null: return this.fromNull();
            case typeof primitive === 'undefined': return this.fromUndefined();
            case typeof primitive === 'boolean': return this.fromBoolean(primitive);
            case typeof primitive === 'number': return this.fromNumber(primitive);
            case typeof primitive === 'bigint': return this.fromBigInt(primitive);
            case typeof primitive === 'string': return this.fromString(primitive);
            case typeof primitive === 'symbol': return this.fromSymbol(primitive);
            default: return assertNever(primitive); // `never` hit that case
        }
    }

    fromStructure(structure: Structure): string {
        // Here the order is important since almost everything is an instance of `Object`.
        // Therefore, we must check particular objects first, and the object in general.
        // prettier-ignore
        switch (true) {
            case isNativeDate(structure): return this.fromString(structure.toISOString());
            case isNativeArray(structure): return this.fromArray(structure);
            case isNativeClass(structure): return this.fromClass(structure);
            case isNativeFunction(structure): return this.fromFunction(structure);
            case isNativeObject(structure): return this.fromObject(structure);
            default: return assertNever(structure); // `never` hit that case
        }
    }

    abstract fromNull(): string;
    abstract fromUndefined(): string;
    abstract fromBoolean(value: boolean): string;
    abstract fromNumber(value: number): string;
    abstract fromBigInt(value: bigint): string;
    abstract fromString(value: string): string;
    abstract fromSymbol(value: symbol): string;

    abstract fromArray(array: any[]): string;
    abstract fromObject(object: object): string;

    fromFunction(callable: Callable): string {
        const result = callable();

        // avoid circular references
        return isNativeFunction(result) ? this.fromFunction(result) : this.from(result);
    }

    fromClass(newable: Newable): string {
        const result = new newable();

        // avoid circular references
        return isNativeClass(result) ? this.fromClass(result) : this.from(result);
    }
}
