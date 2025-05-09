import { CMS } from '@o2s/framework/modules';

export const PAGE_INVOICE_LIST_EN: CMS.Model.Page.Page = {
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
            alt: 'Placeholder',
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
    createdAt: '2025-01-01',
};

export const PAGE_INVOICE_LIST_DE: CMS.Model.Page.Page = {
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
            alt: 'Placeholder',
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
    createdAt: '2025-01-01',
};

export const PAGE_INVOICE_LIST_PL: CMS.Model.Page.Page = {
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
            alt: 'Placeholder',
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
    createdAt: '2025-01-01',
};
