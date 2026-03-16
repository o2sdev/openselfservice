import { NotFoundException } from '@nestjs/common';
import { firstValueFrom, of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Search } from '@o2s/framework/modules';

import { ArticlesService } from './articles.service';
import { MOCK_ARTICLES_EN } from './mocks/articles.mocks';
import { MOCK_CATEGORIES_EN } from './mocks/categories.mocks';

describe('ArticlesService', () => {
    let service: ArticlesService;
    let searchService: Search.Service;

    beforeEach(() => {
        searchService = {
            searchArticles: vi.fn().mockReturnValue(
                of({
                    data: MOCK_ARTICLES_EN.slice(0, 10),
                    total: MOCK_ARTICLES_EN.length,
                }),
            ),
            search: vi.fn(),
            buildQuery: vi.fn(),
        } as unknown as Search.Service;

        service = new ArticlesService(searchService);
    });

    describe('getCategory', () => {
        it('should return a category by id and locale', async () => {
            const category = MOCK_CATEGORIES_EN[0]!;
            const result = await firstValueFrom(
                service.getCategory({
                    locale: 'en',
                    id: category.id,
                }),
            );

            expect(result).toEqual(category);
        });

        it('should throw NotFoundException for unknown category id', () => {
            expect(() =>
                firstValueFrom(
                    service.getCategory({
                        locale: 'en',
                        id: 'non-existent-id',
                    }),
                ),
            ).toThrow(NotFoundException);
        });
    });

    describe('getCategoryList', () => {
        it('should return paginated categories', async () => {
            const result = await firstValueFrom(
                service.getCategoryList({
                    locale: 'en',
                    offset: 0,
                    limit: 10,
                }),
            );

            expect(result.data).toHaveLength(MOCK_CATEGORIES_EN.length);
            expect(result.total).toBe(MOCK_CATEGORIES_EN.length);
        });

        it('should apply pagination', async () => {
            const result = await firstValueFrom(
                service.getCategoryList({
                    locale: 'en',
                    offset: 0,
                    limit: 1,
                }),
            );

            expect(result.data).toHaveLength(1);
            expect(result.total).toBe(MOCK_CATEGORIES_EN.length);
        });
    });

    describe('getArticle', () => {
        it('should return an article by slug', async () => {
            const expectedArticle = MOCK_ARTICLES_EN[0]!;

            const result = await firstValueFrom(
                service.getArticle({
                    locale: 'en',
                    slug: expectedArticle.slug,
                }),
            );

            expect(result).toBeDefined();
            expect(result?.slug).toBe(expectedArticle.slug);
        });

        it('should return undefined for unknown slug', async () => {
            const result = await firstValueFrom(
                service.getArticle({
                    locale: 'en',
                    slug: 'non-existent-slug',
                }),
            );

            expect(result).toBeUndefined();
        });
    });

    describe('getArticleList', () => {
        it('should delegate to searchService.searchArticles', async () => {
            await firstValueFrom(
                service.getArticleList({
                    locale: 'en',
                    offset: 0,
                    limit: 10,
                }),
            );

            expect(searchService.searchArticles).toHaveBeenCalledWith('articles', expect.any(Object));
        });

        it('should pass category filter when provided', async () => {
            await firstValueFrom(
                service.getArticleList({
                    locale: 'en',
                    offset: 0,
                    limit: 10,
                    category: 'finance-and-savings-personal',
                }),
            );

            expect(searchService.searchArticles).toHaveBeenCalledWith(
                'articles',
                expect.objectContaining({
                    exact: { category: 'finance-and-savings-personal' },
                }),
            );
        });

        it('should pass sort options when provided', async () => {
            await firstValueFrom(
                service.getArticleList({
                    locale: 'en',
                    offset: 0,
                    limit: 10,
                    sortBy: 'createdAt',
                    sortOrder: 'asc',
                }),
            );

            expect(searchService.searchArticles).toHaveBeenCalledWith(
                'articles',
                expect.objectContaining({
                    sort: [{ field: 'createdAt', order: 'asc' }],
                }),
            );
        });
    });

    describe('searchArticles', () => {
        it('should delegate to searchService.searchArticles with query', async () => {
            await firstValueFrom(
                service.searchArticles({
                    locale: 'en',
                    query: 'finance',
                    offset: 0,
                    limit: 10,
                }),
            );

            expect(searchService.searchArticles).toHaveBeenCalledWith(
                'en',
                expect.objectContaining({
                    query: 'finance',
                }),
            );
        });
    });
});
