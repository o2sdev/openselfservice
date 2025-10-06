import type { Meta, StoryObj } from '@storybook/nextjs';
import React from 'react';

import { Button } from '@o2s/ui/elements/button';
import { Typography } from '@o2s/ui/elements/typography';

import { InfoCard } from './InfoCard';

const meta = {
    title: 'Components/Cards/InfoCard',
    component: InfoCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof InfoCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Total Revenue',
        value: '$12,345',
        icon: 'DollarSign',
        description: '<p>Revenue generated in the last 30 days</p>',
        button: <Button size="sm">View Details</Button>,
    },
};

export const WithStringValue: Story = {
    args: {
        title: 'Active Users',
        value: '1,234',
        icon: 'Users',
        description: '<p>Number of active users in the last 7 days</p>',
    },
};

export const WithReactNodeValue: Story = {
    args: {
        title: 'Growth Rate',
        value: (
            <div className="flex items-center gap-2">
                <Typography variant="highlightedBig">+15%</Typography>
                <Typography variant="small" className="text-green-500">
                    ↑
                </Typography>
            </div>
        ),
        icon: 'TrendingUp',
        description: '<p>Growth rate compared to last month</p>',
    },
};

export const WithStringIcon: Story = {
    args: {
        title: 'Conversion Rate',
        value: '3.5%',
        icon: 'BarChart',
        description: '<p>Percentage of visitors who made a purchase</p>',
    },
};

export const WithReactNodeIcon: Story = {
    args: {
        title: 'Customer Satisfaction',
        value: '4.8/5',
        icon: (
            <div className="flex">
                {'★★★★☆'.split('').map((star, i) => (
                    <span key={i} className="text-yellow-400">
                        {star}
                    </span>
                ))}
            </div>
        ),
        description: '<p>Average rating from customer feedback</p>',
    },
};

export const WithStringDescription: Story = {
    args: {
        title: 'Bounce Rate',
        value: '25%',
        icon: 'ArrowDownRight',
        description: '<p>Percentage of visitors who navigate away after viewing only one page</p>',
    },
};

export const WithReactNodeDescription: Story = {
    args: {
        title: 'Page Views',
        value: '45,678',
        icon: 'Eye',
        description: (
            <div className="flex flex-col gap-1">
                <Typography variant="small" className="text-muted-foreground">
                    Total page views in the last 30 days
                </Typography>
                <div className="flex items-center gap-1">
                    <Typography variant="small" className="text-green-500">
                        +12%
                    </Typography>
                    <Typography variant="small" className="text-muted-foreground">
                        compared to previous period
                    </Typography>
                </div>
            </div>
        ),
    },
};

export const WithButton: Story = {
    args: {
        title: 'New Orders',
        value: '56',
        icon: 'ShoppingCart',
        description: '<p>New orders received today</p>',
        button: <Button size="sm">Process Orders</Button>,
    },
};

export const WithLongTitle: Story = {
    args: {
        title: 'Average Time Spent on Site per User Session with Detailed Breakdown',
        value: '5m 23s',
        icon: 'Clock',
        description: '<p>Average time users spend on the site per session</p>',
    },
};

export const WithLongDescription: Story = {
    args: {
        title: 'Engagement Rate',
        value: '68%',
        icon: 'Heart',
        description:
            '<p>The engagement rate measures how actively involved your users are with your content. This includes interactions such as clicks, comments, shares, and other actions that indicate user interest and participation. A higher engagement rate generally indicates that your content is resonating well with your audience and encouraging them to take action.</p>',
    },
};
