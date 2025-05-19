import { CMS } from '@o2s/framework/modules';

export const PAGE_ORDER_DETAILS_EN: CMS.Model.Page.Page = {
    id: '14',
    slug: '/orders/(.+)',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Order Details',
        description: 'Order Details',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    isProtected: true,
    hasOwnTitle: true,
    parent: {
        slug: '/orders',
        seo: {
            title: 'Orders',
        },
        parent: {
            slug: '/',
            seo: {
                title: 'Dashboard',
            },
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'OrderDetailsBlock',
                    id: 'order-details-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_ORDER_DETAILS_DE: CMS.Model.Page.Page = {
    id: '14',
    slug: '/bestellungen/(.+)',
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
    isProtected: true,
    hasOwnTitle: true,
    parent: {
        slug: '/bestellungen',
        seo: {
            title: 'Bestellungen',
        },
        parent: {
            slug: '/',
            seo: {
                title: 'Startseite',
            },
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'OrderDetailsBlock',
                    id: 'order-details-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_ORDER_DETAILS_PL: CMS.Model.Page.Page = {
    id: '14',
    slug: '/zamowienia/(.+)',
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
    isProtected: true,
    hasOwnTitle: true,
    parent: {
        slug: '/zamowienia',
        seo: {
            title: 'Zamówienia',
        },
        parent: {
            slug: '/',
            seo: {
                title: 'Strona główna',
            },
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'OrderDetailsBlock',
                    id: 'order-details-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};
