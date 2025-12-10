import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Utils } from '@o2s/utils.api-harmonization';

import { mapArticle } from './article.mapper';

vi.mock('@o2s/utils.api-harmonization', () => ({
    Utils: {
        Date: {
            formatDateRelative: vi.fn(),
        },
    },
}));

describe('mapArticle', () => {
    const mockCms = {
        locales: [],
        labels: {
            dates: {
                today: 'Today',
                yesterday: 'Yesterday',
            },
            errors: { requestError: { title: '' } },
            actions: {
                showMore: '',
                showLess: '',
                show: '',
                hide: '',
                edit: '',
                save: '',
                cancel: '',
                delete: '',
                logOut: '',
                settings: '',
                renew: '',
                details: '',
            },
        },
        themes: {},
    };

    const mockArticle = {
        id: 'article-123',
        slug: '/test-article',
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-20T14:30:00Z',
        title: 'Test Article',
        lead: 'This is a test article',
        tags: ['test', 'vitest'],
        sections: [],
    };

    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('date formatting', () => {
        it('should call formatDateRelative with correct arguments for createdAt', () => {
            vi.mocked(Utils.Date.formatDateRelative).mockReturnValue('formatted-date');

            mapArticle(mockCms, mockArticle, 'en', 'Europe/Warsaw');

            expect(Utils.Date.formatDateRelative).toHaveBeenCalledWith(
                '2024-01-15T10:00:00Z',
                'en',
                'Today',
                'Yesterday',
                'Europe/Warsaw',
            );
        });

        it('should call formatDateRelative with correct arguments for updatedAt', () => {
            vi.mocked(Utils.Date.formatDateRelative).mockReturnValue('formatted-date');

            mapArticle(mockCms, mockArticle, 'pl', 'America/New_York');

            expect(Utils.Date.formatDateRelative).toHaveBeenCalledWith(
                '2024-01-20T14:30:00Z',
                'pl',
                'Today',
                'Yesterday',
                'America/New_York',
            );
        });

        it('should use formatted dates in the result', () => {
            vi.mocked(Utils.Date.formatDateRelative)
                .mockReturnValueOnce('15:00 Today')
                .mockReturnValueOnce('Yesterday');

            const result = mapArticle(mockCms, mockArticle, 'en', 'Europe/London');

            expect(result.data.createdAt).toBe('15:00 Today');
            expect(result.data.updatedAt).toBe('Yesterday');
        });

        it('should pass empty timezone when not provided', () => {
            vi.mocked(Utils.Date.formatDateRelative).mockReturnValue('formatted');

            mapArticle(mockCms, mockArticle, 'en', '');

            expect(Utils.Date.formatDateRelative).toHaveBeenCalledWith(
                expect.any(String),
                'en',
                'Today',
                'Yesterday',
                '',
            );
        });
    });

    describe('article data preservation', () => {
        it('should preserve all article fields in data', () => {
            vi.mocked(Utils.Date.formatDateRelative).mockReturnValue('formatted');

            const result = mapArticle(mockCms, mockArticle, 'en', 'UTC');

            expect(result.data.id).toBe('article-123');
            expect(result.data.slug).toBe('/test-article');
            expect(result.data.title).toBe('Test Article');
            expect(result.data.lead).toBe('This is a test article');
            expect(result.data.tags).toEqual(['test', 'vitest']);
        });

        it('should set correct __typename and id', () => {
            vi.mocked(Utils.Date.formatDateRelative).mockReturnValue('formatted');

            const result = mapArticle(mockCms, mockArticle, 'en', 'UTC');

            expect(result.__typename).toBe('ArticleBlock');
            expect(result.id).toBe('article-123');
        });
    });
});
