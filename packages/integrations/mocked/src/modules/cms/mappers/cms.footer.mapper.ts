import { CMS } from '@o2s/framework/modules';

const MOCK_FOOTER_EN: CMS.Model.Footer.Footer = {
    id: 'laee0xa1zmm9uraev3hpruho',
    title: 'Legal and privacy',
    logo: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/logo.svg',
        alternativeText: 'Logo',
        width: 92,
        height: 24,
        name: 'Logo',
    },
    items: [
        {
            __typename: 'NavigationGroup',
            title: 'Privacy Policy',
            items: [
                { label: 'Privacy Policy 1', url: '/notifications', __typename: 'NavigationItem' },
                { label: 'Privacy Policy 2', url: '/invoices', __typename: 'NavigationItem' },
            ],
        },
        {
            __typename: 'NavigationGroup',
            title: 'Terms of Service',
            items: [
                { label: 'Terms of Service 1', url: '/notifications', __typename: 'NavigationItem' },
                { label: 'Terms of Service 2', url: '/invoices', __typename: 'NavigationItem' },
            ],
        },
        {
            __typename: 'NavigationGroup',
            title: 'Cookies Settings',
            items: [
                { label: 'Cookies Settings 1', url: '/notifications', __typename: 'NavigationItem' },
                { label: 'Cookies Settings 2', url: '/invoices', __typename: 'NavigationItem' },
            ],
        },
    ],
    copyright: '© HyPro GmbH 2025',
};

const MOCK_FOOTER_PL: CMS.Model.Footer.Footer = {
    id: 'laee0xa1zmm9uraev3hpruho',
    title: 'Informacje prawne i prywatność',
    logo: {
        url: 'https://strapi-oss.dev.hycom.pl/uploads/logo_34207ab71f.svg',
        alternativeText: 'Logo',
        width: 92,
        height: 24,
        name: 'Logo',
    },
    items: [
        {
            __typename: 'NavigationGroup',
            title: 'Polityka Prywatności',
            items: [
                { label: 'Polityka Prywatności 1', url: '/powiadomienia', __typename: 'NavigationItem' },
                { label: 'Polityka Prywatności 2', url: '/rachunki', __typename: 'NavigationItem' },
            ],
        },
        {
            __typename: 'NavigationGroup',
            title: 'Warunki Korzystania',
            items: [
                { label: 'Warunki Korzystania 1', url: '/powiadomienia', __typename: 'NavigationItem' },
                { label: 'Warunki Korzystania 2', url: '/rachunki', __typename: 'NavigationItem' },
            ],
        },
        {
            __typename: 'NavigationGroup',
            title: 'Ustawienia Plików Cookie',
            items: [
                { label: 'Ustawienia Plików Cookie 1', url: '/powiadomienia', __typename: 'NavigationItem' },
                { label: 'Ustawienia Plików Cookie 2', url: '/rachunki', __typename: 'NavigationItem' },
            ],
        },
    ],
    copyright: '© HyPro GmbH 2025',
};

const MOCK_FOOTER_DE: CMS.Model.Footer.Footer = {
    id: 'laee0xa1zmm9uraev3hpruho',
    title: 'Rechtliches und Datenschutz',
    logo: {
        url: 'https://strapi-oss.dev.hycom.pl/uploads/logo_34207ab71f.svg',
        alternativeText: 'Logo',
        width: 92,
        height: 24,
        name: 'Logo',
    },
    items: [
        {
            __typename: 'NavigationGroup',
            title: 'Datenschutzrichtlinie',
            items: [
                { label: 'Datenschutzrichtlinie 1', url: '/benachrichtigungen', __typename: 'NavigationItem' },
                { label: 'Datenschutzrichtlinie 2', url: '/invoices', __typename: 'NavigationItem' },
            ],
        },
        {
            __typename: 'NavigationGroup',
            title: 'Nutzungsbedingungen',
            items: [
                { label: 'Nutzungsbedingungen 1', url: '/benachrichtigungen', __typename: 'NavigationItem' },
                { label: 'Nutzungsbedingungen 2', url: '/invoices', __typename: 'NavigationItem' },
            ],
        },
        {
            __typename: 'NavigationGroup',
            title: 'Cookie-Einstellungen',
            items: [
                { label: 'Cookie-Einstellungen 1', url: '/benachrichtigungen', __typename: 'NavigationItem' },
                { label: 'Cookie-Einstellungen 2', url: '/invoices', __typename: 'NavigationItem' },
            ],
        },
    ],
    copyright: '© HyPro GmbH 2025',
};

export const mapFooter = (locale: string): CMS.Model.Footer.Footer => {
    switch (locale) {
        case 'pl':
            return MOCK_FOOTER_PL;
        case 'de':
            return MOCK_FOOTER_DE;
        default:
            return MOCK_FOOTER_EN;
    }
};
