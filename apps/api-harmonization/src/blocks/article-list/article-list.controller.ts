import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import { GetArticleListBlockQuery } from './article-list.request';
import { ArticleListService } from './article-list.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class ArticleListController {
    constructor(protected readonly service: ArticleListService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getArticleListBlock(@Headers() headers: AppHeaders, @Query() query: GetArticleListBlockQuery) {
        return this.service.getArticleListBlock(query, headers);
    }
}
