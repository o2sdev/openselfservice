import { resolve } from 'node:path';
import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

export const config = defineConfig({
    test: {
        globals: true,
        environment: 'node',
        passWithNoTests: true,
        include: ['src/**/*.spec.ts'],
        coverage: {
            enabled: true,
            provider: 'v8',
            reporter: ['text-summary', 'html', 'json-summary', 'json'],
        },
    },
    plugins: [
        swc.vite({
            module: { type: 'es6' },
        }),
    ],
    resolve: {
        alias: {
            // eslint-disable-next-line no-undef
            src: resolve(process.cwd(), './src'),
        },
    },
});
