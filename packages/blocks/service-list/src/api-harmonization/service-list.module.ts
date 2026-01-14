import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Module } from '@nestjs/common';
import { Auth, CMS, Resources } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { ServiceListController } from './service-list.controller';
import { ServiceListService } from './service-list.service';

@Module({})
export class ServiceListBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: ServiceListBlockModule,
            providers: [
                ServiceListService,
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
            controllers: [ServiceListController],
            imports: [HttpModule],
            exports: [ServiceListService],
        };
    }
}
