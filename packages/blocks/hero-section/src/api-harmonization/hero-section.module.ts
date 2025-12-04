import { DynamicModule, Module } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { HeroSectionController } from './hero-section.controller';
import { HeroSectionService } from './hero-section.service';

@Module({})
export class HeroSectionBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: HeroSectionBlockModule,
            providers: [
                HeroSectionService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
            ],
            controllers: [HeroSectionController],
            exports: [HeroSectionService],
        };
    }
}
