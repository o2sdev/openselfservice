import { CMS } from '@o2s/framework/modules';

export const personalPage = CMS.Pages.definePage({
    id: 'personal-1',
    hasOwnTitle: true,
    theme: 'personal',
    locales: {
        en: { slug: '/personal', seo: { title: 'Personal' } },
        pl: { slug: '/indywidualny', seo: { title: 'Indywidualny' } },
        de: { slug: '/personlich', seo: { title: 'Persönlich' } },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'HeroSectionBlock',
                    id: 'hero-section-1',
                    layout: { variant: 'wide', spacing: 'large', background: 'none' },
                },
                {
                    __typename: 'QuickLinksBlock',
                    id: 'quick-links-1',
                    layout: { variant: 'wide', spacing: 'small', background: 'none' },
                },
                {
                    __typename: 'MediaSectionBlock',
                    id: 'media-section-1',
                    layout: { variant: 'wide', spacing: 'large', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-1',
                    layout: { variant: 'wide', spacing: 'large', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-2',
                    layout: { variant: 'wide', spacing: 'large', background: 'none' },
                },
                {
                    __typename: 'CtaSectionBlock',
                    id: 'cta-section-1',
                    layout: { variant: 'wide', spacing: 'large', background: 'none', theme: 'premium' },
                },
                {
                    __typename: 'BentoGridBlock',
                    id: 'bento-grid-1',
                    layout: { variant: 'wide', spacing: 'large', background: 'none' },
                },
            ],
        },
    },
});
