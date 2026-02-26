import { Markdown, Title } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

import readme from '../../README.md?raw';

import { TicketRecentPure } from './TicketRecent.client';

const meta = {
    title: 'Blocks/TicketRecent',
    component: TicketRecentPure,
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
} satisfies Meta<typeof TicketRecentPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        locale: 'en',
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzI1MzQwfQ.4kQBQY4CcVt6yrvdB5MuD759HkoGhAXnRFyRi_jGu2k',
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
        __typename: 'TicketRecentBlock',
        id: 'ticket-recent-1',
        title: 'Recent activity in cases',
        details: 'Details',
        tickets: {
            data: [
                {
                    id: {
                        value: 'EL-465-920-678',
                    },
                    topic: {
                        value: 'TOOL_REPAIR',
                    },
                    type: {
                        value: 'URGENT',
                    },
                    status: {
                        value: 'OPEN',
                    },
                    createdAt: '21:08 Today',
                    updatedAt: '21:08 Today',
                    detailsUrl: '/cases/EL-465-920-678',
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
                },
                {
                    id: {
                        value: 'EL-465-920-677',
                    },
                    topic: {
                        value: 'FLEET_EXCHANGE',
                    },
                    type: {
                        value: 'STANDARD',
                    },
                    status: {
                        value: 'CLOSED',
                    },
                    createdAt: 'Yesterday',
                    updatedAt: 'Yesterday',
                    detailsUrl: '/cases/EL-465-920-677',
                    comments: {
                        title: 'Comments',
                        items: [
                            {
                                author: {
                                    name: 'Fleet Manager',
                                    email: 'fleet@support.com',
                                },
                                date: '21:08 Today',
                                content:
                                    '<p>Fleet exchange has been completed successfully. All 5 tools have been replaced with newer models as per the contract agreement.</p><p><a href="/invoices">View invoice</a></p>',
                            },
                            {
                                author: {
                                    name: 'Technical Support',
                                    email: 'technical@support.com',
                                },
                                date: '12/12/2024',
                                content:
                                    '\nDear Mr. Robert Johnson,\n\nWe have scheduled your fleet exchange for December 15th between 9:00 AM and 12:00 PM. Please ensure all 5 tools are available for collection:\n\n1. TE 60-A36 Hammer Drill (S/N: 456789)\n2. AG 125-A22 Angle Grinder (S/N: 567890)\n3. SFC 22-A Cordless Drill Driver (S/N: 678901)\n4. WSR 22-A Reciprocating Saw (S/N: 789012)\n5. SID 4-A22 Impact Driver (S/N: 890123)\n\nNew replacement tools will be delivered at the same time. Please have a company representative available to sign off on the exchange.\n\nKind regards,\nFleet Management Team\n',
                            },
                        ],
                    },
                },
                {
                    id: {
                        value: 'EL-465-920-676',
                    },
                    topic: {
                        value: 'CALIBRATION',
                    },
                    type: {
                        value: 'STANDARD',
                    },
                    status: {
                        value: 'IN_PROGRESS',
                    },
                    createdAt: '12/12/2024',
                    updatedAt: '12/14/2024',
                    detailsUrl: '/cases/EL-465-920-676',
                    comments: {
                        title: 'Comments',
                        items: [
                            {
                                author: {
                                    name: 'Calibration Specialist',
                                    email: 'calibration@support.com',
                                },
                                date: '12/12/2024',
                                content:
                                    '\n<p>\nCalibration in progress. Initial testing shows device is measuring with 2mm deviation over 20m distance. Will adjust and recalibrate.\n</p>\n<p>\nEstimated completion: December 16th, 2024.\n<a href="/cases">View calibration standards</a>\n</p>\n',
                            },
                            {
                                author: {
                                    name: 'Technical Support',
                                    email: 'technical@support.com',
                                },
                                date: '12/12/2024',
                                content:
                                    '\n<p>\nCalibration request received. Your PD-S device has been added to the calibration schedule for December 14th. Please deliver the device to our Calibration Center by December 13th.\n</p>\n<p>\nWould you like a temporary replacement device during the calibration period?\n</p>\n',
                            },
                        ],
                    },
                },
            ],
        },
    },
};
