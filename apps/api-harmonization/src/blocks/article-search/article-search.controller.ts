import { URL } from '.';
import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';
import { Observable } from 'rxjs';

import { Auth } from '@o2s/framework/modules';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { ArticleList } from './article-search.model';
import { GetArticleSearchBlockQuery, SearchArticlesQuery } from './article-search.request';
import { ArticleSearchService } from './article-search.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class ArticleSearchController {
    constructor(protected readonly service: ArticleSearchService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getArticleSearchBlock(@Headers() headers: AppHeaders, @Query() query: GetArticleSearchBlockQuery) {
        return this.service.getArticleSearchBlock(query, headers);
    }

    @Get('articles')
    @Auth.Decorators.Roles({ roles: [] })
    searchArticles(@Headers() headers: AppHeaders, @Query() query: SearchArticlesQuery): Observable<ArticleList> {
        return this.service.searchArticles(query, headers);
    }
}
