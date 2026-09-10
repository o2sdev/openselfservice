import { CMS } from '@o2s/framework/modules';

import { personalPage } from './personal.page';

export const personalAccountsPage = CMS.Pages.definePage({
    id: 'personal-accounts-1',
    parent: personalPage,
    hasOwnTitle: true,
    theme: 'personal',
    locales: {
        en: { slug: '/personal/accounts', seo: { title: 'Accounts' } },
        pl: { slug: '/indywidualny/konta', seo: { title: 'Konta' } },
        de: { slug: '/personlich/konten', seo: { title: 'Konten' } },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'PricingSectionBlock',
                    id: 'pricing-section-1',
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
                    id: 'feature-section-8',
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
