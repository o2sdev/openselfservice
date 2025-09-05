import type { Meta, StoryObj } from '@storybook/nextjs';
import React, { useEffect } from 'react';

import { useGlobalContext } from '@o2s/ui/providers/GlobalProvider';

import { AppSpinner } from './AppSpinner';

// Wrapper component to control the spinner visibility through props
const AppSpinnerWrapper: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
    const { spinner } = useGlobalContext();

    useEffect(() => {
        spinner.toggle(isVisible);
    }, [isVisible, spinner]);

    return (
        <div className="h-screen w-screen space-y-4">
            <div className="p-4 bg-gray-100">Content behind the spinner</div>
            <div className="p-4 bg-gray-100">Content behind the spinner</div>
            <div className="p-4 bg-gray-100">Content behind the spinner</div>
            <div className="p-4 bg-gray-100">Content behind the spinner</div>
            <div className="p-4 bg-gray-100">Content behind the spinner</div>
            <div className="p-4 bg-gray-100">Content behind the spinner</div>
            <AppSpinner />
        </div>
    );
};

const meta = {
    title: 'Components/AppSpinner',
    component: AppSpinnerWrapper,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof AppSpinnerWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isVisible: true,
    },
};
