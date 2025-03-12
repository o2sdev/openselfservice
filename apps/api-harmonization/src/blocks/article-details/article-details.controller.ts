import { Controller, Get, Headers, Param, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import { GetArticleDetailsComponentParams, GetArticleDetailsComponentQuery } from './article-details.request';
import { ArticleDetailsService } from './article-details.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class ArticleDetailsController {
    constructor(protected readonly service: ArticleDetailsService) {}

    @Get(':id')
    getArticleDetailsComponent(
        @Headers() headers: AppHeaders,
        @Query() query: GetArticleDetailsComponentQuery,
        @Param() params: GetArticleDetailsComponentParams,
    ) {
        return this.service.getArticleDetailsComponent(query, params, headers);
    }
}
