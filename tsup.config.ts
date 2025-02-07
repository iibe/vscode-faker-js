import { defineConfig } from 'tsup';

export default defineConfig({
    name: 'vscode-faker-js',
    platform: 'node',
    tsconfig: './tsconfig.json',
    bundle: true,
    external: ['vscode'],
    noExternal: ['@faker-js/faker'],
    treeshake: true,
    splitting: true,
    clean: true,
    entry: {
        extension: './src/extension.ts',
    },
    outDir: './out',
    minify: true,
    sourcemap: false,
    dts: false,
    format: ['cjs'],
    shims: true,
});
