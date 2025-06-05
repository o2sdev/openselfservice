import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { CMS, Resources } from '../../models';

import { FeaturedServiceListController } from './featured-service-list.controller';
import { FeaturedServiceListService } from './featured-service-list.service';

@Module({})
export class FeaturedServiceListBlockModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: FeaturedServiceListBlockModule,
            providers: [FeaturedServiceListService, CMS.Service, Resources.Service],
            controllers: [FeaturedServiceListController],
            exports: [FeaturedServiceListService],
        };
    }
}
