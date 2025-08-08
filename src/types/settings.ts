import { ObjectFlatten, ObjectPrettifier, ObjectStrict } from '.';
import type { IFakerLocale } from './faker';
import { VscodeLanguageIdentifier } from './vscode';

interface PropertyDescriptor {
    $type: string;
    $description: string;
}

interface PropertyDescriptorMap {
    [key: string]: PropertyDescriptor | PropertyDescriptorMap;
}

interface PropertyDescriptorArray {
    [key: string]: {
        0: PropertyDescriptor['$type'];
        1: PropertyDescriptor['$description'];
    };
}

type ToSettings<T extends PropertyDescriptorMap> = ObjectPrettifier<
    ObjectStrict<{
        [K in keyof T]: T[K] extends PropertyDescriptorMap
            ? ToSettings<T[K]>
            : T[K] extends PropertyDescriptor
              ? T[K]['$type']
              : never;
    }>
>;

type ToContribConfigProps1<T extends PropertyDescriptorMap> = ObjectPrettifier<
    ObjectStrict<{
        [K in keyof T]: T[K] extends PropertyDescriptor
            ? { 0: T[K]['$type']; 1: T[K]['$description'] }
            : T[K] extends PropertyDescriptorMap
              ? ToContribConfigProps1<T[K]>
              : never;
    }>
>;

