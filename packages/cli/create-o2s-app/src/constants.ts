import type { EnvVar } from './types';

export const GITHUB_REPO_URL = 'https://github.com/o2sdev/openselfservice';
export const GITHUB_BRANCH = 'feature/Interactive-CLI-wizard-for-project-bootstrapping';
export const PROJECT_PREFIX = 'o2s';
export const STORYBOOK_URL = 'https://storybook-o2s.openselfservice.com/';
export const DOCS_URL = 'https://docs.openselfservice.com/getting-started';

export const BLOCKS_PATH = 'packages/blocks';
export const INTEGRATIONS_PATH = 'packages/integrations';

// Directories always removed during scaffolding
export const ALWAYS_REMOVE_DIRS: string[] = [
    '.git',
    '.github',
    '.changeset',
    'apps/docs',
    'packages/framework',
    'packages/integrations',
    'packages/blocks',
    'packages/modules',
    'packages/utils',
    'packages/cli',
    'packages/telemetry',
];

export const ALWAYS_REMOVE_FILES: string[] = ['vercel.json'];

// All mocked integration variants (excluded from env prompts and env generation)
export const MOCKED_INTEGRATIONS = ['mocked', 'mocked-dxp'];

// Static mapping: which framework modules each integration covers
// Phase 3 will migrate this to dynamic discovery from integration package.json
export const INTEGRATION_MODULES: Record<string, string[]> = {
    zendesk: ['tickets', 'articles'],
    medusajs: ['orders', 'resources', 'products', 'carts', 'customers', 'payments', 'checkout'],
    'strapi-cms': ['cms', 'articles'],
    'contentful-cms': ['cms'],
    algolia: ['search'],
    redis: ['cache'],
    'mocked-dxp': ['cms', 'articles', 'search'],
};

export const INTEGRATION_ENV_VARS: Record<string, EnvVar[]> = {
    zendesk: [
        {
            key: 'ZENDESK_API_URL',
            description: 'Zendesk API URL (e.g., https://your-domain.zendesk.com)',
            required: true,
        },
        { key: 'ZENDESK_API_TOKEN', description: 'Zendesk API token for authentication', required: true },
        { key: 'ZENDESK_TOPIC_FIELD_ID', description: 'Zendesk custom field ID for ticket topic', required: false },
    ],
    'strapi-cms': [
        {
            key: 'CMS_STRAPI_BASE_URL',
            description: 'Strapi server URL (e.g., https://your-strapi.com)',
            required: true,
        },
        { key: 'CMS_STRAPI_API_KEY', description: 'Strapi API key', required: false },
    ],
    'contentful-cms': [
        { key: 'CF_SPACE_ID', description: 'Contentful space identifier', required: true },
        { key: 'CF_ENV', description: 'Contentful environment (e.g., master)', required: true },
        { key: 'CF_TOKEN', description: 'Contentful Content Delivery API token', required: true },
        { key: 'CF_PREVIEW_TOKEN', description: 'Contentful Content Preview API token', required: false },
    ],
    medusajs: [
        {
            key: 'MEDUSAJS_BASE_URL',
            description: 'Medusa server URL (e.g., https://api.your-medusa.com)',
            required: true,
        },
        {
            key: 'MEDUSAJS_PUBLISHABLE_API_KEY',
            description: 'Medusa publishable API key for Store API',
            required: true,
        },
        { key: 'MEDUSAJS_ADMIN_API_KEY', description: 'Medusa admin API key for Admin API', required: true },
    ],
    algolia: [
        { key: 'ALGOLIA_APP_ID', description: 'Algolia application ID', required: true },
        { key: 'ALGOLIA_API_KEY', description: 'Algolia API key', required: true },
        { key: 'ALGOLIA_INDEX_NAME', description: 'Default Algolia index name', required: false },
    ],
    redis: [
        { key: 'CACHE_ENABLED', description: 'Enable Redis cache (true/false)', required: false },
        { key: 'CACHE_REDIS_HOST', description: 'Redis host (e.g., localhost)', required: false },
        { key: 'CACHE_REDIS_PORT', description: 'Redis port (e.g., 6379)', required: false },
        { key: 'CACHE_REDIS_PASS', description: 'Redis password (if required)', required: false },
        { key: 'CACHE_TTL', description: 'Cache TTL in seconds (default: 300)', required: false },
    ],
};
