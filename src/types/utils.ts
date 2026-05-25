import type { BuiltInObject } from './base.js';

/**
 * Creates a new type `S` based on `T`.
 */
export type New<T, S extends T> = S;

/* IDENTITY */

export type IfExtends<T1, T2, Y = true, N = false> =
    IsExtends<T1, T2> extends true ? Y : N;
export type IfIntersects<T1, T2, Y = true, N = false> =
    IsIntersects<T1, T2> extends true ? Y : N;
export type IfEqual<T1, T2, Y = true, N = false> =
    IsEqual<T1, T2> extends true ? Y : N;
export type IfRecursive<T, Y = true, N = false> =
    IsRecursive<T> extends true ? Y : N;

/**
 * Checks if `T` is subtype of `U` (i.e. `U` is supertype of `T`).
 * In simple words, expression `[T] extends [U]` means `T can be assigned to U`.
 */
export type IsExtends<T, U> = [T] extends [U] ? true : false;

/**
 * Checks if type `T` intersects with `U`.
 */
export type IsIntersects<T, U> = [T & U] extends never ? false : true;

/**
 * Checks if type `T1` is equal to `T2`.
 */
// prettier-ignore
export type IsEqual<T1, T2> =
    (<L>() => L extends T1 & L | L ? 1 : 2) extends
    (<R>() => R extends T2 & R | R ? 1 : 2) ? true : false;

/**
 * Checks if a type is recursive i.e. has self-reference.
 * Note that `{...}[keyof T]` returns a union of booleans (possibly evaluated to `boolean` type). Therefore, if `{...}[keyof T]` returns union of only false types (evaluated to `false` type), then the expression `{...}[keyof T] extends false` means that we have a non-recursive type `T`.
 */
// prettier-ignore
export type IsRecursive<T, Seen = never> =
    T extends Seen ? true :
    T extends object ? {
        [K in keyof T]: IsRecursive<T[K], never | T>;
    }[keyof T] extends false ? false : true
    : false;

/**
 * TypeScript typically uses lazy type evaluation, meaning it keeps the crazy nested structure of your types until it has to evaluate a value against them. It has certain heuristics to simplify computation, where it will sometimes evaluate things eagerly to save it work later.
 *
 * One of those heuristics is specifically when you construct a new explicit mapped type with a constraint, it will attempt to evaluate that in-place to resolve the constraint eagerly. The `& {}` is doing the work as the constraint here.
 *
 * Of course, if the compiler were a bit smarter and were coded differently, it might have decided instead to recognize `& {}` as a no-op constraint and just drop it, and then leave the mapped type without eagerly evaluating. Which is why this is very much compiler-implementation-dependent behavior and not documented, and could easily break in later versions (although people use it so much, they may get some push-back if they break it).
 */
export type PrettifyAll<T> = {
    [K in keyof T]: T[K] extends object ? PrettifyAll<T[K]> : T[K];
} & {};

// prettier-ignore
export type Prettify<T> =
    T extends BuiltInObject ? T :
    T extends object ? {
        [K in keyof T]: T[K] extends object ? Prettify<T[K]> : T[K]
    } & {} :
    T;
