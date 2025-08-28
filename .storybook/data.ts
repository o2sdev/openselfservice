import { GlobalProviderProps } from '@o2s/ui/providers/GlobalProvider';

export const globalProviderConfig: GlobalProviderProps['config'] = {
    locales: [
        {
            value: 'en',
            label: 'EN',
        },
        {
            value: 'de',
            label: 'DE',
        },
        {
            value: 'pl',
            label: 'PL',
        },
    ],
    common: {
        header: {
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
                        {
                            __typename: 'NavigationItem',
                            label: 'Services',
                            url: '/services',
                        },
                        {
                            __typename: 'NavigationItem',
                            label: 'Orders',
                            url: '/orders',
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
        },
        footer: {
            id: 'laee0xa1zmm9uraev3hpruho',
            title: 'Legal and privacy',
            logo: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/logo.svg',
                alt: 'Logo',
                width: 92,
                height: 24,
            },
            items: [
                {
                    __typename: 'NavigationGroup',
                    title: 'Privacy Policy',
                    items: [
                        {
                            label: 'Privacy Policy 1',
                            url: 'https://hycom.digital/privacy-policy',
                            __typename: 'NavigationItem',
                        },
                        {
                            label: 'Privacy Policy 2',
                            url: 'https://hycom.digital/privacy-policy',
                            __typename: 'NavigationItem',
                        },
                    ],
                },
                {
                    __typename: 'NavigationGroup',
                    title: 'Terms of Service',
                    items: [
                        {
                            label: 'Terms of Service 1',
                            url: 'https://hycom.digital/terms-and-conditions',
                            __typename: 'NavigationItem',
                        },
                        {
                            label: 'Terms of Service 2',
                            url: 'https://hycom.digital/terms-and-conditions',
                            __typename: 'NavigationItem',
                        },
                    ],
                },
                {
                    __typename: 'NavigationGroup',
                    title: 'Cookies Settings',
                    items: [
                        {
                            label: 'Cookies Settings 1',
                            url: '/',
                            __typename: 'NavigationItem',
                        },
                        {
                            label: 'Cookies Settings 2',
                            url: '/',
                            __typename: 'NavigationItem',
                        },
                    ],
                },
            ],
            copyright: '© Open Self Service 2025',
        },
    },
    labels: {
        errors: {
            requestError: {
                title: 'Uh oh! Something went wrong.',
                content: 'There was a problem with your request.',
            },
        },
        dates: {
            today: 'Today',
            yesterday: 'Yesterday',
        },
        actions: {
            showMore: 'Show more',
            showLess: 'Show less',
            show: 'Show',
            hide: 'Hide',
            edit: 'Edit',
            save: 'Save',
            cancel: 'Cancel',
            delete: 'Delete',
            logOut: 'Log out',
            settings: 'Settings',
            renew: 'Renew',
            details: 'Details',
        },
    },
};

export const globalProviderLabels: GlobalProviderProps['labels'] = {
    errors: {
        requestError: {
            title: 'Uh oh! Something went wrong.',
            content: 'There was a problem with your request.',
        },
    },
    dates: {
        today: 'Today',
        yesterday: 'Yesterday',
    },
    actions: {
        showMore: 'Show more',
        showLess: 'Show less',
        show: 'Show',
        hide: 'Hide',
        edit: 'Edit',
        save: 'Save',
        cancel: 'Cancel',
        delete: 'Delete',
        logOut: 'Log out',
        settings: 'Settings',
        renew: 'Renew',
        details: 'Details',
    },
};
