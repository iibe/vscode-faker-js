import {
    AirlineModule,
    allLocales,
    AnimalModule,
    BookModule,
    ColorModule,
    CommerceModule,
    CompanyModule,
    DatabaseModule,
    DatatypeModule,
    DateModule,
    Faker,
    FinanceModule,
    FoodModule,
    GitModule,
    HackerModule,
    HelpersModule,
    ImageModule,
    InternetModule,
    LocationModule,
    LoremModule,
    MusicModule,
    NumberModule,
    PersonModule,
    PhoneModule,
    ScienceModule,
    SimpleDateModule,
    SimpleFaker,
    SimpleHelpersModule,
    StringModule,
    SystemModule,
    VehicleModule,
    WordModule,
} from '@faker-js/faker';
import { Command } from 'vscode';
import type { IsEqual, IsFunction, ObjectFilter, ObjectStrict, Primitive, Structure } from '.';
import type { Flatten } from './flatten';

/* TYPE DEFINITIONS */

/** Contains readonly entities of {@link SimpleFaker}. */
interface ISimpleFakerApiType {
    readonly datatype: DatatypeModule;

    /** @augments DateModule see {@link DateModule}. */
    readonly date: SimpleDateModule;

    /** @augments HelpersModule see {@link HelpersModule}. */
    readonly helpers: SimpleHelpersModule;

    readonly number: NumberModule;
    readonly string: StringModule;
}

/** Contains readonly entities of {@link Faker}. */
interface IFakerApiType extends ISimpleFakerApiType {
    readonly airline: AirlineModule;
    readonly animal: AnimalModule;
    readonly book: BookModule;
    readonly color: ColorModule;
    readonly commerce: CommerceModule;
    readonly company: CompanyModule;
    readonly database: DatabaseModule;
    readonly date: DateModule;
    readonly finance: FinanceModule;
    readonly food: FoodModule;
    readonly git: GitModule;
    readonly hacker: HackerModule;
    readonly helpers: HelpersModule;
    readonly image: ImageModule;
    readonly internet: InternetModule;
    readonly location: LocationModule;
    readonly lorem: LoremModule;
    readonly music: MusicModule;
    readonly person: PersonModule;
    readonly phone: PhoneModule;
    readonly science: ScienceModule;
    readonly system: SystemModule;
    readonly vehicle: VehicleModule;
    readonly word: WordModule;
}

/* TYPE GUARDS */

type FakerApiValidator<T extends object> = {
    [K in keyof T]: K extends string ? IsFunction<T[K], T[K], never> : never;
};

type FakerApiFormatter<T extends object> = {
    -readonly [K in keyof T]-?: T[K];
};

type TFakerApi = FakerApiFormatter<Flatten<IFakerApiType>>;
type TFakerApiGuard = IsEqual<TFakerApi, FakerApiValidator<TFakerApi>, TFakerApi, never>;
type TFakerApiReturnTypeGuard = IsEqual<
    TFakerApi,
    ObjectStrict<TPrimitiveApi & TDateApi & TArrayApi & TStructureApi & TBoundApi>,
    TFakerApi,
    never
>;

/* FAKER API RETURN TYPES */

type TReturnsPrimitive = ObjectFilter<TFakerApi, () => Primitive>;
type TReturnsDate = ObjectFilter<TFakerApi, () => Date>;
type TReturnsArray = ObjectFilter<TFakerApi, () => any[]>;
type TReturnsStructure = ObjectFilter<TFakerApi, () => Structure>;

// Due function overloads, some intersection are occurs
type TPrimitiveApi = TReturnsPrimitive;
type TDateApi = Omit<TReturnsDate, keyof TPrimitiveApi>;
type TArrayApi = Omit<TReturnsArray, keyof TPrimitiveApi>;
type TStructureApi = Omit<
    TReturnsStructure,
    keyof TPrimitiveApi | keyof TDateApi | keyof TArrayApi
>;

// Function with parameters that should be specified
type TBoundApi = Omit<
    TFakerApi,
    keyof TPrimitiveApi | keyof TDateApi | keyof TArrayApi | keyof TStructureApi
>;

/* FAKER API CONFIGURATION */

export interface IFakerConfigType {
    locale: IFakerLocale;
    bigint: {
        insert: 'inline' | 'literal' | 'wrapper';
    };
    string: {
        insert: 'inline' | 'literal';
        quotes: 'single' | 'double' | 'backticks';
    };
    symbol: {
        quotes: 'single' | 'double' | 'backticks';
    };
}

type FakerConfigTransformer<T extends object> = {
    [K in keyof T as K extends string ? `faker-js.${K}` : never]: {
        type: 'string';
        enum: Array<T[K]>;
        default: T[K];
        description?: string;
    };
};

export type IFakerConfig = Flatten<IFakerConfigType>;
export type IFakerConfigAtom = keyof IFakerConfig;
export type IFakerConfigProps = FakerConfigTransformer<IFakerConfig>;

/* FAKER API COMMANDS */

export type IFakerCommandId = `vscode-faker-js.run.${keyof TFakerApi}`;
export type IFakerCommand = Command & {
    command: IFakerCommandId;
    category: `Faker.js${string}`;
};

export interface IPackageJsonProps {
    activationEvents: string[];
    contributes: {
        configuration: {
            type: 'object';
            title: 'Faker.js';
            properties: IFakerConfigProps;
        };
        commands: IFakerCommand[];
    };
}

/* EXPORTS */

export type IFakerLocale = keyof typeof allLocales;

export type IFakerApi = TFakerApi;
export type IFakerAtom = keyof TFakerApi;
export type IFakerFunction = TFakerApi[keyof TFakerApi];

export type IFakerPrimitiveApi = TPrimitiveApi;
export type IFakerPrimitiveAtom = keyof TPrimitiveApi;
export type IFakerPrimitiveFunction = TPrimitiveApi[keyof TPrimitiveApi];

export type IFakerDateApi = TDateApi;
export type IFakerDateAtom = keyof TDateApi;
export type IFakerDateFunction = TDateApi[keyof TDateApi];

export type IFakerArrayApi = TArrayApi;
export type IFakerArrayAtom = keyof TArrayApi;
export type IFakerArrayFunction = TArrayApi[keyof TArrayApi];

export type IFakerStructureApi = TStructureApi;
export type IFakerStructureAtom = keyof TStructureApi;
export type IFakerStructureFunction = TStructureApi[keyof TStructureApi];

export type IFakerBoundApi = TBoundApi;
export type IFakerBoundAtom = keyof TBoundApi;
export type IFakerBoundFunction = TBoundApi[keyof TBoundApi];
