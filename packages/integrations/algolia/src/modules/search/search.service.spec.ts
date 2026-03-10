import { ConfigService } from '@nestjs/config';
import { algoliasearch } from 'algoliasearch';
import { firstValueFrom } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { SearchService } from './search.service';

vi.mock('algoliasearch', () => ({
    algoliasearch: vi.fn(),
}));

describe('SearchService', () => {
    let service: SearchService;
    let mockSearch: ReturnType<typeof vi.fn>;
    let mockConfig: { get: ReturnType<typeof vi.fn> };
    let mockLogger: { debug: ReturnType<typeof vi.fn>; error: ReturnType<typeof vi.fn> };

    beforeEach(() => {
        vi.restoreAllMocks();
        mockSearch = vi.fn();
        vi.mocked(algoliasearch).mockReturnValue({ search: mockSearch } as unknown as ReturnType<typeof algoliasearch>);

        mockConfig = {
            get: vi.fn((key: string) => {
                if (key === 'ALGOLIA_APP_ID') return 'test-app-id';
                if (key === 'ALGOLIA_API_KEY') return 'test-api-key';
                return undefined;
            }),
        };
        mockLogger = {
            debug: vi.fn(),
            error: vi.fn(),
        };

        service = new SearchService(
            mockConfig as unknown as ConfigService,
            mockLogger as unknown as import('@o2s/utils.logger').LoggerService,
        );
    });

    describe('constructor', () => {
        it('should throw when ALGOLIA_APP_ID is missing', () => {
            vi.mocked(mockConfig.get).mockImplementation((key: string) => {
                if (key === 'ALGOLIA_APP_ID') return undefined;
                if (key === 'ALGOLIA_API_KEY') return 'key';
                return undefined;
            });

            expect(
                () =>
                    new SearchService(
                        mockConfig as unknown as ConfigService,
                        mockLogger as unknown as import('@o2s/utils.logger').LoggerService,
                    ),
            ).toThrow('Please provide a valid Algolia app ID');
        });

        it('should throw when ALGOLIA_API_KEY is missing', () => {
            vi.mocked(mockConfig.get).mockImplementation((key: string) => {
                if (key === 'ALGOLIA_APP_ID') return 'app-id';
                if (key === 'ALGOLIA_API_KEY') return undefined;
                return undefined;
            });

            expect(
                () =>
                    new SearchService(
                        mockConfig as unknown as ConfigService,
                        mockLogger as unknown as import('@o2s/utils.logger').LoggerService,
                    ),
            ).toThrow('Please provide a valid Algolia API key');
        });

        it('should create instance when both app id and api key are set', () => {
            expect(service).toBeDefined();
        });
    });

    describe('search', () => {
        it('should throw when indexName is empty', () => {
            expect(() => service.search('', {})).toThrow('Index name is required');
        });

        it('should call searchClient.search with indexName and query from buildQuery', async () => {
            mockSearch.mockResolvedValue({
                results: [
                    {
                        hits: [{ id: '1' }],
                        nbHits: 1,
                    },
                ],
            });

            await firstValueFrom(service.search('articles', { query: 'test' }));

            expect(mockSearch).toHaveBeenCalledTimes(1);
            const callArg = mockSearch.mock.calls[0]![0] as { requests: Array<{ indexName: string }> };
            expect(callArg.requests).toHaveLength(1);
            expect(callArg.requests[0]!.indexName).toBe('articles');
            expect(callArg.requests[0]).toMatchObject({
                query: 'test',
                facets: ['*'],
            });
        });

        it('should return hits and total from Algolia response', async () => {
            const hits = [{ documentId: 'doc-1', slug: 'slug-1' }];
            mockSearch.mockResolvedValue({
                results: [
                    {
                        hits,
                        nbHits: 1,
                        page: 0,
                        nbPages: 1,
                        processingTimeMS: 2,
                    },
                ],
            });

            const result = await firstValueFrom(service.search<{ documentId: string }>('articles', {}));

            expect(result.hits).toEqual(hits);
            expect(result.total).toBe(1);
            expect(result.page).toBe(0);
            expect(result.nbPages).toBe(1);
            expect(result.processingTimeMS).toBe(2);
        });

        it('should return empty result when results[0] is missing', async () => {
            mockSearch.mockResolvedValue({ results: [] });

            const result = await firstValueFrom(service.search('articles', {}));

            expect(result.hits).toEqual([]);
            expect(result.total).toBe(0);
        });

        it('should return empty result when results[0] has facetHits', async () => {
            mockSearch.mockResolvedValue({
                results: [{ facetHits: [], nbHits: 0 }],
            });

            const result = await firstValueFrom(service.search('articles', {}));

            expect(result.hits).toEqual([]);
            expect(result.total).toBe(0);
        });

        it('should return empty result on ApiError 404', async () => {
            mockSearch.mockRejectedValue({ name: 'ApiError', status: 404 });

            const result = await firstValueFrom(service.search('articles', {}));

            expect(result.hits).toEqual([]);
            expect(result.total).toBe(0);
        });

        it('should rethrow on non-ApiError', async () => {
            mockSearch.mockRejectedValue(new Error('Network error'));

            await expect(firstValueFrom(service.search('articles', {}))).rejects.toThrow('Network error');
        });

        it('should return empty result on ApiError with status other than 404', async () => {
            mockSearch.mockRejectedValue({ name: 'ApiError', status: 500 });

            const result = await firstValueFrom(service.search('articles', {}));

            expect(result.hits).toEqual([]);
            expect(result.total).toBe(0);
        });
    });

    describe('search – buildQuery via search call', () => {
        it('should pass query in request', async () => {
            mockSearch.mockResolvedValue({ results: [{ hits: [], nbHits: 0 }] });

            await firstValueFrom(service.search('idx', { query: 'hello' }));

            const req = (mockSearch.mock.calls[0]![0] as { requests: Array<Record<string, unknown>> }).requests[0];
            expect(req?.query).toBe('hello');
        });

        it('should pass locale as facetFilters', async () => {
            mockSearch.mockResolvedValue({ results: [{ hits: [], nbHits: 0 }] });

            await firstValueFrom(service.search('idx', { locale: 'en' }));

            const req = (mockSearch.mock.calls[0]![0] as { requests: Array<Record<string, unknown>> }).requests[0];
            expect(req?.facetFilters).toContainEqual('locale:en');
        });

        it('should pass exact as facetFilters (single value)', async () => {
            mockSearch.mockResolvedValue({ results: [{ hits: [], nbHits: 0 }] });

            await firstValueFrom(service.search('idx', { exact: { category: 'news' } }));

            const req = (mockSearch.mock.calls[0]![0] as { requests: Array<Record<string, unknown>> }).requests[0];
            expect(req?.facetFilters).toContainEqual('category:news');
        });

        it('should pass exact as facetFilters (array value)', async () => {
            mockSearch.mockResolvedValue({ results: [{ hits: [], nbHits: 0 }] });

            await firstValueFrom(service.search('idx', { exact: { tags: ['a', 'b'] } }));

            const req = (mockSearch.mock.calls[0]![0] as { requests: Array<Record<string, unknown>> }).requests[0];
            expect(req?.facetFilters).toContainEqual(['tags:a', 'tags:b']);
        });

        it('should pass range as numericFilters', async () => {
            mockSearch.mockResolvedValue({ results: [{ hits: [], nbHits: 0 }] });

            await firstValueFrom(
                service.search('idx', {
                    range: { year: { min: 2020, max: 2024 } },
                }),
            );

            const req = (mockSearch.mock.calls[0]![0] as { requests: Array<Record<string, unknown>> }).requests[0];
            expect(req?.numericFilters).toContainEqual('year >= 2020');
            expect(req?.numericFilters).toContainEqual('year <= 2024');
        });

        it('should pass pagination limit and offset as hitsPerPage and page', async () => {
            mockSearch.mockResolvedValue({ results: [{ hits: [], nbHits: 0 }] });

            await firstValueFrom(
                service.search('idx', {
                    pagination: { limit: 10, offset: 20 },
                }),
            );

            const req = (mockSearch.mock.calls[0]![0] as { requests: Array<Record<string, unknown>> }).requests[0];
            expect(req?.hitsPerPage).toBe(10);
            expect(req?.page).toBe(2);
        });

        it('should append sort field and order to indexName', async () => {
            mockSearch.mockResolvedValue({ results: [{ hits: [], nbHits: 0 }] });

            await firstValueFrom(
                service.search('articles', {
                    sort: [{ field: 'updatedAt', order: 'desc' }],
                }),
            );

            const callArg = mockSearch.mock.calls[0]![0] as { requests: Array<{ indexName: string }> };
            expect(callArg.requests[0]!.indexName).toBe('articles_updatedAt_desc');
        });
    });

    describe('searchArticles', () => {
        it('should return mapped articles from search result', async () => {
            const hits = [
                {
                    documentId: 'doc-1',
                    slug: 'article-1',
                    updatedAt: '2024-01-02T10:00:00Z',
                    SEO: { title: 'Title 1', description: 'Lead 1', noIndex: false, noFollow: false },
                },
            ];
            mockSearch.mockResolvedValue({
                results: [{ hits, nbHits: 1 }],
            });

            const result = await firstValueFrom(service.searchArticles('articles', { query: 'test' }));

            expect(result.data).toHaveLength(1);
            expect(result.total).toBe(1);
            expect(result.data[0]).toMatchObject({
                id: 'doc-1',
                slug: 'article-1',
                title: 'Title 1',
                lead: 'Lead 1',
                createdAt: '2024-01-02T10:00:00Z',
                updatedAt: '2024-01-02T10:00:00Z',
            });
            expect(result.data[0]?.roles).toEqual([]);
            expect(result.data[0]?.tags).toEqual([]);
            expect((result.data[0] as Record<string, unknown>)?.sections).toEqual([]);
        });
    });
});
