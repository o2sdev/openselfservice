import type { Meta, StoryObj } from '@storybook/nextjs';

import { FeatureSectionGridPure } from './FeatureSectionGrid.client';

const meta = {
    title: 'Blocks/FeatureSectionGrid',
    component: FeatureSectionGridPure,
} satisfies Meta<typeof FeatureSectionGridPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        locale: 'en',
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzYzNjAxfQ.ZhGRfXzrK5uqMsv-WBSIbLPfrrOLXoMaLKEuxUQKgdQ',
        routing: {
            locales: ['en', 'de', 'pl'],
            defaultLocale: 'en',
            pathnames: {},
        },
        __typename: 'FeatureSectionGridBlock',
        id: 'feature-section-grid-1',
        preTitle: 'Feature section grid',
        title: 'Why Choose Our Accounts?',
        description:
            'Experience banking designed for your lifestyle—secure, convenient, and packed with features that help you manage and grow your money.',
        featureList: [
            {
                title: 'Instant Access',
                description: 'Open and manage your account from anywhere, at any time, with our intuitive mobile app.',
                icon: 'Check',
            },
            {
                title: 'Instant Access',
                description: 'Open and manage your account from anywhere, at any time, with our intuitive mobile app.',
                icon: 'Check',
            },
            {
                title: 'Instant Access',
                description: 'Open and manage your account from anywhere, at any time, with our intuitive mobile app.',
                icon: 'Check',
            },
            {
                title: 'Instant Access',
                description: 'Open and manage your account from anywhere, at any time, with our intuitive mobile app.',
                icon: 'Check',
            },
            {
                title: 'Benefit driven feature title',
                description:
                    'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                icon: 'AlarmClockCheck',
            },
            {
                title: 'Benefit driven feature title',
                description: 'Description 3',
                icon: 'Check',
            },
        ],
        inverted: false,
    },
};
