import {
    AirlineModule,
    allLocales,
    AnimalModule,
    BookModule,
    ColorModule,
    CommerceModule,
    CompanyModule,
    DatabaseModule,
    DateModule,
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
    PersonModule,
    PhoneModule,
    ScienceModule,
    SystemModule,
    VehicleModule,
    WordModule,
} from '@faker-js/faker';
import type { Flatten } from './flatten';
import type { IsEqual, IsFunction } from './utils';

interface IFakerApiType {
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

export type IFakerLocale = keyof typeof allLocales;

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
