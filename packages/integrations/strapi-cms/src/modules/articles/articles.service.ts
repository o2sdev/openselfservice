import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable, forkJoin, map } from 'rxjs';

import { Articles, CMS, Search } from '@o2s/framework/modules';

import { mapArticle, mapArticles, mapCategories, mapCategory } from './articles.mapper';
import { Service as GraphqlService } from '@/modules/graphql';

@Injectable()
export class ArticlesService implements Articles.Service {
    baseUrl: string;
    searchIndexName: string;
    constructor(
        private readonly config: ConfigService,
        private readonly graphqlService: GraphqlService,
        private readonly searchService: Search.Service,
        private readonly cmsService: CMS.Service,
    ) {
        this.baseUrl = this.config.get('CMS_STRAPI_BASE_URL')!;
        this.searchIndexName = this.config.get('SEARCH_ARTICLES_INDEX_NAME')!;

        if (!this.searchIndexName) {
            throw new Error('Environment variable SEARCH_ARTICLES_INDEX_NAME is not set');
        }
    }

    getCategory(options: Articles.Request.GetCategoryParams): Observable<Articles.Model.Category> {
        const categories = this.graphqlService.getCategories({
            locale: options.locale,
            id: options.id,
        });

        return forkJoin([categories]).pipe(
            map(([categories]) => {
                if (!categories?.data?.categories?.length) {
                    throw new NotFoundException();
                }
                return mapCategory(categories.data.categories[0]!);
            }),
        );
    }

    getCategoryList(options: Articles.Request.GetCategoryListQuery): Observable<Articles.Model.Categories> {
        const categories = this.graphqlService.getCategories({
            locale: options.locale,
        });

        return forkJoin([categories]).pipe(
            map(([categories]) => {
                if (!categories?.data?.categories?.length) {
                    throw new NotFoundException();
                }
                return mapCategories(
                    categories.data.categories,
                    categories.data.categories_connection?.pageInfo.total || categories.data.categories.length,
                );
            }),
        );
    }

    getArticle(params: Articles.Request.GetArticleParams): Observable<Articles.Model.Article> {
        return forkJoin([this.graphqlService.getArticle(params)]).pipe(
            map(([pages]) => {
                if (!pages?.data?.articles?.length) {
                    throw new NotFoundException();
                }

                const article = pages.data.articles[0]!;

                return mapArticle(article, this.baseUrl);
            }),
        );
    }

    getArticleList(options: Articles.Request.GetArticleListQuery): Observable<Articles.Model.Articles> {
        const articles = this.graphqlService.getArticles({
            locale: options.locale,
            slugs: options.ids?.length ? options.ids : undefined,
            category: options.category,
            dateFrom: options.dateFrom,
            dateTo: options.dateTo,
            offset: options.offset,
            limit: options.limit,
            sort: options.sortBy ? [`${options.sortBy}:${options.sortOrder || 'desc'}`] : undefined,
        });

        return forkJoin([articles]).pipe(
            map(([articles]) =>
                mapArticles(
                    articles.data.articles,
                    articles.data.articles_connection?.pageInfo.total || articles.data.articles.length,
                    this.baseUrl,
                ),
            ),
        );
    }

    searchArticles(options: Articles.Request.SearchArticlesBody): Observable<Articles.Model.Articles> {
        const searchPayload: Search.Model.SearchPayload = {
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
            locale: options.locale,
        };

        return this.searchService.searchArticles(this.searchIndexName, searchPayload);
    }
}
