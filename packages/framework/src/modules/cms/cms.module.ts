import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';

import { CmsController } from './cms.controller';
import { CmsService } from './cms.service';
import { ApiConfig } from '@/api-config';

@Global()
@Module({})
export class CmsModule {
    static register(config: ApiConfig): DynamicModule {
        const service = config.integrations.cms.service;
        const controller = config.integrations.cms.controller || CmsController;
        const imports = config.integrations.cms.imports || [];

        const provider = {
            provide: CmsService,
            useClass: service as Type,
        };

        return {
            module: CmsModule,
            providers: [provider],
            imports: [HttpModule, ...imports],
            controllers: [controller],
            exports: [provider],
        };
    }
}
