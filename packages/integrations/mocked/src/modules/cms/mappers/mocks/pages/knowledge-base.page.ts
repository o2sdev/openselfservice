import { CMS } from '@o2s/framework/modules';

export const helpAndSupportPage = CMS.Pages.definePage({
    id: 'help-and-support',
    roles: [],
    locales: {
        en: { slug: '/help-and-support', seo: { title: 'Welcome Hub', description: 'Welcome Hub' } },
        pl: { slug: '/pomoc-i-wsparcie', seo: { title: 'Centrum powitalne', description: 'Centrum powitalne' } },
        de: { slug: '/hilfe-und-support', seo: { title: 'Willkommen Hub', description: 'Willkommen Hub' } },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                { __typename: 'ArticleSearchBlock', id: 'article-search-1' },
                { __typename: 'QuickLinksBlock', id: 'quick-links-1' },
                { __typename: 'CategoryListBlock', id: 'category-list-1' },
                { __typename: 'ArticleListBlock', id: 'article-list-1' },
                { __typename: 'FaqBlock', id: 'faq-1' },
            ],
        },
    },
});
