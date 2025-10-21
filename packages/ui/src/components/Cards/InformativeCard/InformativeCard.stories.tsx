import type { Meta, StoryObj } from '@storybook/nextjs';
import React from 'react';

import { Models as FrontendModels } from '@o2s/utils.frontend';

import { InformativeCard } from './InformativeCard';

// Mock LinkComponent for stories
const MockLinkComponent: FrontendModels.Link.LinkComponent = ({ href, className, children }) => (
    <a href={href} className={className}>
        {children}
    </a>
);

const meta = {
    title: 'Components/Cards/InformativeCard',
    component: InformativeCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof InformativeCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        icon: {
            name: 'Info',
            size: 24,
        },
        title: 'Important Information',
        description: '<p>This card contains important information that you should know about our services.</p>',
        href: '/information',
        LinkComponent: MockLinkComponent,
    },
};

export const WithoutIcon: Story = {
    args: {
        title: 'No Icon Card',
        description: '<p>This card does not have an icon but still provides useful information.</p>',
        href: '/no-icon',
        LinkComponent: MockLinkComponent,
    },
};

export const WithoutTitle: Story = {
    args: {
        icon: {
            name: 'AlertCircle',
            size: 24,
        },
        description: '<p>This card has no title but includes an icon and description.</p>',
        href: '/no-title',
        LinkComponent: MockLinkComponent,
    },
};

export const WithoutDescription: Story = {
    args: {
        icon: {
            name: 'Check',
            size: 24,
        },
        title: 'Success',
        href: '/success',
        LinkComponent: MockLinkComponent,
    },
};

export const WithoutLink: Story = {
    args: {
        icon: {
            name: 'FileText',
            size: 24,
        },
        title: 'Static Information',
        description: '<p>This card is not clickable and does not navigate anywhere.</p>',
        LinkComponent: MockLinkComponent,
    },
};

export const WithCustomLineClamp: Story = {
    args: {
        icon: {
            name: 'BookOpen',
            size: 24,
        },
        title: 'Article Summary',
        description:
            '<p>This is a summary of a longer article. The text is limited to 3 lines to keep the card compact. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.</p>',
        href: '/article',
        lineClamp: 3,
        LinkComponent: MockLinkComponent,
    },
};

export const WithCustomIconStyle: Story = {
    args: {
        icon: {
            name: 'Heart',
            size: 24,
            className: 'text-red-500',
            strokeWidth: 2,
        },
        title: 'Custom Icon Style',
        description: '<p>This card has a custom icon style with a red color and different stroke width.</p>',
        href: '/custom-icon',
        LinkComponent: MockLinkComponent,
    },
};

export const WithLongTitle: Story = {
    args: {
        icon: {
            name: 'FileText',
            size: 24,
        },
        title: 'This is a very long title that might wrap to multiple lines in the card layout',
        description: '<p>Card with a long title to demonstrate how it handles overflow.</p>',
        href: '/long-title',
        LinkComponent: MockLinkComponent,
    },
};

export const WithLongDescription: Story = {
    args: {
        icon: {
            name: 'FileText',
            size: 24,
        },
        title: 'Long Description',
        description:
            '<p>This card has a very long description to demonstrate how the line clamp works. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.</p>',
        href: '/long-description',
        LinkComponent: MockLinkComponent,
    },
};
