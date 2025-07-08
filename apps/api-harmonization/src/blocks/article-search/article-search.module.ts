import { DynamicModule, Module } from '@nestjs/common';
import { Articles, CMS } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

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
