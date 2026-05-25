import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default defineConfig([
    includeIgnoreFile(gitignorePath),
    {
        files: ['src/**/*.ts'],
        extends: ['js/recommended'],
        plugins: { js },
        languageOptions: {
            globals: { ...globals.browser, ...globals.node }
        }
    },
    ts.configs.recommended
]);
