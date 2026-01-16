import { CMS } from '@o2s/framework/modules';

export const PAGE_PRODUCT_DETAILS_EN: CMS.Model.Page.Page = {
    id: '21',
    slug: '/products/(.+)',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Product Details',
        description: 'Product Details',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    permissions: [],
    hasOwnTitle: true,
    parent: {
        slug: '/products',
        seo: {
            title: 'Products in Catalog',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'ProductDetailsBlock',
                    id: 'product-details-1',
                },
                {
                    __typename: 'RecommendedProductsBlock',
                    id: 'recommended-products-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_PRODUCT_DETAILS_DE: CMS.Model.Page.Page = {
    id: '21',
    slug: '/produkte/(.+)',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Produktdetails',
        description: 'Produktdetails',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    permissions: [],
    hasOwnTitle: true,
    parent: {
        slug: '/produkte',
        seo: {
            title: 'Produkte im Katalog',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'ProductDetailsBlock',
                    id: 'product-details-1',
                },
                {
                    __typename: 'RecommendedProductsBlock',
                    id: 'recommended-products-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_PRODUCT_DETAILS_PL: CMS.Model.Page.Page = {
    id: '21',
    slug: '/produkty/(.+)',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Szczegóły produktu',
        description: 'Szczegóły produktu',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    permissions: [],
    hasOwnTitle: true,
    parent: {
        slug: '/produkty',
        seo: {
            title: 'Katalog produktów',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'ProductDetailsBlock',
                    id: 'product-details-1',
                },
                {
                    __typename: 'RecommendedProductsBlock',
                    id: 'recommended-products-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};
