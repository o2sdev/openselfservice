import { CMS } from '@o2s/framework/modules';

import { Roles } from '@/utils/roles';

export const ticketListPage = CMS.Pages.definePage({
    id: '2',
    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
    locales: {
        en: { slug: '/cases', seo: { title: 'Cases', description: 'Cases', keywords: ['cases', 'case', 'casescase'] } },
        pl: {
            slug: '/zgloszenia',
            seo: {
                title: 'Zgłoszenia',
                description: 'Zgłoszenia',
                keywords: ['zgloszenia', 'zgloszenie', 'zgloszeniazgloszenia'],
            },
        },
        de: {
            slug: '/faelle',
            seo: { title: 'Fälle', description: 'Fälle', keywords: ['kassen', 'kassenfall', 'kassenfallfall'] },
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                { __typename: 'TicketSummaryBlock', id: 'ticket-summary-1' },
                { __typename: 'TicketListBlock', id: 'ticket-list-1' },
                { __typename: 'FaqBlock', id: 'faq-1' },
            ],
        },
    },
});
