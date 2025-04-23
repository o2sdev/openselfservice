import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { URL } from './';
import { GetArticleBlockQuery } from './article.request';
import { ArticleService } from './article.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class ArticleController {
    constructor(protected readonly service: ArticleService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    getArticleBlock(@Headers() headers: AppHeaders, @Query() query: GetArticleBlockQuery) {
        return this.service.getArticleBlock(query, headers);
    }
}
