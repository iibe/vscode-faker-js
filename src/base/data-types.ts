import { Callable, Newable, Primitive, Structure } from '../types';

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

export function isNativeDate(value: unknown) {
    return value instanceof Date;
}

export function isNativeArray(value: unknown) {
    return Array.isArray(value);
}

export function isNativeObject(value: unknown): value is object {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function isNativeFunction(value: unknown): value is Callable {
    return typeof value === 'function';
}

export function isNativeClass(value: unknown): value is Newable {
    if (!isNativeFunction(value)) {
        return false;
    }

    const prototypeDescriptor = Object.getOwnPropertyDescriptor(
        value,
        'prototype'
    );

    // Ignores Promise.resolve(), since it doesn't have prototype at all
    if (!prototypeDescriptor) {
        return false;
    }

    // ECMAScript spec dictates the string representation of a class constructor.
    const naiveConstructorNameCheck = /^\s*class[^\w]+/.test(value.toString());

    // Function has writable prototype, bun class isn't
    const naivePrototypeImmutabilityCheck = !prototypeDescriptor.writable;

    // Built-in object check
    const naiveNativeObjectCheck =
        globalThis[value.name as keyof typeof globalThis] === value &&
        /^[A-Z]/.test(value.name);

    return (
        naiveConstructorNameCheck ||
        naivePrototypeImmutabilityCheck ||
        naiveNativeObjectCheck
    );
}
