import type { Meta, StoryObj } from '@storybook/nextjs';

import { HeroSectionPure } from './HeroSection.client';

const meta = {
    title: 'Blocks/HeroSection',
    component: HeroSectionPure,
} satisfies Meta<typeof HeroSectionPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        locale: 'en',
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzYzNjYzfQ.N5ELhAtDcmunl5IxVlaEUXy-k-8UrtSckf4nc2GMpOY',
        routing: {
            locales: ['en', 'de', 'pl'],
            defaultLocale: 'en',
            pathnames: {},
        },
        __typename: 'HeroSectionBlock',
        id: 'hero-section-1',
        preTitle: 'Hero Section',
        title: "Headline that solves user's {highlightedText}",
        highlightedText: 'main problem',
        subtitle: 'Subtitle that explains the headline',
        description:
            'Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.',
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
            width: 1920,
            height: 1080,
            alt: 'Hero Section Image',
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
        headingType: 'h1',
        inverted: false,
        labels: {
            showMore: 'Show more',
        },
    },
};
