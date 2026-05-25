export type Primitive =
    | undefined
    | null
    | boolean
    | number
    | bigint
    | string
    | symbol;

export type Structure = object;

export interface Callable extends Function {
    (...args: any[]): any;
}

export interface Newable extends Function {
    new (...args: any[]): any;
}

export type BuiltInObject =
    | undefined
    | null
    | boolean
    | number
    | bigint
    | string
    | symbol
    | object
    | Array<any>
    | Date
    | Error
    | Function
    | Map<any, any>
    | Promise<any>
    | RegExp
    | Set<any>;
