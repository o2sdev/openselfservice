import { CMS } from '@o2s/framework/modules';

import { businessPage } from './business.page';

export const businessCardsPage = CMS.Pages.definePage({
    id: 'business-cards-1',
    parent: businessPage,
    hasOwnTitle: true,
    theme: 'business',
    locales: {
        en: { slug: '/business/cards', seo: { title: 'Cards' } },
        pl: { slug: '/firma/karty', seo: { title: 'Karty' } },
        de: { slug: '/geschaftlich/karten', seo: { title: 'Karten' } },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'PricingSectionBlock',
                    id: 'pricing-section-51',
                    layout: { variant: 'wide', spacing: 'small', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-55',
                    layout: { variant: 'wide', spacing: 'medium', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-56',
                    layout: { variant: 'wide', spacing: 'large', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-57',
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
