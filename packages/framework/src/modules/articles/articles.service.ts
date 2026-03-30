import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import * as Articles from './';

/**
 * Abstract service for articles and categories. Implementation is provided by API Harmonization
 * (integration with CMS/backend). All methods return RxJS {@link Observable}.
 */
@Injectable()
export abstract class ArticlesService {
    protected constructor(..._services: unknown[]) {}

    /** Returns a single category by id and locale. */
    abstract getCategory(options: Articles.Request.GetCategoryParams): Observable<Articles.Model.Category>;
    /** Category list with pagination and optional sorting. */
    abstract getCategoryList(options: Articles.Request.GetCategoryListQuery): Observable<Articles.Model.Categories>;

    /** Returns a single article by slug and locale (with sections). */
    abstract getArticle(options: Articles.Request.GetArticleParams): Observable<Articles.Model.Article | undefined>;
    /** Article list with pagination, filters (category, dates, ids), and sorting. */
    abstract getArticleList(options: Articles.Request.GetArticleListQuery): Observable<Articles.Model.Articles>;
    /** Search articles (query string + same filters as getArticleList). */
    abstract searchArticles(options: Articles.Request.SearchArticlesBody): Observable<Articles.Model.Articles>;
}
