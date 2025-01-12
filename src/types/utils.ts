export type Join<L, R> = L extends string | number
    ? R extends string | number
        ? `${L}${'' extends R ? '' : '.'}${R}`
        : never
    : never;

export type Paths<T> = T extends object
    ? {
          [K in keyof T]: `${Exclude<K, symbol>}${'' | `.${Paths<T[K]>}`}`;
      }[keyof T]
    : never;

export type Leaves<T> = T extends object
    ? {
          [K in keyof T]: `${Exclude<K, symbol>}${Leaves<T[K]> extends never
              ? ''
              : `.${Leaves<T[K]>}`}`;
      }[keyof T]
    : never;

// prettier-ignore
export type IsEqual<T1, T2, T = true, F = false> =
    (<L>() => L extends T1 ? 1 : 2) extends
    (<R>() => R extends T2 ? 1 : 2) ? T : F;

/**
 * Returns R (result) if T (type) is a function, otherwise returns F (fallback).
 */
export type IsFunction<T, R, F = T> = T extends (...args: any[]) => any ? R : F;

/**
 * Returns R (result) if T (type) is an object, otherwise returns F (fallback).
 */
export type IsObject<T, R, F = T> = IsFunction<T, F, T extends object ? R : F>;
