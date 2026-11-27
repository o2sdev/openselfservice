import type { StorybookConfig } from '@storybook/nextjs-vite';
import tailwindcss from '@tailwindcss/postcss';
import react from '@vitejs/plugin-react';
import * as dotenv from 'dotenv';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mergeConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const env: {
    NEXT_PUBLIC_API_URL?: string;
    CART_ID_LOCAL_STORAGE_KEY?: string;
} = {};

dotenv.config({
    path: 'apps/frontend/.env.development',
    processEnv: env,
    quiet: true,
});

const config: StorybookConfig = {
    stories: [
        './Introduction.mdx',
        '../packages/blocks/**/src/frontend/**/*.stories.@(js|jsx|mjs|ts|tsx)',
        '../packages/ui/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    staticDirs: ['./public'],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-a11y',
        '@storybook/addon-themes',
        '@storybook/addon-vitest',
        'msw-storybook-addon',
    ],
    framework: {
        name: '@storybook/nextjs-vite',
        options: {},
    },
    typescript: {
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            // Build the docgen TS program from a tsconfig that includes the UI + block sources so
            // react-docgen-typescript can read their prop types (otherwise every component is skipped
            // as "not included in the active TypeScript project").
            tsconfigPath: path.resolve(__dirname, './tsconfig.json'),
        },
    },
    env: (config) => ({
        ...config,
        ...env,
    }),
    async viteFinal(config) {
        return mergeConfig(config, {
            plugins: [
                react({
                    jsxRuntime: 'automatic',
                }),
                svgr({
                    // Same behavior as @svgr/webpack
                    svgrOptions: {
                        exportType: 'default',
                        ref: true,
                        svgo: false,
                        titleProp: true,
                    },
                    include: '**/*.svg',
                }),
            ],
            define: {
                process: {
                    env: {
                        ...env,
                        // next/image reads its config from __NEXT_IMAGE_OPTS, which @storybook/nextjs-vite
                        // never defines - so it falls back to Next's default qualities ([75]) and warns on
                        // stories using other values. Inject the default config with the quality levels our
                        // stories actually use.
                        __NEXT_IMAGE_OPTS: { ...imageConfigDefault, qualities: [50, 75, 90] },
                    },
                },
            },
            optimizeDeps: {
                include: [
                    '@o2s/framework/headers',
                    '@o2s/framework/modules',
                    '@o2s/framework/sdk',
                    'storybook/test',
                    'react',
                    'react-dom',
                    'throttle-debounce',
                    '@radix-ui/react-collapsible',
                    '@radix-ui/react-popover',
                    '@radix-ui/react-progress',
                    '@radix-ui/react-radio-group',
                ],
            },
            resolve: {
                tsconfigPaths: true,
                conditions: ['import', 'module', 'browser', 'default'],
                alias: {
                    '@o2s/configs.integrations/live-preview': path.resolve(__dirname, './mocks/live-preview.mock.ts'),
                    '@o2s/framework/sdk': path.resolve(__dirname, '../packages/framework/src/sdk.ts'),
                    '@o2s/framework/modules': path.resolve(__dirname, '../packages/framework/src/index.ts'),
                    '@o2s/framework/headers': path.resolve(__dirname, '../packages/framework/src/headers.ts'),
                    '@o2s/ui': path.resolve(__dirname, '../packages/ui/src'),
                    '@o2s/ui/components': path.resolve(__dirname, '../packages/ui/src/components'),
                    '@o2s/utils.api-harmonization': path.resolve(__dirname, './mocks/utils.api-harmonization.mock.ts'),
                },
            },
            ssr: {
                noExternal: ['@o2s/**'],
            },
            css: {
                postcss: {
                    plugins: [tailwindcss],
                },
            },
        });
    },
};
export default config;
