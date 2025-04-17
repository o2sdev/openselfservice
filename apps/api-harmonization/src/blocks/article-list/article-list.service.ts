import { Injectable } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS } from '../../models';

import { mapArticleList } from './article-list.mapper';
import { ArticleListBlock } from './article-list.model';
import { GetArticleListBlockQuery } from './article-list.request';

@Injectable()
export class ArticleListService {
    constructor(private readonly cmsService: CMS.Service) {}

    getArticleListBlock(query: GetArticleListBlockQuery, headers: AppHeaders): Observable<ArticleListBlock> {
        const cms = this.cmsService.getArticleListBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(map(([cms]) => mapArticleList(cms, headers['x-locale'])));
    }
}
