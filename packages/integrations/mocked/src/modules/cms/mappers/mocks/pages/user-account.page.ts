import { CMS } from '@o2s/framework/modules';

import { Roles } from '@/utils/roles';

export const userAccountPage = CMS.Pages.definePage({
    id: '7',
    roles: [Roles.PROSPECT, Roles.ORG_USER, Roles.ORG_ADMIN],
    hasOwnTitle: true,
    locales: {
        en: { slug: '/user-account', seo: { title: 'User Account', description: 'User Account' } },
        pl: { slug: '/konto-uzytkownika', seo: { title: 'Konto użytkownika', description: 'Konto użytkownika' } },
        de: { slug: '/benutzerkonto', seo: { title: 'Benutzerkonto', description: 'Benutzerkonto' } },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: { main: [{ __typename: 'UserAccountBlock', id: 'user-account-1' }] },
    },
});
