import { CMS } from '@o2s/framework/modules';

export const PAGE_TICKET_DETAILS_EN: CMS.Model.Page.Page = {
    id: '3',
    slug: '/cases/(.+)',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Ticket Details',
        description: 'Ticket Details',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    isProtected: true,
    hasOwnTitle: true,
    parent: {
        slug: '/cases',
        seo: {
            title: 'Cases',
        },
        parent: {
            slug: '/',
            seo: {
                title: 'Dashboard',
            },
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'TicketDetailsBlock',
                    id: 'ticket-details-1',
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

export const PAGE_TICKET_DETAILS_DE: CMS.Model.Page.Page = {
    id: '3',
    slug: '/faelle/(.+)',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Fälle',
        description: 'Fälle',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    isProtected: true,
    hasOwnTitle: true,
    parent: {
        slug: '/faelle',
        seo: {
            title: 'Fälle',
        },
        parent: {
            slug: '/',
            seo: {
                title: 'Startseite',
            },
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'TicketDetailsBlock',
                    id: 'ticket-details-1',
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

export const PAGE_TICKET_DETAILS_PL: CMS.Model.Page.Page = {
    id: '3',
    slug: '/zgloszenia/(.+)',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Zgłoszenia',
        description: 'Zgłoszenia',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alt: 'Placeholder',
        },
    },
    isProtected: true,
    hasOwnTitle: true,
    parent: {
        slug: '/zgloszenia',
        seo: {
            title: 'Zgłoszenia',
        },
        parent: {
            slug: '/',
            seo: {
                title: 'Strona główna',
            },
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'TicketDetailsBlock',
                    id: 'ticket-details-1',
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
