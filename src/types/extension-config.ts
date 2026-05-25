import type { DeepFlatten } from './deep-flatten.js';
import type { FakerLocale } from './faker.js';
import type { OmitNever } from './omit-never.js';
import type { Prettify } from './utils.js';
import type { LanguageID } from './vscode.js';

interface OptionDescriptor {
    $value: string;
    $markdown: string;
}

interface OptionDescriptorMap {
    [option: string]: OptionDescriptor | OptionDescriptorMap;
}

interface OptionDescriptorArray {
    [option: string]: {
        0: OptionDescriptor['$value'];
        1: OptionDescriptor['$markdown'];
    };
}

// -----------------------------------------------------------------------------
// TRANSFORMERS
// -----------------------------------------------------------------------------

// prettier-ignore
type ToConfig<T extends OptionDescriptorMap> = Prettify<
    OmitNever<{
        [K in keyof T]:
            T[K] extends OptionDescriptorMap ? ToConfig<T[K]> :
            T[K] extends OptionDescriptor ? T[K]['$value'] :
            never;
    }>
>;

// prettier-ignore
type ToContribConfigProps1<T extends OptionDescriptorMap> = Prettify<
    OmitNever<{
        [K in keyof T]:
            T[K] extends OptionDescriptorMap ? ToContribConfigProps1<T[K]> :
            T[K] extends OptionDescriptor ? { 0: T[K]['$value']; 1: T[K]['$markdown'] } :
            never;
    }>
>;

type ToContribConfigProps2<T extends OptionDescriptorArray> = {
    [K in keyof T as K extends string ? `faker-js.${K}` : never]: {
        type: 'string';
        enum: Array<T[K][0]>;
        default: T[K][0];
        markdownDescription: T[K][1];
    };
};

type ToContribConfigProps<T extends OptionDescriptorMap> = Prettify<
    ToContribConfigProps2<DeepFlatten<ToContribConfigProps1<T>>>
>;

// type Debug1 = ToContribConfigProps1<Config>;
// type Debug2 = DeepFlatten<Debug1>;
// type Debug3 = ToContribConfigProps2<Debug2>;

export type IContribConfigProps = ToContribConfigProps<Config>;

// -----------------------------------------------------------------------------
// CONFIGURATION
// -----------------------------------------------------------------------------

type Config = ConfigBase & ConfigLanguage;

interface ConfigBase extends OptionDescriptorMap {
    locale: {
        $value: FakerLocale;
        $markdown: 'Specifies default Faker.js locale.';
    };
    syntax: {
        $value: '*' | LanguageID;
        $markdown: 'Specifies a syntax of fake data. If set to `*`, the serialization changes dynamically depending on a programming language. Otherwise (if set to a particular language), a fixed serialization will be used for all languages. If no serialization class was found, then it uses JavaScript syntax for everything.';
    };
}

/**
 * @see https://hyperpolyglot.org
 */
interface ConfigLanguage extends OptionDescriptorMap {
    go: LanguageGo;
    javascript: LanguageJavaScript;
    php: LanguagePhp;
    python: LanguagePython;
    ruby: LanguageRuby;
}

interface LanguageGo extends OptionDescriptorMap {
    bigint: {
        insertMode: {
            $value: 'inline';
            $markdown: 'BigInt is inserted as `9007199254740991` in inline mode.';
        };
    };
    string: {
        insertMode: {
            $value: 'inline' | 'literal' | 'interpolation';
            $markdown: 'String is inserted as `foobar` in inline mode, as `<quotationMark>foobar<quotationMark>` in literal mode, as `"foobar"` in interpolation mode.';
        };
        quotationMark: {
            $value: 'double' | 'backtick';
            $markdown: 'Specifies quotation mark.';
        };
    };
    array: {
        insertMode: {
            $value: 'normal' | 'short';
            $markdown: 'Array is inserted as ...';
        };
    };
}

interface LanguageJavaScript extends OptionDescriptorMap {
    bigint: {
        insertMode: {
            $value: 'inline' | 'literal' | 'wrapper';
            $markdown: 'BigInt is inserted as `9007199254740991` in inline mode, as `9007199254740991n` in literal mode, as `BigInt(9007199254740991)` in wrapper object mode.';
        };
    };
    string: {
        insertMode: {
            $value: 'inline' | 'literal' | 'interpolation';
            $markdown: 'String is inserted as `foobar` in inline mode, as `<quotationMark>foobar<quotationMark>` in literal mode, as ``` `foobar` ``` in interpolation mode.';
        };
        quotationMark: {
            $value: 'single' | 'double';
            $markdown: 'Specifies quotation mark.';
        };
    };
}

interface LanguagePhp extends OptionDescriptorMap {
    null: {
        insertMode: {
            $value: 'lowercase' | 'uppercase';
            $markdown: 'Undefined and null is inserted as `null` in lowercase mode, as `NULL` in uppercase mode.';
        };
    };
    boolean: {
        insertMode: {
            $value: 'lowercase' | 'uppercase';
            $markdown: 'Boolean is inserted as `true` and `false` in lowercase mode, as `TRUE` and `FALSE` in uppercase mode.';
        };
    };
    bigint: {
        insertMode: {
            $value: 'unsafe' | 'safe';
            $markdown: 'BigInt is inserted as `9007199254740991` in unsafe mode, as `<quotationMark>9007199254740991<quotationMark>` in safe mode.';
        };
    };
    string: {
        insertMode: {
            $value: 'inline' | 'literal' | 'interpolation';
            $markdown: 'String is inserted as `foobar` in inline mode, as `<quotationMark>foobar<quotationMark>` in literal mode, as `"foobar"` in interpolation mode.';
        };
        quotationMark: {
            $value: 'single' | 'double';
            $markdown: 'Specifies quotation mark.';
        };
    };
    array: {
        insertMode: {
            $value: 'normal' | 'short';
            $markdown: 'Array is inserted as `array(1, 2, 3)` in normal mode, as `[1, 2, 3]` in short mode.';
        };
    };
}

interface LanguagePython extends OptionDescriptorMap {
    bigint: {
        insertMode: {
            $value: 'inline';
            $markdown: 'BigInt is inserted as `9007199254740991` in inline mode.';
        };
    };
    string: {
        insertMode: {
            $value: 'inline' | 'literal' | 'interpolation';
            $markdown: 'String is inserted as `foobar` in inline mode, as `<quotationMark>foobar<quotationMark>` in literal mode, as `f"foobar"` in interpolation mode.';
        };
        quotationMark: {
            $value: 'single' | 'double';
            $markdown: 'Specifies quotation mark.';
        };
    };
}

interface LanguageRuby extends OptionDescriptorMap {
    bigint: {
        insertMode: {
            $value: 'inline';
            $markdown: 'BigInt is inserted as `9007199254740991` in inline mode.';
        };
    };
    string: {
        insertMode: {
            $value: 'inline' | 'literal' | 'interpolation';
            $markdown: 'String is inserted as `foobar` in inline mode, as `<quotationMark>foobar<quotationMark>` in literal mode, as `"foobar"` in interpolation mode.';
        };
        quotationMark: {
            $value: 'single' | 'double';
            $markdown: 'Specifies quotation mark.';
        };
    };
}

// -----------------------------------------------------------------------------
// EXPORTS
// -----------------------------------------------------------------------------

export type IConfig = ToConfig<Config>;
export type IConfigOption = keyof DeepFlatten<IConfig>;

export type IContribConfig = {
    title: 'Faker.js';
    type: 'object';
    properties: IContribConfigProps;
};
