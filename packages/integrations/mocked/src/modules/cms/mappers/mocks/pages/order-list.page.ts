import { Auth, CMS } from '@o2s/framework/modules';

export const PAGE_ORDER_LIST_EN: CMS.Model.Page.Page = {
    id: '13',
    slug: '/orders',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Orders',
        description: 'Orders',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    permissions: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN],
    hasOwnTitle: false,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'OrdersSummaryBlock',
                    id: 'orders-summary-1',
                },
                {
                    __typename: 'OrderListBlock',
                    id: 'order-list-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_ORDER_LIST_DE: CMS.Model.Page.Page = {
    id: '13',
    slug: '/bestellungen',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Bestellungen',
        description: 'Bestellungen',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    permissions: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN],
    hasOwnTitle: false,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'OrdersSummaryBlock',
                    id: 'orders-summary-1',
                },
                {
                    __typename: 'OrderListBlock',
                    id: 'order-list-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_ORDER_LIST_PL: CMS.Model.Page.Page = {
    id: '13',
    slug: '/zamowienia',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Zamówienia',
        description: 'Zamówienia',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    permissions: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN],
    hasOwnTitle: false,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'OrdersSummaryBlock',
                    id: 'orders-summary-1',
                },
                {
                    __typename: 'OrderListBlock',
                    id: 'order-list-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};
