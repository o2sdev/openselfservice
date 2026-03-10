import { Request } from '.';
import { Controller, Get, Param, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { ArticlesService } from './articles.service';

@Controller('/articles')
@UseInterceptors(LoggerService)
export class ArticleController {
    constructor(protected readonly articleService: ArticlesService) {}

    @Get('/categories')
    getCategoryList(@Query() query: Request.GetCategoryListQuery) {
        return this.articleService.getCategoryList(query);
    }

    @Get('/categories/:id')
    getCategory(@Param('id') id: string, @Query('locale') locale: string) {
        return this.articleService.getCategory({ id, locale });
    }

    @Get('/search')
    searchArticles(@Query() query: Request.SearchArticlesBody) {
        return this.articleService.searchArticles(query);
    }

    @Get(':id')
    getArticle(@Param('id') id: string, @Query('locale') locale: string) {
        return this.articleService.getArticle({ slug: id, locale });
    }

    @Get()
    getArticleList(@Query() query: Request.GetArticleListQuery) {
        return this.articleService.getArticleList(query);
    }
}
