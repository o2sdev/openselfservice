import type { Meta, StoryObj } from '@storybook/nextjs';

import { PricingSectionPure } from './PricingSection.client';

const meta = {
    title: 'Blocks/PricingSection',
    component: PricingSectionPure,
} satisfies Meta<typeof PricingSectionPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        locale: 'en',
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzYzNzkyfQ.1Yt80FKdOW8FmZ_-nUM60SuKXFEGXJ0jxHvTjZ26FuM',
        routing: {
            locales: ['en', 'de', 'pl'],
            defaultLocale: 'en',
            pathnames: {},
        },
        __typename: 'PricingSectionBlock',
        id: 'pricing-section-1',
        title: 'Accounts',
        subtitle: 'Subtitle',
        description: 'Choose the right account for your needs and enjoy simple, secure banking every day.',
        headingType: 'h1',
        pricingList: [
            {
                title: 'Everyday account',
                description: 'A flexible account for daily banking, designed to managing your money effortless.',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
                    width: 1920,
                    height: 1080,
                    alt: 'Pricing section image',
                    priority: true,
                },
                price: {
                    currency: 'USD',
                    value: 0.99,
                },
                isPromoted: false,
                links: [
                    {
                        label: 'Get started',
                        icon: '',
                        description: 'Learn more about our pricing',
                        url: '/',
                        variant: 'secondary',
                    },
                    {
                        label: 'Learn more',
                        description: 'Learn more about our pricing',
                        icon: 'ArrowRight',
                        url: '/',
                        variant: 'link',
                    },
                ],
                featureListTitle: 'What’s included:',
                featureList: [
                    {
                        title: 'Instant account opening with no paperwork.',
                        description:
                            'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                        icon: 'Check',
                    },
                    {
                        title: '24/7 in-app support from banking experts',
                        description:
                            'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                        icon: 'Check',
                    },
                ],
            },
            {
                title: 'Savings Account',
                description: 'Grow your wealth with an account built for easy saving and smart financial planning',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
                    width: 1920,
                    height: 1080,
                    alt: 'Pricing section image',
                    priority: true,
                },
                price: {
                    currency: 'USD',
                    value: 999.99,
                },
                tags: [
                    {
                        label: 'Most popular',
                        variant: 'default',
                    },
                ],
                links: [
                    {
                        label: 'Get started',
                        icon: '',
                        description: 'Learn more about our pricing',
                        url: '/',
                        variant: 'primary',
                    },
                    {
                        label: 'Learn more',
                        description: 'Learn more about our pricing',
                        icon: 'ArrowRight',
                        url: '/',
                        variant: 'link',
                    },
                ],
                isPromoted: true,
                featureListTitle: 'Everything in Everyday account, plus:',
                featureList: [
                    {
                        title: 'Automated savings tools to help you reach your goals',
                        description:
                            'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                        icon: 'Check',
                    },
                    {
                        title: 'Higher interest rates than everyday accounts',
                        description:
                            'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                        icon: 'Check',
                    },
                    {
                        title: 'Personalized budgeting and spending insights',
                        description:
                            'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                        icon: 'Check',
                    },
                ],
            },
            {
                title: 'Savings Account',
                description: 'Grow your wealth with an account built for easy saving and smart financial planning',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/sign-in.jpg',
                    width: 1920,
                    height: 1080,
                    alt: 'Pricing section image',
                    priority: true,
                },
                price: {
                    currency: 'USD',
                    value: 10,
                },
                links: [
                    {
                        label: 'Get started',
                        icon: '',
                        description: 'Learn more about our pricing',
                        url: '/',
                        variant: 'secondary',
                    },
                    {
                        label: 'Learn more',
                        description: 'Learn more about our pricing',
                        icon: 'ArrowRight',
                        url: '/',
                        variant: 'link',
                    },
                ],
                isPromoted: false,
                featureListTitle: 'Everything in Everyday account, plus:',
                featureList: [
                    {
                        title: 'Automated savings tools to help you reach your goals',
                        description:
                            'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                        icon: 'Check',
                    },
                    {
                        title: 'Higher interest rates than everyday accounts',
                        description:
                            'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                        icon: 'Check',
                    },
                    {
                        title: 'Personalized budgeting and spending insights',
                        description:
                            'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                        icon: 'Check',
                    },
                ],
            },
        ],
    },
};
