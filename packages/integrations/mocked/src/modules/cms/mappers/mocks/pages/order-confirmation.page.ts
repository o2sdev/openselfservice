import { CMS } from '@o2s/framework/modules';

export const PAGE_ORDER_CONFIRMATION_EN: CMS.Model.Page.Page = {
    id: 'order-confirmation-1',
    slug: '/order-confirmation/(.+)',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Order confirmation',
        description: 'Your order has been placed',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    hasOwnTitle: true,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'OrderConfirmationBlock',
                    id: 'order-confirmation-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_ORDER_CONFIRMATION_DE: CMS.Model.Page.Page = {
    id: 'order-confirmation-1',
    slug: '/bestellbestaetigung/(.+)',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Bestellbestätigung',
        description: 'Ihre Bestellung wurde aufgegeben',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    hasOwnTitle: true,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'OrderConfirmationBlock',
                    id: 'order-confirmation-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_ORDER_CONFIRMATION_PL: CMS.Model.Page.Page = {
    id: 'order-confirmation-1',
    slug: '/potwierdzenie-zamowienia/(.+)',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Potwierdzenie zamówienia',
        description: 'Twoje zamówienie zostało złożone',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    hasOwnTitle: true,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'OrderConfirmationBlock',
                    id: 'order-confirmation-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};
