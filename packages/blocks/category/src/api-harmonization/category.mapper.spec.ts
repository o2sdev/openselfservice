import { Articles, CMS } from '@o2s/configs.integrations';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Utils } from '@o2s/utils.api-harmonization';

import { mapCategory, mapCategoryArticles } from './category.mapper';

vi.mock('@o2s/utils.api-harmonization', () => ({
    Utils: {
        Date: {
            formatDateRelative: vi.fn(),
        },
    },
}));

describe('category.mapper', () => {
    const createMockCms = (overrides = {}): CMS.Model.CategoryBlock.CategoryBlock => ({
        id: 'block-123',
        categoryId: 'category-001',
        title: 'Category Articles',
        description: 'Articles in this category',
        components: [],
        componentsPosition: 'top',
        pagination: undefined,
        labels: {
            today: 'Today',
            yesterday: 'Yesterday',
        },
        ...overrides,
    });

    const createMockCategory = (overrides = {}): Articles.Model.Category => ({
        id: 'category-001',
        title: 'Test Category',
        description: 'Test Description',
        icon: 'icon-category',
        slug: '/category/test',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z',
        ...overrides,
    });

    const createMockArticle = (overrides = {}): Omit<Articles.Model.Article, 'sections'> => ({
        id: 'article-001',
        slug: '/article/test',
        title: 'Test Article',
        lead: 'Test Lead',
        tags: ['test'],
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-20T14:30:00Z',
        ...overrides,
    });

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(Utils.Date.formatDateRelative).mockReturnValue('formatted-date');
    });

    describe('date formatting in nested articles', () => {
        it('should format createdAt and updatedAt for each article', () => {
            const articles = {
                total: 2,
                data: [
                    createMockArticle({
                        id: 'article-1',
                        createdAt: '2024-01-15T10:00:00Z',
                        updatedAt: '2024-01-20T14:30:00Z',
                    }),
                    createMockArticle({
                        id: 'article-2',
                        createdAt: '2024-01-16T10:00:00Z',
                        updatedAt: '2024-01-21T14:30:00Z',
                    }),
                ],
            };
            vi.mocked(Utils.Date.formatDateRelative)
                .mockReturnValueOnce('Jan 15, 2024')
                .mockReturnValueOnce('Jan 20, 2024')
                .mockReturnValueOnce('Jan 16, 2024')
                .mockReturnValueOnce('Jan 21, 2024');

            const result = mapCategory(createMockCms(), createMockCategory(), articles, 'en');

            expect(result.articles.items.data).toHaveLength(2);
            expect(result.articles.items.data[0]?.createdAt).toBe('Jan 15, 2024');
            expect(result.articles.items.data[0]?.updatedAt).toBe('Jan 20, 2024');
            expect(result.articles.items.data[1]?.createdAt).toBe('Jan 16, 2024');
            expect(result.articles.items.data[1]?.updatedAt).toBe('Jan 21, 2024');
        });

        it('should pass correct arguments to formatDateRelative for articles', () => {
            const articles = {
                total: 1,
                data: [createMockArticle({ createdAt: '2024-01-15T10:00:00Z', updatedAt: '2024-01-20T14:30:00Z' })],
            };
            const cms = createMockCms({
                labels: {
                    today: 'Dzisiaj',
                    yesterday: 'Wczoraj',
                },
            });

            mapCategory(cms, createMockCategory(), articles, 'pl');

            expect(Utils.Date.formatDateRelative).toHaveBeenCalledWith(
                '2024-01-15T10:00:00Z',
                'pl',
                'Dzisiaj',
                'Wczoraj',
            );
            expect(Utils.Date.formatDateRelative).toHaveBeenCalledWith(
                '2024-01-20T14:30:00Z',
                'pl',
                'Dzisiaj',
                'Wczoraj',
            );
        });
    });

    describe('article mapping helper', () => {
        it('should preserve all article fields except sections', () => {
            const articles = {
                total: 1,
                data: [
                    createMockArticle({
                        id: 'article-001',
                        slug: '/article/test',
                        title: 'Test Article',
                        lead: 'Test Lead',
                        tags: ['test', 'vitest'],
                    }),
                ],
            };

            const result = mapCategory(createMockCms(), createMockCategory(), articles, 'en');

            expect(result.articles.items.data[0]?.id).toBe('article-001');
            expect(result.articles.items.data[0]?.slug).toBe('/article/test');
            expect(result.articles.items.data[0]?.title).toBe('Test Article');
            expect(result.articles.items.data[0]?.lead).toBe('Test Lead');
            expect(result.articles.items.data[0]?.tags).toEqual(['test', 'vitest']);
        });
    });

    describe('mapCategory', () => {
        it('should set correct __typename and id from cms', () => {
            const articles = {
                total: 0,
                data: [],
            };

            const result = mapCategory(createMockCms(), createMockCategory(), articles, 'en');

            expect(result.__typename).toBe('CategoryBlock');
            expect(result.id).toBe('block-123');
        });

        it('should preserve category data', () => {
            const category = createMockCategory({
                title: 'My Category',
                description: 'My Description',
                icon: 'my-icon',
            });
            const articles = {
                total: 0,
                data: [],
            };

            const result = mapCategory(createMockCms(), category, articles, 'en');

            expect(result.title).toBe('My Category');
            expect(result.description).toBe('My Description');
            expect(result.icon).toBe('my-icon');
        });

        it('should preserve articles total', () => {
            const articles = {
                total: 5,
                data: Array(5)
                    .fill(null)
                    .map((_, i) => createMockArticle({ id: `article-${i}` })),
            };

            const result = mapCategory(createMockCms(), createMockCategory(), articles, 'en');

            expect(result.articles.items.total).toBe(5);
            expect(result.articles.items.data).toHaveLength(5);
        });
    });

    describe('mapCategoryArticles', () => {
        it('should map articles with date formatting', () => {
            const articles = {
                total: 2,
                data: [
                    createMockArticle({
                        id: 'article-1',
                        createdAt: '2024-01-15T10:00:00Z',
                        updatedAt: '2024-01-20T14:30:00Z',
                    }),
                    createMockArticle({
                        id: 'article-2',
                        createdAt: '2024-01-16T10:00:00Z',
                        updatedAt: '2024-01-21T14:30:00Z',
                    }),
                ],
            };
            vi.mocked(Utils.Date.formatDateRelative)
                .mockReturnValueOnce('Jan 15, 2024')
                .mockReturnValueOnce('Jan 20, 2024')
                .mockReturnValueOnce('Jan 16, 2024')
                .mockReturnValueOnce('Jan 21, 2024');

            const result = mapCategoryArticles(createMockCms(), articles, 'en');

            expect(result.items.data).toHaveLength(2);
            expect(result.items.total).toBe(2);
            expect(result.items.data[0]?.createdAt).toBe('Jan 15, 2024');
        });
    });
});
