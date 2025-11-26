import type { Meta, StoryObj } from '@storybook/nextjs';

import { CtaSectionPure } from './CtaSection.client';

const meta = {
    title: 'Blocks/CtaSection',
    component: CtaSectionPure,
} satisfies Meta<typeof CtaSectionPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        locale: 'en',
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzYyNTkyfQ.xhIuJd5OFROmonRGd26IPIDxi1WwFzGQOCV-CU2aObg',
        routing: {
            locales: ['en', 'de', 'pl'],
            defaultLocale: 'en',
            pathnames: {},
        },
        __typename: 'CtaSectionBlock',
        id: 'cta-section-1',
        preTitle: 'CTA section',
        title: 'Action-driving headline that creates urgency',
        description:
            'Add one or two compelling sentences that reinforce your main value proposition and overcome final objections.',
        inverted: false,
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
    },
};
