import { config } from '@o2s/lint-staged-config/base';

export default {
    ...config,
    // Whenever the lockfile is committed (i.e. a dependency changed), restore any
    // platform-specific native binaries npm pruned for the current OS, so the
    // lockfile stays cross-platform and the Linux CI runner can install it.
    // See scripts/fix-lockfile-platforms.mjs (npm/cli#4828).
    'package-lock.json': () => 'node scripts/fix-lockfile-platforms.mjs',
};
