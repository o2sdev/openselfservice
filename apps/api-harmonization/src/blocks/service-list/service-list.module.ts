import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS, Products, Resources } from '../../models';

import { ServiceListController } from './service-list.controller';
import { ServiceListService } from './service-list.service';

@Module({})
export class ServiceListBlockModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: ServiceListBlockModule,
            providers: [ServiceListService, CMS.Service, Resources.Service, Products.Service],
            controllers: [ServiceListController],
            exports: [ServiceListService],
        };
    }
}
