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
        switch (this.syntax.null.insertMode) {
            case 'lowercase':
                return 'null';
            case 'uppercase':
                return 'NULL';
            default:
                return assertNever(this.syntax.null.insertMode);
        }
    }

    fromUndefined(): string {
        switch (this.syntax.null.insertMode) {
            case 'lowercase':
                return 'null';
            case 'uppercase':
                return 'NULL';
            default:
                return assertNever(this.syntax.null.insertMode);
        }
    }

    fromBoolean(value: boolean): string {
        switch (this.syntax.boolean.insertMode) {
            case 'lowercase':
                return String(value);
            case 'uppercase':
                return String(value).toUpperCase();
            default:
                return assertNever(this.syntax.boolean.insertMode);
        }
    }

    fromNumber(value: number): string {
        switch (true) {
            case Number.isNaN(value):
                return 'NaN';
            case !Number.isFinite(value):
                return `${Math.sign(value) >= 0 ? '' : '-'}Inf`;
            default:
                return String(value);
        }
    }

    fromBigInt(value: bigint): string {
        switch (this.syntax.bigint.insertMode) {
            case 'unsafe':
                return String(value);
            case 'safe':
                return this.quotationMark + value + this.quotationMark;
            default:
                return assertNever(this.syntax.bigint.insertMode);
        }
    }

    fromString(value: string): string {
        switch (this.syntax.string.insertMode) {
            case 'inline':
                return value;
            case 'literal':
                return this.quotationMark + value + this.quotationMark;
            case 'interpolation':
                return '"' + value + '"';
            default:
                return assertNever(this.syntax.string.insertMode);
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
