import { copyFileSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import {
    IContribCommand,
    IContribConfigProps,
    IExtensionManifest,
    IMenusCommand,
} from './types/manifest';
import {
    fakerApiArrayAtoms,
    fakerApiAtoms,
    fakerApiBoundAtoms,
    fakerApiDateAtoms,
    fakerApiPrimitiveAtoms,
    fakerApiStructureAtoms,
    fakerLocaleAtoms,
    vscodeLanguageIdAtoms,
} from './utils/atoms';

/**
 * @see https://code.visualstudio.com/api/references/activation-events
 */
function getActivationEvents() {
    const events: string[] = [];

    return events;
}

/**
 * @see https://code.visualstudio.com/api/references/contribution-points#contributes.commands
 */
function getContribCommands() {
    const array: IContribCommand[] = [];

    for (const atom of fakerApiPrimitiveAtoms) {
        array.push({
            command: `vscode-faker-js.${atom}`,
            title: atom,
            category: 'Faker.js',
            enablement: '(editorIsOpen || editorFocus) && !editorReadonly',
        });
    }

    for (const atom of fakerApiDateAtoms) {
        array.push({
            command: `vscode-faker-js.${atom}`,
            title: `${atom} (date)`,
            category: 'Faker.js',
            enablement: '(editorIsOpen || editorFocus) && !editorReadonly',
        });
    }

    for (const atom of fakerApiArrayAtoms) {
        array.push({
            command: `vscode-faker-js.${atom}`,
            title: `${atom} (array)`,
            category: 'Faker.js',
            enablement: '(editorIsOpen || editorFocus) && !editorReadonly',
        });
    }

    for (const atom of fakerApiStructureAtoms) {
        array.push({
            command: `vscode-faker-js.${atom}`,
            title: `${atom} (object)`,
            category: 'Faker.js',
            enablement: '(editorIsOpen || editorFocus) && !editorReadonly',
        });
    }

    for (const atom of fakerApiBoundAtoms) {
        array.push({
            command: `vscode-faker-js.${atom}`,
            title: `${atom} (binding)`,
            category: 'Faker.js',
            enablement: '(editorIsOpen || editorFocus) && !editorReadonly',
        });
    }

    return array;
}

/**
 * @see https://code.visualstudio.com/api/references/contribution-points#contributes.configuration
 */
const useContribConfigProps: IContribConfigProps = {
    'faker-js.locale': {
        type: 'string',
        enum: fakerLocaleAtoms,
        default: 'en',
        description: 'Specifies default Faker.js locale.',
    },
    'faker-js.language': {
        type: 'string',
        enum: vscodeLanguageIdAtoms,
        default: '*',
        description:
            'Specifies the format of the data output. If set to "*", the serialization class will change dynamically depending on a language. Otherwise (if set to a particular language), a fixed serialization class will be used for all languages. If no serialization class was found, then the it falls to JavaScript syntax.',
    },
    'faker-js.javascript.bigint.insertMode': {
        type: 'string',
        enum: ['inline', 'literal', 'wrapper'],
        default: 'literal',
        description:
            'BigInt is inserted as "9007199254740991" in inline mode, as "9007199254740991n" in literal mode, as "BigInt(9007199254740991)" in wrapper mode.',
    },
    'faker-js.javascript.string.insertMode': {
        type: 'string',
        enum: ['inline', 'literal'],
        default: 'literal',
        description: 'String inserted: as ""foobar"" in literal mode, as "foobar" in inline mode.',
    },
    'faker-js.javascript.string.quotes': {
        type: 'string',
        enum: ['single', 'double', 'backticks'],
        default: 'single',
        description: 'Specify string quotes type.',
    },
    'faker-js.python.bigint.insertMode': {
        type: 'string',
        enum: ['inline', 'literal'],
        default: 'literal',
        description:
            'BigInt is inserted as "9007199254740991" in inline mode, as "9007199254740991" in literal mode',
    },
    'faker-js.python.string.insertMode': {
        type: 'string',
        enum: ['inline', 'literal'],
        default: 'literal',
        description: 'String inserted: as ""foobar"" in literal mode, as "foobar" in inline mode.',
    },
    'faker-js.python.string.quotes': {
        type: 'string',
        enum: ['double'],
        default: 'double',
        description: 'Specify string quotes type.',
    },
};

/**
 * @see https://code.visualstudio.com/api/references/contribution-points#contributes.menus
 * @see https://code.visualstudio.com/api/references/when-clause-contexts
 */
function getMenuCommandPalette() {
    const array: IMenusCommand[] = [];

    for (const atom of fakerApiAtoms) {
    }

    return array;
}

function codegen() {
    const packageJsonPath = path.join(__dirname, 'package.json');
    const snapshotPath = path.join(__dirname, 'package.snapshot.json');

    copyFileSync(packageJsonPath, snapshotPath);

    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
    const extensionManifest: IExtensionManifest = {
        activationEvents: getActivationEvents(),
        contributes: {
            commands: getContribCommands(),
            configuration: {
                type: 'object',
                title: 'Faker.js',
                properties: useContribConfigProps,
            },
        },
        menus: {
            commandPalette: getMenuCommandPalette(),
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
