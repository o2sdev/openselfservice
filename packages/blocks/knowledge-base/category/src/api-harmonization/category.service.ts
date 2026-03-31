import { Injectable } from '@nestjs/common';
import { Articles, CMS } from '@o2s/configs.integrations';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';

import { mapCategory, mapCategoryArticles } from './category.mapper';
import { CategoryArticles, CategoryBlock } from './category.model';
import { GetCategoryBlockArticlesQuery, GetCategoryBlockQuery } from './category.request';

const H = HeaderName;

@Injectable()
export class CategoryService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly articlesService: Articles.Service,
    ) {}

    getCategoryBlock(query: GetCategoryBlockQuery, headers: AppHeaders): Observable<CategoryBlock> {
        const cms = this.cmsService.getBlockConfig<CMS.Model.CategoryBlock.CategoryBlock>({
            ...query,
            locale: headers[H.Locale],
            blockType: 'CategoryBlock',
        });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return forkJoin([
                    this.articlesService.getCategory({ id: cms.categoryId, locale: headers[H.Locale] }),
                    this.articlesService.getArticleList({
                        limit: query.limit || 6,
                        locale: headers[H.Locale],
                        category: cms.categoryId,
                    }),
                ]).pipe(map(([category, articles]) => mapCategory(cms, category, articles, headers[H.Locale])));
            }),
        );
    }

    getCategoryArticles(query: GetCategoryBlockArticlesQuery, headers: AppHeaders): Observable<CategoryArticles> {
        const cms = this.cmsService.getBlockConfig<CMS.Model.CategoryBlock.CategoryBlock>({
            ...query,
            locale: headers[H.Locale],
            blockType: 'CategoryBlock',
        });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return forkJoin([
                    this.articlesService.getArticleList({
                        limit: query.limit || 6,
                        offset: query.offset || 0,
                        locale: headers[H.Locale],
                        category: cms.categoryId,
                    }),
                ]).pipe(map(([articles]) => mapCategoryArticles(cms, articles, headers[H.Locale])));
            }),
        );
    }
}
