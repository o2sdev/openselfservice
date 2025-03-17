import { Injectable } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { Articles, CMS } from '@o2s/framework/modules';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { mapArticleList } from './article-list.mapper';
import { ArticleListBlock } from './article-list.model';
import { GetArticleListBlockBody, GetArticleListBlockQuery } from './article-list.request';

@Injectable()
export class ArticleListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly articleService: Articles.Service,
    ) {}

    getArticleListBlock(
        query: GetArticleListBlockQuery,
        headers: AppHeaders,
        body: GetArticleListBlockBody,
    ): Observable<ArticleListBlock> {
        const cms = this.cmsService.getArticleListBlock({ ...query, locale: headers['x-locale'] });
        const articles = this.articleService.getArticleList({ ...query, locale: headers['x-locale'] }, body);

        return forkJoin([articles, cms]).pipe(
            map(([articles, cms]) => mapArticleList(articles, cms, headers['x-locale'])),
        );
    }
}
