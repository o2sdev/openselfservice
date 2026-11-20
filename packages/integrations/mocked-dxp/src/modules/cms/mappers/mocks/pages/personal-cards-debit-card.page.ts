import { CMS } from '@o2s/framework/modules';

import { personalCardsPage } from './personal-cards.page';

export const personalCardsDebitCardPage = CMS.Pages.definePage({
    id: 'personal-cards-debit-card-1',
    parent: personalCardsPage,
    hasOwnTitle: true,
    theme: 'personal',
    locales: {
        en: { slug: '/personal/cards/debit-card', seo: { title: 'Debit Card' } },
        pl: { slug: '/indywidualny/karty/karta-debetowa', seo: { title: 'Karta debetowa' } },
        de: { slug: '/personlich/karten/debit-karte', seo: { title: 'Debitkarte' } },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'HeroSectionBlock',
                    id: 'hero-section-4',
                    layout: { variant: 'wide', spacing: 'small', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-5',
                    layout: { variant: 'wide', spacing: 'medium', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-7',
                    layout: { variant: 'wide', spacing: 'large', background: 'none' },
                },
                {
                    __typename: 'MediaSectionBlock',
                    id: 'media-section-2',
                    layout: { variant: 'wide', spacing: 'large', background: 'brand' },
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
