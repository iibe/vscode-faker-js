import fs from 'node:fs';
import path from 'node:path';
import {
    setOfApiArrayKeys,
    setOfApiDateKeys,
    setOfApiMethodKeys,
    setOfApiPrimitiveKeys,
    setOfApiStructureKeys,
    setOfFakerLocale,
    setOfLanguageID
} from './base/atoms';
import type {
    IContribConfig,
    IContribConfigProps
} from './types/extension-config';
import type {
    IContribCommand,
    IExtensionManifest
} from './types/extension-manifest';
import type { IFakerFnName } from './types/faker';

const CWD = process.cwd();
const OUTDIR = path.join(CWD, './generated');
const CODEGEN_MD = path.join(OUTDIR, './codegen.md');
const PACKAGE_JSON = path.join(CWD, './package.json');
const PACKAGE_JSON_SNAPSHOT = path.join(OUTDIR, './package.snapshot.json');

const mdxTableHeader: string = '|No.|Function|Return type|\n|-|-|-|\n';
const mdxTableBody: Array<[string, string]> = [];

const deprecated: Set<IFakerFnName> = new Set([]);

// -----------------------------------------------------------------------------
// PACKAGE.JSON FIELDS
// -----------------------------------------------------------------------------

/** @see https://code.visualstudio.com/api/references/activation-events */
const activationEvents: string[] = [];

/**
 * See `contributes.commands` in `package.json`.
 * @see https://code.visualstudio.com/api/references/contribution-points#contributes.commands
 * @see https://code.visualstudio.com/api/references/when-clause-contexts
 */
const contributes_commands: IContribCommand[] = [];

for (const atom of setOfApiPrimitiveKeys) {
    const tag = deprecated.has(atom) ? '<deprecated>' : 'Primitive';
    const postfix = tag ? ' (' + tag + ')' : '';
    const title = `${atom}${postfix}`;

    mdxTableBody.push([atom, tag]);
    contributes_commands.push({
        command: `vscode-faker-js.${atom}`,
        category: 'Faker.js',
        title,
        enablement: '(editorIsOpen || editorFocus) && !editorReadonly'
    });
}

for (const atom of setOfApiDateKeys) {
    const tag = deprecated.has(atom) ? '<deprecated>' : 'Date';
    const postfix = tag ? ' (' + tag + ')' : '';
    const title = `${atom}${postfix}`;

    mdxTableBody.push([atom, tag]);
    contributes_commands.push({
        command: `vscode-faker-js.${atom}`,
        category: 'Faker.js',
        title,
        enablement: '(editorIsOpen || editorFocus) && !editorReadonly'
    });
}

for (const atom of setOfApiArrayKeys) {
    const tag = deprecated.has(atom) ? '<deprecated>' : 'Array';
    const postfix = tag ? ' (' + tag + ')' : '';
    const title = `${atom}${postfix}`;

    mdxTableBody.push([atom, tag]);
    contributes_commands.push({
        command: `vscode-faker-js.${atom}`,
        category: 'Faker.js',
        title,
        enablement: '(editorIsOpen || editorFocus) && !editorReadonly'
    });
}

for (const atom of setOfApiStructureKeys) {
    const tag = deprecated.has(atom) ? '<deprecated>' : 'Structure';
    const postfix = tag ? ' (' + tag + ')' : '';
    const title = `${atom}${postfix}`;

    mdxTableBody.push([atom, tag]);
    contributes_commands.push({
        command: `vscode-faker-js.${atom}`,
        category: 'Faker.js',
        title,
        enablement: '(editorIsOpen || editorFocus) && !editorReadonly'
    });
}

for (const atom of setOfApiMethodKeys) {
    const tag = deprecated.has(atom) ? '<deprecated>' : 'Function';
    const postfix = tag ? ' (' + tag + ')' : '';
    const title = `${atom}${postfix}`;

    mdxTableBody.push([atom, tag]);
    contributes_commands.push({
        command: `vscode-faker-js.${atom}`,
        category: 'Faker.js',
        title,
        enablement: '(editorIsOpen || editorFocus) && !editorReadonly'
    });
}

