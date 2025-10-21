import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Module } from '@nestjs/common';
import { CMS, Resources } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { FeaturedServiceListController } from './featured-service-list.controller';
import { FeaturedServiceListService } from './featured-service-list.service';

@Module({})
export class FeaturedServiceListBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: FeaturedServiceListBlockModule,
            providers: [
                FeaturedServiceListService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
                {
                    provide: Resources.Service,
                    useExisting: Framework.Resources.Service,
                },
            ],
            imports: [HttpModule],
            controllers: [FeaturedServiceListController],
            exports: [FeaturedServiceListService],
        };
    }
}
