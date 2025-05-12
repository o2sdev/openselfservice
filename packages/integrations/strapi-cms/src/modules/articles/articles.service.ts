import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable, concatMap, forkJoin, map, of } from 'rxjs';

import { Articles, CMS, Search } from '@o2s/framework/modules';

import { mapArticle, mapArticles, mapCategories, mapCategory } from './articles.mapper';
import { Service as GraphqlService } from '@/modules/graphql';

@Injectable()
export class ArticlesService implements Articles.Service {
    baseUrl: string;

    constructor(
        private readonly config: ConfigService,
        private readonly graphqlService: GraphqlService,
        private readonly searchService: Search.Service,
        private readonly cmsService: CMS.Service,
    ) {
        this.baseUrl = this.config.get('CMS_STRAPI_BASE_URL')!;
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
                return mapCategory(categories.data.categories[0]!, this.baseUrl);
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
                    this.baseUrl,
                );
            }),
        );
    }

    getArticle(params: Articles.Request.GetArticleParams): Observable<Articles.Model.Article> {
        return this.cmsService.getPage(params).pipe(
            concatMap((page) => {
                if (!page) {
                    throw new NotFoundException();
                }

                const articleBlock = Object.values(page.template.slots)
                    .flat()
                    .find((block) => block.__typename === 'ArticleBlock');

                if (!articleBlock) {
                    throw new NotFoundException();
                }

                return forkJoin([
                    this.graphqlService.getArticle({
                        id: articleBlock.id,
                        locale: params.locale,
                    }),
                ]).pipe(map(([article]) => mapArticle(page, article.data, this.baseUrl)));
            }),
        );
    }

    getArticleList(
        options: Articles.Request.GetArticleListQuery,
        body: Articles.Request.GetArticleListBody,
    ): Observable<Articles.Model.Articles> {
        const articles = this.graphqlService.getArticles({
            locale: options.locale,
            categories: body.category ? [body.category] : undefined,
            title: options.title,
            dateFrom: options.dateFrom,
            dateTo: options.dateTo,
            offset: options.offset,
            limit: options.limit,
            sort: body.sort ? [`${body.sort.field}:${body.sort.order}`] : undefined,
        });

        return forkJoin([articles]).pipe(
            map(([articles]) =>
                mapArticles(
                    articles.data.articles,
                    articles.data.pages_connection?.pageInfo.total || articles.data.articles.length,
                    this.baseUrl,
                ),
            ),
        );
    }
}
