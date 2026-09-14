import { CMS } from '@o2s/framework/modules';

import { personalInsurancePage } from './personal-insurance.page';

export const personalInsuranceHomeInsurancePage = CMS.Pages.definePage({
    id: 'personal-insurance-home-insurance-1',
    parent: personalInsurancePage,
    hasOwnTitle: true,
    theme: 'personal',
    locales: {
        en: { slug: '/personal/insurance/home-insurance', seo: { title: 'Home Insurance' } },
        pl: { slug: '/indywidualny/ubezpieczenia/ubezpieczenie-domu', seo: { title: 'Ubezpieczenie domu' } },
        de: { slug: '/personlich/versicherungen/hausversicherung', seo: { title: 'Hausversicherung' } },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'HeroSectionBlock',
                    id: 'hero-section-7',
                    layout: { variant: 'wide', spacing: 'small', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-13',
                    layout: { variant: 'wide', spacing: 'medium', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-14',
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
