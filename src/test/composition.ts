class Base {
    readonly mod1: Module1;
    readonly mod2: Module2;

    constructor() {
        this.mod1 = new Module1(this);
        this.mod2 = new Module2(this);
    }
}

class Module1 {
    constructor(public ctx: Base) {}

    foo(): void {
        console.log('foo()');
    }

    bar(): void {
        this.ctx.mod2.baz();
    }
}

class Module2 {
    constructor(public ctx: Base) {}

    baz(): void {
        console.log('baz()');
    }

    qux(): void {
        this.ctx.mod1.foo();
    }
}

const api = new Base();

api.mod1.foo(); // foo
api.mod1.bar(); // baz
api.mod2.baz(); // baz
api.mod2.qux(); // foo

console.log(api);
