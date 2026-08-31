import { config } from '@o2s/vitest-config/api';
import { resolve } from 'node:path';
import { mergeConfig } from 'vitest/config';

// the sources of this package import each other through the `@/*` path of its tsconfig
export default mergeConfig(config, {
    resolve: {
        alias: {
            // eslint-disable-next-line no-undef
            '@': resolve(process.cwd(), './src'),
        },
    },
});
