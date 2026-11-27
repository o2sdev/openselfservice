import { CMS } from '@o2s/framework/modules';

import { businessPage } from './business.page';

export const businessAccountsPage = CMS.Pages.definePage({
    id: 'business-accounts-1',
    parent: businessPage,
    hasOwnTitle: true,
    theme: 'business',
    locales: {
        en: { slug: '/business/accounts', seo: { title: 'Accounts' } },
        pl: { slug: '/firma/konta', seo: { title: 'Konta' } },
        de: { slug: '/geschaftlich/konten', seo: { title: 'Konten' } },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'PricingSectionBlock',
                    id: 'pricing-section-50',
                    layout: { variant: 'wide', spacing: 'small', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-3',
                    layout: { variant: 'wide', spacing: 'medium', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionGridBlock',
                    id: 'feature-section-grid-1',
                    layout: { variant: 'wide', spacing: 'large', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-51',
                    layout: { variant: 'wide', spacing: 'large', background: 'none' },
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                    layout: { variant: 'narrow', spacing: 'large', background: 'none' },
                },
            ],
        },
    },
});
