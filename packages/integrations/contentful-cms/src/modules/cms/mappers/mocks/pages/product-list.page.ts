import { CMS } from '@o2s/framework/modules';

export const PAGE_PRODUCT_LIST_EN: CMS.Model.Page.Page = {
    id: '20',
    slug: '/products',
    locale: 'en',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Products',
        description: 'Browse our product catalog',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    permissions: [{ resource: 'page:products', actions: ['view'] }],
    hasOwnTitle: false,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'ProductListBlock',
                    id: 'product-list-1',
                },
            ],
        },
    },
};

export const PAGE_PRODUCT_LIST_DE: CMS.Model.Page.Page = {
    id: '20',
    slug: '/produkte',
    locale: 'de',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Produkte',
        description: 'Durchsuchen Sie unseren Produktkatalog',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    permissions: [{ resource: 'page:products', actions: ['view'] }],
    hasOwnTitle: false,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'ProductListBlock',
                    id: 'product-list-1',
                },
            ],
        },
    },
};

export const PAGE_PRODUCT_LIST_PL: CMS.Model.Page.Page = {
    id: '20',
    slug: '/produkty',
    locale: 'pl',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Produkty',
        description: 'Przeglądaj nasz katalog produktów',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    permissions: [{ resource: 'page:products', actions: ['view'] }],
    hasOwnTitle: false,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'ProductListBlock',
                    id: 'product-list-1',
                },
            ],
        },
    },
};
