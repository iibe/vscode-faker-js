import { defineConfig } from 'tsup';

export default defineConfig({
    name: 'vscode-faker-js-codegen',
    platform: 'node',
    tsconfig: './tsconfig.json',
    bundle: true,
    splitting: false,
    treeshake: true,
    clean: false,
    entry: {
        '.vscode-codegen': './src/codegen.ts',
    },
    outDir: './',
    minify: false,
    sourcemap: false,
    dts: false,
    format: ['esm'],
    legacyOutput: false,
    shims: true,
});
