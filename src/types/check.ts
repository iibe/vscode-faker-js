import type { Newable } from './base.js';

// -----------------------------------------------------------------------------
// PRIMITIVES
// -----------------------------------------------------------------------------

export type IfAny<T, Y = true, N = false> = IsAny<T> extends true ? Y : N;
export type IfUnknown<T, Y = true, N = false> =
    IsUnknown<T> extends true ? Y : N;

export type IfVoid<T, Y = true, N = false> = IsVoid<T> extends true ? Y : N;
export type IfUndefined<T, Y = true, N = false> =
    IsUndefined<T> extends true ? Y : N;
export type IfNull<T, Y = true, N = false> = IsNull<T> extends true ? Y : N;

export type IfBoolean<T, Y = true, N = false> =
    IsBoolean<T> extends true ? Y : N;
export type IfNumber<T, Y = true, N = false> = IsNumber<T> extends true ? Y : N;
export type IfBigInt<T, Y = true, N = false> = IsBigInt<T> extends true ? Y : N;
export type IfString<T, Y = true, N = false> = IsString<T> extends true ? Y : N;
export type IfSymbol<T, Y = true, N = false> = IsSymbol<T> extends true ? Y : N;

export type IfNever<T, Y = true, N = false> = IsNever<T> extends true ? Y : N;

// prettier-ignore
// For `unknown extends T`, the `T` can be either `any` or `unknown`.
// But `any` can be assigned to `null` unlike `unknown`.
export type IsUnknown<T> = unknown extends T
    ? [T] extends [null] ? false : true
    : false;

// prettier-ignore
export type IsAny<T> = 0 extends (1 & T) ? true : false;

// prettier-ignore
// Note that `any`, `never` and `undefined` can be assigned to `void`.
export type IsVoid<T> =
    IsAny<T> extends true ? false :
    IsUndefined<T> extends true ? false :
    IsNever<T> extends true ? false :
    [T] extends [void] ? true : false;

// prettier-ignore
// Note that `any` and `never` can be assigned to `undefined`.
export type IsUndefined<T> =
    IsAny<T> extends true ? false :
    IsNever<T> extends true ? false :
    [T] extends [undefined] ? true : false;

// prettier-ignore
// Note that `any` and `never` can be assigned to `null`.
export type IsNull<T> =
    IsAny<T> extends true ? false :
    IsNever<T> extends true ? false :
    [T] extends [null] ? true : false;

// prettier-ignore
// Note that `any` and `never` can be assigned to `boolean`.
export type IsBoolean<T> =
    IsAny<T> extends true ? false :
    IsNever<T> extends true ? false :
    [T] extends [boolean] ? true : false;

// prettier-ignore
// Note that `any` and `never` can be assigned to `number`.
export type IsNumber<T> =
    IsAny<T> extends true ? false :
    IsNever<T> extends true ? false :
    [T] extends [number] ? true : false;

// prettier-ignore
// Note that `any` and `never` can be assigned to `bigint`.
export type IsBigInt<T> =
    IsAny<T> extends true ? false :
    IsNever<T> extends true ? false :
    [T] extends [bigint] ? true : false;

// prettier-ignore
// Note that `any` and `never` can be assigned to `string`.
export type IsString<T> =
    IsAny<T> extends true ? false :
    IsNever<T> extends true ? false :
    [T] extends [string] ? true : false;

// prettier-ignore
// Note that `any` and `never` can be assigned to `symbol`.
export type IsSymbol<T> =
    IsAny<T> extends true ? false :
    IsNever<T> extends true ? false :
    [T] extends [symbol] ? true : false;

export type IsNever<T> = [T] extends [never] ? true : false;

// -----------------------------------------------------------------------------
// STRUCTURES
// -----------------------------------------------------------------------------
// TODO: Implement correct type checks for derivatives of Object type.

export type IfEnum<T, Y = true, N = false> = IsEnum<T> extends true ? Y : N;
export type IfArray<T, Y = true, N = false> = IsArray<T> extends true ? Y : N;
export type IfFunction<T, Y = true, N = false> =
    IsFunction<T> extends true ? Y : N;
export type IfClass<T, Y = true, N = false> = IsClass<T> extends true ? Y : N;
export type IfObject<T, Y = true, N = false> = IsObject<T> extends true ? Y : N;

// prettier-ignore
export type IsEnum<T> = T extends object
    ? number extends T[keyof T] ? true : false
    : false;

// prettier-ignore
export type IsArray<T> =
    IsAny<T> extends true ? false : // `any` can be assigned to `any[]`
    IsNever<T> extends true ? false : // `never` can be assigned to `any[]`
    [T] extends [any[]] ? true : false;

// prettier-ignore
export type IsFunction<T> =
    IsAny<T> extends true ? false : // `any` can be assigned to `(...args: any[]) => any`
    IsNever<T> extends true ? false : // `never` can be assigned to `(...args: any[]) => any`
    [T] extends [(...args: any[]) => any] ? true : false;

// prettier-ignore
export type IsClass<T> = [T] extends [Newable] ? true : false;

// prettier-ignore
export type IsObject<T> =
    IsAny<T> extends true ? false : // `any` can be assigned to `object`
    IsNever<T> extends true ? false : // `never` can be assigned to `object`
    IsArray<T> extends true ? false : // `any[]` can be assigned to `object`
    IsFunction<T> extends true ? false : // `(...args: any[]) => any` can be assigned to `object`
    [T] extends [object] ? true : false;
