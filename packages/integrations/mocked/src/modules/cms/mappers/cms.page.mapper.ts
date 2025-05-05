import { CMS } from '@o2s/framework/modules';

const PAGE_DASHBOARD_PL: CMS.Model.Page.Page = {
    slug: '/',
    id: '1',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Strona główna',
        description: 'Strona główna',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '',
    },
    template: {
        __typename: 'TwoColumnTemplate',
        slots: {
            top: [],
            left: [
                {
                    __typename: 'PaymentsSummaryBlock',
                    id: 'payments-summary-1',
                },
            ],
            right: [
                {
                    __typename: 'TicketRecentBlock',
                    id: 'ticket-recent-1',
                },
            ],

            bottom: [
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_DASHBOARD_EN: CMS.Model.Page.Page = {
    slug: '/',
    id: '1',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Dashboard',
        description: 'Dashboard',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '',
    },
    template: {
        __typename: 'TwoColumnTemplate',
        slots: {
            top: [],
            left: [
                {
                    __typename: 'PaymentsSummaryBlock',
                    id: 'payments-summary-1',
                },
            ],
            right: [
                {
                    __typename: 'TicketRecentBlock',
                    id: 'ticket-recent-1',
                },
            ],

            bottom: [
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_DASHBOARD_DE: CMS.Model.Page.Page = {
    slug: '/',
    id: '1',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Startseite',
        description: 'Startseite',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '',
    },
    template: {
        __typename: 'TwoColumnTemplate',
        slots: {
            top: [],
            left: [
                {
                    __typename: 'PaymentsSummaryBlock',
                    id: 'payments-summary-1',
                },
            ],
            right: [
                {
                    __typename: 'TicketRecentBlock',
                    id: 'ticket-recent-1',
                },
            ],

            bottom: [
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_TICKET_LIST_EN: CMS.Model.Page.Page = {
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
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: true,
    parent: {
        slug: '/',
        seo: {
            title: 'Dashboard',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
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
};

const PAGE_TICKET_LIST_DE: CMS.Model.Page.Page = {
    id: '2',
    slug: '/faelle',
    locale: 'de',
    hasOwnTitle: true,
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
            alternativeText: 'Placeholder',
        },
    },
    parent: {
        slug: '/',
        seo: {
            title: 'Startseite',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
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
};

const PAGE_TICKET_LIST_PL: CMS.Model.Page.Page = {
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
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: true,
    parent: {
        slug: '/',
        seo: {
            title: 'Strona główna',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
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
};

const PAGE_TICKET_DETAILS_EN: CMS.Model.Page.Page = {
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
            alternativeText: 'Placeholder',
        },
    },
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
};

const PAGE_TICKET_DETAILS_DE: CMS.Model.Page.Page = {
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
            alternativeText: 'Placeholder',
        },
    },
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
};

const PAGE_TICKET_DETAILS_PL: CMS.Model.Page.Page = {
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
            alternativeText: 'Placeholder',
        },
    },
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
};

const PAGE_NOTIFICATION_LIST_EN: CMS.Model.Page.Page = {
    id: '4',
    slug: '/notifications',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Notifications',
        description: 'Notifications',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/',
        seo: {
            title: 'Dashboard',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'NotificationListBlock',
                    id: 'notification-list-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_NOTIFICATION_LIST_DE: CMS.Model.Page.Page = {
    id: '4',
    slug: '/benachrichtigungen',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Benachrichtigungen',
        description: 'Benachrichtigungen',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/',
        seo: {
            title: 'Dashboard',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'NotificationListBlock',
                    id: 'notification-list-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_NOTIFICATION_LIST_PL: CMS.Model.Page.Page = {
    id: '4',
    slug: '/powiadomienia',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Powiadomienia',
        description: 'Powiadomienia',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/',
        seo: {
            title: 'Dashboard',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'NotificationListBlock',
                    id: 'notification-list-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_INVOICE_LIST_EN: CMS.Model.Page.Page = {
    id: '5',
    slug: '/invoices',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Invoices',
        description: 'Invoices',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/',
        seo: {
            title: 'Dashboard',
        },
    },
    template: {
        __typename: 'TwoColumnTemplate',
        slots: {
            top: [],
            left: [
                {
                    __typename: 'PaymentsSummaryBlock',
                    id: 'payments-summary-1',
                },
            ],
            right: [
                {
                    __typename: 'PaymentsHistoryBlock',
                    id: 'payments-history-1',
                },
            ],
            bottom: [
                {
                    __typename: 'InvoiceListBlock',
                    id: 'invoice-list-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_INVOICE_LIST_DE: CMS.Model.Page.Page = {
    id: '5',
    slug: '/rechnungen',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Rechnungen',
        description: 'Rechnungen',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/',
        seo: {
            title: 'Startseite',
        },
    },
    template: {
        __typename: 'TwoColumnTemplate',
        slots: {
            top: [],
            left: [
                {
                    __typename: 'PaymentsSummaryBlock',
                    id: 'payments-summary-1',
                },
            ],
            right: [
                {
                    __typename: 'PaymentsHistoryBlock',
                    id: 'payments-history-1',
                },
            ],
            bottom: [
                {
                    __typename: 'InvoiceListBlock',
                    id: 'invoice-list-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_INVOICE_LIST_PL: CMS.Model.Page.Page = {
    id: '5',
    slug: '/rachunki',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Rachunki',
        description: 'Rachunki',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/',
        seo: {
            title: 'Strona główna',
        },
    },
    template: {
        __typename: 'TwoColumnTemplate',
        slots: {
            top: [],
            left: [
                {
                    __typename: 'PaymentsSummaryBlock',
                    id: 'payments-summary-1',
                },
            ],
            right: [
                {
                    __typename: 'PaymentsHistoryBlock',
                    id: 'payments-history-1',
                },
            ],
            bottom: [
                {
                    __typename: 'InvoiceListBlock',
                    id: 'invoice-list-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_NOTIFICATION_DETAILS_EN: CMS.Model.Page.Page = {
    id: '6',
    slug: '/notifications/(.+)',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Notification Details',
        description: 'Notification Details',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: true,
    parent: {
        slug: '/notifications',
        seo: {
            title: 'Notifications',
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
                    __typename: 'NotificationDetailsBlock',
                    id: 'notification-details-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_NOTIFICATION_DETAILS_DE: CMS.Model.Page.Page = {
    id: '6',
    slug: '/benachrichtigungen/(.+)',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Benachrichtigung Details',
        description: 'Benachrichtigung Details',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: true,
    parent: {
        slug: '/benachrichtigungen',
        seo: {
            title: 'Benachrichtigungen',
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
                    __typename: 'NotificationDetailsBlock',
                    id: 'notification-details-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_NOTIFICATION_DETAILS_PL: CMS.Model.Page.Page = {
    id: '6',
    slug: '/powiadomienia/(.+)',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Powiadomienia',
        description: 'Powiadomienia',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: true,
    parent: {
        slug: '/powiadomienia',
        seo: {
            title: 'Powiadomienia',
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
                    __typename: 'NotificationDetailsBlock',
                    id: 'notification-details-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_USER_ACCOUNT_EN: CMS.Model.Page.Page = {
    id: '7',
    slug: '/user-account',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'User Account',
        description: 'User Account',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: true,
    parent: {
        slug: '/',
        seo: {
            title: 'Dashboard',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'UserAccountBlock',
                    id: 'user-account-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_USER_ACCOUNT_DE: CMS.Model.Page.Page = {
    id: '7',
    slug: '/benutzerkonto',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Benutzerkonto',
        description: 'Benutzerkonto',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: true,
    parent: {
        slug: '/',
        seo: {
            title: 'Startseite',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'UserAccountBlock',
                    id: 'user-account-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_USER_ACCOUNT_PL: CMS.Model.Page.Page = {
    id: '7',
    slug: '/konto-uzytkownika',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Konto użytkownika',
        description: 'Konto użytkownika',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: true,
    parent: {
        slug: '/',
        seo: {
            title: 'Strona główna',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'UserAccountBlock',
                    id: 'user-account-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_SERVICE_LIST_EN: CMS.Model.Page.Page = {
    id: '8',
    slug: '/services',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Services',
        description: 'Services',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/',
        seo: {
            title: 'Dashboard',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'ServiceListBlock',
                    id: 'service-list-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_SERVICE_LIST_DE: CMS.Model.Page.Page = {
    id: '8',
    slug: '/dienstleistungen',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Dienstleistungen',
        description: 'Dienstleistungen',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/',
        seo: {
            title: 'Startseite',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'ServiceListBlock',
                    id: 'service-list-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_SERVICE_LIST_PL: CMS.Model.Page.Page = {
    id: '8',
    slug: '/uslugi',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Usługi',
        description: 'Usługi',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/',
        seo: {
            title: 'Strona główna',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'ServiceListBlock',
                    id: 'service-list-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_CONTACT_US_EN: CMS.Model.Page.Page = {
    id: '9',
    slug: '/contact-us',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Contact us',
        description: 'Contact us',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/',
        seo: {
            title: 'Dashboard',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'SurveyJsBlock',
                    id: 'survey-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_CONTACT_US_DE: CMS.Model.Page.Page = {
    id: '9',
    slug: '/kontaktiere-uns',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Kontaktiere uns',
        description: 'Kontaktiere uns',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/',
        seo: {
            title: 'Startseite',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'SurveyJsBlock',
                    id: 'survey-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_CONTACT_US_PL: CMS.Model.Page.Page = {
    id: '9',
    slug: '/skontaktuj-sie-z-nami',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Skontaktuj się z nami',
        description: 'Skontaktuj się z nami',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/',
        seo: {
            title: 'Strona główna',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'SurveyJsBlock',
                    id: 'survey-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_COMPLAINT_FORM_EN: CMS.Model.Page.Page = {
    id: '10',
    slug: '/submit-complaint',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Submit a complaint',
        description: 'Submit a complaint',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/',
        seo: {
            title: 'Dashboard',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'SurveyJsBlock',
                    id: 'survey-2',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_COMPLAINT_FORM_DE: CMS.Model.Page.Page = {
    id: '10',
    slug: '/einreichen-reklamacji',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Beschwerdeformular einreichen',
        description: 'Beschwerdeformular einreichen',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/',
        seo: {
            title: 'Startseite',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'SurveyJsBlock',
                    id: 'survey-2',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_COMPLAINT_FORM_PL: CMS.Model.Page.Page = {
    id: '10',
    slug: '/wyslij-reklamacje',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Wyslij reklamacje',
        description: 'Wyslij reklamacje',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/',
        seo: {
            title: 'Strona główna',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'SurveyJsBlock',
                    id: 'survey-2',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_SERVICE_DETAILS_EN: CMS.Model.Page.Page = {
    id: '11',
    slug: '/services/(.+)',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Service Details',
        description: 'Service Details',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: true,
    parent: {
        slug: '/services',
        seo: {
            title: 'Services',
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
                    __typename: 'ServiceDetailsBlock',
                    id: 'service-details-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_SERVICE_DETAILS_DE: CMS.Model.Page.Page = {
    id: '11',
    slug: '/dienstleistungen/(.+)',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Dienstleistungen',
        description: 'Dienstleistungen',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: true,
    parent: {
        slug: '/dienstleistungen',
        seo: {
            title: 'Dienstleistungen',
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
                    __typename: 'ServiceDetailsBlock',
                    id: 'service-details-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_SERVICE_DETAILS_PL: CMS.Model.Page.Page = {
    id: '11',
    slug: '/uslugi/(.+)',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Usługi',
        description: 'Usługi',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: true,
    parent: {
        slug: '/uslugi',
        seo: {
            title: 'Usługi',
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
                    __typename: 'ServiceDetailsBlock',
                    id: 'service-details-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_REQUEST_DEVICE_MAINTENANCE_EN: CMS.Model.Page.Page = {
    id: '12',
    slug: '/request-device-maintenance',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Request device maintenance',
        description: 'Request device maintenance',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/',
        seo: {
            title: 'Dashboard',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'SurveyJsBlock',
                    id: 'survey-3',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_REQUEST_DEVICE_MAINTENANCE_DE: CMS.Model.Page.Page = {
    id: '12',
    slug: '/geratewartungsanfrage',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Gerätewartungsanfrage',
        description: 'Gerätewartungsanfrage',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/',
        seo: {
            title: 'Startseite',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'SurveyJsBlock',
                    id: 'survey-3',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_REQUEST_DEVICE_MAINTENANCE_PL: CMS.Model.Page.Page = {
    id: '12',
    slug: '/zglos-naprawe-urzadzenia',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Zgłoś naprawę urządzenia',
        description: 'Zgłoś naprawę urządzenia',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/',
        seo: {
            title: 'Strona główna',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'SurveyJsBlock',
                    id: 'survey-3',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_ORDER_LIST_EN: CMS.Model.Page.Page = {
    id: '13',
    slug: '/orders',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Orders',
        description: 'Orders',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/',
        seo: {
            title: 'Dashboard',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'OrderListBlock',
                    id: 'order-list-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_ORDER_LIST_DE: CMS.Model.Page.Page = {
    id: '13',
    slug: '/bestellungen',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Bestellungen',
        description: 'Bestellungen',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/',
        seo: {
            title: 'Startseite',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'OrderListBlock',
                    id: 'order-list-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_ORDER_LIST_PL: CMS.Model.Page.Page = {
    id: '13',
    slug: '/zamowienia',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Zamówienia',
        description: 'Zamówienia',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: false,
    parent: {
        slug: '/',
        seo: {
            title: 'Strona główna',
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'OrderListBlock',
                    id: 'order-list-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_ORDER_DETAILS_EN: CMS.Model.Page.Page = {
    id: '14',
    slug: '/orders/(.+)',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Order Details',
        description: 'Order Details',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: true,
    parent: {
        slug: '/orders',
        seo: {
            title: 'Orders',
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
                    __typename: 'OrderDetailsBlock',
                    id: 'order-details-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_ORDER_DETAILS_DE: CMS.Model.Page.Page = {
    id: '14',
    slug: '/bestellungen/(.+)',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Bestellungen',
        description: 'Bestellungen',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: true,
    parent: {
        slug: '/bestellungen',
        seo: {
            title: 'Bestellungen',
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
                    __typename: 'OrderDetailsBlock',
                    id: 'order-details-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_ORDER_DETAILS_PL: CMS.Model.Page.Page = {
    id: '14',
    slug: '/zamowienia/(.+)',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Zamówienia',
        description: 'Zamówienia',
        keywords: [],
        image: {
            url: 'https://picsum.photos/150',
            width: 150,
            height: 150,
            alternativeText: 'Placeholder',
        },
    },
    hasOwnTitle: true,
    parent: {
        slug: '/zamowienia',
        seo: {
            title: 'Zamówienia',
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
                    __typename: 'OrderDetailsBlock',
                    id: 'order-details-1',
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

export const mapPage = (slug: string, locale: string): CMS.Model.Page.Page | undefined => {
    switch (slug) {
        case '/':
            return locale === 'pl' ? PAGE_DASHBOARD_PL : locale === 'de' ? PAGE_DASHBOARD_DE : PAGE_DASHBOARD_EN;

        case '/zgloszenia':
            return PAGE_TICKET_LIST_PL;

        case '/faelle':
            return PAGE_TICKET_LIST_DE;

        case '/cases':
            return PAGE_TICKET_LIST_EN;

        case slug.match(/\/cases\/.+/)?.[0]:
            return {
                ...PAGE_TICKET_DETAILS_EN,
                slug: `/cases/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };
        case slug.match(/\/faelle\/.+/)?.[0]:
            return {
                ...PAGE_TICKET_DETAILS_DE,
                slug: `/faelle/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };
        case slug.match(/\/zgloszenia\/.+/)?.[0]:
            return {
                ...PAGE_TICKET_DETAILS_PL,
                slug: `/zgloszenia/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };

        case '/notifications':
            return PAGE_NOTIFICATION_LIST_EN;
        case '/benachrichtigungen':
            return PAGE_NOTIFICATION_LIST_DE;
        case '/powiadomienia':
            return PAGE_NOTIFICATION_LIST_PL;

        case slug.match(/\/notifications\/.+/)?.[0]:
            return {
                ...PAGE_NOTIFICATION_DETAILS_EN,
                slug: `/notifications/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };

        case slug.match(/\/benachrichtigungen\/.+/)?.[0]:
            return {
                ...PAGE_NOTIFICATION_DETAILS_DE,
                slug: `/benachrichtigungen/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };
        case slug.match(/\/powiadomienia\/.+/)?.[0]:
            return {
                ...PAGE_NOTIFICATION_DETAILS_PL,
                slug: `/powiadomienia/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };

        case '/invoices':
            return PAGE_INVOICE_LIST_EN;
        case '/rechnungen':
            return PAGE_INVOICE_LIST_DE;
        case '/rachunki':
            return PAGE_INVOICE_LIST_PL;

        case '/user-account':
            return PAGE_USER_ACCOUNT_EN;
        case '/benutzerkonto':
            return PAGE_USER_ACCOUNT_DE;
        case '/konto-uzytkownika':
            return PAGE_USER_ACCOUNT_PL;

        case '/services':
            return PAGE_SERVICE_LIST_EN;
        case '/dienstleistungen':
            return PAGE_SERVICE_LIST_DE;
        case '/uslugi':
            return PAGE_SERVICE_LIST_PL;

        case slug.match(/\/services\/.+/)?.[0]:
            return {
                ...PAGE_SERVICE_DETAILS_EN,
                slug: `/services/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };
        case slug.match(/\/dienstleistungen\/.+/)?.[0]:
            return {
                ...PAGE_SERVICE_DETAILS_DE,
                slug: `/dienstleistungen/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };
        case slug.match(/\/uslugi\/.+/)?.[0]:
            return {
                ...PAGE_SERVICE_DETAILS_PL,
                slug: `/uslugi/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };

        case '/contact-us':
            return PAGE_CONTACT_US_EN;
        case '/kontaktiere-uns':
            return PAGE_CONTACT_US_DE;
        case '/skontaktuj-sie-z-nami':
            return PAGE_CONTACT_US_PL;

        case '/submit-complaint':
            return PAGE_COMPLAINT_FORM_EN;
        case '/einreichen-reklamacji':
            return PAGE_COMPLAINT_FORM_DE;
        case '/wyslij-reklamacje':
            return PAGE_COMPLAINT_FORM_PL;

        case '/request-device-maintenance':
            return PAGE_REQUEST_DEVICE_MAINTENANCE_EN;
        case '/geratewartungsanfrage':
            return PAGE_REQUEST_DEVICE_MAINTENANCE_DE;
        case '/zglos-naprawe-urzadzenia':
            return PAGE_REQUEST_DEVICE_MAINTENANCE_PL;

        case '/orders':
            return PAGE_ORDER_LIST_EN;
        case '/bestellungen':
            return PAGE_ORDER_LIST_DE;
        case '/zamowienia':
            return PAGE_ORDER_LIST_PL;

        case slug.match(/\/orders\/.+/)?.[0]:
            return {
                ...PAGE_ORDER_DETAILS_EN,
                slug: `/orders/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };
        case slug.match(/\/bestellungen\/.+/)?.[0]:
            return {
                ...PAGE_ORDER_DETAILS_DE,
                slug: `/bestellungen/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };
        case slug.match(/\/zamowienia\/.+/)?.[0]:
            return {
                ...PAGE_ORDER_DETAILS_PL,
                slug: `/zamowienia/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };

        default:
            return undefined;
    }
};

export const getAllPages = (locale: string): CMS.Model.Page.Page[] => {
    switch (locale) {
        case 'pl':
            return [
                PAGE_DASHBOARD_PL,
                PAGE_TICKET_LIST_PL,
                PAGE_TICKET_DETAILS_PL,
                PAGE_NOTIFICATION_LIST_PL,
                PAGE_NOTIFICATION_DETAILS_PL,
                PAGE_INVOICE_LIST_PL,
                PAGE_USER_ACCOUNT_PL,
                PAGE_SERVICE_LIST_PL,
                PAGE_SERVICE_DETAILS_PL,
                PAGE_CONTACT_US_PL,
                PAGE_COMPLAINT_FORM_PL,
                PAGE_REQUEST_DEVICE_MAINTENANCE_PL,
                PAGE_ORDER_LIST_PL,
                PAGE_ORDER_DETAILS_PL,
            ];
        case 'de':
            return [
                PAGE_DASHBOARD_DE,
                PAGE_TICKET_LIST_DE,
                PAGE_TICKET_DETAILS_DE,
                PAGE_NOTIFICATION_LIST_DE,
                PAGE_NOTIFICATION_DETAILS_DE,
                PAGE_INVOICE_LIST_DE,
                PAGE_USER_ACCOUNT_DE,
                PAGE_SERVICE_LIST_DE,
                PAGE_SERVICE_DETAILS_DE,
                PAGE_CONTACT_US_DE,
                PAGE_COMPLAINT_FORM_DE,
                PAGE_REQUEST_DEVICE_MAINTENANCE_DE,
                PAGE_ORDER_LIST_DE,
                PAGE_ORDER_DETAILS_DE,
            ];
        case 'en':
            return [
                PAGE_DASHBOARD_EN,
                PAGE_TICKET_LIST_EN,
                PAGE_TICKET_DETAILS_EN,
                PAGE_NOTIFICATION_LIST_EN,
                PAGE_NOTIFICATION_DETAILS_EN,
                PAGE_INVOICE_LIST_EN,
                PAGE_USER_ACCOUNT_EN,
                PAGE_SERVICE_LIST_EN,
                PAGE_SERVICE_DETAILS_EN,
                PAGE_CONTACT_US_EN,
                PAGE_COMPLAINT_FORM_EN,
                PAGE_REQUEST_DEVICE_MAINTENANCE_EN,
                PAGE_ORDER_LIST_EN,
                PAGE_ORDER_DETAILS_EN,
            ];
        default:
            return [];
    }
};

export const getAlternativePages = (id: string, slug: string, locale: string): CMS.Model.Page.Page[] => {
    return [
        PAGE_DASHBOARD_PL,
        PAGE_TICKET_LIST_PL,
        PAGE_TICKET_DETAILS_PL,
        PAGE_NOTIFICATION_LIST_PL,
        PAGE_NOTIFICATION_DETAILS_PL,
        PAGE_INVOICE_LIST_PL,
        PAGE_USER_ACCOUNT_PL,
        PAGE_SERVICE_LIST_PL,
        PAGE_DASHBOARD_DE,
        PAGE_TICKET_LIST_DE,
        PAGE_TICKET_DETAILS_DE,
        PAGE_NOTIFICATION_LIST_DE,
        PAGE_NOTIFICATION_DETAILS_DE,
        PAGE_INVOICE_LIST_DE,
        PAGE_USER_ACCOUNT_DE,
        PAGE_SERVICE_LIST_DE,
        PAGE_DASHBOARD_EN,
        PAGE_TICKET_LIST_EN,
        PAGE_TICKET_DETAILS_EN,
        PAGE_NOTIFICATION_LIST_EN,
        PAGE_NOTIFICATION_DETAILS_EN,
        PAGE_INVOICE_LIST_EN,
        PAGE_USER_ACCOUNT_EN,
        PAGE_SERVICE_LIST_EN,
        PAGE_SERVICE_DETAILS_EN,
        PAGE_SERVICE_DETAILS_DE,
        PAGE_SERVICE_DETAILS_PL,
        PAGE_CONTACT_US_EN,
        PAGE_CONTACT_US_DE,
        PAGE_CONTACT_US_PL,
        PAGE_COMPLAINT_FORM_EN,
        PAGE_COMPLAINT_FORM_DE,
        PAGE_COMPLAINT_FORM_PL,
        PAGE_REQUEST_DEVICE_MAINTENANCE_EN,
        PAGE_REQUEST_DEVICE_MAINTENANCE_DE,
        PAGE_REQUEST_DEVICE_MAINTENANCE_PL,
        PAGE_ORDER_LIST_EN,
        PAGE_ORDER_LIST_DE,
        PAGE_ORDER_LIST_PL,
        PAGE_ORDER_DETAILS_EN,
        PAGE_ORDER_DETAILS_DE,
        PAGE_ORDER_DETAILS_PL,
    ]
        .filter((page) => page.id === id)
        .map((page) => mapPage(page.slug, locale)!)
        .map((page) => {
            return {
                ...page,
                slug: page.slug.replace('(.+)', slug.match(/(.+)\/(.+)/)?.[2] || ''),
            };
        });
};
