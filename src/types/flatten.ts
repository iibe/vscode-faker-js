import type { IsObject } from './utils';

/**
 * Returns R (result) as a last element of splitting T with D (delimiter).
 */
type StringPop<T, D extends string = '.', R = T> = T extends `${string}${D}${infer S}`
    ? StringPop<S>
    : R;

/**
 * Returns types of object keys i.e. types of Object.values().
 */
type ObjectValueTypes<T> = T[keyof T];

/**
 * First step for Flatten type.
 *
 * Input:
 *     type x = ApiMapInner<{ a: { b: 1; c: 2 }; d: 3; }>;
 * Output:
 *     type x = { "a.b": { b: 1; c: 2; }; "a.c": { b: 1; c: 2; }; d: 3; };
 *
 *
 */
type FlattenInner<T> = {
    [K in keyof T as K extends string
        ? IsObject<T[K], `${K}.${keyof T[K] & string}`, K>
        : K]: IsObject<T[K], { [P in keyof T[K]]: T[K][P] }>;
};

/**
 * Second step for Flatten type.
 *
 * Input:
 *     type x = ApiMapOuter<{ "a.b": { b: 1; c: 2; }; "a.c": { b: 1; c: 2; }; d: 3; }>;
 * Output:
 *     type x = { "a.b": { b: 1 }; "a.c": { c: 2 }; };
 */
type FlattenOuter<T> = {
    [K in keyof T]: IsObject<
        T[K],
        ObjectValueTypes<{
            [P in keyof T[K] as P extends StringPop<K> ? P : never]: T[K][P];
        }>
    >;
};

// {a: {b: 1, c: {d: 1}}} => {"a.b": 1, "a.c": {d: 1}}
type FlattenType<T> = FlattenOuter<FlattenInner<T>>;

// {a: {b: 1, c: {d: 1}}} => {"a.b": 1, "a.b.c.d": 1}
export type Flatten<T> = T extends FlattenType<T> ? T : Flatten<FlattenType<T>>;
