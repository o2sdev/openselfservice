import { CMS } from '@o2s/framework/modules';

import { Roles } from '@/utils/roles';

export const PAGE_CART_EN: CMS.Model.Page.Page = {
    id: 'cart-1',
    slug: '/cart',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Cart',
        description: 'Your shopping cart',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
    hasOwnTitle: false,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'CartBlock',
                    id: 'cart-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_CART_DE: CMS.Model.Page.Page = {
    id: 'cart-1',
    slug: '/warenkorb',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Warenkorb',
        description: 'Ihr Warenkorb',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
    hasOwnTitle: false,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'CartBlock',
                    id: 'cart-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_CART_PL: CMS.Model.Page.Page = {
    id: 'cart-1',
    slug: '/koszyk',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Koszyk',
        description: 'Twój koszyk zakupów',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
    hasOwnTitle: false,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'CartBlock',
                    id: 'cart-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};
