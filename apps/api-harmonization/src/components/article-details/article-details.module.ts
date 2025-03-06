import { DynamicModule, Module } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';

import { ApiConfig, Articles, CMS } from '@o2s/framework/modules';

import { ArticleDetailsController } from './article-details.controller';
import { ArticleDetailsService } from './article-details.service';

@Module({})
export class ArticleDetailsComponentModule {
    static register(config: ApiConfig): DynamicModule {
        const cmsService = config.integrations.cms.service;
        const articleService = config.integrations.articles.service;

        return {
            module: ArticleDetailsComponentModule,
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
            ],
            controllers: [ArticleDetailsController],
            exports: [ArticleDetailsService],
        };
    }
}
