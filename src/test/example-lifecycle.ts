import { getFakerFunction, importFaker } from '../faker.js';
import type { Stringify } from '../syntax/base.js';
import { StringifyPhp } from '../syntax/php.js';
import type { ISettings } from '../types/extension-config.js';

testLifecycle();
testStringify();

async function testLifecycle() {
    const faker = await importFaker('en');
    const fn = getFakerFunction(faker, 'location.language');

    if (!fn) {
        return;
    }

    // @ts-ignore
    // [TS2349]: Signatures of union doesn't compatible with each other
    const data = fn();

    if (data) {
        const stringify = getStringify();
        console.log(data);
        console.log(stringify.from(data));
    }
}

function testStringify() {
    const stringify = getStringify();

    const primitiveBaseCases = getPrimitiveBaseCases();
    console.log('\nPRIMITIVE CASE INPUT:');
    console.log(primitiveBaseCases);
    console.log('\nPRIMITIVE CASE OUTPUT:');
    console.log(stringify.from(primitiveBaseCases));

    const primitiveEdgeCases = getPrimitiveEdgeCases();
    console.log('\nPRIMITIVE EDGE CASE INPUT:');
    console.log(primitiveEdgeCases);
    console.log('\nPRIMITIVE EDGE CASE OUTPUT:');
    console.log(stringify.from(primitiveEdgeCases));

    const structureEdgeCases = getStructureEdgeCases();
    console.log('\nSTRUCTURE EDGE CASE INPUT:');
    console.log(structureEdgeCases);
    console.log('\nSTRUCTURE EDGE CASE OUTPUT:');
    console.log(stringify.from(structureEdgeCases));
}

function getStringify(): Stringify {
    const syntax: ISettings['php'] = {
        null: {
            insertMode: 'uppercase'
        },
        boolean: {
            insertMode: 'uppercase'
        },
        bigint: {
            insertMode: 'unsafe'
        },
        string: {
            insertMode: 'literal',
            quotationMark: 'double'
        },
        array: {
            insertMode: 'short'
        }
    };

    return new StringifyPhp(syntax);
}

function getPrimitiveBaseCases(): object {
    return {
        hierarchy: undefined,
        tarragon: void 0,
        developing: null,
        kit: true,
        jungle: false,
        pecan: 0,
        innovation: +0,
        pressure: -0,
        yogurt: +1.23,
        corral: -4.56,
        hope: +Infinity,
        hyphenation: -Infinity,
        airman: +NaN,
        ectoderm: -NaN,
        interior: 0n,
        chap: 0n,
        fundraising: -0n,
        tapioca: 123n,
        nucleotidase: -456n,
        summary: BigInt(Number.MAX_SAFE_INTEGER) ** 2n
    };
}

function getPrimitiveEdgeCases(): object {
    return {
        couch: Symbol(),
        cutover: Symbol(''),
        puppet: Symbol('foo'),
        shoulder: '',
        declaration: ' ',
        sanity: '\xFF',
        outset: 'foo',
        climb: `${123}`
    };
}

function getStructureEdgeCases(): object {
    return {
        foo: ['one', () => () => 'two', { baz: 'three', qux: { a: 1, b: 2 } }],
        bar: {},
        baz: () => () => () => 'four',
        qux: class {
            protected x: number;
            protected y: number;

            constructor(x: number, y: number, z: number) {
                this.x = x * z;
                this.y = y * z;
            }
        }
    };
}
