import { config } from '@o2s/vitest-config/ui';
import { defineConfig, mergeConfig } from 'vitest/config';

export default mergeConfig(
    config,
    defineConfig({
        // `@/` imports resolve through the app's tsconfig paths (Vite 8 native resolution), and the
        // metadata helpers read the site URL from the environment at import time.
        resolve: { tsconfigPaths: true },
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
