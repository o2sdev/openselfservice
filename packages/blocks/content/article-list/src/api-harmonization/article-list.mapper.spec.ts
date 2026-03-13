import { Articles, CMS } from '@o2s/configs.integrations';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Utils } from '@o2s/utils.api-harmonization';

import { mapArticleList } from './article-list.mapper';

vi.mock('@o2s/utils.api-harmonization', () => ({
    Utils: {
        Date: {
            formatDateRelative: vi.fn(),
        },
    },
}));

describe('article-list.mapper', () => {
    const createMockCms = (overrides = {}): CMS.Model.ArticleListBlock.ArticleListBlock => ({
        id: 'block-123',
        title: 'Articles',
        description: 'All articles',
        labels: {
            today: 'Today',
            yesterday: 'Yesterday',
            seeAllArticles: 'See All Articles',
        },
        meta: undefined,
        ...overrides,
    });

    const createMockCategory = (overrides = {}): Articles.Model.Category => ({
        id: 'category-001',
        title: 'Test Category',
        description: 'Test Description',
        icon: 'icon-category',
        slug: '/category/test',
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-20T14:30:00Z',
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

    describe('date formatting', () => {
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

            const result = mapArticleList(createMockCms(), articles, undefined, 'en');

            expect(result.items.data).toHaveLength(2);
            expect(result.items.data[0]?.createdAt).toBe('Jan 15, 2024');
            expect(result.items.data[0]?.updatedAt).toBe('Jan 20, 2024');
            expect(result.items.data[1]?.createdAt).toBe('Jan 16, 2024');
            expect(result.items.data[1]?.updatedAt).toBe('Jan 21, 2024');
        });

        it('should pass correct arguments to formatDateRelative', () => {
            const articles = {
                total: 1,
                data: [createMockArticle({ createdAt: '2024-01-15T10:00:00Z', updatedAt: '2024-01-20T14:30:00Z' })],
            };
            const cms = createMockCms({
                labels: {
                    today: 'Dzisiaj',
                    yesterday: 'Wczoraj',
                    seeAllArticles: 'Zobacz wszystkie',
                },
            });

            mapArticleList(cms, articles, undefined, 'pl');

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

    describe('conditional category link', () => {
        it('should include categoryLink when category is provided', () => {
            const articles = {
                total: 0,
                data: [],
            };
            const category = createMockCategory({ slug: '/category/test-category' });

            const result = mapArticleList(createMockCms(), articles, category, 'en');

            expect(result.categoryLink).toBeDefined();
            expect(result.categoryLink?.url).toBe('/category/test-category');
            expect(result.categoryLink?.label).toBe('See All Articles');
        });

        it('should set categoryLink to undefined when category is not provided', () => {
            const articles = {
                total: 0,
                data: [],
            };

            const result = mapArticleList(createMockCms(), articles, undefined, 'en');

            expect(result.categoryLink).toBeUndefined();
        });

        it('should use correct label from CMS for categoryLink', () => {
            const articles = {
                total: 0,
                data: [],
            };
            const category = createMockCategory({ slug: '/category/test' });
            const cms = createMockCms({
                labels: {
                    today: 'Today',
                    yesterday: 'Yesterday',
                    seeAllArticles: 'View All',
                },
            });

            const result = mapArticleList(cms, articles, category, 'en');

            expect(result.categoryLink?.label).toBe('View All');
        });
    });

    describe('mapArticleList', () => {
        it('should set correct __typename and id from cms', () => {
            const articles = {
                total: 0,
                data: [],
            };

            const result = mapArticleList(createMockCms(), articles, undefined, 'en');

            expect(result.__typename).toBe('ArticleListBlock');
            expect(result.id).toBe('block-123');
        });

        it('should preserve articles total', () => {
            const articles = {
                total: 5,
                data: Array(5)
                    .fill(null)
                    .map((_, i) => createMockArticle({ id: `article-${i}` })),
            };

            const result = mapArticleList(createMockCms(), articles, undefined, 'en');

            expect(result.items.total).toBe(5);
            expect(result.items.data).toHaveLength(5);
        });

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

            const result = mapArticleList(createMockCms(), articles, undefined, 'en');

            expect(result.items.data[0]?.id).toBe('article-001');
            expect(result.items.data[0]?.slug).toBe('/article/test');
            expect(result.items.data[0]?.title).toBe('Test Article');
            expect(result.items.data[0]?.lead).toBe('Test Lead');
            expect(result.items.data[0]?.tags).toEqual(['test', 'vitest']);
        });
    });
});
