import { CMS } from '@o2s/framework/modules';

import { Roles } from '@/utils/roles';

export const PAGE_TICKET_LIST_EN: CMS.Model.Page.Page = {
    id: '2',
    slug: '/cases',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Cases',
        description: 'Cases',
        keywords: ['cases', 'case', 'casescase'],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'TicketSummaryBlock',
                    id: 'ticket-summary-1',
                },
                {
                    __typename: 'TicketListBlock',
                    id: 'ticket-list-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_TICKET_LIST_DE: CMS.Model.Page.Page = {
    id: '2',
    slug: '/faelle',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Fälle',
        description: 'Fälle',
        keywords: ['kassen', 'kassenfall', 'kassenfallfall'],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'TicketSummaryBlock',
                    id: 'ticket-summary-1',
                },
                {
                    __typename: 'TicketListBlock',
                    id: 'ticket-list-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_TICKET_LIST_PL: CMS.Model.Page.Page = {
    id: '2',
    slug: '/zgloszenia',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Zgłoszenia',
        description: 'Zgłoszenia',
        keywords: ['zgloszenia', 'zgloszenie', 'zgloszeniazgloszenia'],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'TicketSummaryBlock',
                    id: 'ticket-summary-1',
                },
                {
                    __typename: 'TicketListBlock',
                    id: 'ticket-list-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};
