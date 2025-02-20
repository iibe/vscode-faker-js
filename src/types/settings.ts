import { ObjectFlatten, ObjectPrettifier, ObjectStrict } from '.';
import type { IFakerLocale } from './faker';
import { LanguageIdentifier } from './vscode';

interface PropertyDescriptor {
    type: string;
    description: string;
}

interface PropertyDescriptorMap {
    [key: string]: PropertyDescriptor | PropertyDescriptorMap;
}

type ToSettings<T extends PropertyDescriptorMap> = ObjectPrettifier<
    ObjectStrict<{
        [K in keyof T]: T[K] extends PropertyDescriptorMap
            ? ToSettings<T[K]>
            : T[K] extends PropertyDescriptor
              ? T[K]['type']
              : never;
    }>
>;

interface PropertyDescriptorAssociativeArray {
    [key: string]: { 0: PropertyDescriptor['type']; 1: PropertyDescriptor['description'] };
}

type ToContribConfigProps1<T extends PropertyDescriptorMap> = ObjectPrettifier<
    ObjectStrict<{
        [K in keyof T]: T[K] extends PropertyDescriptor
            ? { 0: T[K]['type']; 1: T[K]['description'] }
            : T[K] extends PropertyDescriptorMap
              ? ToContribConfigProps1<T[K]>
              : never;
    }>
>;

type ToContribConfigProps2<T extends PropertyDescriptorAssociativeArray> = {
    [K in keyof T as K extends string ? `faker-js.${K}` : never]: {
        type: 'string';
        enum: Array<T[K][0]>;
        default: T[K][0];
        markdownDescription: T[K][1];
    };
};

// prettier-ignore
// For some reason in doesn't work with interface union, i.e. with a `ISettingsMap`.
export type IContribConfigProps = ObjectPrettifier<
    ToContribConfigProps2<ObjectFlatten<ToContribConfigProps1<ISettingsBaseMap>>> &
    ToContribConfigProps2<ObjectFlatten<ToContribConfigProps1<ISettingsSyntaxMap>>>
>;

interface ISettingsMap extends ISettingsBaseMap, ISettingsSyntaxMap {}

interface ISettingsBaseMap extends PropertyDescriptorMap {
    locale: {
        type: IFakerLocale;
        description: 'Specifies default Faker.js locale.';
    };
    syntax: {
        type: '*' | LanguageIdentifier;
        description: 'Specifies a syntax of fake data. If set to `*`, the serialization changes dynamically depending on a programming language. Otherwise (if set to a particular language), a fixed serialization will be used for all languages. If no serialization class was found, then it uses JavaScript syntax for everything.';
    };
}

/**
 * @see https://hyperpolyglot.org
 */
interface ISettingsSyntaxMap extends PropertyDescriptorMap {
    c: ISyntaxC;
    clojure: ISyntaxClojure;
    cpp: ISyntaxCpp;
    csharp: ISyntaxCSharp;
    d: ISyntaxD;
    dart: ISyntaxDart;
    elixir: ISyntaxElixir;
    erlang: ISyntaxErlang;
    fsharp: ISyntaxFSharp;
    go: ISyntaxGo;
    haskell: ISyntaxHaskell;
    java: ISyntaxJava;
    javascript: ISyntaxJavaScript;
    json: ISyntaxJSON; // extra
    lua: ISyntaxLua;
    markdown: ISyntaxMarkdown; // extra
    'objective-c': ISyntaxObjectiveC;
    'objective-cpp': ISyntaxObjectiveCpp;
    ocaml: ISyntaxOCaml;
    pascal: ISyntaxPascal;
    perl: ISyntaxPerl;
    php: ISyntaxPhp;
    python: ISyntaxPython;
    ruby: ISyntaxRuby;
    rust: ISyntaxRust;
    scala: ISyntaxScala;
    swift: ISyntaxSwift;
    toml: ISyntaxTOML; // custom
    yaml: ISyntaxYAML; // extra
}

interface ISyntaxC extends PropertyDescriptorMap {}
interface ISyntaxClojure extends PropertyDescriptorMap {}
interface ISyntaxCpp extends PropertyDescriptorMap {}
interface ISyntaxCSharp extends PropertyDescriptorMap {}
interface ISyntaxD extends PropertyDescriptorMap {}
interface ISyntaxDart extends PropertyDescriptorMap {}
interface ISyntaxElixir extends PropertyDescriptorMap {}
interface ISyntaxErlang extends PropertyDescriptorMap {}
interface ISyntaxFSharp extends PropertyDescriptorMap {}

