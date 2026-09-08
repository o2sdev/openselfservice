import { CMS } from '@o2s/framework/modules';

import { serviceListPage } from './service-list.page';
import { Roles } from '@/utils/roles';

export const serviceDetailsPage = CMS.Pages.definePage({
    id: '15',
    parent: serviceListPage,
    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
    hasOwnTitle: true,
    locales: {
        en: { slug: '/services/:id', seo: { title: 'Service Details', description: 'Service Details' } },
        pl: { slug: '/uslugi/:id', seo: { title: 'Usługi', description: 'Usługi' } },
        de: { slug: '/dienstleistungen/:id', seo: { title: 'Dienstleistungen', description: 'Dienstleistungen' } },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                { __typename: 'ServiceDetailsBlock', id: 'service-details-1' },
                { __typename: 'FeaturedServiceListBlock', id: 'featured-service-list-1' },
                { __typename: 'FaqBlock', id: 'faq-1' },
            ],
        },
    },
});
