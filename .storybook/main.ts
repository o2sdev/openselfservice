import type { StorybookConfig } from '@storybook/nextjs-vite';
import tailwindcss from '@tailwindcss/postcss';
import react from '@vitejs/plugin-react';
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { mergeConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const env: {
    NEXT_PUBLIC_API_URL?: string;
} = {};

dotenv.config({
    path: 'apps/frontend/.env.development',
    processEnv: env,
    quiet: true,
});

const config: StorybookConfig = {
    stories: [
        '../apps/frontend/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
        '../packages/blocks/**/src/frontend/**/*.stories.@(js|jsx|mjs|ts|tsx)',
        '../packages/ui/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: ['@storybook/addon-docs', '@storybook/addon-a11y', '@storybook/addon-themes', '@storybook/addon-vitest'],
    framework: {
        name: '@storybook/nextjs-vite',
        options: {},
    },
    typescript: {
        reactDocgen: 'react-docgen-typescript',
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
                tsconfigPaths(),
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
                    env: env,
                },
            },
            optimizeDeps: {
                include: ['@o2s/framework/modules', '@o2s/framework/sdk'],
            },
            resolve: {
                conditions: ['import', 'module', 'browser', 'default'],
                alias: {
                    '@o2s/configs.integrations/live-preview': path.resolve(__dirname, './mocks/live-preview.mock.ts'),
                    '@o2s/framework/sdk': path.resolve(__dirname, '../packages/framework/src/sdk.ts'),
                    '@o2s/framework/modules': path.resolve(__dirname, '../packages/framework/src/index.ts'),
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
