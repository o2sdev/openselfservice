import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';

import { CacheService } from './cache.service';
import { ApiConfig } from '@/api-config';

@Global()
@Module({})
export class CacheModule {
    static register(config: ApiConfig): DynamicModule {
        const service = config.integrations.cache.service;
        const imports = config.integrations.cache.imports || [];
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
