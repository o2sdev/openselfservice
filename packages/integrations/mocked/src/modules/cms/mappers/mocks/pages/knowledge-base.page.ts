import { CMS } from '@o2s/framework/modules';

export const PAGE_HELP_AND_SUPPORT_EN: CMS.Model.Page.Page = {
    id: 'help-and-support',
    slug: '/help-and-support',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Help & Support',
        description: 'Help & Support',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'QuickLinksBlock',
                    id: 'quick-links-1',
                },
                {
                    __typename: 'CategoryListBlock',
                    id: 'category-list-1',
                },
                {
                    __typename: 'ArticleListBlock',
                    id: 'article-list-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_HELP_AND_SUPPORT_DE: CMS.Model.Page.Page = {
    id: 'help-and-support',
    slug: '/hilfe-und-support',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Hilfe und Support',
        description: 'Hilfe und Support',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'QuickLinksBlock',
                    id: 'quick-links-1',
                },
                {
                    __typename: 'CategoryListBlock',
                    id: 'category-list-1',
                },
                {
                    __typename: 'ArticleListBlock',
                    id: 'article-list-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_HELP_AND_SUPPORT_PL: CMS.Model.Page.Page = {
    id: 'help-and-support',
    slug: '/pomoc-i-wsparcie',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Pomoc i Wsparcie',
        description: 'Pomoc i Wsparcie',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'QuickLinksBlock',
                    id: 'quick-links-1',
                },
                {
                    __typename: 'CategoryListBlock',
                    id: 'category-list-1',
                },
                {
                    __typename: 'ArticleListBlock',
                    id: 'article-list-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};
