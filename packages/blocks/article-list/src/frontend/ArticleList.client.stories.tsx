import type { Meta, StoryObj } from '@storybook/nextjs';

import { ArticleListPure } from './ArticleList.client';

const meta = {
    title: 'Blocks/ArticleList',
    component: ArticleListPure,
} satisfies Meta<typeof ArticleListPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
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
        __typename: 'ArticleListBlock',
        id: 'article-list-1',
        title: 'Explore How-To Guides',
        description:
            'Discover step-by-step tutorials and helpful guides to get the most out of your products and solve common issues.',
        categoryLink: {
            url: '//help-and-support/warranty-and-repair',
            label: 'See all articles',
        },
        items: {
            data: [
                {
                    id: 'art-001',
                    slug: '/help-and-support/warranty-and-repair/managing-your-powerpro-tools-online',
                    permissions: [],
                    createdAt: '05/12/2023',
                    updatedAt: '06/15/2023',
                    title: 'Managing Your PowerPro Tools Online',
                    lead: 'Learn how to efficiently manage your PowerPro tools through our self-service portal available 24/7.',
                    tags: ['tag1', 'tag2'],
                    image: {
                        url: 'https://raw.githubusercontent.com/dxpdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-managing-thumb.jpg',
                        width: 640,
                        height: 427,
                        alt: '',
                    },
                    thumbnail: {
                        url: 'https://example.com/images/tool-management-thumb.jpg',
                        alt: '',
                    },
                    category: {
                        id: 'warranty-and-repair',
                        title: 'Warranty & Repair',
                    },
                    author: {
                        name: 'John Smith',
                        position: 'Content Creator',
                        avatar: {
                            url: 'https://avatar.iran.liara.run/public/boy',
                            alt: '',
                        },
                    },
                },
                {
                    id: 'art-011',
                    slug: '/help-and-support/warranty-and-repair/powerpro-tool-certification-program',
                    permissions: [],
                    createdAt: '09/12/2023',
                    updatedAt: '09/12/2023',
                    title: 'PowerPro Tool Certification Program',
                    lead: 'Learn about our certification program ensuring your tools meet industry safety standards.',
                    tags: ['certification', 'safety', 'standards'],
                    image: {
                        url: 'https://raw.githubusercontent.com/dxpdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-managing-thumb.jpg',
                        width: 640,
                        height: 427,
                        alt: 'PowerPro certification program',
                    },
                    thumbnail: {
                        url: 'https://raw.githubusercontent.com/dxpdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-managing-thumb.jpg',
                        alt: 'PowerPro certification program thumbnail',
                    },
                    category: {
                        id: 'warranty-and-repair',
                        title: 'Warranty & Repair',
                    },
                    author: {
                        name: 'John Smith',
                        position: 'Certification Specialist',
                        avatar: {
                            url: 'https://avatar.iran.liara.run/public/boy',
                            alt: '',
                        },
                    },
                },
                {
                    id: 'art-004',
                    slug: '/help-and-support/warranty-and-repair/understanding-powerpro-warranty',
                    permissions: [],
                    createdAt: '06/24/2023',
                    updatedAt: '08/15/2023',
                    title: 'Understanding Your PowerPro Warranty',
                    lead: "Everything you need to know about PowerPro's warranty coverage for your professional tools.",
                    tags: ['warranty', 'coverage', 'terms'],
                    image: {
                        url: 'https://raw.githubusercontent.com/dxpdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
                        width: 640,
                        height: 427,
                        alt: 'PowerPro warranty coverage',
                    },
                    thumbnail: {
                        url: 'https://raw.githubusercontent.com/dxpdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
                        alt: 'PowerPro warranty coverage thumbnail',
                    },
                    category: {
                        id: 'warranty-and-repair',
                        title: 'Warranty & Repair',
                    },
                    author: {
                        name: 'Emily Wilson',
                        position: 'Warranty Specialist',
                        avatar: {
                            url: 'https://avatar.iran.liara.run/public/girl',
                            alt: '',
                        },
                    },
                },
                {
                    id: 'art-012',
                    slug: '/help-and-support/warranty-and-repair/preventive-maintenance-guide',
                    permissions: [],
                    createdAt: '08/20/2023',
                    updatedAt: '09/05/2023',
                    title: 'Preventive Maintenance Guide for PowerPro Tools',
                    lead: "Learn how regular maintenance can extend your tool's lifespan and prevent costly repairs.",
                    tags: ['maintenance', 'prevention', 'care'],
                    image: {
                        url: 'https://raw.githubusercontent.com/dxpdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-safety-thumb.jpg',
                        width: 640,
                        height: 427,
                        alt: 'Preventive maintenance of PowerPro tools',
                    },
                    thumbnail: {
                        url: 'https://raw.githubusercontent.com/dxpdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-safety-thumb.jpg',
                        alt: 'Preventive maintenance thumbnail',
                    },
                    category: {
                        id: 'warranty-and-repair',
                        title: 'Warranty & Repair',
                    },
                    author: {
                        name: 'Robert Chen',
                        position: 'Maintenance Specialist',
                        avatar: {
                            url: 'https://avatar.iran.liara.run/public/boy',
                            alt: '',
                        },
                    },
                },
            ],
            total: 4,
        },
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzA4NTk1fQ.h3meFqpRjcnUwt2mGCuznazlWExkarqYZ2oNKHEgYzE',
        locale: 'en',
    },
};
