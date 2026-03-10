import { describe, expect, it } from 'vitest';

import { Search } from '@o2s/framework/modules';

import type { Model } from '../models';

import { mapArticlesFromSearch } from './articles.mapper';

function createHit(overrides: Partial<Model.SearchEngineArticleModel> = {}): Model.SearchEngineArticleModel {
    return {
        id: 'hit-1',
        documentId: 'doc-1',
        slug: 'article-slug',
        updatedAt: '2024-01-02T10:00:00Z',
        createdAt: '2024-01-01T00:00:00Z',
        publishedAt: '2024-01-01T12:00:00Z',
        SEO: {
            title: 'Article title',
            description: 'Article lead',
            noIndex: false,
            noFollow: false,
        },
        ...overrides,
    };
}

describe('articles.mapper', () => {
    describe('mapArticlesFromSearch', () => {
        it('should return empty data and total 0 when hits is empty', () => {
            const searchResult: Search.Model.SearchResult<Model.SearchEngineArticleModel> = {
                hits: [],
                total: 0,
            };

            const result = mapArticlesFromSearch(searchResult);

            expect(result.data).toEqual([]);
            expect(result.total).toBe(0);
        });

        it('should map single hit to article with correct fields', () => {
            const hit = createHit();
            const searchResult: Search.Model.SearchResult<Model.SearchEngineArticleModel> = {
                hits: [hit],
                total: 1,
            };

            const result = mapArticlesFromSearch(searchResult);

            expect(result.data).toHaveLength(1);
            expect(result.total).toBe(1);
            expect(result.data[0]).toEqual({
                id: hit.documentId,
                slug: hit.slug,
                roles: [],
                createdAt: hit.updatedAt,
                updatedAt: hit.updatedAt,
                title: hit.SEO.title,
                lead: hit.SEO.description,
                tags: [],
                sections: [],
            });
        });

        it('should always set roles, tags, and sections to empty arrays', () => {
            const hit = createHit();
            const searchResult: Search.Model.SearchResult<Model.SearchEngineArticleModel> = {
                hits: [hit],
                total: 1,
            };

            const result = mapArticlesFromSearch(searchResult);

            expect(result.data[0]?.roles).toEqual([]);
            expect(result.data[0]?.tags).toEqual([]);
            expect((result.data[0] as Record<string, unknown>)?.sections).toEqual([]);
        });

        it('should map multiple hits with correct total', () => {
            const hits = [
                createHit({ documentId: 'doc-1', slug: 'slug-1' }),
                createHit({ documentId: 'doc-2', slug: 'slug-2' }),
                createHit({ documentId: 'doc-3', slug: 'slug-3' }),
            ];
            const searchResult: Search.Model.SearchResult<Model.SearchEngineArticleModel> = {
                hits,
                total: 3,
            };

            const result = mapArticlesFromSearch(searchResult);

            expect(result.data).toHaveLength(3);
            expect(result.total).toBe(3);
            expect(result.data[0]?.id).toBe('doc-1');
            expect(result.data[1]?.id).toBe('doc-2');
            expect(result.data[2]?.id).toBe('doc-3');
        });

        it('should map hit with missing SEO.description to lead undefined', () => {
            const hit = createHit({
                SEO: {
                    title: 'Title only',
                    description: undefined as unknown as string,
                    noIndex: false,
                    noFollow: false,
                },
            });
            const searchResult: Search.Model.SearchResult<Model.SearchEngineArticleModel> = {
                hits: [hit],
                total: 1,
            };

            const result = mapArticlesFromSearch(searchResult);

            expect(result.data[0]?.title).toBe('Title only');
            expect(result.data[0]?.lead).toBeUndefined();
        });
    });
});
