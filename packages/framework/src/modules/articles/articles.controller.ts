import { Request } from '.';
import { Controller, Get, Param, Query, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import { LoggerService } from '@o2s/utils.logger';

import { ArticlesService } from './articles.service';

/**
 * HTTP controller for articles and categories. Base path: `/articles`.
 * All methods delegate to {@link ArticlesService}.
 */
@Controller('/articles')
@UseInterceptors(LoggerService)
@ApiTags('articles')
export class ArticleController {
    constructor(protected readonly articleService: ArticlesService) {}

    @Get('/categories')
    @ApiOperation({ summary: 'List article categories' })
    @ApiQuery({
        name: 'query',
        required: false,
        type: String,
        description: 'Article category list filters and pagination query.',
    })
    @ApiResponse({ status: 200, description: 'Returns article categories list.' })
    getCategoryList(@Query() query: Request.GetCategoryListQuery): ReturnType<ArticlesService['getCategoryList']> {
        return this.articleService.getCategoryList(query);
    }

    @Get('/categories/:id')
    @ApiOperation({ summary: 'Get article category by id' })
    @ApiParam({ name: 'id', type: String, description: 'Article category identifier.' })
    @ApiQuery({
        name: 'locale',
        required: false,
        type: String,
        description: 'Optional locale code used to localize response.',
    })
    @ApiResponse({ status: 200, description: 'Returns article category details.' })
    getCategory(@Param('id') id: string, @Query('locale') locale: string): ReturnType<ArticlesService['getCategory']> {
        return this.articleService.getCategory({ id, locale });
    }

    @Get('/search')
    @ApiOperation({ summary: 'Search articles' })
    @ApiQuery({
        name: 'query',
        required: false,
        type: String,
        description: 'Article search filters and search phrase query.',
    })
    @ApiResponse({ status: 200, description: 'Returns article search results.' })
    searchArticles(@Query() query: Request.SearchArticlesBody): ReturnType<ArticlesService['searchArticles']> {
        return this.articleService.searchArticles(query);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get article by id' })
    @ApiParam({ name: 'id', type: String, description: 'Article identifier (slug).' })
    @ApiQuery({
        name: 'locale',
        required: false,
        type: String,
        description: 'Optional locale code used to localize response.',
    })
    @ApiResponse({ status: 200, description: 'Returns article details.' })
    getArticle(@Param('id') id: string, @Query('locale') locale: string): ReturnType<ArticlesService['getArticle']> {
        return this.articleService.getArticle({ slug: id, locale });
    }

    @Get()
    @ApiOperation({ summary: 'List articles' })
    @ApiQuery({
        name: 'query',
        required: false,
        type: String,
        description: 'Article list filters and pagination query.',
    })
    @ApiResponse({ status: 200, description: 'Returns article list.' })
    getArticleList(@Query() query: Request.GetArticleListQuery): ReturnType<ArticlesService['getArticleList']> {
        return this.articleService.getArticleList(query);
    }
}
