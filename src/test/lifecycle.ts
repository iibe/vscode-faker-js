import { createFaker, getFakerFunction } from '../faker';
import { Stringify, StringifyPhp } from '../syntax';
import { ISettings } from '../types/settings';

testLifecycle();
testStringify();

async function testLifecycle() {
    const faker = await createFaker('en');
    const procedure = getFakerFunction(faker, 'location.language');

    // @ts-ignore
    const data = procedure();

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
        summary: BigInt(Number.MAX_SAFE_INTEGER) ** 2n,
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
        climb: `${123}`,
    };
}

function getStructureEdgeCases(): object {
    return {
        foo: ['one', () => () => 'two', { baz: 'three', qux: { a: 1, b: 2 } }],
        bar: {},
        baz: () => () => () => 'four',
        qux: class {
            constructor(
                abc: string,
                private ijk: boolean,
                protected xyz: string
            ) {}
        },
    };
}
