import type { Meta, StoryObj } from '@storybook/nextjs';

import { CategoryListPure } from './CategoryList.client';

const meta = {
    title: 'Blocks/CategoryList',
    component: CategoryListPure,
} satisfies Meta<typeof CategoryListPure>;

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
        __typename: 'CategoryListBlock',
        id: 'category-list-1',
        title: 'Browse by categories',
        description:
            'Explore our help topics organized by category to find the information you need quickly and easily.',
        items: [
            {
                id: 'warranty-and-repair',
                slug: '/help-and-support/warranty-and-repair',
                createdAt: '2023-05-12T08:30:00Z',
                updatedAt: '2023-06-15T14:25:00Z',
                title: 'Warranty & Repair',
                icon: 'Wrench',
                description:
                    'The Warranty & Repair category offers FAQs, troubleshooting guides, step-by-step tutorials, and support contacts to help users resolve issues and navigate services efficiently.',
            },
            {
                id: 'maintenance',
                slug: '/help-and-support/maintenance',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                title: 'Maintenance',
                icon: 'Wrench',
                description:
                    'The Maintenance category provides guides, tips, and best practices for keeping your PowerPro tools in optimal condition, ensuring longevity and peak performance.',
            },
            {
                id: 'safety',
                slug: '/help-and-support/safety',
                createdAt: '2023-07-15T09:45:00Z',
                updatedAt: '2023-08-25T13:20:00Z',
                title: 'Safety',
                icon: 'ShieldCheck',
                description:
                    'The Safety category offers essential guidelines, precautions, and best practices to ensure safe operation of PowerPro tools, preventing accidents and injuries.',
            },
            {
                id: 'accessories',
                slug: '/help-and-support/accessories',
                createdAt: '2023-08-20T11:30:00Z',
                updatedAt: '2023-09-30T15:45:00Z',
                title: 'Accessories',
                icon: 'ShieldCheck',
                description:
                    'The Accessories category showcases the wide range of attachments, add-ons, and enhancements available for PowerPro tools, helping you expand functionality and tackle specialized projects.',
            },
            {
                id: 'troubleshooting',
                slug: '/help-and-support/troubleshooting',
                createdAt: '2023-08-20T11:30:00Z',
                updatedAt: '2023-09-30T15:45:00Z',
                title: 'Troubleshooting',
                icon: 'Settings',
                description:
                    'The Troubleshooting category provides solutions to common problems and issues with PowerPro tools, offering step-by-step guides, troubleshooting tips, and support contacts to help users resolve issues quickly and efficiently.',
            },
        ],
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzA5Mzk4fQ.CKi8ecaYnBd04U_URWMt0pp2Ms4E01_bWUvzv3JpSzY',
        locale: 'en',
    },
};
