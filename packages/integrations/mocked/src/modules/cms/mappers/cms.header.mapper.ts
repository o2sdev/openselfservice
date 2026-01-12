import { CMS } from '@o2s/framework/modules';

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
                    permissions: [{ resource: 'page:dashboard', actions: ['view'] }],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Cases',
                    url: '/cases',
                    permissions: [{ resource: 'page:tickets', actions: ['view'] }],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Invoices',
                    url: '/invoices',
                    permissions: [{ resource: 'page:invoices', actions: ['view'] }],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Notifications',
                    url: '/notifications',
                    permissions: [{ resource: 'page:notifications', actions: ['view'] }],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Services',
                    url: '/services',
                    permissions: [{ resource: 'page:services', actions: ['view'] }],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Orders',
                    url: '/orders',
                    permissions: [{ resource: 'page:orders', actions: ['view'] }],
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
                    permissions: [{ resource: 'page:dashboard', actions: ['view'] }],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Fälle',
                    url: '/faelle',
                    permissions: [{ resource: 'page:tickets', actions: ['view'] }],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Rechnungen',
                    url: '/rechnungen',
                    permissions: [{ resource: 'page:invoices', actions: ['view'] }],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Benachrichtigungen',
                    url: '/benachrichtigungen',
                    permissions: [{ resource: 'page:notifications', actions: ['view'] }],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Dienstleistungen',
                    url: '/dienstleistungen',
                    permissions: [{ resource: 'page:services', actions: ['view'] }],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Bestellungen',
                    url: '/bestellungen',
                    permissions: [{ resource: 'page:orders', actions: ['view'] }],
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
                    permissions: [{ resource: 'page:dashboard', actions: ['view'] }],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Zgłoszenia',
                    url: '/zgloszenia',
                    permissions: [{ resource: 'page:tickets', actions: ['view'] }],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Rachunki',
                    url: '/rachunki',
                    permissions: [{ resource: 'page:invoices', actions: ['view'] }],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Powiadomienia',
                    url: '/powiadomienia',
                    permissions: [{ resource: 'page:notifications', actions: ['view'] }],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Usługi',
                    url: '/uslugi',
                    permissions: [{ resource: 'page:services', actions: ['view'] }],
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Zamówienia',
                    url: '/zamowienia',
                    permissions: [{ resource: 'page:orders', actions: ['view'] }],
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
