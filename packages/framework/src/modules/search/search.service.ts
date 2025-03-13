import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { SearchPayload, SearchResult } from './search.model';

@Injectable()
export abstract class SearchService {
    protected constructor(..._services: unknown[]) {}

    abstract search<T>(indexName: string, payload: SearchPayload): Observable<SearchResult<T>>;
    protected abstract buildQuery(payload: SearchPayload): unknown;
}
