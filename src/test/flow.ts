import { createFakerAsync, getFakerFunction } from '../faker';
import { StringifyPhp } from '../syntax';
import { ISettings } from '../types/settings';

const syntax: ISettings['php'] = {
    null: {
        insertMode: 'uppercase',
    },
    boolean: {
        insertMode: 'uppercase',
    },
    bigint: {
        insertMode: 'unsafe',
    },
    string: {
        insertMode: 'literal',
        quotationMark: 'double',
    },
    array: {
        insertMode: 'short',
    },
};

async function testExecution() {
    const faker = await createFakerAsync('en');
    const procedure = getFakerFunction(faker, 'location.language');

    // @ts-ignore
    const data = procedure();

    if (data) {
        const stringify = new StringifyPhp(syntax);
        console.log(data);
        console.log(stringify.from(data));
    }
}

function testStringify() {
    const stringify = new StringifyPhp(syntax);

    const primitiveCases = createPrimitiveDataset();
    console.log('\nPRIMITIVE CASE INPUT:');
    console.log(primitiveCases);
    console.log('\nPRIMITIVE CASE OUTPUT:');
    console.log(stringify.from(primitiveCases));

    const primitiveEdgeCases = createPrimitiveEdgeCaseDataset();
    console.log('\nPRIMITIVE EDGE CASE INPUT:');
    console.log(primitiveEdgeCases);
    console.log('\nPRIMITIVE EDGE CASE OUTPUT:');
    console.log(stringify.from(primitiveEdgeCases));

    const structureEdgeCases = createStructureEdgeCaseDataset();
    console.log('\nSTRUCTURE EDGE CASE INPUT:');
    console.log(structureEdgeCases);
    console.log('\nSTRUCTURE EDGE CASE OUTPUT:');
    console.log(stringify.from(structureEdgeCases));
}

testExecution();
testStringify();

function createPrimitiveDataset(): object {
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
        summary: BigInt(Number.MAX_SAFE_INTEGER) ** 2n,
    };
}

function createPrimitiveEdgeCaseDataset(): object {
    return {
        couch: Symbol(),
        cutover: Symbol(''),
        puppet: Symbol('foo'),
        shoulder: '',
        declaration: ' ',
        sanity: '\xFF',
        outset: 'foo',
        climb: `${123}`,
    };
}

function createStructureEdgeCaseDataset(): object {
    return {
        foo: ['one', () => () => 'two', { baz: 'three', qux: { a: 1, b: 2 } }],
        bar: {},
        baz: () => () => () => 'smth',
        qux: class {
            constructor(
                abc: string,
                private ijk: boolean,
                protected xyz: string
            ) {}
        },
    };
}
