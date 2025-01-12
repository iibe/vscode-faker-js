import { defineConfig } from 'tsup';

export default defineConfig({
    name: 'vscode-faker-js-codegen',
    platform: 'node',
    tsconfig: './tsconfig.json',
    bundle: true,
    splitting: false,
    treeshake: true,
    clean: true,
    entry: {
        codegen: './src/codegen.ts',
    },
    outDir: './dist',
    minify: false,
    sourcemap: false,
    dts: false,
    format: ['cjs'],
    shims: true,
});
