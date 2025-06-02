import { Injectable } from '@nestjs/common';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { Articles, CMS } from '../../models';

import { mapArticleList } from './article-list.mapper';
import { ArticleListBlock } from './article-list.model';
import { GetArticleListBlockQuery } from './article-list.request';

@Injectable()
export class ArticleListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly articlesService: Articles.Service,
    ) {}

    getArticleListBlock(query: GetArticleListBlockQuery, headers: AppHeaders): Observable<ArticleListBlock> {
        const cms = this.cmsService.getArticleListBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return this.articlesService
                    .getArticleList({
                        limit: cms.articlesToShow || 4,
                        locale: headers['x-locale'],
                        ids: cms.articleIds,
                        category: cms.categorySlug,
                    })
                    .pipe(map((articles) => mapArticleList(cms, articles, headers['x-locale'])));
            }),
        );
    }
}
