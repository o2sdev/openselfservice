import { DynamicModule, Module } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { KpisController } from './kpis.controller';
import { KpisService } from './kpis.service';

@Module({})
export class KpisBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: KpisBlockModule,
            providers: [
                KpisService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [KpisController],
            exports: [KpisService],
        };
    }
}
