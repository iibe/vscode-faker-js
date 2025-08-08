import fs from 'node:fs';
import path from 'node:path';
import {
    fakerApiArrayAtoms,
    fakerApiBoundAtoms,
    fakerApiDateAtoms,
    fakerApiPrimitiveAtoms,
    fakerApiStructureAtoms,
    fakerLocaleAtoms,
    vscodeLanguageIdAtoms,
} from './base/atoms';
import type { IFakerAtom } from './types/faker';
import type { IContribCommand, IExtensionManifest } from './types/manifest';
import type { IContribConfig, IContribConfigProps } from './types/settings';

const deprecated: Set<IFakerAtom> = new Set([
    'finance.maskedNumber',
    'image.urlPlaceholder',
    'internet.userName',
]);

const fakerMdListItems: string[] = [];

/**
 * See `activationEvents` in `package.json`.
 * @see https://code.visualstudio.com/api/references/activation-events
 */
const activationEvents: string[] = [];

/**
 * See `contributes.commands` in `package.json`.
 * @see https://code.visualstudio.com/api/references/contribution-points#contributes.commands
 * @see https://code.visualstudio.com/api/references/when-clause-contexts
 */
const contribCommands: IContribCommand[] = [];

for (const atom of fakerApiPrimitiveAtoms) {
    const postfix = deprecated.has(atom) ? ' (deprecated)' : '';
    const title = `${atom}${postfix}`;

    fakerMdListItems.push(title);
    contribCommands.push({
        command: `vscode-faker-js.${atom}`,
        category: 'Faker.js',
        title,
        enablement: '(editorIsOpen || editorFocus) && !editorReadonly',
    });
}

for (const atom of fakerApiDateAtoms) {
    const postfix = ` (${deprecated.has(atom) ? 'deprecated' : 'date'})`;
    const title = `${atom}${postfix}`;

    fakerMdListItems.push(title);
    contribCommands.push({
        command: `vscode-faker-js.${atom}`,
        category: 'Faker.js',
        title,
        enablement: '(editorIsOpen || editorFocus) && !editorReadonly',
    });
}

for (const atom of fakerApiArrayAtoms) {
    const postfix = ` (${deprecated.has(atom) ? 'deprecated' : 'array'})`;
    const title = `${atom}${postfix}`;

    fakerMdListItems.push(title);
    contribCommands.push({
        command: `vscode-faker-js.${atom}`,
        category: 'Faker.js',
        title,
        enablement: '(editorIsOpen || editorFocus) && !editorReadonly',
    });
}

for (const atom of fakerApiStructureAtoms) {
    const postfix = ` (${deprecated.has(atom) ? 'deprecated' : 'object'})`;
    const title = `${atom}${postfix}`;

    fakerMdListItems.push(title);
    contribCommands.push({
        command: `vscode-faker-js.${atom}`,
        category: 'Faker.js',
        title,
        enablement: '(editorIsOpen || editorFocus) && !editorReadonly',
    });
}

for (const atom of fakerApiBoundAtoms) {
    const postfix = ` (${deprecated.has(atom) ? 'deprecated' : 'binding'})`;
    const title = `${atom}${postfix}`;

    fakerMdListItems.push(title);
    contribCommands.push({
        command: `vscode-faker-js.${atom}`,
        category: 'Faker.js',
        title,
        enablement: '(editorIsOpen || editorFocus) && !editorReadonly',
    });
}

