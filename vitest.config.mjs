import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';
import path from 'node:path';
import { defineConfig } from 'vitest/config';

const dirname = import.meta.dirname;

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
    test: {
        coverage: {
            enabled: true,
            provider: 'v8',
            reporter: ['text-summary', 'html', 'json-summary', 'json'],
        },
        projects: [
            {
                extends: true,
                plugins: [
                    // The plugin will run tests for the stories defined in your Storybook config
                    // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
                    storybookTest({
                        configDir: path.join(dirname, '.storybook'),
                    }),
                ],
                test: {
                    name: 'storybook',
                    browser: {
                        enabled: true,
                        headless: true,
                        provider: playwright({}),
                        instances: [
                            {
                                browser: 'chromium',
                            },
                        ],
                    },
                    setupFiles: ['.storybook/vitest.setup.ts'],
                },
            },
            {
                // Hooks that have to be rendered but have no component of their own to render through.
                // A real browser rather than a DOM shim, because the one already used for the Storybook
                // tests above needs no extra dependency.
                extends: true,
                plugins: [react()],
                test: {
                    name: 'hooks',
                    include: ['packages/**/src/**/*.browser.spec.tsx'],
                    browser: {
                        enabled: true,
                        headless: true,
                        provider: playwright({}),
                        instances: [
                            {
                                browser: 'chromium',
                            },
                        ],
                    },
                },
            },
        ],
    },
});
