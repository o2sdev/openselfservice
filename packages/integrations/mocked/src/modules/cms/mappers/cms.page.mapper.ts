import { CMS } from '@o2s/framework/modules';

const PAGE_DASHBOARD: CMS.Model.Page.Page = {
    slug: '/',
    id: '1',
    noIndex: false,
    template: {
        __typename: 'TwoColumnTemplate',
        slots: {
            top: [],
            left: [
                {
                    __typename: 'PaymentsSummaryComponent',
                    id: 'payments-summary-1',
                },
            ],
            right: [
                {
                    __typename: 'TicketRecentComponent',
                    id: 'ticket-recent-1',
                },
            ],

            bottom: [
                {
                    __typename: 'FaqComponent',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_TICKET_LIST: CMS.Model.Page.Page = {
    id: '2',
    noIndex: false,
    slug: '/cases',
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'TicketListComponent',
                    id: 'ticket-list-1',
                },
                {
                    __typename: 'FaqComponent',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_TICKET_DETAILS: CMS.Model.Page.Page = {
    id: '3',
    noIndex: false,
    slug: '/cases/{id}',
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'TicketDetailsComponent',
                    id: 'ticket-details-1',
                },
                {
                    __typename: 'FaqComponent',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_NOTIFICATION_LIST: CMS.Model.Page.Page = {
    id: '4',
    slug: '/notifications',
    noIndex: false,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'NotificationListComponent',
                    id: 'notification-list-1',
                },
                {
                    __typename: 'FaqComponent',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_INVOICE_LIST: CMS.Model.Page.Page = {
    id: '5',
    slug: '/invoices',
    noIndex: false,
    template: {
        __typename: 'TwoColumnTemplate',
        slots: {
            top: [],
            left: [
                {
                    __typename: 'PaymentsSummaryComponent',
                    id: 'payments-summary-1',
                },
            ],
            right: [
                {
                    __typename: 'PaymentsHistoryComponent',
                    id: 'payments-history-1',
                },
            ],
            bottom: [
                {
                    __typename: 'InvoiceListComponent',
                    id: 'invoice-list-1',
                },
                {
                    __typename: 'FaqComponent',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_NOTIFICATION_DETAILS: CMS.Model.Page.Page = {
    id: '6',
    slug: '/notifications/{id}',
    noIndex: false,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'NotificationDetailsComponent',
                    id: 'notification-details-1',
                },
                {
                    __typename: 'FaqComponent',
                    id: 'faq-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

const PAGE_USER_ACCOUNT: CMS.Model.Page.Page = {
    id: '7',
    slug: '/user-account',
    noIndex: false,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'UserAccountComponent',
                    id: 'user-account-1',
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
};

export const mapPage = (slug: string): CMS.Model.Page.Page | undefined => {
    switch (slug) {
        case '/':
            return PAGE_DASHBOARD;

        case '/cases':
        case '/faelle':
        case '/zgloszenia':
            return PAGE_TICKET_LIST;

        case slug.match(/\/cases\/.+/)?.[0]:
            return {
                ...PAGE_TICKET_DETAILS,
                slug: `/\/cases/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };
        case slug.match(/\/faelle\/.+/)?.[0]:
            return {
                ...PAGE_TICKET_DETAILS,
                slug: `/\/faelle/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };
        case slug.match(/\/zgloszenia\/.+/)?.[0]:
            return {
                ...PAGE_TICKET_DETAILS,
                slug: `/\/zgloszenia/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };

        case '/notifications':
        case '/benachrichtigungen':
        case '/powiadomienia':
            return PAGE_NOTIFICATION_LIST;

        case slug.match(/\/notifications\/.+/)?.[0]:
            return {
                ...PAGE_NOTIFICATION_DETAILS,
                slug: `/\/notifications/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };

        case slug.match(/\/benachrichtigungen\/.+/)?.[0]:
            return {
                ...PAGE_NOTIFICATION_DETAILS,
                slug: `/\/benachrichtigungen/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };
        case slug.match(/\/powiadomienia\/.+/)?.[0]:
            return {
                ...PAGE_NOTIFICATION_DETAILS,
                slug: `/\/powiadomienia/${slug.match(/(.+)\/(.+)/)?.[2]}`,
                updatedAt: '2025-01-01',
            };

        case '/invoices':
        case '/rechnungen':
        case '/rachunki':
            return PAGE_INVOICE_LIST;

        case '/user-account':
        case '/benutzerkonto':
        case '/konto-uzytkownika':
            return PAGE_USER_ACCOUNT;

        default:
            return undefined;
    }
};
export const getAllPages = (): CMS.Model.Page.Page[] => {
    return [PAGE_DASHBOARD, PAGE_TICKET_LIST, PAGE_TICKET_DETAILS, PAGE_NOTIFICATION_LIST, PAGE_NOTIFICATION_DETAILS];
};
