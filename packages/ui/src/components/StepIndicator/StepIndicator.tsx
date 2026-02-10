import React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { StepIndicatorProps } from './StepIndicator.types';

export const StepIndicator: React.FC<Readonly<StepIndicatorProps>> = ({ className, ...props }) => {
    return (
        <div className={cn('', className)} {...props}>
            StepIndicator
        </div>
    );
};
