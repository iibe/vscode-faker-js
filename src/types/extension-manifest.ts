import * as vscode from 'vscode';
import type { IContribConfig } from './extension-config.js';
import type { IFakerFnName } from './faker.js';

export type ICommandId = `vscode-faker-js.${IFakerFnName}`;

export type IContribCommand = vscode.Command & {
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
