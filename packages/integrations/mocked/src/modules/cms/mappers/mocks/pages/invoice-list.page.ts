import { CMS } from '@o2s/framework/modules';

import { Roles } from '@/utils/roles';

export const invoiceListPage = CMS.Pages.definePage({
    id: '5',
    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
    locales: {
        en: { slug: '/invoices', seo: { title: 'Invoices', description: 'Invoices' } },
        pl: { slug: '/rachunki', seo: { title: 'Rachunki', description: 'Rachunki' } },
        de: { slug: '/rechnungen', seo: { title: 'Rechnungen', description: 'Rechnungen' } },
    },
    template: {
        __typename: 'TwoColumnTemplate',
        slots: {
            top: [{ __typename: 'PaymentsSummaryBlock', id: 'payments-summary-1' }],
            left: [],
            right: [],
            bottom: [
                { __typename: 'InvoiceListBlock', id: 'invoice-list-1' },
                { __typename: 'FaqBlock', id: 'faq-1' },
            ],
        },
    },
});
