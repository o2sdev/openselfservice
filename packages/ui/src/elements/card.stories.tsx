import type { Meta, StoryObj } from '@storybook/nextjs';

import { Button } from './button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';

const meta = {
    title: 'Elements/Card',
    component: Card,
    tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Your new project will be created with the following settings:</p>
                <ul className="list-disc pl-5 mt-2">
                    <li>TypeScript configuration</li>
                    <li>Tailwind CSS setup</li>
                    <li>ESLint and Prettier</li>
                </ul>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline" size="default">
                    Cancel
                </Button>
                <Button>Create</Button>
            </CardFooter>
        </Card>
    ),
};
