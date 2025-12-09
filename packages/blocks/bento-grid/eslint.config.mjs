import { config as apiConfig } from '@o2s/eslint-config/api';
import { config as frontendConfig } from '@o2s/eslint-config/frontend-block';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        files: ['src/api-harmonization/**/*'],
        extends: [apiConfig],
    },
    {
        files: ['src/frontend/**/*'],
        extends: [frontendConfig],
        rules: {
            '@next/next/no-html-link-for-pages': 'off',
        },
    },
    {
        files: ['src/sdk/**/*'],
        extends: [frontendConfig],
        rules: {
            '@next/next/no-html-link-for-pages': 'off',
        },
    },
]);