const contribConfigProps: IContribConfigProps = {
    'faker-js.locale': {
        type: 'string',
        enum: fakerLocaleAtoms,
        default: 'en',
        markdownDescription: 'Specifies default Faker.js locale.',
    },
    'faker-js.syntax': {
        type: 'string',
        enum: vscodeLanguageIdAtoms,
        default: '*',
        markdownDescription:
            'Specifies a syntax of fake data. If set to `*`, the serialization changes dynamically depending on a programming language. Otherwise (if set to a particular language), a fixed serialization will be used for all languages. If no serialization class was found, then it uses JavaScript syntax for everything.',
    },

    'faker-js.go.bigint.insertMode': {
        type: 'string',
        enum: ['inline'],
        default: 'inline',
        markdownDescription:
            'BigInt is inserted as `9007199254740991` in inline mode.',
    },
    'faker-js.go.string.quotationMark': {
        type: 'string',
        enum: ['double', 'backtick'],
        default: 'double',
        markdownDescription: 'Specifies quotation mark.',
    },
    'faker-js.go.string.insertMode': {
        type: 'string',
        enum: ['inline', 'literal', 'interpolation'],
        default: 'literal',
        markdownDescription:
            'String is inserted as `foobar` in inline mode, as `<quotationMark>foobar<quotationMark>` in literal mode, as `"foobar"` in interpolation mode.',
    },
    'faker-js.go.array.insertMode': {
        type: 'string',
        enum: ['normal', 'short'],
        default: 'short',
        markdownDescription: 'Array is inserted as ...',
    },

    'faker-js.javascript.bigint.insertMode': {
        type: 'string',
        enum: ['inline', 'literal', 'wrapper'],
        default: 'literal',
        markdownDescription:
            'BigInt is inserted as `9007199254740991` in inline mode, as `9007199254740991n` in literal mode, as `BigInt(9007199254740991)` in wrapper object mode.',
    },
    'faker-js.javascript.string.quotationMark': {
        type: 'string',
        enum: ['single', 'double'],
        default: 'single',
        markdownDescription: 'Specifies quotation mark.',
    },
    'faker-js.javascript.string.insertMode': {
        type: 'string',
        enum: ['inline', 'literal', 'interpolation'],
        default: 'literal',
        markdownDescription:
            'String is inserted as `foobar` in inline mode, as `<quotationMark>foobar<quotationMark>` in literal mode, as ``` `foobar` ``` in interpolation mode.',
    },

    'faker-js.php.null.insertMode': {
        type: 'string',
        enum: ['lowercase', 'uppercase'],
        default: 'uppercase',
        markdownDescription:
            'Undefined and null is inserted as `null` in lowercase mode, as `NULL` in uppercase mode.',
    },
    'faker-js.php.boolean.insertMode': {
        type: 'string',
        enum: ['lowercase', 'uppercase'],
        default: 'uppercase',
        markdownDescription:
            'Boolean is inserted as `true` and `false` in lowercase mode, as `TRUE` and `FALSE` in uppercase mode.',
    },
    'faker-js.php.bigint.insertMode': {
        type: 'string',
        enum: ['safe', 'unsafe'],
        default: 'unsafe',
        markdownDescription:
            'BigInt is inserted as `9007199254740991` in unsafe mode, as `<quotationMark>9007199254740991<quotationMark>` in safe mode.',
    },
    'faker-js.php.string.quotationMark': {
        type: 'string',
        enum: ['single', 'double'],
        default: 'double',
        markdownDescription: 'Specifies quotation mark.',
    },
    'faker-js.php.string.insertMode': {
        type: 'string',
        enum: ['inline', 'literal', 'interpolation'],
        default: 'literal',
        markdownDescription:
            'String is inserted as `foobar` in inline mode, as `<quotationMark>foobar<quotationMark>` in literal mode, as `"foobar"` in interpolation mode.',
    },
    'faker-js.php.array.insertMode': {
        type: 'string',
        enum: ['normal', 'short'],
        default: 'short',
        markdownDescription:
            'Array is inserted as `array(1, 2, 3)` in normal mode, as `[1, 2, 3]` in short mode.',
    },

    'faker-js.python.bigint.insertMode': {
        type: 'string',
        enum: ['inline'],
        default: 'inline',
        markdownDescription:
            'BigInt is inserted as `9007199254740991` in inline mode.',
    },
    'faker-js.python.string.quotationMark': {
        type: 'string',
        enum: ['single', 'double'],
        default: 'double',
        markdownDescription: 'Specifies quotation mark.',
    },
    'faker-js.python.string.insertMode': {
        type: 'string',
        enum: ['inline', 'literal', 'interpolation'],
        default: 'literal',
        markdownDescription:
            'String is inserted as `foobar` in inline mode, as `<quotationMark>foobar<quotationMark>` in literal mode, as `f"foobar"` in interpolation mode.',
    },

    'faker-js.ruby.bigint.insertMode': {
        type: 'string',
        enum: ['inline'],
        default: 'inline',
        markdownDescription:
            'BigInt is inserted as `9007199254740991` in inline mode.',
    },
    'faker-js.ruby.string.quotationMark': {
        type: 'string',
        enum: ['single', 'double'],
        default: 'double',
        markdownDescription: 'Specifies quotation mark.',
    },
    'faker-js.ruby.string.insertMode': {
        type: 'string',
        enum: ['inline', 'literal', 'interpolation'],
        default: 'literal',
        markdownDescription:
            'String is inserted as `foobar` in inline mode, as `<quotationMark>foobar<quotationMark>` in literal mode, as `"foobar"` in interpolation mode.',
    },
};

/**
 * See `contributes.configuration` in `package.json`.
 * @see https://code.visualstudio.com/api/references/contribution-points#contributes.configuration
 */
const contribConfig: IContribConfig = {
    title: 'Faker.js',
    type: 'object',
    properties: contribConfigProps,
};

const extensionManifest: IExtensionManifest = {
    activationEvents,
    contributes: {
        commands: contribCommands,
        configuration: contribConfig,
    },
};

const cwd = process.cwd();
const pkgJsonPath = path.join(cwd, './package.json');
const pkgJsonMirrorPath = path.join(cwd, './artifacts/package.snapshot.json');
const packageJson = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8'));
const newPackageJson = JSON.stringify(
    { ...packageJson, ...extensionManifest },
    null,
    4
);
fs.copyFileSync(pkgJsonPath, pkgJsonMirrorPath);
fs.writeFileSync(pkgJsonPath, newPackageJson, { encoding: 'utf-8' });

const fakerMdPath = path.join(cwd, './artifacts/faker-api.md');
const fakerMdList = '1. ' + fakerMdListItems.sort().join('\n1. ');
fs.writeFileSync(fakerMdPath, fakerMdList, { encoding: 'utf-8' });
