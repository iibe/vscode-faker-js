import { workspace } from 'vscode';
import type { ISettings, ISettingsKey } from './types/settings';

const config = workspace.getConfiguration('faker-js');

function get<T>(key: ISettingsKey, fallback: T): T {
    return config.get<T>(key, fallback);
}

export const createSettings = (): ISettings => ({
    locale: get('locale', 'en'),
    syntax: get('syntax', 'javascript'),
    c: {},
    clojure: {},
    cpp: {},
    csharp: {},
    d: {},
    dart: {},
    elixir: {},
    erlang: {},
    fsharp: {},
    go: {
        bigint: {
            insertMode: get('go.bigint.insertMode', 'inline'),
        },
        string: {
            insertMode: get('go.string.insertMode', 'literal'),
            quotationMark: get('go.string.quotationMark', 'double'),
        },
        array: {
            insertMode: get('go.array.insertMode', 'short'),
        },
    },
    haskell: {},
    java: {},
    javascript: {
        bigint: {
            insertMode: get('javascript.bigint.insertMode', 'literal'),
        },
        string: {
            insertMode: get('javascript.string.insertMode', 'literal'),
            quotationMark: get('javascript.string.quotationMark', 'single'),
        },
    },
    json: {},
    lua: {},
    markdown: {},
    'objective-c': {},
    'objective-cpp': {},
    ocaml: {},
    pascal: {},
    perl: {},
    php: {
        null: {
            insertMode: get('php.null.insertMode', 'uppercase'),
        },
        boolean: {
            insertMode: get('php.boolean.insertMode', 'uppercase'),
        },
        bigint: {
            insertMode: get('php.bigint.insertMode', 'unsafe'),
        },
        string: {
            insertMode: get('php.string.insertMode', 'literal'),
            quotationMark: get('php.string.quotationMark', 'double'),
        },
        array: {
            insertMode: get('php.array.insertMode', 'short'),
        },
    },
    python: {
        bigint: {
            insertMode: get('python.bigint.insertMode', 'inline'),
        },
        string: {
            insertMode: get('python.string.insertMode', 'literal'),
            quotationMark: get('python.string.quotationMark', 'double'),
        },
    },
    ruby: {
        bigint: {
            insertMode: get('ruby.bigint.insertMode', 'inline'),
        },
        string: {
            insertMode: get('ruby.string.insertMode', 'literal'),
            quotationMark: get('ruby.string.quotationMark', 'single'),
        },
    },
    rust: {},
    scala: {},
    swift: {},
    toml: {},
    yaml: {},
});
