import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { Articles, CMS } from '../../models';

import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({})
export class CategoryBlockModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: CategoryBlockModule,
            providers: [CategoryService, CMS.Service, Articles.Service],
            controllers: [CategoryController],
            exports: [CategoryService],
        };
    }
}
