import { DynamicModule, Module } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { FeatureSectionController } from './feature-section.controller';
import { FeatureSectionService } from './feature-section.service';

@Module({})
export class FeatureSectionBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: FeatureSectionBlockModule,
            providers: [
                FeatureSectionService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [FeatureSectionController],
            exports: [FeatureSectionService],
        };
    }
}
