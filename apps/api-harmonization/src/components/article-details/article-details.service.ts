import { Injectable, NotFoundException } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { Articles, CMS } from '@o2s/framework/modules';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { mapArticleDetails } from './article-details.mapper';
import { ArticleDetailsComponent } from './article-details.model';
import { GetArticleDetailsComponentParams, GetArticleDetailsComponentQuery } from './article-details.request';

@Injectable()
export class ArticleDetailsService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly articleService: Articles.Service,
    ) {}

    getArticleDetailsComponent(
        query: GetArticleDetailsComponentQuery,
        params: GetArticleDetailsComponentParams,
        headers: AppHeaders,
    ): Observable<ArticleDetailsComponent> {
        const cms = this.cmsService.getArticleDetailsComponent({ ...query, locale: headers['x-locale'] });
        const article = this.articleService.getArticle(params);

        return forkJoin([article, cms]).pipe(
            map(([article, cms]) => {
                if (!article) {
                    throw new NotFoundException();
                }
                return mapArticleDetails(article, cms, headers['x-locale']);
            }),
        );
    }
}
