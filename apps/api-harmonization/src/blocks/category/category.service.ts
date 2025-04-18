import { Injectable } from '@nestjs/common';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { Articles, CMS } from '../../models';

import { mapCategory } from './category.mapper';
import { CategoryBlock } from './category.model';
import { GetCategoryBlockQuery } from './category.request';

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
                    this.articlesService.getArticleList(
                        { limit: 10, locale: headers['x-locale'] },
                        { category: cms.categoryId },
                    ),
                ]).pipe(map(([category, articles]) => mapCategory(cms, category, articles, headers['x-locale'])));
            }),
        );
    }
}
