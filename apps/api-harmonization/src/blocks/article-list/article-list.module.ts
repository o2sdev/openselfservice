import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { Articles, CMS } from '../../models';

import { ArticleListController } from './article-list.controller';
import { ArticleListService } from './article-list.service';

@Module({})
export class ArticleListBlockModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: ArticleListBlockModule,
            providers: [ArticleListService, CMS.Service, Articles.Service],
            controllers: [ArticleListController],
            exports: [ArticleListService],
        };
    }
}
