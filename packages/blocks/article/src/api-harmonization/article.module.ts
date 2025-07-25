import { DynamicModule, Module } from '@nestjs/common';
import { Articles, CMS } from '@o2s/configs.integrations';

import * as Framework from '@o2s/framework/modules';

import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';

@Module({})
export class ArticleBlockModule {
    static register(_config: Framework.ApiConfig): DynamicModule {
        return {
            module: ArticleBlockModule,
            providers: [
                ArticleService,
                {
                    provide: CMS.Service,
                    useExisting: Framework.CMS.Service,
                },
                {
                    provide: Articles.Service,
                    useExisting: Framework.Articles.Service,
                },
            ],
            controllers: [ArticleController],
            exports: [ArticleService],
        };
    }
}
