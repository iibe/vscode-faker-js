import { writeFileSync } from 'fs';
import { fakerAtoms, fakerLocales } from './constants';
import type { IContribCommand, IContribConfigProps, IContributes } from './types/extension';

/**
 * Generates commands for `package.json` extension-specific key `contributes.commands`.
 */
function getCommands() {
    const commands: IContribCommand[] = [];

    for (const atom of fakerAtoms) {
        commands.push({
            command: `vscode-faker-js.run.${atom}`,
            title: atom,
            category: 'Faker',
        });
    }

    return commands;
}

// type x = vscode.Contru;

/**
 * Generate settings for `package.json` extension-specific key `configuration.properties`.
 * Note: use can use following configuration in VSCode user `settings.json` file.
 */
function getConfiguration() {
    const settings: IContribConfigProps = {
        'faker-js.locale': {
            type: 'string',
            enum: fakerLocales,
            default: 'en',
            description: 'Specifies Faker.js locale.',
        },
    };

    return settings;
}

function codegen() {
    const contribs: IContributes = {
        contributes: {
            configuration: {
                type: 'object',
                title: 'Faker.js',
                properties: getConfiguration(),
            },
            commands: getCommands(),
        },
    } as const;

    const json = JSON.stringify(contribs, null, 4);

    writeFileSync('./package.contrib.json', json);
}

codegen();
