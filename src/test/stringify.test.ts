import { strictEqual as expect } from 'assert';
import { it } from 'mocha';
import { stringify } from './javascript';

it('fromPrimitive()', () => {
    expect(stringify.fromPrimitive(undefined), 'undefined');
    expect(stringify.fromPrimitive(void 0), 'undefined');
    expect(stringify.fromPrimitive(null), 'null');

    expect(stringify.fromPrimitive(true), 'true');
    expect(stringify.fromPrimitive(false), 'false');

    expect(stringify.fromPrimitive(0), '0');
    expect(stringify.fromPrimitive(-0), '0');
    expect(stringify.fromPrimitive(1), '1');
    expect(stringify.fromPrimitive(-1), '-1');
    expect(stringify.fromPrimitive(2.3), '2.3');
    expect(stringify.fromPrimitive(-2.3), '-2.3');
    expect(stringify.fromPrimitive(Number.MAX_SAFE_INTEGER), '9007199254740991');
    expect(stringify.fromPrimitive(-Number.MAX_SAFE_INTEGER), '-9007199254740991');
    expect(stringify.fromPrimitive(Infinity), 'Infinity');
    expect(stringify.fromPrimitive(-Infinity), '-Infinity');
    expect(stringify.fromPrimitive(NaN), 'NaN');
    expect(stringify.fromPrimitive(-NaN), 'NaN');

    expect(stringify.fromPrimitive(0n), '0n');
    expect(stringify.fromPrimitive(-0n), '0n');
    expect(stringify.fromPrimitive(1n), '1n');
    expect(stringify.fromPrimitive(-1n), '-1n');
    expect(
        stringify.fromPrimitive(BigInt(Number.MAX_SAFE_INTEGER) ** 2n),
        `${BigInt(Number.MAX_SAFE_INTEGER) ** 2n}n`
    );

    expect(stringify.fromPrimitive(Symbol()), 'Symbol()');
    expect(stringify.fromPrimitive(Symbol('')), 'Symbol("")');
    expect(stringify.fromPrimitive(Symbol('foo')), 'Symbol("foo")');

    expect(stringify.fromPrimitive(''), '""');
    expect(stringify.fromPrimitive(' '), '" "');
    expect(stringify.fromPrimitive('\n'), '"\n"');
    expect(stringify.fromPrimitive('\r'), '"\r"');
    expect(stringify.fromPrimitive('foo'), '"foo"');
    expect(stringify.fromPrimitive(`${123}`), '"123"');
});
