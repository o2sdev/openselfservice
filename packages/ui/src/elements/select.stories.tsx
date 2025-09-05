import type { Meta, StoryObj } from '@storybook/nextjs';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
    SelectWithTitle,
} from './select';

const meta = {
    title: 'Elements/Select',
    component: Select,
    tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="orange">Orange</SelectItem>
                    <SelectItem value="grape">Grape</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    ),
};
export const WithLabel: Story = {
    render: () => (
        <SelectWithTitle label="Select a vegetable" id="vegetable-select" defaultValue="carrot">
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a vegetable" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="carrot">Carrot</SelectItem>
                <SelectItem value="potato">Potato</SelectItem>
                <SelectItem value="tomato">Tomato</SelectItem>
                <SelectItem value="broccoli">Broccoli</SelectItem>
                <SelectItem value="spinach">Spinach</SelectItem>
            </SelectContent>
        </SelectWithTitle>
    ),
};
