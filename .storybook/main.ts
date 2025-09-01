import type { StorybookConfig } from '@storybook/nextjs';
import * as dotenv from 'dotenv';
import { dirname, join } from 'path';

const env: {
    NEXT_PUBLIC_API_URL?: string;
} = {};

dotenv.config({
    path: 'apps/frontend/.env.development',
    processEnv: env,
});

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
    return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
    stories: [
        '../apps/frontend/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
        '../packages/blocks/**/src/frontend/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: [
        getAbsolutePath('@storybook/addon-docs'),
        getAbsolutePath('@storybook/addon-a11y'),
        getAbsolutePath('@storybook/addon-themes'),
    ],
    framework: {
        name: getAbsolutePath('@storybook/nextjs'),
        options: {},
    },
    env: (config) => ({
        ...config,
        ...env,
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || env.NEXT_PUBLIC_API_URL || '',
    }),
};
export default config;
