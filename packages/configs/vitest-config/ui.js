import { defineConfig, mergeConfig } from 'vitest/config';

import { config as apiConfig } from './api.js';

/**
 * The same node environment as `api`, for the pure helpers shipped alongside the UI components.
 * Anything needing a DOM belongs in the Storybook browser project instead.
 */
export const config = mergeConfig(
    apiConfig,
    defineConfig({
        test: {
            name: 'ui',
        },
    }),
);
