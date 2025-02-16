import { Flatten } from '.';
import type { IFakerLocale } from './faker';
import { LanguageIdentifier } from './vscode';

export interface ISettingsBase {
    // Specifies Faker.js locale.
    locale: IFakerLocale;

    // Specifies a syntax of fake data. If set to "*", the serialization changes dynamically depending on a programming language. Otherwise (if set to a particular language), a fixed serialization will be used for all languages. If no serialization class was found, then it uses JavaScript syntax for everything.
    syntax: '*' | LanguageIdentifier;
}

export interface ISyntaxC {}

export interface ISyntaxCpp {}

export interface ISyntaxCSharp {}

export interface ISyntaxGo {}

export interface ISyntaxJava {}

export interface ISyntaxJavaScript {
    bigint: {
        insertMode: 'inline' | 'literal' | 'wrapper';
    };
    string: {
        quotes: 'single' | 'double';
        insertMode: 'inline' | 'literal' | 'interpolation';
    };
}

export interface ISyntaxPhp {
    bigint: {
        insertMode: 'inline' | 'literal';
    };
    string: {
        quotes: 'single' | 'double';
        insertMode: 'inline' | 'literal' | 'interpolation';
    };
}

export interface ISyntaxPython {
    bigint: {
        insertMode: 'inline' | 'literal';
    };
    string: {
        quotes: 'single' | 'double';
        insertMode: 'inline' | 'literal' | 'interpolation';
    };
}

export interface ISyntaxRuby {
    bigint: {
        insertMode: 'inline' | 'literal';
    };
    string: {
        quotes: 'single' | 'double';
        insertMode: 'inline' | 'literal' | 'interpolation';
    };
}

export interface ISyntaxRust {}

export interface ISettingsType extends ISettingsBase {
    c: ISyntaxC;
    cpp: ISyntaxCpp;
    csharp: ISyntaxCSharp;
    go: ISyntaxGo;
    java: ISyntaxJava;
    javascript: ISyntaxJavaScript; // scripting
    php: ISyntaxPhp; // scripting
    python: ISyntaxPython; // scripting
    ruby: ISyntaxRuby; // scripting
    rust: ISyntaxRust;
}

export type ISettings = Flatten<ISettingsType>;
export type ISettingsKey = keyof ISettings;
export type ISettingsValue = ISettings[keyof ISettings];

type ContribConfigPropsTransformer<T extends object> = {
    [K in keyof T as K extends string ? `faker-js.${K}` : never]: {
        type: 'string';
        enum: Array<T[K]>;
        default: T[K];
        markdownDescription?: string;
    };
};

export type IContribConfigProps = ContribConfigPropsTransformer<ISettings>;

export type IContribConfig = {
    title: 'Faker.js';
    type: 'object';
    properties: IContribConfigProps;
};
