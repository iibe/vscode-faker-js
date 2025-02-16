import { Command } from 'vscode';
import { IFakerAtom } from './faker';
import { IContribConfig } from './settings';

export type ICommandId = `vscode-faker-js.${IFakerAtom}`;

export type IContribCommand = Command & {
    command: ICommandId;
    category: 'Faker.js';
    enablement?: string;
};

export interface IExtensionManifest {
    activationEvents: string[];
    contributes: {
        commands: IContribCommand[];
        configuration: IContribConfig;
    };
}
