import { Injectable } from '@nestjs/common';
import { Articles, CMS } from '@o2s/configs.integrations';
import { Observable, catchError, concatMap, forkJoin, map, of } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';

import { mapArticleList } from './article-list.mapper';
import { ArticleListBlock } from './article-list.model';
import { GetArticleListBlockQuery } from './article-list.request';

const H = HeaderName;

@Injectable()
export class ArticleListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly articlesService: Articles.Service,
    ) {}

    getArticleListBlock(query: GetArticleListBlockQuery, headers: AppHeaders): Observable<ArticleListBlock> {
        const cms = this.cmsService.getArticleListBlock({ ...query, locale: headers[H.Locale] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                const articles = this.articlesService.getArticleList({
                    limit: cms.articlesToShow || 4,
                    locale: headers[H.Locale],
                    ids: cms.articleIds,
                    category: cms.categoryId,
                });
                const category = cms.categoryId
                    ? this.articlesService.getCategory({ id: cms.categoryId, locale: headers[H.Locale] }).pipe(
                          catchError(() => of(undefined as Articles.Model.Category | undefined)), // If category not found, continue without it
                      )
                    : of(undefined);

                return forkJoin([articles, category]).pipe(
                    map(([articles, category]) => mapArticleList(cms, articles, category, headers[H.Locale])),
                );
            }),
        );
    }
}
