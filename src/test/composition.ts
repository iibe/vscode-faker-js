class Base {
    constructor(protected readonly state: Composition) {}
}

class Derived1 extends Base {
    constructor(state: Composition) {
        super(state);
    }

    foo(): void {
        console.log('foo()');
    }

    bar(): void {
        this.state.mod2.baz();
    }
}

class Derived2 extends Base {
    constructor(state: Composition) {
        super(state);
    }

    baz(): void {
        console.log('baz()');
    }

    qux(): void {
        this.state.mod1.foo();
    }
}

class Composition {
    readonly mod1 = new Derived1(this);
    readonly mod2 = new Derived2(this);
}

const api = new Composition();

api.mod1.foo(); // foo
api.mod1.bar(); // baz

api.mod2.baz(); // baz
api.mod2.qux(); // foo
