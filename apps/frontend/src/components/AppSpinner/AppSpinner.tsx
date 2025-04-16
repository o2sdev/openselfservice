'use client';

import React from 'react';

import { Spinner } from '@o2s/ui/components/spinner';

import { useGlobalContext } from '@/providers/GlobalProvider';

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
