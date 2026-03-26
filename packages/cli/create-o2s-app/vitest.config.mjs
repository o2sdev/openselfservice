import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'node',
        root: resolve(import.meta.dirname),
        include: ['src/**/*.spec.ts'],
    },
});
