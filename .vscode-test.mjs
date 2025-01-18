import { defineConfig } from '@vscode/test-cli';

export default defineConfig([
    {
        label: 'unit',
        files: './dist/test/**/*.test.js',
        mocha: {
            ui: 'tdd',
            timeout: 20000,
        },
    },
    {
        label: 'integration',
        files: './dist/test/**/*.suite.js',
        mocha: {
            ui: 'bdd',
            timeout: 20000,
        },
    },
]);
