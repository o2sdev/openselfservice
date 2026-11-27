import { CMS } from '@o2s/framework/modules';

import { Roles } from '@/utils/roles';

export const orderListPage = CMS.Pages.definePage({
    id: '13',
    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
    locales: {
        en: { slug: '/orders', seo: { title: 'Orders', description: 'Orders' } },
        pl: { slug: '/zamowienia', seo: { title: 'Zamówienia', description: 'Zamówienia' } },
        de: { slug: '/bestellungen', seo: { title: 'Bestellungen', description: 'Bestellungen' } },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                { __typename: 'OrdersSummaryBlock', id: 'orders-summary-1' },
                { __typename: 'OrderListBlock', id: 'order-list-1' },
            ],
        },
    },
});
