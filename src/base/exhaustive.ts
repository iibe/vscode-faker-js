/**
 * Usage: `exhaustiveUnion<U>()(...array: U[]);`
 *
 * Returns array exhaustive over union type. If some elements are missing you'll see an error:
 * ```txt
 * Argument of type `X` is not assignable to parameter of type `Y | Z | ...`.
 * ```
 *
 * Where:
 * - `X` is a first parameter of exhaustiveUnion();
 * - `Y | Z | ...` are missing items;
 */
export function exhaustiveArray<U extends string>() {
    return function <S extends [U, ...U[]]>(
        ...array: S extends any
            ? Exclude<U, S[number]> extends never
                ? S
                : Exclude<U, S[number]>[]
            : never
    ) {
        return array;
    };
}

export function assertNever(variable: never): never {
    throw new Error('Unexpected value. Should have been never.');
}
