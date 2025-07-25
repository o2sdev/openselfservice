import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { GetCategoryListBlockQuery } from './category-list.request';
import { CategoryListService } from './category-list.service';
import { URL } from './index';

@Controller(URL)
@UseInterceptors(LoggerService)
export class CategoryListController {
    constructor(protected readonly service: CategoryListService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getCategoryListBlock(@Headers() headers: ApiModels.Headers.AppHeaders, @Query() query: GetCategoryListBlockQuery) {
        return this.service.getCategoryListBlock(query, headers);
    }
}
