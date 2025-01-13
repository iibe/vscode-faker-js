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
import type { Flatten } from './flatten';
import type { IsEqual, IsFunction } from './utils';

export type IFakerLocale = keyof typeof allLocales;

/**
 * Contains readonly entities of {@link SimpleFaker}.
 */
interface ISimpleFakerApiType {
    readonly datatype: DatatypeModule;
    readonly date: SimpleDateModule;
    readonly helpers: SimpleHelpersModule;
    readonly number: NumberModule;
    readonly string: StringModule;
}

/**
 * Contains readonly entities of {@link Faker}.
 */
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

type FakerApiValidator<T extends object> = {
    [K in keyof T]: K extends string ? IsFunction<T[K], T[K], never> : never;
};

type FakerApiFormatter<T extends object> = {
    -readonly [K in keyof T]-?: T[K];
};

type IFakerApiRaw = Flatten<IFakerApiType>;
type IFakerApiDry = FakerApiValidator<IFakerApiRaw>;

export type IFakerApi = IsEqual<
    IFakerApiRaw,
    IFakerApiDry,
    FakerApiFormatter<IFakerApiDry>,
    unknown
>;

export type IFakerApiAtom = keyof IFakerApi;
export type IFakerApiFunc = IFakerApi[IFakerApiAtom];

// export type IFakerApiFuncParameters = Parameters<IFakerApiFunc>;
// export type IFakerApiFuncReturnType = ReturnType<IFakerApiFunc>;
// export type IFakerApiMethod<
//     Args extends Parameters<IFakerApiFunc>,
//     R extends ReturnType<IFakerApiFunc>
// > = (...args: Args) => R;
