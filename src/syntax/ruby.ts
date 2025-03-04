import { Stringify } from '.';
import { isNativeArray, isNativeObject } from '../base/data-types';
import { assertNever } from '../base/exhaustive';
import { ISettings } from '../types/settings';
import { LanguageIdentifier } from '../types/vscode';

export class StringifyRuby extends Stringify {
    protected readonly id: LanguageIdentifier = 'ruby';
    protected readonly syntax: ISettings['ruby'];

    protected readonly quotationMark: string;
    protected readonly arrayOpener: string;
    protected readonly arrayCloser: string;
    protected readonly objectOpener: string;
    protected readonly objectCloser: string;

    constructor(syntax: ISettings['ruby']) {
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
        return 'nil';
    }

    fromUndefined(): string {
        return 'nil';
    }

    fromBoolean(value: boolean): string {
        return String(value);
    }

    fromNumber(value: number): string {
        return String(value);
    }

    fromBigInt(value: bigint): string {
        switch (this.syntax.bigint.insertMode) {
            case 'inline':
                return String(value);
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
        return ':' + (value.description ? this.fromString(value.description) : 'SymbolName');
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
