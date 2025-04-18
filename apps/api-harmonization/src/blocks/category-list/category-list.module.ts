import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { Articles, CMS } from '../../models';

import { CategoryListController } from './category-list.controller';
import { CategoryListService } from './category-list.service';

@Module({})
export class CategoryListBlockModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: CategoryListBlockModule,
            providers: [CategoryListService, CMS.Service, Articles.Service],
            controllers: [CategoryListController],
            exports: [CategoryListService],
        };
    }
}
