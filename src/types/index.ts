export type Primitive = undefined | null | boolean | number | bigint | string | symbol;
export type Structure = object;

export type FunctionStructure = Function;
export type CallableStructure = (...args: any[]) => any;

export interface InstanceStructure extends Function {
    new (...args: any[]): any;
}

// prettier-ignore
export type IsEqual<T1, T2, T = true, F = false> =
    (<L>() => L extends T1 ? 1 : 2) extends
    (<R>() => R extends T2 ? 1 : 2) ? T : F;

/** Returns R (result) if T (type) is a function, otherwise returns F (fallback). */
export type IsFunction<T, R, F = T> = T extends (...args: any[]) => any ? R : F;

/** Returns R (result) if T (type) is an  object, otherwise returns F (fallback). */
export type IsObject<T, R, F = T> = IsFunction<T, F, T extends object ? R : F>;

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

/* Removes `never` keys from object. */
export type ObjectStrict<T> = { [K in keyof T as T[K] extends never ? never : K]: T[K] };

/* Removes object keys that doesn't satisfies to specified `TKey` and `TValue` types. */
export type ObjectFilter<T extends object, TValue = any, TKey = string | symbol> = ObjectStrict<{
    [K in keyof T]: K extends TKey ? (T[K] extends TValue ? T[K] : never) : never;
}>;
