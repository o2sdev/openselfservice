import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { Articles, Search } from '@o2s/framework/modules';

import { mapArticles } from './mappers/articles.mapper';

@Injectable()
export class SearchService extends Search.Service {
    constructor() {
        super();
    }

    search<T>(indexName: string, payload: Search.Model.SearchPayload): Observable<Search.Model.SearchResult<T>> {
        throw new Error(`Mock index ${indexName} not implemented`);
    }

    searchArticles(indexName: string, payload: Search.Model.SearchPayload): Observable<Articles.Model.Articles> {
        return of(mapArticles(payload));
    }

    protected buildQuery() {
        throw new Error('Method not implemented.');
    }
}
