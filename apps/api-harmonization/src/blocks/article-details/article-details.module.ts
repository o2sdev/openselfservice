import { DynamicModule, Module } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';

import { ApiConfig, Articles, CMS, Search } from '@o2s/framework/modules';

import { ArticleDetailsController } from './article-details.controller';
import { ArticleDetailsService } from './article-details.service';

@Module({})
export class ArticleDetailsBlockModule {
    static register(config: ApiConfig): DynamicModule {
        const cmsService = config.integrations.cms.service;
        const articleService = config.integrations.articles.service;
        const searchService = config.integrations.search.service;

        return {
            module: ArticleDetailsBlockModule,
            providers: [
                ArticleDetailsService,
                {
                    provide: CMS.Service,
                    useClass: cmsService as Type,
                },
                {
                    provide: Articles.Service,
                    useClass: articleService as Type,
                },
                {
                    provide: Search.Service,
                    useClass: searchService as Type,
                },
            ],
            controllers: [ArticleDetailsController],
            exports: [ArticleDetailsService],
        };
    }
}
