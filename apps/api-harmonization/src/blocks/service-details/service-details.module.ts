import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS, Resources } from '../../models';

import { ServiceDetailsController } from './service-details.controller';
import { ServiceDetailsService } from './service-details.service';

@Module({})
export class ServiceDetailsBlockModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: ServiceDetailsBlockModule,
            providers: [ServiceDetailsService, CMS.Service, Resources.Service],
            controllers: [ServiceDetailsController],
            exports: [ServiceDetailsService],
            imports: [HttpModule],
        };
    }
}