type ToContribConfigProps2<T extends PropertyDescriptorArray> = {
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
    ToContribConfigProps2<ObjectFlatten<ToContribConfigProps1<SettingsBase>>> &
    ToContribConfigProps2<ObjectFlatten<ToContribConfigProps1<SettingsSyntax>>>
>;

interface Settings extends SettingsBase, SettingsSyntax {}

interface SettingsBase extends PropertyDescriptorMap {
    locale: {
        $type: IFakerLocale;
        $description: 'Specifies default Faker.js locale.';
    };
    syntax: {
        $type: '*' | VscodeLanguageIdentifier;
        $description: 'Specifies a syntax of fake data. If set to `*`, the serialization changes dynamically depending on a programming language. Otherwise (if set to a particular language), a fixed serialization will be used for all languages. If no serialization class was found, then it uses JavaScript syntax for everything.';
    };
}

/**
 * @see https://hyperpolyglot.org
 */
interface SettingsSyntax extends PropertyDescriptorMap {
    c: LanguageC;
    clojure: LanguageClojure;
    cpp: LanguageCpp;
    csharp: LanguageCSharp;
    d: LanguageD;
    dart: LanguageDart;
    elixir: LanguageElixir;
    erlang: LanguageErlang;
    fsharp: LanguageFSharp;
    go: LanguageGo;
    haskell: LanguageHaskell;
    java: LanguageJava;
    javascript: LanguageJavaScript;
    lua: LanguageLua;
    'objective-c': LanguageObjectiveC;
    'objective-cpp': LanguageObjectiveCpp;
    ocaml: LanguageOCaml;
    pascal: LanguagePascal;
    perl: LanguagePerl;
    php: LanguagePhp;
    python: LanguagePython;
    ruby: LanguageRuby;
    rust: LanguageRust;
    scala: LanguageScala;
    swift: LanguageSwift;
}

interface SettingsSyntaxExtra extends PropertyDescriptorMap {
    json: LanguageJSON;
    markdown: LanguageMarkdown;
    toml: LanguageTOML; // custom
    yaml: LanguageYAML;
}

interface LanguageC extends PropertyDescriptorMap {}
interface LanguageClojure extends PropertyDescriptorMap {}
interface LanguageCpp extends PropertyDescriptorMap {}
interface LanguageCSharp extends PropertyDescriptorMap {}
interface LanguageD extends PropertyDescriptorMap {}
interface LanguageDart extends PropertyDescriptorMap {}
interface LanguageElixir extends PropertyDescriptorMap {}
interface LanguageErlang extends PropertyDescriptorMap {}
interface LanguageFSharp extends PropertyDescriptorMap {}

interface LanguageGo extends PropertyDescriptorMap {
    bigint: {
        insertMode: {
            $type: 'inline';
            $description: 'BigInt is inserted as `9007199254740991` in inline mode.';
        };
    };
    string: {
        insertMode: {
            $type: 'inline' | 'literal' | 'interpolation';
            $description: 'String is inserted as `foobar` in inline mode, as `<quotationMark>foobar<quotationMark>` in literal mode, as `"foobar"` in interpolation mode.';
        };
        quotationMark: {
            $type: 'double' | 'backtick';
            $description: 'Specifies quotation mark.';
        };
    };
    array: {
        insertMode: {
            $type: 'normal' | 'short';
            $description: 'Array is inserted as ...';
        };
    };
}

interface LanguageHaskell extends PropertyDescriptorMap {}
interface LanguageJava extends PropertyDescriptorMap {}

interface LanguageJavaScript extends PropertyDescriptorMap {
    bigint: {
        insertMode: {
            $type: 'inline' | 'literal' | 'wrapper';
            $description: 'BigInt is inserted as `9007199254740991` in inline mode, as `9007199254740991n` in literal mode, as `BigInt(9007199254740991)` in wrapper object mode.';
        };
    };
    string: {
        insertMode: {
            $type: 'inline' | 'literal' | 'interpolation';
            $description: 'String is inserted as `foobar` in inline mode, as `<quotationMark>foobar<quotationMark>` in literal mode, as ``` `foobar` ``` in interpolation mode.';
        };
        quotationMark: {
            $type: 'single' | 'double';
            $description: 'Specifies quotation mark.';
        };
    };
}

interface LanguageJSON extends PropertyDescriptorMap {}
interface LanguageLua extends PropertyDescriptorMap {}
interface LanguageMarkdown extends PropertyDescriptorMap {}
interface LanguageObjectiveC extends PropertyDescriptorMap {}
interface LanguageObjectiveCpp extends PropertyDescriptorMap {}
interface LanguageOCaml extends PropertyDescriptorMap {}
interface LanguagePascal extends PropertyDescriptorMap {}
interface LanguagePerl extends PropertyDescriptorMap {}

interface LanguagePhp extends PropertyDescriptorMap {
    null: {
        insertMode: {
            $type: 'lowercase' | 'uppercase';
            $description: 'Undefined and null is inserted as `null` in lowercase mode, as `NULL` in uppercase mode.';
        };
    };
    boolean: {
        insertMode: {
            $type: 'lowercase' | 'uppercase';
            $description: 'Boolean is inserted as `true` and `false` in lowercase mode, as `TRUE` and `FALSE` in uppercase mode.';
        };
    };
    bigint: {
        insertMode: {
            $type: 'unsafe' | 'safe';
            $description: 'BigInt is inserted as `9007199254740991` in unsafe mode, as `<quotationMark>9007199254740991<quotationMark>` in safe mode.';
        };
    };
    string: {
        insertMode: {
            $type: 'inline' | 'literal' | 'interpolation';
            $description: 'String is inserted as `foobar` in inline mode, as `<quotationMark>foobar<quotationMark>` in literal mode, as `"foobar"` in interpolation mode.';
        };
        quotationMark: {
            $type: 'single' | 'double';
            $description: 'Specifies quotation mark.';
        };
    };
    array: {
        insertMode: {
            $type: 'normal' | 'short';
            $description: 'Array is inserted as `array(1, 2, 3)` in normal mode, as `[1, 2, 3]` in short mode.';
        };
    };
}

interface LanguagePython extends PropertyDescriptorMap {
    bigint: {
        insertMode: {
            $type: 'inline';
            $description: 'BigInt is inserted as `9007199254740991` in inline mode.';
        };
    };
    string: {
        insertMode: {
            $type: 'inline' | 'literal' | 'interpolation';
            $description: 'String is inserted as `foobar` in inline mode, as `<quotationMark>foobar<quotationMark>` in literal mode, as `f"foobar"` in interpolation mode.';
        };
        quotationMark: {
            $type: 'single' | 'double';
            $description: 'Specifies quotation mark.';
        };
    };
}

interface LanguageRuby extends PropertyDescriptorMap {
    bigint: {
        insertMode: {
            $type: 'inline';
            $description: 'BigInt is inserted as `9007199254740991` in inline mode.';
        };
    };
    string: {
        insertMode: {
            $type: 'inline' | 'literal' | 'interpolation';
            $description: 'String is inserted as `foobar` in inline mode, as `<quotationMark>foobar<quotationMark>` in literal mode, as `"foobar"` in interpolation mode.';
        };
        quotationMark: {
            $type: 'single' | 'double';
            $description: 'Specifies quotation mark.';
        };
    };
}

interface LanguageRust extends PropertyDescriptorMap {}
interface LanguageScala extends PropertyDescriptorMap {}
interface LanguageSwift extends PropertyDescriptorMap {}
interface LanguageTOML extends PropertyDescriptorMap {}
interface LanguageYAML extends PropertyDescriptorMap {}

/* EXPORTS */

export type ISettings = ToSettings<Settings>;
export type ISettingsKey = keyof ObjectFlatten<ISettings>;

export type ISettingsBase = ToSettings<SettingsBase>;

export type ISettingsSyntax = ToSettings<SettingsSyntax>;
export type ISyntaxVariant = ISettingsSyntax[keyof ISettingsSyntax];

export type IContribConfig = {
    title: 'Faker.js';
    type: 'object';
    properties: IContribConfigProps;
};
