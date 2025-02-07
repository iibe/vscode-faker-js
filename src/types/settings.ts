import { Flatten } from '.';
import type { IFakerLocale } from './faker';
import { LanguageIdentifier } from './vscode';

export type IFakerLanguage = LanguageIdentifier | '*';

export interface ISettingsFaker {
    locale: IFakerLocale;
    language: IFakerLanguage;
}

export interface ISyntaxJavaScript {
    bigint: {
        insertMode: 'inline' | 'literal' | 'wrapper';
    };
    string: {
        insertMode: 'inline' | 'literal';
        quotes: 'single' | 'double' | 'backticks';
    };
}

export interface ISyntaxPython {
    bigint: {
        insertMode: 'inline' | 'literal';
    };
    string: {
        insertMode: 'inline' | 'literal';
        quotes: 'double';
    };
}

export interface ISettingsType extends ISettingsFaker {
    javascript: ISyntaxJavaScript;
    python: ISyntaxPython;
}

export type ISettings = Flatten<ISettingsType>;
export type ISettingsKey = keyof ISettings;
export type ISettingsValue = ISettings[keyof ISettings];
