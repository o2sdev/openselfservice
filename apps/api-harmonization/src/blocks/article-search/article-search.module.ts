import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { Articles, CMS } from '../../models';

import { ArticleSearchController } from './article-search.controller';
import { ArticleSearchService } from './article-search.service';

@Module({})
export class ArticleSearchBlockModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: ArticleSearchBlockModule,
            providers: [ArticleSearchService, CMS.Service, Articles.Service],
            controllers: [ArticleSearchController],
            exports: [ArticleSearchService],
        };
    }
}
