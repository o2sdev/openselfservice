import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module } from '@nestjs/common';
import { Type } from '@nestjs/common/interfaces/type.interface';

import { ArticleController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { ApiConfig } from '@/api-config';

@Global()
@Module({})
export class ArticlesModule {
    static register(config: ApiConfig): DynamicModule {
        const integration = config.integrations.articles;
        if (!integration?.service) {
            return { module: ArticlesModule };
        }

        const service = integration.service;
        const controller = integration.controller || ArticleController;
        const imports = integration.imports || [];

        const provider = {
            provide: ArticlesService,
            useClass: service as Type,
        };

        return {
            module: ArticlesModule,
            providers: [provider],
            imports: [HttpModule, ...imports],
            controllers: [controller],
            exports: [provider],
        };
    }
}
