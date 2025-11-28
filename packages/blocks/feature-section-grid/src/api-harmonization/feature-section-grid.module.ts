import { DynamicModule, Module } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { FeatureSectionGridController } from './feature-section-grid.controller';
import { FeatureSectionGridService } from './feature-section-grid.service';

@Module({})
export class FeatureSectionGridBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: FeatureSectionGridBlockModule,
            providers: [
                FeatureSectionGridService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [FeatureSectionGridController],
            exports: [FeatureSectionGridService],
        };
    }
}
