import type { IsObject } from './check.js';

/**
 * Recursive version of {@link OmitNeverShallow}.
 */
export type OmitNeverDeep<T> = {
    [K in keyof T as T[K] extends never ? never : K]: IsObject<
        T[K]
    > extends true
        ? OmitNeverDeep<T[K]>
        : T[K];
};

/**
 * Removes keys with `never` as a value from object.
 */
export type OmitNeverShallow<T> = {
    [K in keyof T as T[K] extends never ? never : K]: T[K];
};

/**
 * Removes keys with `never` as a value from object.
 */
export type OmitNever<
    T extends object,
    Deep extends boolean = true
> = Deep extends true ? OmitNeverDeep<T> : OmitNeverShallow<T>;
