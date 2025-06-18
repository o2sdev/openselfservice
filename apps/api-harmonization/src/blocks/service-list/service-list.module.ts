import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Module } from '@nestjs/common';

import * as Framework from '@o2s/framework/modules';

import { CMS, Resources } from '../../models';

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
            ],
            controllers: [ServiceListController],
            imports: [HttpModule],
            exports: [ServiceListService],
        };
    }
}
