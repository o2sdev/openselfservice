export const GITHUB_REPO_URL = 'https://github.com/o2sdev/openselfservice';
export const GITHUB_BRANCH = 'create-o2s-app/base';
export const PROJECT_PREFIX = 'o2s';

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
