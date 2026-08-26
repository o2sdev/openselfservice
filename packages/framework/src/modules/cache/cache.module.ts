import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Logger, Module } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';

import { CacheService } from './cache.service';
import { DefaultCacheService } from './cache.service.default';
import { ApiConfig } from '@/api-config';

@Global()
@Module({})
export class CacheModule {
    static register(config: ApiConfig): DynamicModule {
        // `cache` is optional: fall back to the pass-through default so `Cache.Service` always
        // resolves, even with no cache integration and no `@o2s/integrations.mocked` import.
        const configuredService = config.integrations.cache?.service;
        if (!configuredService) {
            new Logger(CacheModule.name).warn(
                'No cache integration configured; caching is disabled (using a pass-through default). ' +
                    'Configure a cache integration (e.g. @o2s/integrations.redis) to enable caching.',
            );
        }

        const service = configuredService ?? DefaultCacheService;
        const imports = config.integrations.cache?.imports || [];
        const provider = {
            provide: CacheService,
            useClass: service as Type,
        };

        return {
            module: CacheModule,
            providers: [provider],
            imports: [HttpModule, ...imports],
            exports: [provider],
        };
    }
}
