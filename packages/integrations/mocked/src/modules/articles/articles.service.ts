import { Injectable } from '@nestjs/common';
import { Observable, defer, map, of } from 'rxjs';

import { Articles, Search } from '@o2s/framework/modules';

import { mapArticle, mapCategories, mapCategory } from './articles.mapper';

@Injectable()
export class ArticlesService extends Articles.Service {
    constructor(private readonly searchService: Search.Service) {
        super();
    }

    getCategory(options: Articles.Request.GetCategoryParams): Observable<Articles.Model.Category> {
        return defer(() => of(mapCategory(options.locale, options.id)));
    }

    getCategoryList(options: Articles.Request.GetCategoryListQuery): Observable<Articles.Model.Categories> {
        return of(mapCategories(options.locale, options));
    }

    getArticle(params: Articles.Request.GetArticleParams): Observable<Articles.Model.Article | undefined> {
        return of(mapArticle(params.locale, params.slug));
    }

    getArticleList(options: Articles.Request.GetArticleListQuery): Observable<Articles.Model.Articles> {
        const searchPayload: Search.Model.SearchPayload = {
            locale: options.locale,
            exact: options.category
                ? {
                      category: options.category,
                  }
                : undefined,
            hitsPerPage: options.limit,
            page: options.offset,
            sort: options.sortBy
                ? [
                      {
                          field: options.sortBy,
                          order: options.sortOrder || 'desc',
                      },
                  ]
                : undefined,
            pagination: {
                offset: options.offset,
                limit: options.limit,
            },
        };

        return this.searchService.searchArticles('articles', searchPayload).pipe(
            map((result) => {
                return result;
            }),
        );
    }

    searchArticles(options: Articles.Request.SearchArticlesBody): Observable<Articles.Model.Articles> {
        const searchPayload: Search.Model.SearchPayload = {
            locale: options.locale,
            query: options.query,
            exact: options.category
                ? {
                      category: options.category,
                  }
                : undefined,
            hitsPerPage: options.limit,
            page: options.offset,
            sort: options.sortBy
                ? [
                      {
                          field: options.sortBy,
                          order: options.sortOrder || 'desc',
                      },
                  ]
                : undefined,
            pagination: {
                offset: options.offset,
                limit: options.limit,
            },
        };

        return this.searchService.searchArticles('articles', searchPayload).pipe(
            map((result) => {
                return result;
            }),
        );
    }
}
