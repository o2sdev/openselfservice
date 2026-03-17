import { Models } from '@o2s/framework/modules';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';

import { Models as FrontendModels } from '@o2s/utils.frontend';

import { LinkList } from './LinkList';

// Mock LinkComponent for stories
const MockLinkComponent: FrontendModels.Link.LinkComponent = ({ href, className, children }) => (
    <a href={href} className={className}>
        {children}
    </a>
);

const meta = {
    title: 'Components/LinkList',
    component: LinkList,
    tags: ['autodocs'],
} satisfies Meta<typeof LinkList>;

export default meta;

type Story = StoryObj<typeof meta>;

// Sample links
const sampleLinks: Models.Link.Link[] = [
    {
        label: 'Default',
        url: '/',
        variant: 'primary',
    },
    {
        label: 'Secondary',
        url: '/',
        variant: 'secondary',
    },
    {
        label: 'Outline',
        url: '/',
        variant: 'outline',
    },
    {
        label: 'Destructive',
        url: '/',
        variant: 'destructive',
    },
    {
        label: 'Ghost',
        url: '/',
        variant: 'ghost',
    },
    {
        label: 'Link',
        url: '/',
        variant: 'link',
    },
];

const sampleLinksWithIcons: Models.Link.Link[] = [
    {
        label: 'Home',
        url: '/',
        variant: 'primary',
        icon: 'Home',
    },
    {
        label: 'About',
        url: '/about',
        variant: 'secondary',
        icon: 'Info',
    },
    {
        label: 'Contact',
        url: '/contact',
        variant: 'outline',
        icon: 'Mail',
    },
];

export const Default: Story = {
    args: {
        links: sampleLinks,
        LinkComponent: MockLinkComponent,
    },
};

export const WithIcons: Story = {
    args: {
        links: sampleLinksWithIcons,
        LinkComponent: MockLinkComponent,
    },
};

export const WithChildren: Story = {
    args: {
        links: sampleLinks,
        children: (
            <>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos maxime nobis quaerat. Harum
                    natus, tempore! Ad consequatur, ea eos esse magni minus, non nostrum officiis perspiciatis rem
                    totam, voluptate?
                </p>
            </>
        ),
        LinkComponent: MockLinkComponent,
    },
};
