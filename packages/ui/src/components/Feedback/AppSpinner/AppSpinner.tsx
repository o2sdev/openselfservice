'use client';

import React from 'react';

import { useGlobalContext } from '@o2s/ui/providers/GlobalProvider';

import { Spinner } from '@o2s/ui/elements/spinner';

export const AppSpinner: React.FC = () => {
    const { spinner } = useGlobalContext();

    if (!spinner.isVisible) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-white/80 flex items-center justify-center z-50">
            <Spinner size="large" />
        </div>
    );
};
