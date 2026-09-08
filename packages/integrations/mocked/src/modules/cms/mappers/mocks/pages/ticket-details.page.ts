import { CMS } from '@o2s/framework/modules';

import { ticketListPage } from './ticket-list.page';
import { Roles } from '@/utils/roles';

export const ticketDetailsPage = CMS.Pages.definePage({
    id: '3',
    parent: ticketListPage,
    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
    hasOwnTitle: true,
    locales: {
        en: { slug: '/cases/:id', seo: { title: 'Ticket Details', description: 'Ticket Details' } },
        pl: { slug: '/zgloszenia/:id', seo: { title: 'Zgłoszenia', description: 'Zgłoszenia' } },
        de: { slug: '/faelle/:id', seo: { title: 'Fälle', description: 'Fälle' } },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                { __typename: 'TicketDetailsBlock', id: 'ticket-details-1' },
                { __typename: 'FaqBlock', id: 'faq-1' },
            ],
        },
    },
});
