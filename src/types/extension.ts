import type { Command } from 'vscode';
import type { IFakerApiAtom, IFakerLocale } from './faker';
import type { Flatten } from './flatten';

interface IExtensionSettingsType {
    'faker-js': {
        locale: IFakerLocale;
    };
}

export type IExtensionSettings = Flatten<IExtensionSettingsType>;
export type IExtensionSettingsKey = keyof IExtensionSettings;

export type IContribConfigProps = Record<IExtensionSettingsKey, object>;

export type IContribCommandId = `vscode-faker-js.run.${IFakerApiAtom}`;
export type IContribCommand = Command & {
    command: IContribCommandId;
    category?: string;
};

export interface IContributes {
    contributes: {
        configuration: {
            type: string;
            title: string;
            properties: IContribConfigProps;
        };
        commands: IContribCommand[];
    };
}
