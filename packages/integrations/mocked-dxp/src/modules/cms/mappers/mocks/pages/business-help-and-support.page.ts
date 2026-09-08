import { CMS } from '@o2s/framework/modules';

import { businessPage } from './business.page';

export const businessHelpAndSupportPage = CMS.Pages.definePage({
    id: 'business-help-and-support-1',
    parent: businessPage,
    theme: 'business',
    locales: {
        en: { slug: '/business/help-and-support', seo: { title: 'Help and Support' } },
        pl: { slug: '/firma/pomoc-i-wsparcie', seo: { title: 'Pomoc i wsparcie' } },
        de: { slug: '/geschaftlich/hilfe-und-support', seo: { title: 'Hilfe und Support' } },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'ArticleSearchBlock',
                    id: 'article-search-2',
                    layout: { variant: 'wide', spacing: 'none', background: 'none' },
                },
                {
                    __typename: 'QuickLinksBlock',
                    id: 'quick-links-3',
                    layout: { variant: 'wide', spacing: 'medium', background: 'none' },
                },
                {
                    __typename: 'ArticleListBlock',
                    id: 'article-list-2',
                    layout: { variant: 'wide', spacing: 'medium', background: 'none' },
                },
                {
                    __typename: 'BentoGridBlock',
                    id: 'bento-grid-1',
                    layout: { variant: 'wide', spacing: 'medium', background: 'none' },
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-4',
                    layout: { variant: 'wide', spacing: 'large', background: 'none' },
                },
            ],
        },
    },
});
