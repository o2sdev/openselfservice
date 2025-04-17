import { Injectable } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS } from '../../models';

import { mapCategoryList } from './category-list.mapper';
import { CategoryListBlock } from './category-list.model';
import { GetCategoryListBlockQuery } from './category-list.request';

@Injectable()
export class CategoryListService {
    constructor(private readonly cmsService: CMS.Service) {}

    getCategoryListBlock(query: GetCategoryListBlockQuery, headers: AppHeaders): Observable<CategoryListBlock> {
        const cms = this.cmsService.getCategoryListBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(map(([cms]) => mapCategoryList(cms, headers['x-locale'])));
    }
}
