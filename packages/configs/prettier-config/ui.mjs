import base from './base.mjs';

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
    ...base,
    importOrder: [
        '@o2s/ui/lib',
        '@o2s/ui/utils',
        '@o2s/ui/hooks',
        '@o2s/ui/components',
        '^(\.\.\/)',
        '^(\.\/)',
    ],
};

export default config;
