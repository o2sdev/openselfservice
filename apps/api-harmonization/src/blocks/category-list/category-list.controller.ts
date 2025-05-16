import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import { GetCategoryListBlockQuery } from './category-list.request';
import { CategoryListService } from './category-list.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class CategoryListController {
    constructor(protected readonly service: CategoryListService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getCategoryListBlock(@Headers() headers: AppHeaders, @Query() query: GetCategoryListBlockQuery) {
        return this.service.getCategoryListBlock(query, headers);
    }
}
