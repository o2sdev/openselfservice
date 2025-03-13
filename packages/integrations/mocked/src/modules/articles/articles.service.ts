import { Injectable } from '@nestjs/common';
import { Observable, map, of } from 'rxjs';

import { Articles, Search } from '@o2s/framework/modules';

import { mapArticle, mapArticlesFromSearch } from './articles.mapper';
import { SearchEngineArticleModel } from './articles.search.model';
import { responseDelay } from '@/utils/delay';

@Injectable()
export class ArticleService implements Articles.Service {
    constructor(private readonly searchService: Search.Service) {}

    getArticle(params: Articles.Request.GetArticleParams): Observable<Articles.Model.Article> {
        const locale = params.locale || 'en';
        return of(mapArticle(locale, params.id)).pipe(responseDelay());
    }

    getArticleList(
        options: Articles.Request.GetArticleListQuery,
        body: Articles.Request.GetArticleListComponentBody,
    ): Observable<Articles.Model.Articles> {
        const locale = options.locale || 'en';
        const searchPayload: Search.Model.SearchPayload = {
            query: body?.query,
            exact: body?.category
                ? {
                      category: body.category,
                  }
                : undefined,
            hitsPerPage: options.limit,
            page: options.offset,
            sort: body?.sort ? [body.sort] : undefined,
        };
        return this.searchService.search<SearchEngineArticleModel>(`articles_${locale}`, searchPayload).pipe(
            map((result) => {
                return mapArticlesFromSearch(result.hits);
            }),
            responseDelay(),
        );
    }
}
