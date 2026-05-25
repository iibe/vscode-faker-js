import type { Callable, Newable, Primitive, Structure } from '../types/base.js';

// -----------------------------------------------------------------------------
// DATA TYPE VALIDATION
// -----------------------------------------------------------------------------

/** Any of these: undefined, null, boolean, string, symbol, number, bigint. */
export function isPrimitive(value: unknown): value is Primitive {
    return !isStructure(value);
}

/** Any of these: array, object, function (class). */
export function isStructure(value: unknown): value is Structure {
    return (
        (typeof value === 'object' && value !== null) ||
        typeof value === 'function'
    );
}

export function isDate(value: unknown) {
    return value instanceof Date;
}

export function isArray(value: unknown) {
    return Array.isArray(value);
}

export function isObject(value: unknown): value is object {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function isFunction(value: unknown): value is Callable {
    return typeof value === 'function';
}

export function isClass(value: unknown): value is Newable {
    if (!isFunction(value)) {
        return false;
    }

    const prototype = Object.getOwnPropertyDescriptor(value, 'prototype');

    if (!prototype) {
        // Skip Promise.resolve() since it doesn't have prototype at all
        return false;
    }

    // ECMAScript spec dictates the string representation of a class constructor.
    const naiveConstructorNameCheck = /^\s*class[^\w]+/.test(value.toString());

    // Function has writable prototype, bun class isn't
    const naivePrototypeImmutabilityCheck = !prototype.writable;

    const naiveBuiltInObjectCheck =
        globalThis[value.name as keyof typeof globalThis] === value &&
        /^[A-Z]/.test(value.name);

    return (
        naiveConstructorNameCheck ||
        naivePrototypeImmutabilityCheck ||
        naiveBuiltInObjectCheck
    );
}

// -----------------------------------------------------------------------------
// TYPE NARROWING FUNCTIONS
// -----------------------------------------------------------------------------

/**
 * Returns array exhaustive over union type.
 * If at least one element is missing you will get an error message.
 * ```txt
 * Argument of type `X` is not assignable to parameter of type `Y | Z | ...`.
 * ```
 * Here, `X` is a first argument of `defineArrayOfStrings([ ... ])` and `Y | Z | ...` are missing items;
 */
export function exhaustiveArray<T>() {
    return <U extends T[]>(
        array: U &
            ([T] extends [U[number]] ? unknown : 'Missing some union values')
    ) => array;
}

export function assertUnreachable(value: never): never {
    throw new Error(`Unhandled case: ${value}`);
}
