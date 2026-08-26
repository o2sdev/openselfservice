import { Injectable } from '@nestjs/common';

import { CacheService } from './cache.service';

/**
 * Default {@link CacheService} used when no `cache` integration is configured.
 *
 * It is a pass-through: nothing is stored and every lookup misses. This keeps services that depend
 * on `Cache.Service` (e.g. the Strapi/Contentful CMS integrations) working without a cache
 * integration and without pulling in `@o2s/integrations.mocked`. Configure a real cache
 * integration (e.g. `@o2s/integrations.redis`) to enable actual caching.
 */
@Injectable()
export class DefaultCacheService extends CacheService {
    async get(_key: string): Promise<string | undefined> {
        return undefined;
    }

    async set(_key: string, _value: string): Promise<void> {
        return undefined;
    }

    async del(_key: string): Promise<void> {
        return undefined;
    }
}
