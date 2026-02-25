import { CMS } from '@o2s/framework/modules';

const MOCK_HEADER_EN: CMS.Model.Header.Header = {
    id: 'fqj6nnyk4irqq5b7rnc4ogsj',
    title: 'MOCK_HEADER_EN',
    logo: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/logo_personal.svg',
        alt: 'Logo',
        width: 92,
        height: 24,
    },
    contextSwitcher: {
        showContextSwitcher: true,
        closeLabel: 'Close',
    },
    languageSwitcherLabel: 'Language',
    mobileMenuLabel: {
        open: 'Open menu',
        close: 'Close Menu',
    },
    items: [
        {
            __typename: 'NavigationGroup',
            title: 'Personal',
            url: '/personal',
            items: [
                {
                    __typename: 'NavigationItem',
                    label: 'Accounts',
                    url: '/personal/accounts',
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Cards',
                    url: '/personal/cards',
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Insurance',
                    url: '/personal/insurance',
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Help and Support',
                    url: '/personal/help-and-support',
                },
            ],
        },
        {
            __typename: 'NavigationGroup',
            title: 'Business',
            url: '/business',
            items: [
                {
                    __typename: 'NavigationItem',
                    label: 'Accounts',
                    url: '/business/accounts',
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Cards',
                    url: '/business/cards',
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Help and Support',
                    url: '/business/help-and-support',
                },
            ],
        },
    ],
};
const MOCK_HEADER_DE: CMS.Model.Header.Header = {
    id: 'fqj6nnyk4irqq5b7rnc4ogsj',
    title: 'MOCK_HEADER_DE',
    logo: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/logo_personal.svg',
        alt: 'Logo',
        width: 92,
        height: 24,
    },
    contextSwitcher: {
        showContextSwitcher: true,
        closeLabel: 'Schließen',
    },
    languageSwitcherLabel: 'Sprache',
    mobileMenuLabel: {
        open: 'Menü öffnen',
        close: 'Menü schließen',
    },
    items: [
        {
            __typename: 'NavigationGroup',
            title: 'Persönlich',
            url: '/personlich',
            items: [
                {
                    __typename: 'NavigationItem',
                    label: 'Konten',
                    url: '/personlich/konten',
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Karten',
                    url: '/personlich/karten',
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Versicherungen',
                    url: '/personlich/versicherungen',
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Hilfe und Support',
                    url: '/personlich/hilfe-und-support',
                },
            ],
        },
        {
            __typename: 'NavigationGroup',
            title: 'Geschäftlich',
            url: '/geschaftlich',
            items: [
                {
                    __typename: 'NavigationItem',
                    label: 'Konten',
                    url: '/geschaftlich/konten',
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Karten',
                    url: '/geschaftlich/karten',
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Hilfe und Support',
                    url: '/geschaftlich/hilfe-und-support',
                },
            ],
        },
    ],
};

const MOCK_HEADER_PL: CMS.Model.Header.Header = {
    id: 'fqj6nnyk4irqq5b7rnc4ogsj',
    title: 'MOCK_HEADER_PL',
    logo: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/logo_personal.svg',
        alt: 'Logo',
        width: 92,
        height: 24,
    },
    contextSwitcher: {
        showContextSwitcher: true,
        closeLabel: 'Zamknij',
    },
    languageSwitcherLabel: 'Język',
    mobileMenuLabel: {
        open: 'Otwórz menu',
        close: 'Zamknij menu',
    },
    items: [
        {
            __typename: 'NavigationGroup',
            title: 'Indywidualny',
            url: '/indywidualny',
            items: [
                {
                    __typename: 'NavigationItem',
                    label: 'Konta',
                    url: '/indywidualny/konta',
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Karty',
                    url: '/indywidualny/karty',
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Ubezpieczenia',
                    url: '/indywidualny/ubezpieczenia',
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Pomoc i wsparcie',
                    url: '/indywidualny/pomoc-i-wsparcie',
                },
            ],
        },
        {
            __typename: 'NavigationGroup',
            title: 'Firma',
            url: '/firma',
            items: [
                {
                    __typename: 'NavigationItem',
                    label: 'Konta',
                    url: '/firma/konta',
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Karty',
                    url: '/firma/karten',
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Pomoc i wsparcie',
                    url: '/firma/pomoc-i-wsparcie',
                },
            ],
        },
    ],
};

export const mapHeader = (id: string, locale: string): CMS.Model.Header.Header => {
    const headerList = [MOCK_HEADER_EN, MOCK_HEADER_DE, MOCK_HEADER_PL];

    const header = headerList
        .filter((header) => header.title?.endsWith(locale.toUpperCase()))
        .find((header) => header.id === id);

    if (!header) {
        return MOCK_HEADER_EN;
    }
    return header;
};
