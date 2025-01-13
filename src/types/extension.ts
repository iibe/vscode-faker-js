import type { Command } from 'vscode';
import type { IFakerApiAtom, IFakerLocale } from './faker';
import type { Flatten } from './flatten';

interface IConfigType {
    'faker-js': {
        locale: IFakerLocale;
    };
}

export type IConfig = Flatten<IConfigType>;
export type IConfigKey = keyof IConfig;
export type IConfigProps = Record<IConfigKey, object>;

export type ICommandId = `vscode-faker-js.run.${IFakerApiAtom}`;
export type ICommand = Command & {
    command: ICommandId;
    category?: string;
};
