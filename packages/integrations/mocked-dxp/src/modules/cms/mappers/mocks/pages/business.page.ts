import { CMS } from '@o2s/framework/modules';

export const businessPage = CMS.Pages.definePage({
    id: 'business-1',
    hasOwnTitle: true,
    theme: 'business',
    locales: {
        en: { slug: '/business', seo: { title: 'Business' } },
        pl: { slug: '/firma', seo: { title: 'Firma' } },
        de: { slug: '/geschaftlich', seo: { title: 'Geschäft' } },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'HeroSectionBlock',
                    id: 'hero-section-50',
                    layout: { variant: 'wide', spacing: 'large', background: 'none' },
                },
                {
                    __typename: 'QuickLinksBlock',
                    id: 'quick-links-50',
                    layout: { variant: 'wide', spacing: 'small', background: 'none' },
                },
                {
                    __typename: 'MediaSectionBlock',
                    id: 'media-section-50',
                    layout: { variant: 'wide', spacing: 'large', background: 'none' },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-50',
                    layout: { variant: 'wide', spacing: 'large', background: 'none' },
                },
                {
                    __typename: 'CtaSectionBlock',
                    id: 'cta-section-1',
                    layout: { variant: 'wide', spacing: 'large', background: 'none', theme: 'premium' },
                },
                {
                    __typename: 'BentoGridBlock',
                    id: 'bento-grid-50',
                    layout: { variant: 'wide', spacing: 'large', background: 'none' },
                },
            ],
        },
    },
});
