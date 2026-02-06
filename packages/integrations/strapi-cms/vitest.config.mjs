import { config } from '@o2s/vitest-config/api';
import { resolve } from 'node:path';
import { mergeConfig } from 'vite';

export default mergeConfig(config, {
    resolve: {
        alias: {
            // More specific first so '@/generated/*' resolves to ./generated, not ./src/generated
            // eslint-disable-next-line no-undef
            '@/generated': resolve(process.cwd(), './generated'),
            // eslint-disable-next-line no-undef
            '@': resolve(process.cwd(), './src'),
        },
    },
});
