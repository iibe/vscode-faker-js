/** Any of these: undefined, null, boolean, string, symbol, number, bigint. */
export function isAnyPrimitive(data: any) {
    return !isAnyStructure(data);
}

/** Any of these: array, object, function (class). */
export function isAnyStructure(data: any) {
    return (typeof data === 'object' && data !== null) || typeof data === 'function';
}

export function isExactDate(data: any) {
    return data instanceof Date;
}

export function isExactArray(data: any) {
    return Array.isArray(data);
}

export function isExactObject(data: any) {
    return typeof data === 'object' && data !== null && !Array.isArray(data);
}

export function isExactFunction(data: any) {
    return typeof data === 'function';
}

export function isExactClass(data: any) {
    const strictTypeCheck = typeof data === 'function';

    if (!strictTypeCheck) {
        return false;
    }

    const descriptor = Object.getOwnPropertyDescriptor(data, 'prototype');
    if (!descriptor) {
        return false; // omit Promise.resolve() function, since it doesn't have prototype
    }

    // ECMAScript spec dictates the string representation of a class constructor.
    const naiveConstructorNameCheck = /^\s*class[^\w]+/.test(data.toString());

    // Function has writable prototype, bun class isn't
    const naivePrototypeImmutabilityCheck = !Boolean(descriptor.writable);

    // Built-in object check
    const naiveNativeCheck =
        globalThis[data.name as keyof typeof globalThis] === data && /^[A-Z]/.test(data.name);

    return naiveConstructorNameCheck || naivePrototypeImmutabilityCheck || naiveNativeCheck;
}
