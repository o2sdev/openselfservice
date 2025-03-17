import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS } from '../../models';

import { FaqController } from './faq.controller';
import { FaqService } from './faq.service';

@Module({})
export class FaqBlockModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: FaqBlockModule,
            providers: [FaqService, CMS.Service],
            controllers: [FaqController],
            exports: [FaqService],
        };
    }
}
