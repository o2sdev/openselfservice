import { CMS } from '@o2s/framework/modules';

import { businessCardsPage } from './business-cards.page';

export const businessCardsBusinessExpensePage = CMS.Pages.definePage({
    id: 'business-cards-business-expense-1',
    parent: businessCardsPage,
    hasOwnTitle: true,
    theme: 'business',
    locales: {
        en: { slug: '/business/cards/business-expense', seo: { title: 'Business Expense' } },
        pl: { slug: '/firma/karty/business-expense', seo: { title: 'Karta Business Expense' } },
        de: { slug: '/geschaftlich/karten/business-expense', seo: { title: 'Geschäftliche Ausgaben' } },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'HeroSectionBlock',
                    id: 'hero-section-54',
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
