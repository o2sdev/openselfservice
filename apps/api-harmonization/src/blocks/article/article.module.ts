import { DynamicModule, Module } from '@nestjs/common';

import { ApiConfig } from '@o2s/framework/modules';

import { Articles, CMS } from '../../models';

import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';

@Module({})
export class ArticleBlockModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: ArticleBlockModule,
            providers: [ArticleService, CMS.Service, Articles.Service],
            controllers: [ArticleController],
            exports: [ArticleService],
        };
    }
}
