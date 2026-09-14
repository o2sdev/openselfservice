import { CMS } from '@o2s/framework/modules';

export const homePage = CMS.Pages.definePage({
    id: 'home-1',
    hasOwnTitle: true,
    theme: 'personal',
    locales: {
        en: { slug: '/', seo: { title: 'Personal' }, redirect: '/personal' },
        pl: { slug: '/', seo: { title: 'Indywidualny' }, redirect: '/indywidualny' },
        de: { slug: '/', seo: { title: 'Persönlich' }, redirect: '/personlich' },
    },
    template: { __typename: 'OneColumnTemplate', slots: { main: [] } },
});
