import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';

import { ResourceController } from './resources.controller';
import { ResourceService } from './resources.service';
import { ApiConfig } from '@/api-config';

@Global()
@Module({})
export class ResourceModule {
    static register(config: ApiConfig): DynamicModule {
        const service = config.integrations.resources.service;
        const controller = config.integrations.resources.controller || ResourceController;
        const imports = config.integrations.cms.imports || [];

        return {
            module: ResourceModule,
            providers: [
                {
                    provide: ResourceService,
                    useClass: service as Type,
                },
            ],
            imports: [HttpModule, ...imports],
            controllers: [controller],
            exports: [ResourceService],
        };
    }
}
