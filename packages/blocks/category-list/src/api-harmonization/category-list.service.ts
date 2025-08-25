import { Injectable } from '@nestjs/common';
import { Articles, CMS } from '@o2s/configs.integrations';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { mapCategoryList } from './category-list.mapper';
import { CategoryListBlock } from './category-list.model';
import { GetCategoryListBlockQuery } from './category-list.request';

@Injectable()
export class CategoryListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly articlesService: Articles.Service,
    ) {}

    getCategoryListBlock(
        query: GetCategoryListBlockQuery,
        headers: ApiModels.Headers.AppHeaders,
    ): Observable<CategoryListBlock> {
        const cms$ = this.cmsService.getCategoryListBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms$]).pipe(
            concatMap(([cms]) => {
                if (cms.categoryIds) {
                    return forkJoin(
                        cms.categoryIds.map((categoryId: string) =>
                            this.articlesService.getCategory({ id: categoryId, locale: headers['x-locale'] }),
                        ),
                    ).pipe(map((categories) => mapCategoryList(cms, categories, headers['x-locale'])));
                } else {
                    return this.articlesService
                        .getCategoryList({
                            locale: headers['x-locale'],
                        })
                        .pipe(map((categories) => mapCategoryList(cms, categories.data, headers['x-locale'])));
                }
            }),
        );
    }
}
