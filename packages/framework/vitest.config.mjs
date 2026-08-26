import { config } from '@o2s/vitest-config/api';
import { resolve } from 'node:path';
import { mergeConfig } from 'vitest/config';

// Add the framework's `@/* -> src/*` path alias (from tsconfig) so specs can import modules
// whose files reference `@/...` at runtime.
export default mergeConfig(config, {
    resolve: {
        alias: {
            // eslint-disable-next-line no-undef
            '@': resolve(process.cwd(), './src'),
        },
    },
});
