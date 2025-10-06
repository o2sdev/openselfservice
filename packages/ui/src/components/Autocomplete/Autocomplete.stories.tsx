import type { Meta, StoryObj } from '@storybook/nextjs';

import { Autocomplete } from './Autocomplete';

// Define a sample suggestion type
type SampleSuggestion = {
    id: string;
    name: string;
    description?: string;
};

// Sample data
const sampleSuggestions: SampleSuggestion[] = [
    { id: '1', name: 'Apple', description: 'A fruit' },
    { id: '2', name: 'Banana', description: 'A yellow fruit' },
    { id: '3', name: 'Cherry', description: 'A red fruit' },
    { id: '4', name: 'Date', description: 'A sweet fruit' },
    { id: '5', name: 'Elderberry', description: 'A purple berry' },
    { id: '6', name: 'Fig', description: 'A sweet fruit' },
    { id: '7', name: 'Grape', description: 'A small fruit' },
    { id: '8', name: 'Honeydew', description: 'A melon' },
];

const meta = {
    title: 'Components/Autocomplete',
    component: Autocomplete<SampleSuggestion>,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Autocomplete<SampleSuggestion>>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
    args: {
        label: 'Fruit',
        placeholder: 'Search for a fruit...',
        emptyMessage: 'No fruits found',
        suggestions: sampleSuggestions,
        getSuggestionValue: (suggestion: SampleSuggestion) => suggestion.name,
        onRenderSuggestion: (suggestion: SampleSuggestion) => (
            <div>
                <div className="font-medium">{suggestion.name}</div>
                {suggestion.description && (
                    <div className="text-sm text-muted-foreground">{suggestion.description}</div>
                )}
            </div>
        ),
    },
};

// Loading state
export const Loading: Story = {
    args: {
        ...Default.args,
        isLoading: true,
        suggestions: [],
    },
};

// Empty state
export const Empty: Story = {
    args: {
        ...Default.args,
        suggestions: [],
    },
};

// Disabled state
export const Disabled: Story = {
    args: {
        ...Default.args,
        disabled: true,
    },
};

// With hidden label
export const HiddenLabel: Story = {
    args: {
        ...Default.args,
        labelHidden: true,
    },
};

// With pre-selected value
export const WithValue: Story = {
    args: {
        ...Default.args,
        value: sampleSuggestions[0],
    },
};

// With custom minimum length
export const CustomMinLength: Story = {
    args: {
        ...Default.args,
        minLength: 1,
    },
};
