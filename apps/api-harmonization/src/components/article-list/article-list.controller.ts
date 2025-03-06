import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import { GetArticleListComponentQuery } from './article-list.request';
import { ArticleListService } from './article-list.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class ArticleListController {
    constructor(protected readonly service: ArticleListService) {}

    @Get()
    getArticleListComponent(@Headers() headers: AppHeaders, @Query() query: GetArticleListComponentQuery) {
        return this.service.getArticleListComponent(query, headers);
    }
}
