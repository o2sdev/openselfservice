import { Injectable } from '@nestjs/common';
import { Articles, CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';

import { mapArticleSearch, mapArticles } from './article-search.mapper';
import { ArticleList, ArticleSearchBlock } from './article-search.model';
import { GetArticleSearchBlockQuery, SearchArticlesQuery } from './article-search.request';

const H = HeaderName;

@Injectable()
export class ArticleSearchService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly articlesService: Articles.Service,
    ) {}

    getArticleSearchBlock(query: GetArticleSearchBlockQuery, headers: AppHeaders): Observable<ArticleSearchBlock> {
        const cms = this.cmsService.getArticleSearchBlock({ ...query, locale: headers[H.Locale] });
        return forkJoin([cms]).pipe(map(([cms]) => mapArticleSearch(cms, headers[H.Locale])));
    }

    searchArticles(query: SearchArticlesQuery, headers: AppHeaders): Observable<ArticleList> {
        return this.articlesService
            .searchArticles({ ...query, locale: headers[H.Locale] })
            .pipe(map((articles) => mapArticles(articles, query.basePath)));
    }
}
