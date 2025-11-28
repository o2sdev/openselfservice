import type { Meta, StoryObj } from '@storybook/nextjs';

import { FeatureSectionPure } from './FeatureSection.client';

const meta = {
    title: 'Blocks/FeatureSection',
    component: FeatureSectionPure,
} satisfies Meta<typeof FeatureSectionPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        locale: 'en',
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzYzNTUxfQ.-7ejcmWaQHKTyo31VRRO48YnbOkxJ5C3gWxpdcu9rBE',
        routing: {
            locales: ['en', 'de', 'pl'],
            defaultLocale: 'en',
            pathnames: {},
        },
        __typename: 'FeatureSectionBlock',
        id: 'feature-section-1',
        preTitle: 'Feature section',
        title: "Headline that shows solution's impact on user success",
        featureList: [
            {
                title: 'Benefit driven feature title',
                description:
                    'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
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
        inverted: true,
        labels: {
            showMore: 'Show more',
        },
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
            width: 1920,
            height: 1080,
            alt: 'Hero Banner Image',
            priority: true,
        },
        links: [
            {
                label: 'Get started',
                icon: 'ArrowRight',
                description: 'Button 1 description',
                url: '/',
                variant: 'primary',
            },
            {
                label: 'Explore',
                description: 'Button 2 description',
                icon: 'ArrowRight',
                url: '/',
                variant: 'link',
            },
        ],
        iconBorder: false,
    },
};
