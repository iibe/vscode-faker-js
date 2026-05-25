import { assertUnreachable, isArray, isObject } from '../base/utils.js';
import type { ISettings } from '../types/extension-config.js';
import type { LanguageID } from '../types/vscode.js';
import { Stringify } from './base.js';

export class StringifyPython extends Stringify {
    protected readonly id: LanguageID = 'python';
    protected readonly syntax: ISettings['python'];

    protected readonly quotationMark: string;
    protected readonly arrayOpener: string;
    protected readonly arrayCloser: string;
    protected readonly objectOpener: string;
    protected readonly objectCloser: string;

    constructor(syntax: ISettings['python']) {
        super();
        this.syntax = syntax;

        switch (syntax.string.quotationMark) {
            case 'single':
                this.quotationMark = "'";
                break;
            case 'double':
                this.quotationMark = '"';
                break;
        }

        this.arrayOpener = '[';
        this.arrayCloser = ']';
        this.objectOpener = '{';
        this.objectCloser = '}';
    }

    fromNull(): string {
        return 'None';
    }

    fromUndefined(): string {
        return 'None';
    }

    fromBoolean(value: boolean): string {
        return value ? 'True' : 'False';
    }

    fromNumber(value: number): string {
        return String(value);
    }

    fromBigInt(value: bigint): string {
        switch (this.syntax.bigint.insertMode) {
            case 'inline':
                return String(value);
            default:
                assertUnreachable(this.syntax.bigint.insertMode);
        }
    }

    fromString(value: string): string {
        switch (this.syntax.string.insertMode) {
            case 'inline':
                return value;
            case 'literal':
                return this.quotationMark + value + this.quotationMark;
            case 'interpolation':
                return 'f"' + value + '"';
            default:
                assertUnreachable(this.syntax.string.insertMode);
        }
    }

    fromSymbol(_: symbol): string {
        return this.fromString(
            `Faker.js: Symbol() doesn't exists in '${this.id}'.`
        );
    }

    fromArray(array: unknown[]): string {
        const elements = array.map((element) => {
            // avoid circular reference
            return isArray(element)
                ? this.fromArray(element)
                : this.from(element);
        });

        return this.arrayOpener + elements.join(', ') + this.arrayCloser;
    }

    fromObject(object: object): string {
        const records = Object.entries(object).map(([key, value]) => {
            let record: string =
                this.quotationMark + key + this.quotationMark + ': ';
            // avoid circular references
            record += isObject(value)
                ? this.fromObject(value)
                : this.from(value);

            return record;
        });

        return this.objectOpener + records.join(', ') + this.objectCloser;
    }
}
