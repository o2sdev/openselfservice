import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { Articles } from '@o2s/framework/modules';

import { mapArticle, mapArticles } from './articles.mapper';
import { responseDelay } from '@/utils/delay';

@Injectable()
export class ArticleService implements Articles.Service {
    getArticle(params: Articles.Request.GetArticleParams): Observable<Articles.Model.Article> {
        return of(mapArticle(params.id)).pipe(responseDelay());
    }

    getArticleList(options: Articles.Request.GetArticleListQuery): Observable<Articles.Model.Articles> {
        return of(mapArticles(options)).pipe(responseDelay());
    }
}
