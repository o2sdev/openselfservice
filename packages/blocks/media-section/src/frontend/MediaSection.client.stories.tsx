import type { Meta, StoryObj } from '@storybook/nextjs';

import { MediaSectionPure } from './MediaSection.client';

const meta = {
    title: 'Blocks/MediaSection',
    component: MediaSectionPure,
} satisfies Meta<typeof MediaSectionPure>;

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
        __typename: 'MediaSectionBlock',
        id: 'media-section-1',
        preTitle: 'Media section',
        title: 'All-in-One Banking',
        description:
            'See how every feature works together to give you a seamless, secure, and modern banking experience.',
        media: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
            width: 1920,
            height: 1080,
            alt: 'Hero Banner Image',
            priority: true,
        },
        links: [
            {
                label: 'Learn more',
                url: '/',
                icon: 'ArrowRight',
                variant: 'primary',
            },
        ],
        labels: {
            play: 'Play',
            pause: 'Pause',
            mute: 'Mute',
            unmute: 'Unmute',
            showMore: 'Show more',
        },
    },
};
