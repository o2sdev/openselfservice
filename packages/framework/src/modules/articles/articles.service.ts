import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import * as Articles from './';

@Injectable()
export abstract class ArticlesService {
    protected constructor(..._services: unknown[]) {}

    abstract getCategory(options: Articles.Request.GetCategoryParams): Observable<Articles.Model.Category>;
    abstract getCategoryList(options: Articles.Request.GetCategoryListQuery): Observable<Articles.Model.Categories>;

    abstract getArticle(options: Articles.Request.GetArticleParams): Observable<Articles.Model.Article>;
    abstract getArticleList(
        options: Articles.Request.GetArticleListQuery,
        body: Articles.Request.GetArticleListBody,
    ): Observable<Articles.Model.Articles>;
}
