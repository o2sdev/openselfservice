import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';

import { ApiConfig } from '@/api-config';

import { CacheService } from './cache.service';

@Global()
@Module({})
export class CacheModule {
    static register(config: ApiConfig): DynamicModule {
        const service = config.integrations.cache.service;
        const imports = config.integrations.cache.imports || [];

        return {
            module: CacheModule,
            providers: [
                {
                    provide: CacheService,
                    useClass: service as Type,
                },
            ],
            imports: [HttpModule, ...imports],
            exports: [CacheService],
        };
    }
}
