'use client';

import React from 'react';

import { Spinner } from '@o2s/ui/elements/spinner';

import { AppSpinnerProps } from './AppSpinner.types';

export const AppSpinner: React.FC<AppSpinnerProps> = ({ isVisible }) => {
    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-white/80 flex items-center justify-center z-50">
            <Spinner size="large" />
        </div>
    );
};
