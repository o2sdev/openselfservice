import { CMS } from '@o2s/framework/modules';

import { Roles } from '@/utils/roles';

const MOCK_HEADER_LOGON_EN: CMS.Model.Header.Header = {
    id: 'fqj6nnyk4irqq5b7rnc4ogsj',
    title: 'MOCK_HEADER_LOGON_EN',
    logo: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/logo.svg',
        alt: 'Logo',
        width: 92,
        height: 24,
    },
    languageSwitcherLabel: 'Language',
    mobileMenuLabel: {
        open: 'Open menu',
        close: 'Close Menu',
    },
    signInLabel: 'Sign in',
    userInfo: {
        url: '/user-account',
        label: 'User Profile',
    },
    items: [
        {
            __typename: 'NavigationGroup',
            title: 'Customer Portal',
            items: [
                {
                    __typename: 'NavigationItem',
                    label: 'Dashboard',
                    url: '/',
                    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Cases',
                    url: '/cases',
                    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Invoices',
                    url: '/invoices',
                    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Notifications',
                    url: '/notifications',
                    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Services',
                    url: '/services',
                    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Orders',
                    url: '/orders',
                    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
                },
            ],
        },
        {
            __typename: 'NavigationGroup',
            title: 'Help & Support',
            items: [
                {
                    __typename: 'NavigationItem',
                    label: 'Welcome Hub',
                    url: '/help-and-support',
                },
            ],
        },
        {
            __typename: 'NavigationGroup',
            title: 'Shop',
            items: [
                {
                    __typename: 'NavigationItem',
                    label: 'Shop',
                    url: '/products',
                },
            ],
        },
    ],
    notification: {
        url: '/notifications',
        label: 'Notifications',
    },
    contextSwitcher: {
        closeLabel: 'Close',
        showContextSwitcher: true,
    },
};
const MOCK_HEADER_LOGON_DE: CMS.Model.Header.Header = {
    id: 'fqj6nnyk4irqq5b7rnc4ogsj',
    title: 'MOCK_HEADER_LOGON_DE',
    logo: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/logo.svg',
        alt: 'Logo',
        width: 92,
        height: 24,
    },
    languageSwitcherLabel: 'Sprache',
    mobileMenuLabel: {
        open: 'Menü öffnen',
        close: 'Menü schließen',
    },
    signInLabel: 'Anmelden',
    userInfo: {
        url: '/user-account',
        label: 'Benutzerprofil',
    },
    items: [
        {
            __typename: 'NavigationGroup',
            title: 'Kunden Portal',
            items: [
                {
                    __typename: 'NavigationItem',
                    label: 'Startseite',
                    url: '/',
                    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Fälle',
                    url: '/faelle',
                    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Rechnungen',
                    url: '/rechnungen',
                    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Benachrichtigungen',
                    url: '/benachrichtigungen',
                    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Dienstleistungen',
                    url: '/dienstleistungen',
                    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Bestellungen',
                    url: '/bestellungen',
                    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
                },
            ],
        },
        {
            __typename: 'NavigationGroup',
            title: 'Hilfe & Support',
            items: [
                {
                    __typename: 'NavigationItem',
                    label: 'Willkommen Hub',
                    url: '/hilfe-und-support',
                },
            ],
        },
        {
            __typename: 'NavigationGroup',
            title: 'Shop',
            items: [
                {
                    __typename: 'NavigationItem',
                    label: 'Shop',
                    url: '/produkte',
                },
            ],
        },
    ],
    notification: {
        url: '/benachrichtigungen',
        label: 'Benachrichtigungen',
    },
    contextSwitcher: {
        closeLabel: 'Schließen',
        showContextSwitcher: true,
    },
};
const MOCK_HEADER_LOGON_PL: CMS.Model.Header.Header = {
    id: 'fqj6nnyk4irqq5b7rnc4ogsj',
    title: 'MOCK_HEADER_LOGON_PL',
    logo: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/logo.svg',
        alt: 'Logo',
        width: 92,
        height: 24,
    },
    languageSwitcherLabel: 'Język',
    mobileMenuLabel: {
        open: 'Otwórz menu',
        close: 'Zamknij menu',
    },
    signInLabel: 'Zaloguj się',
    userInfo: {
        url: '/konto-uzytkownika',
        label: 'Profil użytkownika',
    },
    items: [
        {
            __typename: 'NavigationGroup',
            title: 'Portal klienta',
            items: [
                {
                    __typename: 'NavigationItem',
                    label: 'Strona główna',
                    url: '/',
                    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Zgłoszenia',
                    url: '/zgloszenia',
                    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Rachunki',
                    url: '/rachunki',
                    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Powiadomienia',
                    url: '/powiadomienia',
                    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Usługi',
                    url: '/uslugi',
                    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Zamówienia',
                    url: '/zamowienia',
                    roles: [Roles.ORG_USER, Roles.ORG_ADMIN],
                },
            ],
        },
        {
            __typename: 'NavigationGroup',
            title: 'Pomoc & Wsparcie',
            items: [
                {
                    __typename: 'NavigationItem',
                    label: 'Centrum powitalne',
                    url: '/pomoc-i-wsparcie',
                },
            ],
        },
        {
            __typename: 'NavigationGroup',
            title: 'Sklep',
            items: [
                {
                    __typename: 'NavigationItem',
                    label: 'Sklep',
                    url: '/produkty',
                },
            ],
        },
    ],
    notification: {
        url: '/powiadomienia',
        label: 'Powiadomienia',
    },
    contextSwitcher: {
        closeLabel: 'Zamknij',
        showContextSwitcher: true,
    },
};

export const mapHeader = (id: string, locale: string): CMS.Model.Header.Header => {
    const headerList = [MOCK_HEADER_LOGON_EN, MOCK_HEADER_LOGON_DE, MOCK_HEADER_LOGON_PL];

    const header = headerList
        .filter((header) => header.title?.endsWith(locale.toUpperCase()))
        .find((header) => header.id === id);

    if (!header) {
        return MOCK_HEADER_LOGON_EN;
    }
    return header;
};
