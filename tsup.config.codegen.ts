import { defineConfig } from 'tsup';

const env = process.env['NODE_ENV'];
const prod = env === 'production';

export default defineConfig((options) => ({
    name: 'vscode-faker-js (codegen)',
    platform: 'node',
    entry: ['./src/codegen.ts'],
    outDir: './generated',
    target: 'es2022',
    dts: false,
    sourcemap: false,

    clean: true,
    format: ['cjs'],
    minify: prod || !options.watch,
    shims: true,
    splitting: false
}));
