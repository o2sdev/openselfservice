import { CMS } from '@o2s/framework/modules';

export const productListPage = CMS.Pages.definePage({
    id: '20',
    roles: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    locales: {
        en: { slug: '/products', seo: { title: 'Products in Catalog', description: 'Browse our product catalog' } },
        pl: {
            slug: '/produkty',
            seo: { title: 'Katalog produktów', description: 'Przeglądaj nasz katalog produktów' },
        },
        de: {
            slug: '/produkte',
            seo: { title: 'Produkte im Katalog', description: 'Durchsuchen Sie unseren Produktkatalog' },
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: { main: [{ __typename: 'ProductListBlock', id: 'product-list-1' }] },
    },
});
