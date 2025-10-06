import type { Meta, StoryObj } from '@storybook/nextjs';

import { Button } from './button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './dialog';

const meta = {
    title: 'Elements/Dialog',
    component: Dialog,
    tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you are done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="name" className="text-right text-sm font-medium">
                            Name
                        </label>
                        <input
                            id="name"
                            defaultValue="Pedro Duarte"
                            className="col-span-3 h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="username" className="text-right text-sm font-medium">
                            Username
                        </label>
                        <input
                            id="username"
                            defaultValue="@peduarte"
                            className="col-span-3 h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    ),
};
