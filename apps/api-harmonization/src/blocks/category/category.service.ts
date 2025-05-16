import { Injectable } from '@nestjs/common';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { Articles, CMS } from '../../models';

import { mapCategory, mapCategoryArticles } from './category.mapper';
import { CategoryArticles, CategoryBlock } from './category.model';
import { GetCategoryBlockArticlesQuery, GetCategoryBlockQuery } from './category.request';

@Injectable()
export class CategoryService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly articlesService: Articles.Service,
    ) {}

    getCategoryBlock(query: GetCategoryBlockQuery, headers: AppHeaders): Observable<CategoryBlock> {
        const cms = this.cmsService.getCategoryBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return forkJoin([
                    this.articlesService.getCategory({ id: cms.categoryId, locale: headers['x-locale'] }),
                    this.articlesService.getArticleList({
                        limit: query.limit || 6,
                        locale: headers['x-locale'],
                        category: cms.categoryId,
                    }),
                ]).pipe(map(([category, articles]) => mapCategory(cms, category, articles, headers['x-locale'])));
            }),
        );
    }

    getCategoryArticles(query: GetCategoryBlockArticlesQuery, headers: AppHeaders): Observable<CategoryArticles> {
        const cms = this.cmsService.getCategoryBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return forkJoin([
                    this.articlesService.getArticleList({
                        limit: query.limit || 6,
                        offset: query.offset || 0,
                        locale: headers['x-locale'],
                        category: cms.categoryId,
                    }),
                ]).pipe(map(([articles]) => mapCategoryArticles(cms, articles, headers['x-locale'])));
            }),
        );
    }
}
