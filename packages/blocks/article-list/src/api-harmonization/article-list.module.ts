import { DynamicModule, Module } from '@nestjs/common';
import { Articles, CMS } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { ArticleListController } from './article-list.controller';
import { ArticleListService } from './article-list.service';

@Module({})
export class ArticleListBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: ArticleListBlockModule,
            providers: [
                ArticleListService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
                {
                    provide: Articles.Service,
                    useExisting: Framework.Articles.Service,
                },
            ],
            controllers: [ArticleListController],
            exports: [ArticleListService],
        };
    }
}
