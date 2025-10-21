import { Request } from '.';
import { Body, Controller, Get, Param, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { ArticlesService } from './articles.service';

@Controller('/articles')
@UseInterceptors(LoggerService)
export class ArticleController {
    constructor(protected readonly articleService: ArticlesService) {}

    @Get(':id')
    getArticle(@Param() params: Request.GetArticleParams) {
        return this.articleService.getArticle(params);
    }

    @Get()
    getArticleList(@Query() query: Request.GetArticleListQuery) {
        return this.articleService.getArticleList(query);
    }

    @Get('/search')
    searchArticles(@Body() body: Request.SearchArticlesBody) {
        return this.articleService.searchArticles(body);
    }
}
