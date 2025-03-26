import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS, Products, Resources } from '../../models';

import { ServiceDetailsController } from './service-details.controller';
import { ServiceDetailsService } from './service-details.service';

@Module({})
export class ServiceDetailsBlockModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: ServiceDetailsBlockModule,
            providers: [ServiceDetailsService, CMS.Service, Resources.Service, Products.Service],
            controllers: [ServiceDetailsController],
            exports: [ServiceDetailsService],
        };
    }
}
