import { Primitive, Structure } from '../types';
import { LanguageIdentifier } from '../types/vscode';

export abstract class Stringify {
    abstract languageId: LanguageIdentifier;
    abstract extensions: string[];

    abstract from(data: any): string;
    abstract fromPrimitive(primitive: Primitive): string;
    abstract fromStructure(structure: Structure): string;
}
