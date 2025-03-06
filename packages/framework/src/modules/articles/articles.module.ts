import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Module } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';

import { ArticleController } from './articles.controller';
import { ArticleService } from './articles.service';
import { ApiConfig } from '@/api-config';

@Module({})
export class ArticleModule {
    static register(config: ApiConfig): DynamicModule {
        const service = config.integrations.articles.service;
        const controller = config.integrations.articles.controller || ArticleController;
        const imports = config.integrations.cms.imports || [];

        return {
            module: ArticleModule,
            providers: [
                {
                    provide: ArticleService,
                    useClass: service as Type,
                },
            ],
            imports: [HttpModule, ...imports],
            controllers: [controller],
            exports: [ArticleService],
        };
    }
}
