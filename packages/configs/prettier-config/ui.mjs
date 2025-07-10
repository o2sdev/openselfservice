import base from './base.mjs';

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
    ...base,
    importOrder: [
        '@o2s/utils',
        '@o2s/ui/lib',
        '@o2s/ui/utils',
        '@o2s/ui/hooks',
        '@o2s/ui/providers',
        '@o2s/ui/components',
        '@o2s/ui/elements',
        '^(\.\.\/)',
        '^(\.\/)',
    ],
};

export default config;
