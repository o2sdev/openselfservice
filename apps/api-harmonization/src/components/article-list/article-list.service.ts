import { Injectable } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { Articles, CMS } from '@o2s/framework/modules';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { mapArticleList } from './article-list.mapper';
import { ArticleListComponent } from './article-list.model';
import { GetArticleListComponentBody, GetArticleListComponentQuery } from './article-list.request';

@Injectable()
export class ArticleListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly articleService: Articles.Service,
    ) {}

    getArticleListComponent(
        query: GetArticleListComponentQuery,
        headers: AppHeaders,
        body: GetArticleListComponentBody,
    ): Observable<ArticleListComponent> {
        const cms = this.cmsService.getArticleListComponent({ ...query, locale: headers['x-locale'] });
        const articles = this.articleService.getArticleList({ ...query, locale: headers['x-locale'] }, body);

        return forkJoin([articles, cms]).pipe(
            map(([articles, cms]) => mapArticleList(articles, cms, headers['x-locale'])),
        );
    }
}
