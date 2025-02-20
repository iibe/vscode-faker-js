import { Stringify } from '.';
import { isNativeArray, isNativeObject } from '../base/data-types';
import { assertNever } from '../base/exhaustive';
import { ISettings } from '../types/settings';
import { LanguageIdentifier } from '../types/vscode';

export class StringifyPhp extends Stringify {
    protected readonly id: LanguageIdentifier = 'php';
    protected readonly syntax: ISettings['php'];

    protected readonly quotationMark: string;
    protected readonly arrayOpener: string;
    protected readonly arrayCloser: string;
    protected readonly objectOpener: string;
    protected readonly objectCloser: string;

    constructor(syntax: ISettings['php']) {
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

        switch (syntax.array.insertMode) {
            case 'normal':
                this.arrayOpener = 'array(';
                this.arrayCloser = ')';
                break;
            case 'short':
                this.arrayOpener = '[';
                this.arrayCloser = ']';
                break;
        }

        // In PHP associative arrays are used instead of JS-like objects.
        this.objectOpener = this.arrayOpener;
        this.objectCloser = this.arrayCloser;
    }

    fromNull(): string {
        return 'NULL';
    }

    fromUndefined(): string {
        return 'NULL';
    }

    fromBoolean(value: boolean): string {
        return value ? 'TRUE' : 'FALSE';
    }

    fromNumber(value: number): string {
        return String(value);
    }

    fromBigInt(value: bigint): string {
        // prettier-ignore
        switch (this.syntax.bigint.insertMode) {
            case 'inline': return String(value);
            default: return assertNever(this.syntax.bigint.insertMode);
        }
    }

    fromString(value: string): string {
        // prettier-ignore
        switch (this.syntax.string.insertMode) {
            case 'inline': return value;
            case 'literal': return this.quotationMark + value + this.quotationMark;
            case 'interpolation': return '"' + value + '"';
            default: return assertNever(this.syntax.string.insertMode);
        }
    }

    fromSymbol(value: symbol): string {
        return this.fromString(`Faker.js: Symbol() doesn't exists in '${this.id}'.`);
    }

    fromArray(array: any[]): string {
        const elements = array.map((element) => {
            // avoid circular reference
            return isNativeArray(element) ? this.fromArray(element) : this.from(element);
        });

        return this.arrayOpener + elements.join(', ') + this.arrayCloser;
    }

    fromObject(object: object): string {
        const records = Object.entries(object).map(([key, value]) => {
            let record: string = this.quotationMark + key + this.quotationMark + ' => ';
            // avoid circular references
            record += isNativeObject(value) ? this.fromObject(value) : this.from(value);

            return record;
        });

        return this.objectOpener + records.join(', ') + this.objectCloser;
    }
}
