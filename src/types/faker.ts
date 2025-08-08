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
import type {
    Callable,
    IsEqual,
    ObjectFilter,
    ObjectFlatten,
    ObjectStrict,
    Primitive,
    Structure,
} from '.';

/* FAKER MODULES */

/** Contains readonly entities of {@link SimpleFaker}. */
interface SimpleFakerModules {
    readonly datatype: DatatypeModule;

    /** @augments DateModule see {@link DateModule}. */
    readonly date: SimpleDateModule;

    /** @augments HelpersModule see {@link HelpersModule}. */
    readonly helpers: SimpleHelpersModule;

    readonly number: NumberModule;
    readonly string: StringModule;
}

/** Contains readonly entities of {@link Faker}. */
interface FakerModules extends SimpleFakerModules {
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

/* FAKER TYPE CHECKERS */

type Prettifier<T extends object> = {
    -readonly [K in keyof T]-?: T[K];
};

type FakerApi = Prettifier<ObjectFlatten<FakerModules>>;

// Ensures all FakerApi keys has functions as values.
type FakerApiConsistOfFunctions = IsEqual<
    keyof FakerApi,
    keyof ObjectFilter<FakerApi, Callable>,
    FakerApi,
    never
>;

// Ensures all FakerApi function return types are represented in ReturnXXX types.
type FakerApiCompleteByReturnType = IsEqual<
    keyof FakerApi,
    keyof ObjectStrict<
        ReturnsPrimitive &
            ReturnsDate &
            ReturnsArray &
            ReturnsStructure &
            FunctionsWithParameters
    >,
    FakerApi,
    never
>;

type ReturnsPrimitive = ObjectFilter<FakerApi, () => Primitive>;

// Due overloads there might be some intersections.
type ReturnsDate = Omit<
    ObjectFilter<FakerApi, () => Date>,
    keyof ReturnsPrimitive
>;
type ReturnsArray = Omit<
    ObjectFilter<FakerApi, () => any[]>,
    keyof ReturnsPrimitive
>;
type ReturnsStructure = Omit<
    ObjectFilter<FakerApi, () => Structure>,
    keyof ReturnsPrimitive | keyof ReturnsDate | keyof ReturnsArray
>;

// Functions with at least 1 parameter.
type FunctionsWithParameters = Omit<
    FakerApi,
    | keyof ReturnsPrimitive
    | keyof ReturnsDate
    | keyof ReturnsArray
    | keyof ReturnsStructure
>;

/* EXPORTS */

export type IFakerLocale = keyof typeof allLocales;
export type IFakerApi = FakerApiConsistOfFunctions &
    FakerApiCompleteByReturnType;
export type IFakerAtom =
    | IFakerPrimitiveAtom
    | IFakerDateAtom
    | IFakerArrayAtom
    | IFakerStructureAtom
    | IFakerBoundAtom;
export type IFakerFunction = IFakerApi[IFakerAtom];

export type IFakerPrimitiveApi = ReturnsPrimitive;
export type IFakerPrimitiveAtom = keyof ReturnsPrimitive;
export type IFakerPrimitiveFunction = ReturnsPrimitive[IFakerPrimitiveAtom];

export type IFakerDateApi = ReturnsDate;
export type IFakerDateAtom = keyof ReturnsDate;
export type IFakerDateFunction = ReturnsDate[IFakerDateAtom];

export type IFakerArrayApi = ReturnsArray;
export type IFakerArrayAtom = keyof ReturnsArray;
export type IFakerArrayFunction = ReturnsArray[IFakerArrayAtom];

export type IFakerStructureApi = ReturnsStructure;
export type IFakerStructureAtom = keyof ReturnsStructure;
export type IFakerStructureFunction = ReturnsStructure[IFakerStructureAtom];

export type IFakerBoundApi = FunctionsWithParameters;
export type IFakerBoundAtom = keyof FunctionsWithParameters;
export type IFakerBoundFunction = FunctionsWithParameters[IFakerBoundAtom];
