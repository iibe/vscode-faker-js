import { writeFileSync } from 'fs';
import { fakerAtoms, fakerLocales } from './constants';
import type { ICommand, IConfigProps } from './types/extension';

/**
 * Generates `package.json` extension-specific key `contributes.commands`.
 */
function getCommands() {
    const commands: ICommand[] = [];

    for (const atom of fakerAtoms) {
        commands.push({
            command: `vscode-faker-js.run.${atom}`,
            title: atom,
            category: 'Faker',
        });
    }

    return commands;
}

/**
 * Generates `package.json` extension-specific key `contributes.configuration.properties`.
 */
function getConfiguration() {
    const settings: IConfigProps = {
        'faker-js.locale': {
            type: 'string',
            enum: fakerLocales,
            default: 'en',
            description: 'Specifies Faker.js locale.',
        },
    };

    return settings;
}

/**
 * Generates `package.json` extension-specific key `activationEvents`.
 */
function getActivationEvents() {
    // inferred from `contributes.commands`
    const events: string[] = [];

    return events;
}

interface IPackageJson {
    activationEvents: string[];
    contributes: {
        configuration: {
            type: string;
            title: string;
            properties: IConfigProps;
        };
        commands: ICommand[];
    };
}

function codegen() {
    const dump: IPackageJson = {
        activationEvents: getActivationEvents(),
        contributes: {
            configuration: {
                type: 'object',
                title: 'Faker.js',
                properties: getConfiguration(),
            },
            commands: getCommands(),
        },
    };

    writeFileSync('./package.vscode.json', JSON.stringify(dump, null, 4));
}

codegen();
