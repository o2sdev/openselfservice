import { Injectable } from '@nestjs/common';
import { Observable, map, of } from 'rxjs';

import { Articles, Search } from '@o2s/framework/modules';

import { mapArticle, mapCategories, mapCategory } from './articles.mapper';
import { responseDelay } from '@/utils/delay';

@Injectable()
export class ArticlesService implements Articles.Service {
    constructor(private readonly searchService: Search.Service) {}

    getCategory(options: Articles.Request.GetCategoryParams): Observable<Articles.Model.Category> {
        return of(mapCategory(options.locale, options.id)).pipe(responseDelay());
    }

    getCategoryList(options: Articles.Request.GetCategoryListQuery): Observable<Articles.Model.Categories> {
        return of(mapCategories(options.locale, options)).pipe(responseDelay());
    }

    getArticle(params: Articles.Request.GetArticleParams): Observable<Articles.Model.Article> {
        return of(mapArticle(params.locale, params.id)).pipe(responseDelay());
    }

    getArticleList(
        options: Articles.Request.GetArticleListQuery,
        body: Articles.Request.GetArticleListBody,
    ): Observable<Articles.Model.Articles> {
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
            pagination: {
                offset: options.offset,
                limit: options.limit,
            },
        };

        return this.searchService.searchArticles(options.locale, searchPayload).pipe(
            map((result) => {
                return result;
            }),
            responseDelay(),
        );
    }
}
