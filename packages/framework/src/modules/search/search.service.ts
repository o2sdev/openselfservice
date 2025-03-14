import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { Articles } from '@o2s/framework/modules';

import { SearchPayload, SearchResult } from './search.model';

@Injectable()
export abstract class SearchService {
    protected constructor(..._services: unknown[]) {}

    abstract search<T>(indexName: string, payload: SearchPayload): Observable<SearchResult<T>>;
    abstract searchArticles(indexName: string, payload: SearchPayload): Observable<Articles.Model.Articles>;
    protected abstract buildQuery(payload: SearchPayload): unknown;
}
