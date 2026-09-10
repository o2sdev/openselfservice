import { CMS } from '@o2s/framework/modules';

import { businessAccountsPage } from './business-accounts.page';

export const businessAccountsStandardPage = CMS.Pages.definePage({
    id: 'business-accounts-standard-1',
    parent: businessAccountsPage,
    hasOwnTitle: true,
    theme: 'business',
    locales: {
        en: { slug: '/business/accounts/standard', seo: { title: 'Standard account' } },
        pl: { slug: '/firma/konta/standard', seo: { title: 'Standardowe konto' } },
        de: { slug: '/geschaftlich/konten/standard', seo: { title: 'Standardkonto' } },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'HeroSectionBlock',
                    id: 'hero-section-51',
                    layout: { variant: 'wide', spacing: 'small', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-52',
                    layout: { variant: 'wide', spacing: 'medium', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-53',
                    layout: { variant: 'wide', spacing: 'large', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-54',
                    layout: { variant: 'wide', spacing: 'large', background: 'none' },
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-1',
                    layout: { variant: 'narrow', spacing: 'large', background: 'none' },
                },
                {
                    __typename: 'DocumentListBlock',
                    id: 'document-list-1',
                    layout: { variant: 'narrow', spacing: 'large', background: 'none' },
                },
            ],
        },
    },
});
