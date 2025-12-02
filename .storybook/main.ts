import type { StorybookConfig } from '@storybook/nextjs';
import * as dotenv from 'dotenv';

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
        name: '@storybook/nextjs',
        options: {},
    },
    typescript: {
        reactDocgen: 'react-docgen-typescript',
    },
    env: (config) => ({
        ...config,
        ...env,
    }),
};
export default config;
