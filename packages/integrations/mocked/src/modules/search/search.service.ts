import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { Search } from '@o2s/framework/modules';

import { getArticles } from './articles.mocks';

@Injectable()
export class SearchService extends Search.Service {
    constructor() {
        super();
    }

    search<T>(indexName: string, payload: Search.Model.SearchPayload): Observable<Search.Model.SearchResult<T>> {
        if (indexName.includes('articles')) {
            const articlesResult = getArticles(payload);
            return of({
                hits: articlesResult.hits as unknown as T[],
                total: articlesResult.total,
            });
        }
        throw new Error(`Mock index ${indexName} not implemented`);
    }

    protected buildQuery() {
        throw new Error('Method not implemented.');
    }
}
