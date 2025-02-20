export type Primitive = undefined | null | boolean | number | bigint | string | symbol;
export type Structure = object;

export interface Callable extends Function {
    (...args: any[]): any;
}

export interface Newable {
    new (...args: any[]): any;
}

// =============================================================================
// COMMON UTILS
// =============================================================================

// prettier-ignore
export type IsEqual<T1, T2, T = true, F = false> =
    (<L>() => L extends T1 ? 1 : 2) extends
    (<R>() => R extends T2 ? 1 : 2) ? T : F;

/** Returns R (result) if T (type) is a function, otherwise returns F (fallback). */
export type IsFunction<T, R, F = T> = T extends (...args: any[]) => any ? R : F;

/** Returns R (result) if T (type) is an  object, otherwise returns F (fallback). */
export type IsObject<T, R, F = T> = IsFunction<T, F, T extends object ? R : F>;

export type ObjectPrettifier<T> = {
    [K in keyof T]: ObjectPrettifier<T[K]>;
} & {};

/* Removes `never` keys from object. */
export type ObjectStrict<T extends object> = {
    [K in keyof T as T[K] extends never ? never : K]: T[K] extends object
        ? ObjectStrict<T[K]>
        : T[K];
};

/* Removes object keys that doesn't satisfies to specified `TKey` and `TValue` types. */
export type ObjectFilter<T extends object, TValue = any, TKey = string | symbol> = ObjectStrict<{
    [K in keyof T]: K extends TKey ? (T[K] extends TValue ? T[K] : never) : never;
}>;

// =============================================================================
// FLATTEN GENERAL
// =============================================================================

export type ObjectJoin<L, R> = L extends string | number
    ? R extends string | number
        ? `${L}${'' extends R ? '' : '.'}${R}`
        : never
    : never;

export type ObjectPaths<T> = T extends object
    ? {
          [K in keyof T]: `${Exclude<K, symbol>}${'' | `.${ObjectPaths<T[K]>}`}`;
      }[keyof T]
    : never;

export type ObjectLeaves<T> = T extends object
    ? {
          [K in keyof T]: `${Exclude<K, symbol>}${ObjectLeaves<T[K]> extends never
              ? ''
              : `.${ObjectLeaves<T[K]>}`}`;
      }[keyof T]
    : never;

// =============================================================================
// FLATTEN ADVANCED
// =============================================================================

/** Returns R (result) as a last element of splitting T with D (delimiter). */
type StringPop<T, D extends string = '.', R = T> = T extends `${string}${D}${infer S}`
    ? StringPop<S>
    : R;

/** Returns types of object keys i.e. types of Object.values(). */
type ObjectValueTypes<T> = T[keyof T];

/**
 * First step for FlattenType<>.
 *
 *  Input: type x = ApiMapInner<{ a: { b: 1; c: 2 }; d: 3; }>;
 * Output: type x = { "a.b": { b: 1; c: 2; }; "a.c": { b: 1; c: 2; }; d: 3; };
 */
type FlattenInner<T> = {
    [K in keyof T as K extends string
        ? IsObject<T[K], `${K}.${keyof T[K] & string}`, K>
        : K]: IsObject<T[K], { [P in keyof T[K]]: T[K][P] }>;
};

/**
 * Second step for FlattenType<>.
 *
 *  Input: type x = ApiMapOuter<{ "a.b": { b: 1; c: 2; }; "a.c": { b: 1; c: 2; }; d: 3; }>;
 * Output: type x = { "a.b": { b: 1 }; "a.c": { c: 2 }; };
 */
type FlattenOuter<T> = {
    [K in keyof T]: IsObject<
        T[K],
        ObjectValueTypes<{
            [P in keyof T[K] as P extends StringPop<K> ? P : never]: T[K][P];
        }>
    >;
};

/** {a: {b: 1, c: {d: 1}}} => {"a.b": 1, "a.c": {d: 1}} */
type Flatten<T> = FlattenOuter<FlattenInner<T>>;

/** {a: {b: 1, c: {d: 1}}} => {"a.b": 1, "a.b.c.d": 1} */
export type ObjectFlatten<T> = T extends Flatten<T> ? T : ObjectFlatten<Flatten<T>>;
