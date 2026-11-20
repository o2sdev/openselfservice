import { CMS } from '@o2s/framework/modules';

import { businessCardsPage } from './business-cards.page';

export const businessCardsBusinessDebitPage = CMS.Pages.definePage({
    id: 'business-cards-business-debit-1',
    parent: businessCardsPage,
    hasOwnTitle: true,
    theme: 'business',
    locales: {
        en: { slug: '/business/cards/business-debit', seo: { title: 'Business Debit' } },
        pl: { slug: '/firma/karty/business-debit', seo: { title: 'Business Debit' } },
        de: { slug: '/geschaftlich/karten/business-debit', seo: { title: 'Business Debit' } },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'HeroSectionBlock',
                    id: 'hero-section-53',
                    layout: { variant: 'wide', spacing: 'small', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-58',
                    layout: { variant: 'wide', spacing: 'medium', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-59',
                    layout: { variant: 'wide', spacing: 'large', background: 'none' },
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-2',
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
