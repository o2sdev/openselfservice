import { DynamicModule, Module } from '@nestjs/common';

import * as Framework from '@o2s/framework/modules';

import { Articles, CMS } from '../../models';

import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({})
export class CategoryBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: CategoryBlockModule,
            providers: [
                CategoryService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
                {
                    provide: Articles.Service,
                    useExisting: Framework.Articles.Service,
                },
            ],
            controllers: [CategoryController],
            exports: [CategoryService],
        };
    }
}
