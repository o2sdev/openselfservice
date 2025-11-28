import { DynamicModule, Module } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { PricingSectionController } from './pricing-section.controller';
import { PricingSectionService } from './pricing-section.service';

@Module({})
export class PricingSectionBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: PricingSectionBlockModule,
            providers: [
                PricingSectionService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [PricingSectionController],
            exports: [PricingSectionService],
        };
    }
}
