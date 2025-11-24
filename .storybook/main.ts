import type { StorybookConfig } from '@storybook/nextjs-vite';
import tailwindcss from '@tailwindcss/postcss';
import react from '@vitejs/plugin-react';
import * as dotenv from 'dotenv';
import { mergeConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

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
    addons: ['@storybook/addon-docs', '@storybook/addon-a11y', '@storybook/addon-themes'],
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
                'process.env': JSON.stringify(env),
            },
            optimizeDeps: {
                include: ['@o2s/framework/modules', '@o2s/framework/sdk'],
            },
            resolve: {
                conditions: ['import', 'module', 'browser', 'default'],
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
