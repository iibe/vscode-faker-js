import { workspace } from 'vscode';
import type { ISettingsKey, ISettingsType } from './types/settings';

const config = workspace.getConfiguration('faker-js');

function get<T>(key: ISettingsKey, fallback: T): T {
    return config.get<T>(key, fallback);
}

export const createSettings = (): ISettingsType => ({
    locale: get('locale', 'en'),
    syntax: get('syntax', 'javascript'),
    c: {},
    cpp: {},
    csharp: {},
    go: {},
    java: {},
    javascript: {
        bigint: {
            insertMode: get('javascript.bigint.insertMode', 'literal'),
        },
        string: {
            insertMode: get('javascript.string.insertMode', 'literal'),
            quotes: get('javascript.string.quotes', 'single'),
        },
    },
    php: {
        bigint: {
            insertMode: get('php.bigint.insertMode', 'literal'),
        },
        string: {
            insertMode: get('php.string.insertMode', 'literal'),
            quotes: get('php.string.quotes', 'double'),
        },
    },
    python: {
        bigint: {
            insertMode: get('python.bigint.insertMode', 'literal'),
        },
        string: {
            insertMode: get('python.string.insertMode', 'literal'),
            quotes: get('python.string.quotes', 'double'),
        },
    },
    ruby: {
        bigint: {
            insertMode: get('ruby.bigint.insertMode', 'literal'),
        },
        string: {
            insertMode: get('ruby.string.insertMode', 'literal'),
            quotes: get('ruby.string.quotes', 'single'),
        },
    },
    rust: {},
});
