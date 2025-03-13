import { Request } from '.';
import { Body, Controller, Get, Param, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { ArticleService } from './articles.service';

@Controller('/articles')
@UseInterceptors(LoggerService)
export class ArticleController {
    constructor(protected readonly articleService: ArticleService) {}

    @Get(':id')
    getArticle(@Param() params: Request.GetArticleParams) {
        return this.articleService.getArticle(params);
    }

    @Get()
    getArticleList(@Query() query: Request.GetArticleListQuery, @Body() body: Request.GetArticleListComponentBody) {
        return this.articleService.getArticleList(query, body);
    }
}
