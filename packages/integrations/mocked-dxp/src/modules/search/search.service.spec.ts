import { firstValueFrom } from 'rxjs';
import { beforeEach, describe, expect, it } from 'vitest';

import { SearchService } from './search.service';

describe('SearchService', () => {
    let service: SearchService;

    beforeEach(() => {
        service = new SearchService();
    });

    describe('search', () => {
        it('should throw error for unimplemented index', () => {
            expect(() =>
                service.search('unknown-index', {
                    locale: 'en',
                    pagination: { offset: 0, limit: 10 },
                }),
            ).toThrow('Mock index unknown-index not implemented');
        });
    });

    describe('searchArticles', () => {
        it('should return articles for default locale', async () => {
            const result = await firstValueFrom(
                service.searchArticles('articles', {
                    locale: 'en',
                    pagination: { offset: 0, limit: 10 },
                }),
            );

            expect(result.data).toBeDefined();
            expect(Array.isArray(result.data)).toBe(true);
            expect(result.total).toBeGreaterThan(0);
        });

        it('should return articles for Polish locale', async () => {
            const result = await firstValueFrom(
                service.searchArticles('articles', {
                    locale: 'pl',
                    pagination: { offset: 0, limit: 10 },
                }),
            );

            expect(result.data).toBeDefined();
            expect(result.total).toBeGreaterThan(0);
        });

        it('should filter articles by query', async () => {
            const allResults = await firstValueFrom(
                service.searchArticles('articles', {
                    locale: 'en',
                    pagination: { offset: 0, limit: 100 },
                }),
            );

            const firstArticleTitle = allResults.data[0]?.title;
            if (!firstArticleTitle) return;

            const searchWord = firstArticleTitle.split(' ')[0]!;

            const filteredResults = await firstValueFrom(
                service.searchArticles('articles', {
                    locale: 'en',
                    query: searchWord,
                    pagination: { offset: 0, limit: 100 },
                }),
            );

            expect(filteredResults.total).toBeLessThanOrEqual(allResults.total);
            filteredResults.data.forEach((article) => {
                expect(article.title.toLowerCase()).toContain(searchWord.toLowerCase());
            });
        });

        it('should filter articles by category', async () => {
            const allResults = await firstValueFrom(
                service.searchArticles('articles', {
                    locale: 'en',
                    pagination: { offset: 0, limit: 100 },
                }),
            );

            const categoryId = allResults.data.find((a) => a.category)?.category?.id;
            if (!categoryId) return;

            const filteredResults = await firstValueFrom(
                service.searchArticles('articles', {
                    locale: 'en',
                    exact: { category: categoryId },
                    pagination: { offset: 0, limit: 100 },
                }),
            );

            filteredResults.data.forEach((article) => {
                expect(article.category?.id).toBe(categoryId);
            });
        });

        it('should apply pagination', async () => {
            const result = await firstValueFrom(
                service.searchArticles('articles', {
                    locale: 'en',
                    pagination: { offset: 0, limit: 2 },
                }),
            );

            expect(result.data.length).toBeLessThanOrEqual(2);
        });
    });
});
