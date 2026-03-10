import { CMS } from '@o2s/framework/modules';

const MOCK_FOOTER_EN: CMS.Model.Footer.Footer = {
    id: 'laee0xa1zmm9uraev3hpruho',
    title: 'Legal and privacy',
    logo: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/logo.svg',
        alt: 'Logo',
        width: 92,
        height: 24,
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
                    url: '/help-and-support',
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
                    url: '/help-and-support',
                },
            ],
        },
    ],
    copyright: '© Open Self Service 2025',
};

const MOCK_FOOTER_PL: CMS.Model.Footer.Footer = {
    id: 'laee0xa1zmm9uraev3hpruho',
    title: 'Informacje prawne i prywatność',
    logo: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/logo.svg',
        alt: 'Logo',
        width: 92,
        height: 24,
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
                    url: '/pomoc-i-wsparcie',
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
                    url: '/firma/karty',
                },
                {
                    __typename: 'NavigationItem',
                    label: 'Pomoc i wsparcie',
                    url: '/pomoc-i-wsparcie',
                },
            ],
        },
    ],
    copyright: '© Open Self Service 2025',
};

const MOCK_FOOTER_DE: CMS.Model.Footer.Footer = {
    id: 'laee0xa1zmm9uraev3hpruho',
    title: 'Rechtliches und Datenschutz',
    logo: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/logo.svg',
        alt: 'Logo',
        width: 92,
        height: 24,
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
                    url: '/hilfe-und-support',
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
                    url: '/hilfe-und-support',
                },
            ],
        },
    ],
    copyright: '© Open Self Service 2025',
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
