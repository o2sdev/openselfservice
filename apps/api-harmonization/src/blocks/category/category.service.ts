import { Injectable } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS } from '../../models';

import { mapCategory } from './category.mapper';
import { CategoryBlock } from './category.model';
import { GetCategoryBlockQuery } from './category.request';

@Injectable()
export class CategoryService {
    constructor(private readonly cmsService: CMS.Service) {}

    getCategoryBlock(query: GetCategoryBlockQuery, headers: AppHeaders): Observable<CategoryBlock> {
        const cms = this.cmsService.getCategoryBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(map(([cms]) => mapCategory(cms, headers['x-locale'])));
    }
}
