/**
 * Bind all functions of the given instance to itself so you can use them independently.
 *
 * @internal
 *
 * @param instance The class instance of which the methods are to be bound to itself.
 *
 * @example
 * const someModule = new SomeModule(faker);
 * bindThisToMethods(someModule); // Usually called inside the constructor passing `this`
 * const someMethod = someModule.someMethod;
 * someMethod(); // Works
 */
function bindThisToMethods<T extends { new (): any }>(instance: InstanceType<T>): void {
    let prototype = Object.getPrototypeOf(instance);

    while (prototype !== Object.prototype) {
        for (const method of Object.getOwnPropertyNames(prototype)) {
            if (typeof instance[method] === 'function' && method !== 'constructor') {
                instance[method] = instance[method].bind(instance);
            }
        }

        prototype = Object.getPrototypeOf(prototype);
    }
}

abstract class ApiModuleBase {
    constructor(protected readonly _api: Api) {
        bindThisToMethods(this);
    }
}

class ApiModule1 extends ApiModuleBase {
    foo(): void {
        console.log(this._api.module2.bar());
    }
}

class ApiModule2 extends ApiModuleBase {
    bar(): void {
        console.log(this._api.module1.foo());
    }
}

class Api {
    readonly module1: ApiModule1 = new ApiModule1(this);
    readonly module2: ApiModule2 = new ApiModule2(this);
}

const api = new Api();

api.module1.foo();
