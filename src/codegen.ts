import { copyFileSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import {
    fakerApiArrayAtoms,
    fakerApiBoundAtoms,
    fakerApiDateAtoms,
    fakerApiPrimitiveAtoms,
    fakerApiStructureAtoms,
    fakerLocaleAtoms,
} from './core/atoms';
import type { IFakerCommand, IFakerConfigProps, IPackageJsonProps } from './types/faker';

codegen();

function codegen() {
    const configurationPath = path.join(__dirname, 'package.json');
    const snapshotPath = path.join(__dirname, 'package.snapshot.json');

    copyFileSync(configurationPath, snapshotPath);

    const packageJson = JSON.parse(readFileSync(configurationPath, 'utf-8'));
    const packageJsonProps: IPackageJsonProps = {
        activationEvents: getActivationEvents(),
        contributes: {
            configuration: {
                type: 'object',
                title: 'Faker.js',
                properties: getConfigProps(),
            },
            commands: getCommands(),
        },
    };

    writeFileSync(
        configurationPath,
        JSON.stringify({ ...packageJson, ...packageJsonProps }, null, 4),
        {
            encoding: 'utf-8',
        }
    );
}

/**
 * Generates `package.json` extension-specific key `activationEvents`.
 * Usually it is inferred from `contributes.commands`.
 */
function getActivationEvents() {
    const events: string[] = [];

    return events;
}

/**
 * Generates `package.json` extension-specific key `contributes.commands`.
 */
function getCommands() {
    const commands: IFakerCommand[] = [];

    for (const atom of fakerApiPrimitiveAtoms) {
        commands.push({
            command: `vscode-faker-js.run.${atom}`,
            title: atom,
            category: 'Faker.js',
        });
    }

    for (const atom of fakerApiDateAtoms) {
        commands.push({
            command: `vscode-faker-js.run.${atom}`,
            title: `${atom} (date)`,
            category: 'Faker.js',
        });
    }

    for (const atom of fakerApiArrayAtoms) {
        commands.push({
            command: `vscode-faker-js.run.${atom}`,
            title: `${atom} (array)`,
            category: 'Faker.js',
        });
    }

    for (const atom of fakerApiStructureAtoms) {
        commands.push({
            command: `vscode-faker-js.run.${atom}`,
            title: `${atom} (object)`,
            category: 'Faker.js',
        });
    }

    for (const atom of fakerApiBoundAtoms) {
        commands.push({
            command: `vscode-faker-js.run.${atom}`,
            title: `${atom} (binding)`,
            category: 'Faker.js',
        });
    }

    return commands;
}

/**
 * Generates `package.json` extension-specific key `contributes.configuration.properties`.
 */
function getConfigProps() {
    const props: IFakerConfigProps = {
        'faker-js.locale': {
            type: 'string',
            enum: fakerLocaleAtoms,
            default: 'en',
            description: 'Specifies Faker.js locale.',
        },
        'faker-js.bigint.insert': {
            type: 'string',
            enum: ['literal', 'inline', 'wrapper'],
            default: 'literal',
            description: 'Either literal `123n` (by default), or wrapper object `BigInt(123)`.',
        },
        'faker-js.string.insert': {
            type: 'string',
            enum: ['literal', 'inline'],
            default: 'literal',
            description: 'Either literal `"string"` (by default), or inline `string`.',
        },
        'faker-js.string.quotes': {
            type: 'string',
            enum: ['single', 'double', 'backticks'],
            default: 'single',
            description: 'Specify string quotes type.',
        },
        'faker-js.symbol.quotes': {
            type: 'string',
            enum: ['single', 'double', 'backticks'],
            default: 'single',
            description: 'Specify symbol quotes type.',
        },
    };

    return props;
}
