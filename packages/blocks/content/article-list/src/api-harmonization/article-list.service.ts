import { Injectable } from '@nestjs/common';
import { Articles, CMS } from '@o2s/configs.integrations';
import { Observable, catchError, concatMap, forkJoin, map, of } from 'rxjs';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { mapArticleList } from './article-list.mapper';
import { ArticleListBlock } from './article-list.model';
import { GetArticleListBlockQuery } from './article-list.request';

@Injectable()
export class ArticleListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly articlesService: Articles.Service,
    ) {}

    getArticleListBlock(
        query: GetArticleListBlockQuery,
        headers: ApiModels.Headers.AppHeaders,
    ): Observable<ArticleListBlock> {
        const cms = this.cmsService.getArticleListBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                const articles = this.articlesService.getArticleList({
                    limit: cms.articlesToShow || 4,
                    locale: headers['x-locale'],
                    ids: cms.articleIds,
                    category: cms.categoryId,
                });
                const category = cms.categoryId
                    ? this.articlesService.getCategory({ id: cms.categoryId, locale: headers['x-locale'] }).pipe(
                          catchError(() => of(undefined as Articles.Model.Category | undefined)), // If category not found, continue without it
                      )
                    : of(undefined);

                return forkJoin([articles, category]).pipe(
                    map(([articles, category]) => mapArticleList(cms, articles, category, headers['x-locale'])),
                );
            }),
        );
    }
}
