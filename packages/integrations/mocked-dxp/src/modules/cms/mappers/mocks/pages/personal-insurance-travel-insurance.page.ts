import { CMS } from '@o2s/framework/modules';

import { personalInsurancePage } from './personal-insurance.page';

export const personalInsuranceTravelInsurancePage = CMS.Pages.definePage({
    id: 'personal-insurance-travel-insurance-1',
    parent: personalInsurancePage,
    hasOwnTitle: true,
    theme: 'personal',
    locales: {
        en: { slug: '/personal/insurance/travel-insurance', seo: { title: 'Travel Insurance' } },
        pl: { slug: '/indywidualny/ubezpieczenia/ubezpieczenie-podrozy', seo: { title: 'Ubezpieczenie podróży' } },
        de: { slug: '/personlich/versicherungen/reiseversicherung', seo: { title: 'Reiseversicherung' } },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'HeroSectionBlock',
                    id: 'hero-section-6',
                    layout: { variant: 'wide', spacing: 'small', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-11',
                    layout: { variant: 'wide', spacing: 'medium', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-12',
                    layout: { variant: 'wide', spacing: 'large', background: 'none' },
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-3',
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
