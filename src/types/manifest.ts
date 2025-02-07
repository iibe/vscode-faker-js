import { Command } from 'vscode';
import { IFakerAtom } from './faker';
import { ISettings } from './settings';

type ContribConfigPropsTransformer<T extends object> = {
    [K in keyof T as K extends string ? `faker-js.${K}` : never]: {
        type: 'string';
        enum: Array<T[K]>;
        default: T[K];
        description?: string;
    };
};

export type IContribConfigProps = ContribConfigPropsTransformer<ISettings>;

export type ICommandId = `vscode-faker-js.${IFakerAtom}`;

export type IContribCommand = Command & {
    command: ICommandId;
    category: 'Faker.js';
    enablement?: string;
};

export type IMenusCommand = { command: string; when: string };

export interface IExtensionManifest {
    activationEvents: string[];
    contributes: {
        configuration: {
            type: 'object';
            title: 'Faker.js';
            properties: IContribConfigProps;
        };
        commands: IContribCommand[];
    };
    menus: {
        commandPalette: IMenusCommand[];
    };
}
