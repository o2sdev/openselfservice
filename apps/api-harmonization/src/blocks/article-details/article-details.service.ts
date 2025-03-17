import { Injectable, NotFoundException } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { Articles, CMS } from '@o2s/framework/modules';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { mapArticleDetails } from './article-details.mapper';
import { ArticleDetailsBlock } from './article-details.model';
import { GetArticleDetailsBlockParams, GetArticleDetailsBlockQuery } from './article-details.request';

@Injectable()
export class ArticleDetailsService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly articleService: Articles.Service,
    ) {}

    getArticleDetailsBlock(
        query: GetArticleDetailsBlockQuery,
        params: GetArticleDetailsBlockParams,
        headers: AppHeaders,
    ): Observable<ArticleDetailsBlock> {
        const cms = this.cmsService.getArticleDetailsBlock({ ...query, locale: headers['x-locale'] });
        const article = this.articleService.getArticle({ ...params, locale: headers['x-locale'] });

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
