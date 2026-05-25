import type { allLocales, Faker } from '@faker-js/faker';
import type { Callable, Primitive, Structure } from './base.js';
import type { DeepFlatten } from './deep-flatten.js';
import type { OmitNever } from './omit-never.js';
import type { IsEqual } from './utils.js';

export type FakerLocale = keyof typeof allLocales;

export type FakerLocaleModule = typeof import('@faker-js/faker/locale/af_ZA', {
    with: { 'resolution-mode': 'import' }
});

interface Modules {
    airline: Faker['airline'];
    animal: Faker['animal'];
    book: Faker['book'];
    color: Faker['color'];
    commerce: Faker['commerce'];
    company: Faker['company'];
    database: Faker['database'];
    datatype: Faker['datatype'];
    date: Faker['date'];
    finance: Faker['finance'];
    food: Faker['food'];
    git: Faker['git'];
    hacker: Faker['hacker'];
    helpers: Faker['helpers'];
    image: Faker['image'];
    internet: Faker['internet'];
    location: Faker['location'];
    lorem: Faker['lorem'];
    music: Faker['music'];
    number: Faker['number'];
    person: Faker['person'];
    phone: Faker['phone'];
    science: Faker['science'];
    string: Faker['string'];
    system: Faker['system'];
    vehicle: Faker['vehicle'];
    word: Faker['word'];
}

// -----------------------------------------------------------------------------
// API BREAKDOWN, FILTERING  REUNION
// -----------------------------------------------------------------------------

type Api = DeepFlatten<Modules>;

/**
 * Removes object keys that doesn't satisfies to specified `KK` and `V` types.
 */
type ApiFilter<
    T extends object,
    Value = unknown,
    Key = string | symbol
> = OmitNever<{
    [K in keyof T]: K extends Key ? (T[K] extends Value ? T[K] : never) : never;
}>;

/**
 * Methods with `Primitive` return type.
 * In case if function is overloaded, we use this one as default functions.
 * So we should exclude them from other `ReturnXXX` types.
 */
type ApiPrimitive = ApiFilter<Api, () => Primitive>;

/**
 * Methods with `Date` return type.
 * Note that we need to omit primitive keys due function overloads.
 */
type ApiDate = Omit<ApiFilter<Api, () => Date>, keyof ApiPrimitive>;

/**
 * Methods with `Array<unknown>` return type.
 */
type ApiArray = Omit<ApiFilter<Api, () => unknown[]>, keyof ApiPrimitive>;

/**
 * Methods with `Object` return type.
 */
type ApiStructure = Omit<
    ApiFilter<Api, () => Structure>,
    keyof ApiPrimitive | keyof ApiDate | keyof ApiArray
>;

/**
 * Methods with `Function` return type (has at least 1 argument).
 */
type ApiMethod = Omit<
    Api,
    keyof ApiPrimitive | keyof ApiDate | keyof ApiArray | keyof ApiStructure
>;

type ApiReunion = ApiPrimitive & ApiDate & ApiArray & ApiStructure & ApiMethod;

// -----------------------------------------------------------------------------
// TYPE GUARDS
// -----------------------------------------------------------------------------

type CheckCompleteness = IsEqual<keyof Api, keyof OmitNever<ApiReunion>>;

type CheckEverythingIsFunction = IsEqual<
    keyof Api,
    keyof ApiFilter<Api, Callable>
>;

type CheckAll = CheckCompleteness & CheckEverythingIsFunction;

// -----------------------------------------------------------------------------
// EXPORTS
// -----------------------------------------------------------------------------

export type IApiPrimitiveKey = keyof ApiPrimitive;
export type IApiPrimitiveValue = ApiPrimitive[IApiPrimitiveKey];

export type IApiDateKey = keyof ApiDate;
export type IApiDateValue = ApiDate[IApiDateKey];

export type IApiArrayKey = keyof ApiArray;
export type IApiArrayValue = ApiArray[IApiArrayKey];

export type IApiStructureKey = keyof ApiStructure;
export type IApiStructureValue = ApiStructure[IApiStructureKey];

export type IApiMethodKey = keyof ApiMethod;
export type IApiMethodValue = ApiMethod[IApiMethodKey];

export type IFakerApi = CheckAll extends true ? Api : never;

export type IFakerFnName =
    | IApiPrimitiveKey
    | IApiDateKey
    | IApiArrayKey
    | IApiStructureKey
    | IApiMethodKey;

export type IFakerFn = IFakerApi[IFakerFnName];
