import base from './base.mjs';

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
    ...base,
    importOrderParserPlugins: ['typescript', 'decorators-legacy'],
    importOrder: [
        '@o2s/utils',
        '@o2s/framework',
        '@o2s/blocks',
        '@o2s/api-harmonization/lib',
        '@o2s/api-harmonization/config',
        '@o2s/api-harmonization/api.config',
        '@o2s/api-harmonization/models',
        '@o2s/api-harmonization/utils',
        '@o2s/api-harmonization/integrations',
        '@o2s/api-harmonization/pages',
        '@o2s/api-harmonization/blocks',
        '@o2s/api-harmonization/components',
        '@/generated',
        '@/modules',
        '@/blocks',
        '@/auth',
        '@/sdk',
        '^(\.\.\/)',
        '^(\.\/)',
    ],
};

export default config;
