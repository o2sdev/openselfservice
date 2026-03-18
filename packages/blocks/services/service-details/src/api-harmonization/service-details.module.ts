import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Module } from '@nestjs/common';
import { Auth, CMS, Resources } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

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
                {
                    provide: Auth.Service,
                    useExisting: Framework.Auth.Service,
                },
            ],
            controllers: [ServiceDetailsController],
            exports: [ServiceDetailsService],
            imports: [HttpModule],
        };
    }
}
