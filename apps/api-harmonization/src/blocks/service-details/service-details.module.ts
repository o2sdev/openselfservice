import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Module } from '@nestjs/common';

import * as Framework from '@o2s/framework/modules';

import { CMS, Resources } from '../../models';

import { ServiceDetailsController } from './service-details.controller';
import { ServiceDetailsService } from './service-details.service';

@Module({})
export class ServiceDetailsBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: ServiceDetailsBlockModule,
            providers: [
                ServiceDetailsService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
                {
                    provide: Resources.Service,
                    useExisting: Framework.Resources.Service,
                },
            ],
            controllers: [ServiceDetailsController],
            exports: [ServiceDetailsService],
            imports: [HttpModule],
        };
    }
}
