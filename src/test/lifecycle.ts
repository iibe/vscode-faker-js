import { createFakerAsync, getFakerFunction } from '../faker';
import { StringifyPhp } from '../syntax';

const primitivesSimple = {
    j1: undefined,
    j2: void 0,
    j3: null,
    j4: true,
    j5: false,
    j6: 0,
    j7: +0,
    j8: -0,
    j9: 1,
    j10: -1,
    j11: 2.3,
    j12: -2.3,
    j13: Number.MAX_SAFE_INTEGER,
    j14: -Number.MAX_SAFE_INTEGER,
    j15: Infinity,
    j16: -Infinity,
    j17: NaN,
    j18: -NaN,
    j19: 0n,
    j20: -0n,
    j21: 1n,
    j23: -1n,
    j24: BigInt(Number.MAX_SAFE_INTEGER) ** 2n,
};

const primitivesComplex = {
    j1: Symbol(),
    j2: Symbol(''),
    j3: Symbol('foo'),
    j4: '',
    j5: ' ',
    j6: '\xFF',
    j7: 'foo',
    j8: `${123}`,
};

// console.log(primitivesSimple);
// console.log(stringify.from(primitivesSimple));
// console.log(primitivesComplex);
// console.log(stringify.from(primitivesComplex));

const edgeCases = {
    foo: ['foo', () => () => 'bar', { baz: 'qux', x: { y: 1, z: 2 } }],
    bar: {},
    baz: () => () => () => 'smth',
    qux: class {
        constructor(
            abc: string,
            private ijk: boolean,
            protected xyz: string
        ) {}

        opened(a: number, b: number) {
            return a + b;
        }

        #secret(a: number, b: number) {
            return a - b;
        }
    },
};

async function lifecycle() {
    const faker = await createFakerAsync('en');
    const procedure = getFakerFunction(faker, 'location.language');

    // @ts-ignore
    const data = procedure();

    if (data) {
        const stringify = new StringifyPhp({
            bigint: {
                insertMode: 'inline',
            },
            string: {
                insertMode: 'literal',
                quotationMark: 'double',
            },
            array: {
                insertMode: 'short',
            },
        });

        console.log(data);
        console.log(stringify.from(data));

        console.log('\nINPUT:');
        console.log(edgeCases);

        console.log('\nOUTPUT:');
        console.log(stringify.from(edgeCases));
    }
}

lifecycle();
