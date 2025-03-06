import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS } from '../../models';

import { FaqController } from './faq.controller';
import { FaqService } from './faq.service';

@Module({})
export class FaqComponentModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: FaqComponentModule,
            providers: [FaqService, CMS.Service],
            controllers: [FaqController],
            exports: [FaqService],
        };
    }
}
