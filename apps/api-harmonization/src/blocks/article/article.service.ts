import { Injectable } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { Articles, CMS } from '../../models';

import { mapArticle } from './article.mapper';
import { ArticleBlock } from './article.model';
import { GetArticleBlockQuery } from './article.request';

@Injectable()
export class ArticleService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly articlesService: Articles.Service,
    ) {}

    getArticleBlock(query: GetArticleBlockQuery, headers: AppHeaders): Observable<ArticleBlock> {
        const cms = this.articlesService.getArticle({ slug: query.slug, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(map(([cms]) => mapArticle(cms, headers['x-locale'])));
    }
}
