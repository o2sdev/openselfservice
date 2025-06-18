import { DynamicModule, Module } from '@nestjs/common';

import * as Framework from '@o2s/framework/modules';

import { CMS } from '../../models';

import { FaqController } from './faq.controller';
import { FaqService } from './faq.service';

@Module({})
export class FaqBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: FaqBlockModule,
            providers: [
                FaqService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [FaqController],
            exports: [FaqService],
        };
    }
}
