import { defineConfig } from 'tsup';

export default defineConfig({
    name: 'vscode-faker-js (codegen)',
    platform: 'node',
    entry: ['./src/codegen.ts'],
    outDir: './artifacts',
    target: 'es2020',
    dts: false,
    sourcemap: false,

    clean: true,
    format: ['cjs'],
    minify: false,
    shims: true,
    splitting: false,
});
