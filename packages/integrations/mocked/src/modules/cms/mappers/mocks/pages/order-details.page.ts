import { CMS } from '@o2s/framework/modules';

import { orderListPage } from './order-list.page';
import { Roles } from '@/utils/roles';

export const orderDetailsPage = CMS.Pages.definePage({
    id: '14',
    parent: orderListPage,
    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
    hasOwnTitle: true,
    locales: {
        en: { slug: '/orders/:id', seo: { title: 'Order Details', description: 'Order Details' } },
        pl: { slug: '/zamowienia/:id', seo: { title: 'Szczegóły zamówienia', description: 'Szczegóły zamówienia' } },
        de: { slug: '/bestellungen/:id', seo: { title: 'Bestelldetails', description: 'Bestelldetails' } },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: { main: [{ __typename: 'OrderDetailsBlock', id: 'order-details-1' }] },
    },
});
