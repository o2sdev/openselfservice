import { CMS } from '@o2s/framework/modules';

import { personalPage } from './personal.page';

export const personalCardsPage = CMS.Pages.definePage({
    id: 'personal-cards-1',
    parent: personalPage,
    hasOwnTitle: true,
    theme: 'personal',
    locales: {
        en: { slug: '/personal/cards', seo: { title: 'Cards' } },
        pl: { slug: '/indywidualny/karty', seo: { title: 'Karty' } },
        de: { slug: '/personlich/karten', seo: { title: 'Karten' } },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'PricingSectionBlock',
                    id: 'pricing-section-2',
                    layout: { variant: 'wide', spacing: 'small', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-3',
                    layout: { variant: 'wide', spacing: 'medium', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-1',
                    layout: { variant: 'wide', spacing: 'large', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-5',
                    layout: { variant: 'wide', spacing: 'large', background: 'none' },
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-2',
                    layout: { variant: 'narrow', spacing: 'large', background: 'none' },
                },
            ],
        },
    },
});
