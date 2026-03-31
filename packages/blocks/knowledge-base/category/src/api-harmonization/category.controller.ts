import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/framework/headers';
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
    getCategoryBlock(@Headers() headers: AppHeaders, @Query() query: GetCategoryBlockQuery) {
        return this.service.getCategoryBlock(query, headers);
    }

    @Get('articles')
    @Auth.Decorators.Roles({ roles: [] })
    getCategoryArticles(@Headers() headers: AppHeaders, @Query() query: GetCategoryBlockArticlesQuery) {
        return this.service.getCategoryArticles(query, headers);
    }
}
