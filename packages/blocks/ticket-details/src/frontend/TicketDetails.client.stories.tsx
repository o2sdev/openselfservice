import { Markdown, Title } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

import readme from '../../README.md?raw';

import { TicketDetailsPure } from './TicketDetails.client';

const meta = {
    title: 'Blocks/TicketDetails',
    component: TicketDetailsPure,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Markdown>{readme}</Markdown>
                </>
            ),
            description: {
                component: readme,
            },
        },
    },
} satisfies Meta<typeof TicketDetailsPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        locale: 'en',
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzI1MTg1fQ.fW-LNyCRKfdGQZmZGSRCK6aGgPuR2Rf3S1bqlJ78yBQ',
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
        __typename: 'TicketDetailsBlock',
        id: 'ticket-details-1',
        data: {
            id: {
                label: 'EL-465-920-678',
                title: 'Case ID',
                value: 'EL-465-920-678',
            },
            topic: {
                label: 'Tool Repair',
                title: 'Topic',
                value: 'TOOL_REPAIR',
            },
            type: {
                label: 'Urgent',
                title: 'Case type',
                value: 'URGENT',
            },
            status: {
                label: 'Under consideration',
                title: 'Status',
                value: 'OPEN',
            },
            properties: {
                title: 'Case details',
                items: [
                    {
                        id: 'description',
                        value: '\n<p>\nTool repair request for TE 70-ATC/AVR hammer drill. The device is not functioning properly - it stops during operation with Error E12 displayed.\n</p>\n<p>\nTool serial number: 3456789. Purchase date: 06/15/2023. Under Fleet Management program.\n</p>\n            ',
                        label: 'Additional notes',
                    },
                    {
                        id: 'address',
                        value: '123 Construction Site, Building A, Floor 3',
                        label: 'Service address',
                    },
                    {
                        id: 'contact',
                        value: 'John Contractor, +1 555-123-4567',
                        label: 'Form of contact',
                    },
                ],
            },
            createdAt: '21:06 Today',
            updatedAt: '21:06 Today',
            comments: {
                title: 'Comments',
                items: [
                    {
                        author: {
                            name: 'Technical Support',
                            email: 'technical@support.com',
                        },
                        date: '12/12/2024',
                        content:
                            '\nInitial assessment indicates possible motor control issue. Repair estimated to take 3-5 business days.\n',
                    },
                ],
            },
            attachments: {
                title: 'Attachments',
                items: [
                    {
                        name: 'Repair_Assessment.pdf',
                        url: 'https://example.com/attachment.pdf',
                        size: 1024,
                        author: {
                            name: 'Technical Support',
                            email: 'technical@support.com',
                        },
                        date: '12/12/2024',
                        ariaLabel: 'Download Repair_Assessment.pdf',
                    },
                ],
            },
        },
        ticketId: 'EL-465-920-678',
    },
};
