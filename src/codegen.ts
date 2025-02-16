import { copyFileSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { IContribCommand, IExtensionManifest } from './types/manifest';
import { IContribConfig, IContribConfigProps } from './types/settings';
import {
    fakerApiArrayAtoms,
    fakerApiBoundAtoms,
    fakerApiDateAtoms,
    fakerApiPrimitiveAtoms,
    fakerApiStructureAtoms,
    fakerLocaleAtoms,
    vscodeLanguageIdAtoms,
} from './utils/atoms';

/**
 * @see https://code.visualstudio.com/api/references/contribution-points#contributes.commands
 * @see https://code.visualstudio.com/api/references/when-clause-contexts
 */
function createContribCommands() {
    const commands: IContribCommand[] = [];

    for (const atom of fakerApiPrimitiveAtoms) {
        commands.push({
            command: `vscode-faker-js.${atom}`,
            title: atom,
            category: 'Faker.js',
            enablement: '(editorIsOpen || editorFocus) && !editorReadonly',
        });
    }

    for (const atom of fakerApiDateAtoms) {
        commands.push({
            command: `vscode-faker-js.${atom}`,
            title: `${atom} (date)`,
            category: 'Faker.js',
            enablement: '(editorIsOpen || editorFocus) && !editorReadonly',
        });
    }

    for (const atom of fakerApiArrayAtoms) {
        commands.push({
            command: `vscode-faker-js.${atom}`,
            title: `${atom} (array)`,
            category: 'Faker.js',
            enablement: '(editorIsOpen || editorFocus) && !editorReadonly',
        });
    }

    for (const atom of fakerApiStructureAtoms) {
        commands.push({
            command: `vscode-faker-js.${atom}`,
            title: `${atom} (object)`,
            category: 'Faker.js',
            enablement: '(editorIsOpen || editorFocus) && !editorReadonly',
        });
    }

    for (const atom of fakerApiBoundAtoms) {
        commands.push({
            command: `vscode-faker-js.${atom}`,
            title: `${atom} (binding)`,
            category: 'Faker.js',
            enablement: '(editorIsOpen || editorFocus) && !editorReadonly',
        });
    }

    return commands;
}

/**
 * @see https://code.visualstudio.com/api/references/contribution-points#contributes.configuration
 */
function createContribConfig(): IContribConfig {
    const properties: IContribConfigProps = {
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

        'faker-js.javascript.bigint.insertMode': {
            type: 'string',
            enum: ['inline', 'literal', 'wrapper'],
            default: 'literal',
            markdownDescription:
                'BigInt is inserted as `9007199254740991` in inline mode, as `9007199254740991n` in literal mode, as `BigInt(9007199254740991)` in wrapper object mode.',
        },
        'faker-js.javascript.string.quotes': {
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
                'String is inserted as `foobar` in inline mode, as `<quotes>foobar<quotes>` in literal mode, as ``foobar`` in interpolation mode.',
        },

        'faker-js.php.bigint.insertMode': {
            type: 'string',
            enum: ['inline', 'literal'],
            default: 'literal',
            markdownDescription:
                'BigInt is inserted as `9007199254740991` in inline mode, as `9007199254740991` in literal mode',
        },
        'faker-js.php.string.quotes': {
            type: 'string',
            enum: ['single', 'double'],
            default: 'double',
            markdownDescription: 'Specify quotation mark.',
        },
        'faker-js.php.string.insertMode': {
            type: 'string',
            enum: ['inline', 'literal', 'interpolation'],
            default: 'literal',
            markdownDescription:
                'String is inserted as `foobar` in inline mode, as `<quotes>foobar<quotes>` in literal mode, as `"foobar"` in interpolation mode.',
        },

        'faker-js.python.bigint.insertMode': {
            type: 'string',
            enum: ['inline', 'literal'],
            default: 'literal',
            markdownDescription:
                'BigInt is inserted as `9007199254740991` in inline mode, as `9007199254740991` in literal mode',
        },
        'faker-js.python.string.quotes': {
            type: 'string',
            enum: ['single', 'double'],
            default: 'double',
            markdownDescription: 'Specify quotation mark.',
        },
        'faker-js.python.string.insertMode': {
            type: 'string',
            enum: ['inline', 'literal', 'interpolation'],
            default: 'literal',
            markdownDescription:
                'String is inserted as `foobar` in inline mode, as `<quotes>foobar<quotes>` in literal mode, as `f"foobar"` in interpolation mode.',
        },

        'faker-js.ruby.bigint.insertMode': {
            type: 'string',
            enum: ['inline', 'literal'],
            default: 'literal',
            markdownDescription:
                'BigInt is inserted as `9007199254740991` in inline mode, as `9007199254740991` in literal mode',
        },
        'faker-js.ruby.string.quotes': {
            type: 'string',
            enum: ['single', 'double'],
            default: 'double',
            markdownDescription: 'Specify quotation mark.',
        },
        'faker-js.ruby.string.insertMode': {
            type: 'string',
            enum: ['inline', 'literal', 'interpolation'],
            default: 'literal',
            markdownDescription:
                'String is inserted as `foobar` in inline mode, as `<quotes>foobar<quotes>` in literal mode, as `"foobar"` in interpolation mode.',
        },
    };

    return {
        title: 'Faker.js',
        type: 'object',
        properties,
    };
}

function codegen() {
    const packageJsonPath = path.join(__dirname, 'package.json');
    const snapshotPath = path.join(__dirname, 'package.snapshot.json');

    copyFileSync(packageJsonPath, snapshotPath);

    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
    const extensionManifest: IExtensionManifest = {
        /** @see https://code.visualstudio.com/api/references/activation-events */
        activationEvents: [],
        contributes: {
            commands: createContribCommands(),
            configuration: createContribConfig(),
        },
    };

    writeFileSync(
        packageJsonPath,
        JSON.stringify({ ...packageJson, ...extensionManifest }, null, 4),
        {
            encoding: 'utf-8',
        }
    );
}

codegen();
