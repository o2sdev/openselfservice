import { Injectable } from '@nestjs/common';
import { Articles, CMS } from '@o2s/configs.integrations';
import { Observable, catchError, concatMap, forkJoin, map, of } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';

import { mapCategoryList } from './category-list.mapper';
import { CategoryListBlock } from './category-list.model';
import { GetCategoryListBlockQuery } from './category-list.request';

const H = HeaderName;

@Injectable()
export class CategoryListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly articlesService: Articles.Service,
    ) {}

    getCategoryListBlock(query: GetCategoryListBlockQuery, headers: AppHeaders): Observable<CategoryListBlock> {
        const cms$ = this.cmsService.getCategoryListBlock({ ...query, locale: headers[H.Locale] });

        return forkJoin([cms$]).pipe(
            concatMap(([cms]) => {
                if (cms.categoryIds) {
                    return forkJoin(
                        cms.categoryIds.map((categoryId: string) =>
                            this.articlesService.getCategory({ id: categoryId, locale: headers[H.Locale] }).pipe(
                                catchError(() => of(null)), // Return null if category not found
                            ),
                        ),
                    ).pipe(
                        map((categories) => {
                            // Filter out null categories (ones that weren't found)
                            const validCategories = categories.filter(
                                (cat): cat is Articles.Model.Category => cat !== null,
                            );
                            return mapCategoryList(cms, validCategories, headers[H.Locale]);
                        }),
                    );
                } else {
                    return this.articlesService
                        .getCategoryList({
                            locale: headers[H.Locale],
                        })
                        .pipe(map((categories) => mapCategoryList(cms, categories.data, headers[H.Locale])));
                }
            }),
        );
    }
}
