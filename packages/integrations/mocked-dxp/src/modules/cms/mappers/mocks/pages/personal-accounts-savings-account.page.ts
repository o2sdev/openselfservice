import { CMS } from '@o2s/framework/modules';

import { personalAccountsPage } from './personal-accounts.page';

export const personalAccountsSavingsAccountPage = CMS.Pages.definePage({
    id: 'personal-accounts-savings-account-1',
    parent: personalAccountsPage,
    hasOwnTitle: true,
    theme: 'personal',
    locales: {
        en: { slug: '/personal/accounts/savings-account', seo: { title: 'Savings Account' } },
        pl: { slug: '/indywidualny/konta/konto-oszczednosciowe', seo: { title: 'Konto Oszczędnościowe' } },
        de: { slug: '/personlich/konten/sparen-konto', seo: { title: 'Sparen Konto' } },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'HeroSectionBlock',
                    id: 'hero-section-3',
                    layout: { variant: 'wide', spacing: 'small', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-4',
                    layout: { variant: 'wide', spacing: 'medium', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-5',
                    layout: { variant: 'wide', spacing: 'large', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-6',
                    layout: { variant: 'wide', spacing: 'large', background: 'none' },
                },
                {
                    __typename: 'MediaSectionBlock',
                    id: 'media-section-2',
                    layout: { variant: 'wide', spacing: 'large', background: 'brand' },
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
