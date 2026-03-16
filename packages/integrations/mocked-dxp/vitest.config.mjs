import { config } from '@o2s/vitest-config/api';
import { resolve } from 'node:path';
import { mergeConfig } from 'vitest/config';

export default mergeConfig(config, {
    resolve: {
        alias: {
            '@': resolve(import.meta.dirname, './src'),
        },
    },
});
