import { defineConfig } from 'tsup';

const env = process.env.NODE_ENV;
const prod = env === 'production';

export default defineConfig((options) => {
    return {
        name: 'vscode-faker-js',
        platform: 'node',
        entry: ['./src/extension.ts'],
        outDir: './out',
        target: 'es2020',
        dts: false,
        sourcemap: false,

        clean: true,
        format: ['cjs'],
        minify: prod || !options.watch,
        shims: true,
        splitting: true,
        treeshake: true,
        external: ['vscode'],
        noExternal: ['@faker-js/faker'],
    };
});
