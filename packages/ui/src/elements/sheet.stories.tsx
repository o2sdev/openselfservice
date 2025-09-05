import type { Meta, StoryObj } from '@storybook/nextjs';

import { Button } from './button';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './sheet';

const meta = {
    title: 'Elements/Sheet',
    component: Sheet,
    tags: ['autodocs'],
} satisfies Meta<typeof Sheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent closeLabel="Close">
                <SheetHeader>
                    <SheetTitle>Edit Profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you are done.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="name" className="text-right text-sm font-medium">
                            Name
                        </label>
                        <input
                            id="name"
                            className="col-span-3 h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm"
                            defaultValue="John Doe"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="username" className="text-right text-sm font-medium">
                            Username
                        </label>
                        <input
                            id="username"
                            className="col-span-3 h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm"
                            defaultValue="@johndoe"
                        />
                    </div>
                </div>
                <SheetFooter>
                    <Button type="submit">Save changes</Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    ),
};
