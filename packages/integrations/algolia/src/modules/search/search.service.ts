import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoggerService } from '@o2s/utils.logger';
import { Algoliasearch, SearchMethodParams, SearchParamsObject, algoliasearch } from 'algoliasearch';
import { Observable, from, map } from 'rxjs';

import { Articles, Search } from '@o2s/framework/modules';

import { mapArticlesFromSearch } from './mappers/articles.mapper';
import { Model } from './models';

@Injectable()
export class SearchService extends Search.Service {
    private readonly searchClient: Algoliasearch;

    constructor(
        private readonly config: ConfigService,
        @Inject(LoggerService) private readonly logger: LoggerService,
    ) {
        super();

        const appId = this.config.get('ALGOLIA_APP_ID');
        const apiKey = this.config.get('ALGOLIA_API_KEY');

        if (!appId) {
            throw new Error('Please provide a valid Algolia app ID');
        }

        if (!apiKey) {
            throw new Error('Please provide a valid Algolia API key');
        }

        this.searchClient = algoliasearch(appId, apiKey);
    }

    search<T>(indexName: string, payload: Search.Model.SearchPayload): Observable<Search.Model.SearchResult<T>> {
        if (!indexName) {
            throw new Error('Index name is required');
        }
        const query = this.buildQuery(payload);
        this.logger.debug(JSON.stringify(payload), 'Algolia search payload');
        this.logger.debug(JSON.stringify(query), 'Algolia search query');

        if (payload.sort && payload.sort.length > 0) {
            indexName = indexName + '_' + payload.sort[0]?.field + '_' + payload.sort[0]?.order;
        }

        const searchParams: SearchMethodParams = {
            requests: [
                {
                    indexName,
                    ...query,
                },
            ],
        };

        return from(
            this.searchClient
                .search(searchParams)
                .then((result) => {
                    const searchResult = result.results[0];
                    if (!searchResult) {
                        return {
                            hits: [] as T[],
                            total: 0,
                        };
                    }

                    if ('facetHits' in searchResult) {
                        return {
                            hits: [] as T[],
                            total: 0,
                        };
                    }

                    return {
                        hits: (searchResult.hits as unknown as T[]) ?? [],
                        total: searchResult.nbHits ?? 0,
                        page: searchResult?.page,
                        nbPages: searchResult?.nbPages,
                        processingTimeMS: searchResult?.processingTimeMS,
                    };
                })
                .catch((error) => {
                    this.logger.error(JSON.stringify(error), 'Algolia search error');
                    if (error?.name === 'ApiError') {
                        if (error?.status === 404) {
                            this.logger.error(
                                `Algolia index with name ${indexName} not found, please check your environment variables`,
                            );
                        }
                        return {
                            hits: [] as T[],
                            total: 0,
                        };
                    }
                    throw error;
                }),
        );
    }

    searchArticles(indexName: string, payload: Search.Model.SearchPayload): Observable<Articles.Model.Articles> {
        return this.search<Model.SearchEngineArticleModel>(indexName, payload).pipe(
            map((result) => mapArticlesFromSearch(result)),
        );
    }

    protected buildQuery(payload: Search.Model.SearchPayload): SearchParamsObject {
        const algoliaQuery: SearchParamsObject = {};
        if (payload.query) {
            algoliaQuery.query = payload.query;
        }

        if (payload.locale) {
            algoliaQuery.facetFilters = [`locale:${payload.locale}`];
        }

        if (payload.exact && Object.keys(payload.exact).length > 0) {
            const facetFilters = Object.entries(payload.exact)
                .filter(([_, value]) => value !== undefined)
                .map(([field, value]) => {
                    if (Array.isArray(value)) {
                        return value.filter((v) => v !== undefined).map((v) => `${field}:${v}`);
                    }
                    return `${field}:${value}`;
                });

            if (facetFilters.length > 0) {
                algoliaQuery.facetFilters = [...facetFilters, ...(algoliaQuery.facetFilters || [])];
            }
        }

        if (payload.range && Object.keys(payload.range).length > 0) {
            const numericFilters = [];

            for (const [field, range] of Object.entries(payload.range)) {
                if (range.min !== undefined) {
                    numericFilters.push(`${field} >= ${range.min}`);
                }
                if (range.max !== undefined) {
                    numericFilters.push(`${field} <= ${range.max}`);
                }
            }

            if (numericFilters.length > 0) {
                algoliaQuery.numericFilters = numericFilters;
            }
        }

        algoliaQuery.facets = ['*'];

        if (payload.pagination) {
            if (payload.pagination.limit !== undefined) {
                algoliaQuery.hitsPerPage = payload.pagination.limit;
            }

            if (payload.pagination.offset !== undefined) {
                const limit = payload.pagination.limit || 20; // Default limit
                algoliaQuery.page = Math.floor(payload.pagination.offset / limit);
            }
        }

        return algoliaQuery;
    }
}