const contribConfigProps: IContribConfigProps = {
    'faker-js.locale': {
        type: 'string',
        enum: setOfFakerLocale,
        default: 'en',
        markdownDescription: 'Specifies default Faker.js locale.'
    },
    'faker-js.syntax': {
        type: 'string',
        enum: setOfLanguageID,
        default: '*',
        markdownDescription:
            'Specifies a syntax of fake data. If set to `*`, the serialization changes dynamically depending on a programming language. Otherwise (if set to a particular language), a fixed serialization will be used for all languages. If no serialization class was found, then it uses JavaScript syntax for everything.'
    },

    'faker-js.go.bigint.insertMode': {
        type: 'string',
        enum: ['inline'],
        default: 'inline',
        markdownDescription:
            'BigInt is inserted as `9007199254740991` in inline mode.'
    },
    'faker-js.go.string.quotationMark': {
        type: 'string',
        enum: ['double', 'backtick'],
        default: 'double',
        markdownDescription: 'Specifies quotation mark.'
    },
    'faker-js.go.string.insertMode': {
        type: 'string',
        enum: ['inline', 'literal', 'interpolation'],
        default: 'literal',
        markdownDescription:
            'String is inserted as `foobar` in inline mode, as `<quotationMark>foobar<quotationMark>` in literal mode, as `"foobar"` in interpolation mode.'
    },
    'faker-js.go.array.insertMode': {
        type: 'string',
        enum: ['normal', 'short'],
        default: 'short',
        markdownDescription: 'Array is inserted as ...'
    },

    'faker-js.javascript.bigint.insertMode': {
        type: 'string',
        enum: ['inline', 'literal', 'wrapper'],
        default: 'literal',
        markdownDescription:
            'BigInt is inserted as `9007199254740991` in inline mode, as `9007199254740991n` in literal mode, as `BigInt(9007199254740991)` in wrapper object mode.'
    },
    'faker-js.javascript.string.quotationMark': {
        type: 'string',
        enum: ['single', 'double'],
        default: 'single',
        markdownDescription: 'Specifies quotation mark.'
    },
    'faker-js.javascript.string.insertMode': {
        type: 'string',
        enum: ['inline', 'literal', 'interpolation'],
        default: 'literal',
        markdownDescription:
            'String is inserted as `foobar` in inline mode, as `<quotationMark>foobar<quotationMark>` in literal mode, as ``` `foobar` ``` in interpolation mode.'
    },

    'faker-js.php.null.insertMode': {
        type: 'string',
        enum: ['lowercase', 'uppercase'],
        default: 'uppercase',
        markdownDescription:
            'Undefined and null is inserted as `null` in lowercase mode, as `NULL` in uppercase mode.'
    },
    'faker-js.php.boolean.insertMode': {
        type: 'string',
        enum: ['lowercase', 'uppercase'],
        default: 'uppercase',
        markdownDescription:
            'Boolean is inserted as `true` and `false` in lowercase mode, as `TRUE` and `FALSE` in uppercase mode.'
    },
    'faker-js.php.bigint.insertMode': {
        type: 'string',
        enum: ['safe', 'unsafe'],
        default: 'unsafe',
        markdownDescription:
            'BigInt is inserted as `9007199254740991` in unsafe mode, as `<quotationMark>9007199254740991<quotationMark>` in safe mode.'
    },
    'faker-js.php.string.quotationMark': {
        type: 'string',
        enum: ['single', 'double'],
        default: 'double',
        markdownDescription: 'Specifies quotation mark.'
    },
    'faker-js.php.string.insertMode': {
        type: 'string',
        enum: ['inline', 'literal', 'interpolation'],
        default: 'literal',
        markdownDescription:
            'String is inserted as `foobar` in inline mode, as `<quotationMark>foobar<quotationMark>` in literal mode, as `"foobar"` in interpolation mode.'
    },
    'faker-js.php.array.insertMode': {
        type: 'string',
        enum: ['normal', 'short'],
        default: 'short',
        markdownDescription:
            'Array is inserted as `array(1, 2, 3)` in normal mode, as `[1, 2, 3]` in short mode.'
    },

    'faker-js.python.bigint.insertMode': {
        type: 'string',
        enum: ['inline'],
        default: 'inline',
        markdownDescription:
            'BigInt is inserted as `9007199254740991` in inline mode.'
    },
    'faker-js.python.string.quotationMark': {
        type: 'string',
        enum: ['single', 'double'],
        default: 'double',
        markdownDescription: 'Specifies quotation mark.'
    },
    'faker-js.python.string.insertMode': {
        type: 'string',
        enum: ['inline', 'literal', 'interpolation'],
        default: 'literal',
        markdownDescription:
            'String is inserted as `foobar` in inline mode, as `<quotationMark>foobar<quotationMark>` in literal mode, as `f"foobar"` in interpolation mode.'
    },

    'faker-js.ruby.bigint.insertMode': {
        type: 'string',
        enum: ['inline'],
        default: 'inline',
        markdownDescription:
            'BigInt is inserted as `9007199254740991` in inline mode.'
    },
    'faker-js.ruby.string.quotationMark': {
        type: 'string',
        enum: ['single', 'double'],
        default: 'double',
        markdownDescription: 'Specifies quotation mark.'
    },
    'faker-js.ruby.string.insertMode': {
        type: 'string',
        enum: ['inline', 'literal', 'interpolation'],
        default: 'literal',
        markdownDescription:
            'String is inserted as `foobar` in inline mode, as `<quotationMark>foobar<quotationMark>` in literal mode, as `"foobar"` in interpolation mode.'
    }
};

/**
 * @see https://code.visualstudio.com/api/references/contribution-points#contributes.configuration
 */
const contributes_configuration: IContribConfig = {
    title: 'Faker.js',
    type: 'object',
    properties: contribConfigProps
};

const extensionManifest: IExtensionManifest = {
    activationEvents,
    contributes: {
        commands: contributes_commands,
        configuration: contributes_configuration
    }
};

// -----------------------------------------------------------------------------
// MISC
// -----------------------------------------------------------------------------

if (!fs.existsSync(OUTDIR)) {
    fs.mkdirSync(OUTDIR, { recursive: true });
}

fs.copyFileSync(PACKAGE_JSON, PACKAGE_JSON_SNAPSHOT);

const pkgIn = JSON.parse(fs.readFileSync(PACKAGE_JSON, 'utf-8'));
const pkgOut = JSON.stringify({ ...pkgIn, ...extensionManifest }, null, 2);
fs.writeFileSync(PACKAGE_JSON, pkgOut, { encoding: 'utf-8' });

const mdxOut =
    mdxTableHeader +
    mdxTableBody
        .sort()
        .map((tuple, index) => `| ${index + 1} | ${tuple.join(' | ')} |`)
        .join('\n');

fs.writeFileSync(CODEGEN_MD, mdxOut, { encoding: 'utf-8' });
