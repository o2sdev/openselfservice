import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import { GetCategoryBlockArticlesQuery, GetCategoryBlockQuery } from './category.request';
import { CategoryService } from './category.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class CategoryController {
    constructor(protected readonly service: CategoryService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getCategoryBlock(@Headers() headers: AppHeaders, @Query() query: GetCategoryBlockQuery) {
        return this.service.getCategoryBlock(query, headers);
    }

    @Get('articles')
    @Auth.Decorators.Roles({ roles: [] })
    getCategoryArticles(@Headers() headers: AppHeaders, @Query() query: GetCategoryBlockArticlesQuery) {
        return this.service.getCategoryArticles(query, headers);
    }
}
