import { Callable, Newable, Primitive, Structure } from '.';
import { LanguageIdentifier } from './vscode';

export abstract class Stringify {
    abstract id: LanguageIdentifier;

    abstract from(data: any): string;
    abstract fromPrimitive(primitive: Primitive): string;
    abstract fromStructure(structure: Structure): string;

    abstract fromNull(): string;
    abstract fromUndefined(): string;
    abstract fromBoolean(value: boolean): string;
    abstract fromNumber(value: number): string;
    abstract fromBigInt(value: BigInt): string;
    abstract fromString(value: string): string;
    abstract fromSymbol(value: symbol): string;

    abstract fromArray(array: any[]): string;
    abstract fromObject(object: Record<string, any>): string;
    abstract fromFunction(func: Callable): string;
    abstract fromClass(ctor: Newable): string;
}
