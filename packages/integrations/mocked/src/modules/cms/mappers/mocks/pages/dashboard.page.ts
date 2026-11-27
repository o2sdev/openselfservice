import { CMS } from '@o2s/framework/modules';

import { Roles } from '@/utils/roles';

export const dashboardPage = CMS.Pages.definePage({
    id: '1',
    roles: [Roles.PROSPECT, Roles.ORG_USER, Roles.ORG_ADMIN],
    locales: {
        en: { slug: '/', seo: { title: 'Dashboard', description: 'Dashboard' } },
        pl: { slug: '/', seo: { title: 'Strona główna', description: 'Strona główna' } },
        de: { slug: '/', seo: { title: 'Startseite', description: 'Startseite' } },
    },
    template: {
        __typename: 'TwoColumnTemplate',
        slots: {
            top: [],
            left: [{ __typename: 'PaymentsSummaryBlock', id: 'payments-summary-2' }],
            right: [{ __typename: 'TicketRecentBlock', id: 'ticket-recent-1' }],
            bottom: [
                { __typename: 'QuickLinksBlock', id: 'quick-links-1' },
                { __typename: 'CategoryListBlock', id: 'category-list-1' },
                { __typename: 'ArticleListBlock', id: 'article-list-1' },
            ],
        },
    },
});
