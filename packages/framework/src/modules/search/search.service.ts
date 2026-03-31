import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { Articles } from '@o2s/framework/modules';

import { SearchPayload, SearchResult } from './search.model';

/** Raw search query shape. Used internally by buildQuery. */
export type SearchQuery = Record<string, unknown>;

/**
 * Abstract search service. Implementation is provided by API Harmonization.
 * All methods return RxJS {@link Observable}.
 */
@Injectable()
export abstract class SearchService {
    protected constructor(..._services: unknown[]) {}

    /** Generic search across an index. Returns typed results. */
    abstract search<T>(indexName: string, payload: SearchPayload): Observable<SearchResult<T>>;
    /** Search articles index. Returns article list with pagination. */
    abstract searchArticles(indexName: string, payload: SearchPayload): Observable<Articles.Model.Articles>;
    /** Builds search query from payload. Internal use. */
    protected abstract buildQuery(payload: SearchPayload): SearchQuery;
}
