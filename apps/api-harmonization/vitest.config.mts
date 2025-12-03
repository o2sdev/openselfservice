import { resolve } from 'node:path';
import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        root: './',
        environment: 'node',
        exclude: ['**/node_modules/**', '**/dist/**', '**/.{idea,git,cache,output,temp}/**'],
    },
    plugins: [
        swc.vite({
            module: { type: 'es6' },
        }),
    ],
    resolve: {
        alias: {
            '@o2s/api-harmonization/models': resolve(__dirname, './src/models'),
            '@o2s/api-harmonization/blocks': resolve(__dirname, './src/blocks'),
            '@o2s/api-harmonization/components': resolve(__dirname, './src/components'),
            '@o2s/api-harmonization/config': resolve(__dirname, './src/config'),
            '@o2s/api-harmonization/utils': resolve(__dirname, './src/utils'),
            '@o2s/api-harmonization/lib': resolve(__dirname, './src/hooks'),
            src: resolve(__dirname, './src'),
        },
    },
});
