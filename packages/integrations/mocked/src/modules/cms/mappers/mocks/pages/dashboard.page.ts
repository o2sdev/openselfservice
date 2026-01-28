import { CMS } from '@o2s/framework/modules';

import { Roles } from '@/utils/roles';

export const PAGE_DASHBOARD_PL: CMS.Model.Page.Page = {
    slug: '/',
    id: '1',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Strona główna',
        description: 'Strona główna',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    roles: [Roles.PROSPECT, Roles.ORG_USER, Roles.ORG_ADMIN],
    hasOwnTitle: false,
    template: {
        __typename: 'TwoColumnTemplate',
        slots: {
            top: [],
            left: [
                {
                    __typename: 'PaymentsSummaryBlock',
                    id: 'payments-summary-2',
                },
            ],
            right: [
                {
                    __typename: 'TicketRecentBlock',
                    id: 'ticket-recent-1',
                },
            ],
            bottom: [
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
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_DASHBOARD_EN: CMS.Model.Page.Page = {
    slug: '/',
    id: '1',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Dashboard',
        description: 'Dashboard',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    roles: [Roles.PROSPECT, Roles.ORG_USER, Roles.ORG_ADMIN],
    hasOwnTitle: false,
    template: {
        __typename: 'TwoColumnTemplate',
        slots: {
            top: [],
            left: [
                {
                    __typename: 'PaymentsSummaryBlock',
                    id: 'payments-summary-2',
                },
            ],
            right: [
                {
                    __typename: 'TicketRecentBlock',
                    id: 'ticket-recent-1',
                },
            ],
            bottom: [
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
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_DASHBOARD_DE: CMS.Model.Page.Page = {
    slug: '/',
    id: '1',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Startseite',
        description: 'Startseite',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    roles: [Roles.PROSPECT, Roles.ORG_USER, Roles.ORG_ADMIN],
    hasOwnTitle: false,
    template: {
        __typename: 'TwoColumnTemplate',
        slots: {
            top: [],
            left: [
                {
                    __typename: 'PaymentsSummaryBlock',
                    id: 'payments-summary-2',
                },
            ],
            right: [
                {
                    __typename: 'TicketRecentBlock',
                    id: 'ticket-recent-1',
                },
            ],
            bottom: [
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
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};