interface ISyntaxGo extends PropertyDescriptorMap {
    bigint: {
        insertMode: {
            type: 'inline';
            description: 'BigInt is inserted as `9007199254740991` in inline mode.';
        };
    };
    string: {
        quotationMark: {
            type: 'double' | 'backtick';
            description: 'Specifies quotation mark.';
        };
        insertMode: {
            type: 'inline' | 'literal' | 'interpolation';
            description: 'String is inserted as `foobar` in inline mode, as `<quotationMark>foobar<quotationMark>` in literal mode, as `"foobar"` in interpolation mode.';
        };
    };
    array: {
        insertMode: {
            type: 'normal' | 'short';
            description: 'Array is inserted as ...';
        };
    };
}

interface ISyntaxHaskell extends PropertyDescriptorMap {}
interface ISyntaxJava extends PropertyDescriptorMap {}

interface ISyntaxJavaScript extends PropertyDescriptorMap {
    bigint: {
        insertMode: {
            type: 'inline' | 'literal' | 'wrapper';
            description: 'BigInt is inserted as `9007199254740991` in inline mode, as `9007199254740991n` in literal mode, as `BigInt(9007199254740991)` in wrapper object mode.';
        };
    };
    string: {
        quotationMark: {
            type: 'single' | 'double';
            description: 'Specifies quotation mark.';
        };
        insertMode: {
            type: 'inline' | 'literal' | 'interpolation';
            description: 'String is inserted as `foobar` in inline mode, as `<quotationMark>foobar<quotationMark>` in literal mode, as ``` `foobar` ``` in interpolation mode.';
        };
    };
}

interface ISyntaxJSON extends PropertyDescriptorMap {}
interface ISyntaxLua extends PropertyDescriptorMap {}
interface ISyntaxMarkdown extends PropertyDescriptorMap {}
interface ISyntaxObjectiveC extends PropertyDescriptorMap {}
interface ISyntaxObjectiveCpp extends PropertyDescriptorMap {}
interface ISyntaxOCaml extends PropertyDescriptorMap {}
interface ISyntaxPascal extends PropertyDescriptorMap {}
interface ISyntaxPerl extends PropertyDescriptorMap {}

interface ISyntaxPhp extends PropertyDescriptorMap {
    bigint: {
        insertMode: {
            type: 'inline';
            description: 'BigInt is inserted as `9007199254740991` in inline mode.';
        };
    };
    string: {
        quotationMark: {
            type: 'single' | 'double';
            description: 'Specifies quotation mark.';
        };
        insertMode: {
            type: 'inline' | 'literal' | 'interpolation';
            description: 'String is inserted as `foobar` in inline mode, as `<quotationMark>foobar<quotationMark>` in literal mode, as `"foobar"` in interpolation mode.';
        };
    };
    array: {
        insertMode: {
            type: 'normal' | 'short';
            description: 'Array is inserted as `array(1, 2, 3)` in normal mode, as `[1, 2, 3]` in short mode.';
        };
    };
}

interface ISyntaxPython extends PropertyDescriptorMap {
    bigint: {
        insertMode: {
            type: 'inline';
            description: 'BigInt is inserted as `9007199254740991` in inline mode.';
        };
    };
    string: {
        quotationMark: {
            type: 'single' | 'double';
            description: 'Specifies quotation mark.';
        };
        insertMode: {
            type: 'inline' | 'literal' | 'interpolation';
            description: 'String is inserted as `foobar` in inline mode, as `<quotationMark>foobar<quotationMark>` in literal mode, as `f"foobar"` in interpolation mode.';
        };
    };
}

interface ISyntaxRuby extends PropertyDescriptorMap {
    bigint: {
        insertMode: {
            type: 'inline';
            description: 'BigInt is inserted as `9007199254740991` in inline mode.';
        };
    };
    string: {
        quotationMark: {
            type: 'single' | 'double';
            description: 'Specifies quotation mark.';
        };
        insertMode: {
            type: 'inline' | 'literal' | 'interpolation';
            description: 'String is inserted as `foobar` in inline mode, as `<quotationMark>foobar<quotationMark>` in literal mode, as `"foobar"` in interpolation mode.';
        };
    };
}

interface ISyntaxRust extends PropertyDescriptorMap {}
interface ISyntaxScala extends PropertyDescriptorMap {}
interface ISyntaxSwift extends PropertyDescriptorMap {}
interface ISyntaxTOML extends PropertyDescriptorMap {}
interface ISyntaxYAML extends PropertyDescriptorMap {}

/* EXPORTS */

export type ISettings = ToSettings<ISettingsMap>;
export type ISettingsKey = keyof ObjectFlatten<ISettings>;

export type ISettingsBase = ToSettings<ISettingsBaseMap>;

export type ISettingsSyntax = ToSettings<ISettingsSyntaxMap>;
export type ISyntaxVariant = ISettingsSyntax[keyof ISettingsSyntax];

export type IContribConfig = {
    title: 'Faker.js';
    type: 'object';
    properties: IContribConfigProps;
};
