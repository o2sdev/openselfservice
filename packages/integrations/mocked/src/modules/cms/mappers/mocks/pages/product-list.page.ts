import { Auth, CMS } from '@o2s/framework/modules';

const buildPage = (locale: 'en' | 'de' | 'pl'): CMS.Model.Page.Page => {
    const slug = locale === 'de' ? '/produkte' : locale === 'pl' ? '/produkty' : '/products';

    const title =
        locale === 'de' ? 'Produktübersicht' : locale === 'pl' ? 'Lista produktów' : 'Products overview';

    const description =
        locale === 'de'
            ? 'Durchsuchen Sie das Produktportfolio nach Kategorie oder Preis.'
            : locale === 'pl'
              ? 'Przeglądaj ofertę produktów według kategorii i ceny.'
              : 'Explore the product catalog by category and price.';

    return {
        id: '20',
        slug,
        locale,
        seo: {
            noIndex: false,
            noFollow: false,
            title,
            description,
            keywords: ['products', 'catalog', 'commerce'],
            image: {
                url: 'https://picsum.photos/150',
                width: 150,
                height: 150,
                alt: title,
            },
        },
        permissions: [Auth.Constants.Roles.ORG_USER, Auth.Constants.Roles.ORG_ADMIN],
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
        updatedAt: '2025-01-01',
        createdAt: '2025-01-01',
    };
};

export const PAGE_PRODUCT_LIST_EN = buildPage('en');
export const PAGE_PRODUCT_LIST_DE = buildPage('de');
export const PAGE_PRODUCT_LIST_PL = buildPage('pl');
