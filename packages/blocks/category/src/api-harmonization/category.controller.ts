import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { GetCategoryBlockArticlesQuery, GetCategoryBlockQuery } from './category.request';
import { CategoryService } from './category.service';
import { URL } from './index';

@Controller(URL)
@UseInterceptors(LoggerService)
export class CategoryController {
    constructor(protected readonly service: CategoryService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getCategoryBlock(@Headers() headers: ApiModels.Headers.AppHeaders, @Query() query: GetCategoryBlockQuery) {
        return this.service.getCategoryBlock(query, headers);
    }

    @Get('articles')
    @Auth.Decorators.Roles({ roles: [] })
    getCategoryArticles(
        @Headers() headers: ApiModels.Headers.AppHeaders,
        @Query() query: GetCategoryBlockArticlesQuery,
    ) {
        return this.service.getCategoryArticles(query, headers);
    }
}
