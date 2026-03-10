import { config } from '@o2s/vitest-config/api';
import { resolve } from 'node:path';
import { mergeConfig } from 'vite';

export default mergeConfig(config, {
    resolve: {
        alias: {
            // eslint-disable-next-line no-undef
            '@': resolve(process.cwd(), './src'),
        },
    },
});
