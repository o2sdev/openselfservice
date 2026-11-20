import { CMS } from '@o2s/framework/modules';

import { personalPage } from './personal.page';

export const personalInsurancePage = CMS.Pages.definePage({
    id: 'personal-insurance-1',
    parent: personalPage,
    hasOwnTitle: true,
    theme: 'personal',
    locales: {
        en: { slug: '/personal/insurance', seo: { title: 'Insurance' } },
        pl: { slug: '/indywidualny/ubezpieczenia', seo: { title: 'Ubezpieczenia' } },
        de: { slug: '/personlich/versicherungen', seo: { title: 'Versicherungen' } },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'PricingSectionBlock',
                    id: 'pricing-section-3',
                    layout: { variant: 'wide', spacing: 'small', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-9',
                    layout: { variant: 'wide', spacing: 'medium', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-10',
                    layout: { variant: 'wide', spacing: 'large', background: 'none' },
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-3',
                    layout: { variant: 'narrow', spacing: 'large', background: 'none' },
                },
            ],
        },
    },
});
