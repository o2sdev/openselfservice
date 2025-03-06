import { CMS } from '@o2s/framework/modules';

const MOCK_FOOTER: CMS.Model.Footer.Footer = {
    id: 'laee0xa1zmm9uraev3hpruho',
    title: 'Legal and privacy',
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
    copyright: '© Companyname 2025',
};

export const mapFooter = (_locale: string): CMS.Model.Footer.Footer => {
    return MOCK_FOOTER;
};
