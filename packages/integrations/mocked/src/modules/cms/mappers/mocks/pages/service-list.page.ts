import { CMS } from '@o2s/framework/modules';

import { Roles } from '@/utils/roles';

export const serviceListPage = CMS.Pages.definePage({
    id: '8',
    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
    locales: {
        en: { slug: '/services', seo: { title: 'Services', description: 'Services' } },
        pl: { slug: '/uslugi', seo: { title: 'Usługi', description: 'Usługi' } },
        de: { slug: '/dienstleistungen', seo: { title: 'Dienstleistungen', description: 'Dienstleistungen' } },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                { __typename: 'ServiceListBlock', id: 'service-list-1' },
                { __typename: 'FeaturedServiceListBlock', id: 'featured-service-list-1' },
                { __typename: 'FaqBlock', id: 'faq-1' },
            ],
        },
    },
});
