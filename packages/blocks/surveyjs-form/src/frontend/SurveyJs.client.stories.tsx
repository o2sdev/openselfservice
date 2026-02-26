import { Markdown, Title } from '@storybook/addon-docs/blocks';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

import readme from '../../README.md?raw';

import { SurveyJsPure } from './SurveyJs.client';

const meta = {
    title: 'Blocks/SurveyJsForm',
    component: SurveyJsPure,
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
} satisfies Meta<typeof SurveyJsPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        locale: 'en',
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzI1MDg5fQ.MCRsA8uN75p3eEoUlT8L4wzOprmPEwqOJYKZ8G2idSQ',
        __typename: 'SurveyJsBlock',
        id: 'survey-2',
        code: 'complaint-form',
        title: 'Complaint form',
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
    },
};
