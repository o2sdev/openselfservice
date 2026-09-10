import { CMS } from '@o2s/framework/modules';

import { personalPage } from './personal.page';

export const personalHelpAndSupportPage = CMS.Pages.definePage({
    id: 'personal-help-and-support-1',
    parent: personalPage,
    theme: 'personal',
    locales: {
        en: { slug: '/personal/help-and-support', seo: { title: 'Help and Support' } },
        pl: { slug: '/indywidualny/pomoc-i-wsparcie', seo: { title: 'Pomoc i wsparcie' } },
        de: { slug: '/personlich/hilfe-und-support', seo: { title: 'Hilfe und Support' } },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'ArticleSearchBlock',
                    id: 'article-search-1',
                    layout: { variant: 'wide', spacing: 'none', background: 'none' },
                },
                {
                    __typename: 'QuickLinksBlock',
                    id: 'quick-links-2',
                    layout: { variant: 'wide', spacing: 'medium', background: 'none' },
                },
                {
                    __typename: 'ArticleListBlock',
                    id: 'article-list-1',
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
                    layout: { variant: 'wide', spacing: 'medium', background: 'none' },
                },
            ],
        },
    },
});
