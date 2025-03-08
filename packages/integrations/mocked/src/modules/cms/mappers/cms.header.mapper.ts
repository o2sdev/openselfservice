import { CMS } from '@o2s/framework/modules';

const MOCK_HEADER_LOGON_EN: CMS.Model.Header.Header = {
    id: 'fqj6nnyk4irqq5b7rnc4ogsj',
    title: 'MOCK_HEADER_LOGON_EN',
    logo: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/logo.svg',
        alternativeText: 'Logo',
        width: 92,
        height: 24,
        name: 'Logo',
    },
    languageSwitcherLabel: 'Language',
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
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Cases',
                    url: '/cases',
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Invoices',
                    url: '/invoices',
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Notifications',
                    url: '/notifications',
                },
            ],
        },
        {
            __typename: 'NavigationGroup',
            title: 'Help & Support',
            items: [
                {
                    __typename: 'NavigationItem',
                    label: 'O2S Documentation',
                    url: 'https://www.openselfservice.com/',
                },
            ],
        },
    ],
    notification: {
        url: '/notifications',
        label: 'Notifications',
    },
    contextSwitcher: {
        label: 'Power Construction AG',
        clear: 'Clear',
        apply: 'Apply',
    },
};
const MOCK_HEADER_LOGON_DE: CMS.Model.Header.Header = {
    id: 'fqj6nnyk4irqq5b7rnc4ogsj',
    title: 'MOCK_HEADER_LOGON_DE',
    logo: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/logo.svg',
        alternativeText: 'Logo',
        width: 92,
        height: 24,
        name: 'Logo',
    },
    languageSwitcherLabel: 'Sprache',
    userInfo: {
        url: '/benutzerkonto',
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
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Fälle',
                    url: '/faelle',
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Rechnungen',
                    url: '/rechnungen',
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Benachrichtigungen',
                    url: '/benachrichtigungen',
                },
            ],
        },
        {
            __typename: 'NavigationGroup',
            title: 'Hilfe & Support',
            items: [
                {
                    __typename: 'NavigationItem',
                    label: 'O2S Dokumentation',
                    url: 'https://www.openselfservice.com/',
                },
            ],
        },
    ],
    notification: {
        url: '/benachrichtigungen',
        label: 'Benachrichtigungen',
    },
    contextSwitcher: {
        label: 'Power Construction AG',
        clear: 'Löschen',
        apply: 'Anwenden',
    },
};
const MOCK_HEADER_LOGON_PL: CMS.Model.Header.Header = {
    id: 'fqj6nnyk4irqq5b7rnc4ogsj',
    title: 'MOCK_HEADER_LOGON_PL',
    logo: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/logo.svg',
        alternativeText: 'Logo',
        width: 92,
        height: 24,
        name: 'Logo',
    },
    languageSwitcherLabel: 'Język',
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
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Zgłoszenia',
                    url: '/zgloszenia',
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Rachunki',
                    url: '/rachunki',
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Powiadomienia',
                    url: '/powiadomienia',
                },
            ],
        },
        {
            __typename: 'NavigationGroup',
            title: 'Pomoc & Wsparcie',
            items: [
                {
                    __typename: 'NavigationItem',
                    label: 'Dokumentacja O2S',
                    url: 'https://www.openselfservice.com/',
                },
            ],
        },
    ],
    notification: {
        url: '/powiadomienia',
        label: 'Powiadomienia',
    },
    contextSwitcher: {
        label: 'Power Construction AG',
        clear: 'Wyczyść',
        apply: 'Zastosuj',
    },
};

const MOCK_HEADER_LOGOUT_EN: CMS.Model.Header.Header = {
    id: 'lwvbmnaayn6w7xy5soicv1k2',
    title: 'MOCK_HEADER_LOGOUT_EN',
    logo: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/logo.svg',
        alternativeText: 'Logo',
        width: 92,
        height: 24,
        name: 'Logo',
    },
    languageSwitcherLabel: 'Language',
    items: [
        {
            __typename: 'NavigationItem',
            label: 'Customer Portal',
            url: '/',
        },
        {
            __typename: 'NavigationItem',
            label: 'Help & Support',
            url: '/cases',
        },
    ],
};
const MOCK_HEADER_LOGOUT_DE: CMS.Model.Header.Header = {
    id: 'lwvbmnaayn6w7xy5soicv1k2',
    title: 'MOCK_HEADER_LOGOUT_DE',
    logo: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/logo.svg',
        alternativeText: 'Logo',
        width: 92,
        height: 24,
        name: 'Logo',
    },
    languageSwitcherLabel: 'Sprache',
    items: [
        {
            __typename: 'NavigationItem',
            label: 'Kunden Portal',
            url: '/',
        },
        {
            __typename: 'NavigationItem',
            label: 'Hilfe & Unterstützung',
            url: '/faelle',
        },
    ],
};
const MOCK_HEADER_LOGOUT_PL: CMS.Model.Header.Header = {
    id: 'lwvbmnaayn6w7xy5soicv1k2',
    title: 'MOCK_HEADER_LOGOUT_PL',
    logo: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/logo.svg',
        alternativeText: 'Logo',
        width: 92,
        height: 24,
        name: 'Logo',
    },
    languageSwitcherLabel: 'Język',
    items: [
        {
            __typename: 'NavigationItem',
            label: 'Portal Klienta',
            url: '/',
        },
        {
            __typename: 'NavigationItem',
            label: 'Pomoc & Wsparcie',
            url: '/zgloszenia',
        },
    ],
};

export const mapHeader = (id: string, locale: string): CMS.Model.Header.Header => {
    const headerList = [
        MOCK_HEADER_LOGON_EN,
        MOCK_HEADER_LOGON_DE,
        MOCK_HEADER_LOGON_PL,
        MOCK_HEADER_LOGOUT_EN,
        MOCK_HEADER_LOGOUT_DE,
        MOCK_HEADER_LOGOUT_PL,
    ];

    const header = headerList
        .filter((header) => header.title?.endsWith(locale.toUpperCase()))
        .find((header) => header.id === id);

    if (!header) {
        return MOCK_HEADER_LOGON_EN;
    }
    return header;
};
