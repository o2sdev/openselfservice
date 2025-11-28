import { DynamicModule, Module } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { BentoGridController } from './bento-grid.controller';
import { BentoGridService } from './bento-grid.service';

@Module({})
export class BentoGridBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: BentoGridBlockModule,
            providers: [
                BentoGridService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [BentoGridController],
            exports: [BentoGridService],
        };
    }
}
