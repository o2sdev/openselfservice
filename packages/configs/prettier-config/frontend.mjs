import base from './base.mjs';

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
    ...base,
    importOrder: [
        '@o2s/framework',
        '@o2s/framework/sdk',
        '@o2s/integrations',
        '@o2s/ui',
        '@o2s/frontend',
        '@/api',
        '@/sdk',
        '@/utils',
        '@/auth',
        '@/i18n',
        '@/providers',
        '@/templates',
        '@/containers',
        '@/blocks',
        '@/components',
        '@/assets',
        '@/styles',
        '^(\.\.\/)',
        '^(\.\/)',
    ],
};

export default config;
