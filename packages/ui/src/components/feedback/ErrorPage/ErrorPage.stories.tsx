import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

import { Models as FrontendModels } from '@o2s/utils.frontend';

import { ErrorPage } from './ErrorPage';

// Mock LinkComponent for stories
const MockLinkComponent: FrontendModels.Link.LinkComponent = ({ href, className, children }) => (
    <a href={href} className={className}>
        {children}
    </a>
);

const meta = {
    title: 'Components/ErrorPage',
    component: ErrorPage,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof ErrorPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Error404: Story = {
    args: {
        errorType: '404',
        title: 'Page Not Found',
        description:
            '<p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>',
        link: {
            url: '/',
            label: 'Go to Homepage',
        },
        LinkComponent: MockLinkComponent,
    },
};

export const Error500: Story = {
    args: {
        errorType: '500',
        title: 'Internal Server Error',
        description: '<p>Something went wrong on our servers. We are working to fix the issue as soon as possible.</p>',
        link: {
            url: '/',
            label: 'Go to Homepage',
        },
        LinkComponent: MockLinkComponent,
    },
};

export const Error403: Story = {
    args: {
        errorType: '403',
        title: 'Access Denied',
        description:
            '<p>You do not have permission to access this page. Please contact your administrator if you believe this is an error.</p>',
        link: {
            url: '/',
            label: 'Go to Homepage',
        },
        LinkComponent: MockLinkComponent,
    },
};

export const Error401: Story = {
    args: {
        errorType: '401',
        title: 'Unauthorized',
        description: '<p>You need to be logged in to access this page. Please sign in and try again.</p>',
        link: {
            url: '/login',
            label: 'Go to Login',
        },
        LinkComponent: MockLinkComponent,
    },
};

export const CustomError: Story = {
    args: {
        errorType: 'Maintenance',
        title: 'Site Under Maintenance',
        description:
            '<p>We are currently performing scheduled maintenance. Please check back later.</p><p>We apologize for any inconvenience this may cause.</p>',
        link: {
            url: 'https://status.example.com',
            label: 'Check Status Page',
        },
        LinkComponent: MockLinkComponent,
    },
};

export const WithRichTextDescription: Story = {
    args: {
        errorType: '404',
        title: 'Page Not Found',
        description:
            '<p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p><ul><li>Check the URL for typos</li><li>Go back to the previous page</li><li>Try searching for the content</li></ul>',
        link: {
            url: '/',
            label: 'Go to Homepage',
        },
        LinkComponent: MockLinkComponent,
    },
};
