import type { Meta, StoryObj } from '@storybook/nextjs';

import { Badge } from './badge';
import { TextItem } from './text-item';
import { Typography } from './typography';

const meta = {
    title: 'Elements/TextItem',
    component: TextItem,
    tags: ['autodocs'],
} satisfies Meta<typeof TextItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Name',
    },
    render: ({ title }) => (
        <TextItem title={title}>
            <Typography variant="p">John Doe</Typography>
        </TextItem>
    ),
};

export const Group: Story = {
    args: {
        title: '',
    },
    render: () => (
        <div className="space-y-2 max-w-2xl">
            <TextItem title="Name">
                <Typography variant="p">John Doe</Typography>
            </TextItem>

            <TextItem title="Email">
                <Typography variant="p">john.doe@example.com</Typography>
            </TextItem>

            <TextItem title="Status">
                <Badge>Active</Badge>
            </TextItem>

            <TextItem title="Description">
                <Typography variant="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam
                    ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.
                </Typography>
            </TextItem>

            <TextItem title="Custom Tag" tag="section">
                <Typography variant="p">This TextItem uses a section tag instead of a div.</Typography>
            </TextItem>
        </div>
    ),
};
