import { Controller, Get, Headers, Param, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import { GetArticleDetailsBlockParams, GetArticleDetailsBlockQuery } from './article-details.request';
import { ArticleDetailsService } from './article-details.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class ArticleDetailsController {
    constructor(protected readonly service: ArticleDetailsService) {}

    @Get(':id')
    getArticleDetailsBlock(
        @Headers() headers: AppHeaders,
        @Query() query: GetArticleDetailsBlockQuery,
        @Param() params: GetArticleDetailsBlockParams,
    ) {
        return this.service.getArticleDetailsBlock(query, params, headers);
    }
}
