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
        '@o2s/ui',
        '@o2s/frontend',
        '@docusaurus',
        '@site',
        '@theme',
        '^(\.\.\/)',
        '^(\.\/)',
    ],
};

export default config;
