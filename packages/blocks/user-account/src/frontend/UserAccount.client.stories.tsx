import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { UserAccountPure } from './UserAccount.client';

const meta = {
    title: 'Blocks/UserAccount',
    component: UserAccountPure,
} satisfies Meta<typeof UserAccountPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        locale: 'en',
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzI1MzQwfQ.4kQBQY4CcVt6yrvdB5MuD759HkoGhAXnRFyRi_jGu2k',

        routing: {
            locales: ['en', 'de', 'pl'],
            defaultLocale: 'en',
            pathnames: {
                '/login': {
                    en: '/sign-in',
                    de: '/einloggen',
                    pl: '/logowanie',
                },
            },
        },
        __typename: 'UserAccountBlock',
        id: 'user-account-1',
        fields: [
            {
                __typename: 'Input',
                id: 'first-name-1',
                name: 'firstName',
                label: 'First Name',
                placeholder: 'Enter first name',
                errorMessages: [
                    {
                        type: 'required',
                        description: 'First name is required',
                        id: 'required-1',
                        name: 'Required',
                    },
                    {
                        type: 'matches',
                        description: 'First name can contain only letters, numbers, dots and hyphens',
                        id: 'matches-1',
                        name: 'Matches',
                    },
                    {
                        type: 'min',
                        description: 'First name must be at least 3 characters long',
                        id: 'min-1',
                        name: 'Min',
                    },
                ],
            },
            {
                __typename: 'Input',
                id: 'last-name-1',
                name: 'lastName',
                label: 'Last Name',
                placeholder: 'Enter last name',
                errorMessages: [
                    {
                        type: 'required',
                        description: 'Last name is required',
                        id: 'required-1',
                        name: 'Required',
                    },
                ],
            },
            {
                __typename: 'Input',
                id: 'email-1',
                name: 'email',
                label: 'Email',
                placeholder: 'Enter email',
                errorMessages: [
                    {
                        type: 'required',
                        description: 'Email is required',
                        id: 'required-1',
                        name: 'Required',
                    },
                ],
            },
        ],
        labels: {
            edit: 'Edit',
            save: 'Save',
            cancel: 'Cancel',
            delete: 'Delete',
            logOut: 'Log out',
        },
        basicInformationTitle: 'Basic Information',
        basicInformationDescription:
            'Update your personal information to keep your account details current and accurate.',
        user: {
            id: 'admin-1',
            username: 'jane@example.com',
            email: 'jane@example.com',
            firstName: 'Jane',
            lastName: 'Doe',
            roles: [
                {
                    customer: {
                        id: 'cust-003',
                        name: 'Tech Solutions Inc',
                        clientType: 'B2B',
                    },
                    // @ts-expect-error it's a valid value, but it expects to use an enum here
                    roles: ['selfservice_org_user'],
                },
                {
                    customer: {
                        id: 'cust-004',
                        name: 'Digital Services GmbH',
                        clientType: 'B2B',
                    },
                    // @ts-expect-error it's a valid value, but it expects to use an enum here
                    roles: ['selfservice_org_user', 'selfservice_org_admin'],
                },
            ],
            customers: [],
        },
        title: 'User Account',
        onSignOut: () => {},
    },
};
