import type { Meta, StoryObj } from '@storybook/nextjs';

import { BentoGridPure } from './BentoGrid.client';

const meta = {
    title: 'Blocks/BentoGrid',
    component: BentoGridPure,
} satisfies Meta<typeof BentoGridPure>;

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
        __typename: 'BentoGridBlock',
        id: 'bento-grid-1',
        preTitle: 'Bento grid',
        title: 'Feature-rich layout that captures attention',
        description:
            "Add a concise value statement that highlights your product's key features and benefits in a visually dynamic grid. Focus on creating balanced content blocks while keeping it under 2-3 lines. Align with your grid layout structure.",
        items: [
            {
                title: 'Feature title',
                description:
                    'Shortly describe how this feature solves a specific user problem. Focus on benefits rather than features.',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
                    width: 1920,
                    height: 1080,
                    alt: 'Hero Banner Image',
                    priority: true,
                },
                link: {
                    label: 'Learn more',
                    url: '/',
                    icon: 'ArrowRight',
                    variant: 'link',
                },
            },
            {
                title: 'Feature title',
                description:
                    'Shortly describe how this feature solves a specific user problem. Focus on benefits rather than features.',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
                    width: 1920,
                    height: 1080,
                    alt: 'Hero Banner Image',
                    priority: true,
                },
                link: {
                    label: 'Learn more',
                    url: '/',
                    icon: 'ArrowRight',
                    variant: 'link',
                },
            },
            {
                title: 'Feature title',
                description:
                    'Shortly describe how this feature solves a specific user problem. Focus on benefits rather than features.',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
                    width: 1920,
                    height: 1080,
                    alt: 'Hero Banner Image',
                    priority: true,
                },
                link: {
                    label: 'Learn more',
                    url: '/',
                    icon: 'ArrowRight',
                    variant: 'link',
                },
            },
            {
                title: 'Feature title',
                description:
                    'Shortly describe how this feature solves a specific user problem. Focus on benefits rather than features.',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
                    width: 1920,
                    height: 1080,
                    alt: 'Hero Banner Image',
                    priority: true,
                },
                link: {
                    label: 'Learn more',
                    url: '/',
                    icon: 'ArrowRight',
                    variant: 'link',
                },
            },
            {
                title: 'Feature title',
                description:
                    'Shortly describe how this feature solves a specific user problem. Focus on benefits rather than features.',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
                    width: 1920,
                    height: 1080,
                    alt: 'Hero Banner Image',
                    priority: true,
                },
                link: {
                    label: 'Learn more',
                    url: '/',
                    icon: 'ArrowRight',
                    variant: 'link',
                },
            },
            {
                title: 'Feature title',
                description:
                    'Shortly describe how this feature solves a specific user problem. Focus on benefits rather than features.',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
                    width: 1920,
                    height: 1080,
                    alt: 'Hero Banner Image',
                    priority: true,
                },
                link: {
                    label: 'Learn more',
                    url: '/',
                    icon: 'ArrowRight',
                    variant: 'link',
                },
            },
            {
                title: 'Feature title',
                description:
                    'Shortly describe how this feature solves a specific user problem. Focus on benefits rather than features.',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
                    width: 1920,
                    height: 1080,
                    alt: 'Hero Banner Image',
                    priority: true,
                },
                link: {
                    label: 'Learn more',
                    url: '/',
                    icon: 'ArrowRight',
                    variant: 'link',
                },
            },
        ],
    },
};
