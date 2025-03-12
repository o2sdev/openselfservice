import { DynamicModule, Module } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';

import { ApiConfig, Articles, CMS } from '@o2s/framework/modules';

import { ArticleListController } from './article-list.controller';
import { ArticleListService } from './article-list.service';

@Module({})
export class ArticleListComponentModule {
    static register(config: ApiConfig): DynamicModule {
        const cmsService = config.integrations.cms.service;
        const articleService = config.integrations.articles.service;

        return {
            module: ArticleListComponentModule,
            providers: [
                ArticleListService,
                {
                    provide: CMS.Service,
                    useClass: cmsService as Type,
                },
                {
                    provide: Articles.Service,
                    useClass: articleService as Type,
                },
            ],
            controllers: [ArticleListController],
            exports: [ArticleListService],
        };
    }
}
