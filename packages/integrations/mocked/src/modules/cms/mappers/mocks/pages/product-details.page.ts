import { CMS } from '@o2s/framework/modules';

import { productListPage } from './product-list.page';

export const productDetailsPage = CMS.Pages.definePage({
    id: '21',
    parent: productListPage,
    roles: [],
    hasOwnTitle: true,
    locales: {
        en: { slug: '/products/:id', seo: { title: 'Product Details', description: 'Product Details' } },
        pl: { slug: '/produkty/:id', seo: { title: 'Szczegóły produktu', description: 'Szczegóły produktu' } },
        de: { slug: '/produkte/:id', seo: { title: 'Produktdetails', description: 'Produktdetails' } },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                { __typename: 'ProductDetailsBlock', id: 'product-details-1' },
                { __typename: 'RecommendedProductsBlock', id: 'recommended-products-1' },
            ],
        },
    },
});
