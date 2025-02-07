import { ConfigurationScope, workspace, WorkspaceConfiguration } from 'vscode';
import type { ISettingsKey, ISettingsType } from './types/settings';

function get<T>(config: WorkspaceConfiguration, key: ISettingsKey, defaultValue: T): T {
    return config.get<T>(key, defaultValue);
}

export function getConfig(scope?: ConfigurationScope | null) {
    return workspace.getConfiguration('faker-js', scope);
}

export function getSettings(): ISettingsType {
    const config = getConfig();

    return {
        locale: get(config, 'locale', 'en'),
        language: get(config, 'language', 'javascript'),
        javascript: {
            bigint: {
                insertMode: get(config, 'javascript.bigint.insertMode', 'literal'),
            },
            string: {
                insertMode: get(config, 'javascript.string.insertMode', 'literal'),
                quotes: get(config, 'javascript.string.quotes', 'single'),
            },
        },
        python: {
            bigint: {
                insertMode: get(config, 'python.bigint.insertMode', 'literal'),
            },
            string: {
                insertMode: get(config, 'python.string.insertMode', 'literal'),
                quotes: get(config, 'python.string.quotes', 'double'),
            },
        },
    };
}
