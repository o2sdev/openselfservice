import { DynamicModule, Module } from '@nestjs/common';

import * as Framework from '@o2s/framework/modules';

import { Articles, CMS } from '../../models';

import { ArticleSearchController } from './article-search.controller';
import { ArticleSearchService } from './article-search.service';

@Module({})
export class ArticleSearchBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: ArticleSearchBlockModule,
            providers: [
                ArticleSearchService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
                {
                    provide: Articles.Service,
                    useExisting: Framework.Articles.Service,
                },
            ],
            controllers: [ArticleSearchController],
            exports: [ArticleSearchService],
        };
    }
}
