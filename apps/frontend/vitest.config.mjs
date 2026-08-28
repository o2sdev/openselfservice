import { config } from '@o2s/vitest-config/ui';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig, mergeConfig } from 'vitest/config';

export default mergeConfig(
    config,
    defineConfig({
        // `@/` imports resolve through the app's tsconfig paths, and the metadata helpers read the site
        // URL from the environment at import time.
        plugins: [tsconfigPaths()],
        test: {
            name: 'frontend',
            env: {
                BASE_URL: 'https://example.test',
                NEXT_PUBLIC_DEFAULT_LOCALE: 'en',
                NEXT_PUBLIC_SUPPORTED_LOCALES: 'en,de,pl',
            },
        },
    }),
);
