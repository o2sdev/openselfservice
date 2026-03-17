import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { GetArticleSearchBlockQuery, SearchArticlesQuery } from './article-search.request';
import { ArticleSearchService } from './article-search.service';
import { URL } from './index';

@Controller(URL)
@UseInterceptors(LoggerService)
export class ArticleSearchController {
    constructor(protected readonly service: ArticleSearchService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getArticleSearchBlock(
        @Headers() headers: ApiModels.Headers.AppHeaders,
        @Query() query: GetArticleSearchBlockQuery,
    ) {
        return this.service.getArticleSearchBlock(query, headers);
    }

    @Get('articles')
    @Auth.Decorators.Roles({ roles: [] })
    searchArticles(@Headers() headers: ApiModels.Headers.AppHeaders, @Query() query: SearchArticlesQuery) {
        return this.service.searchArticles(query, headers);
    }
}
