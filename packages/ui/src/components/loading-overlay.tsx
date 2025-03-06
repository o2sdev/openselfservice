import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { Spinner } from '@o2s/ui/components/spinner';

const spinnerVariants = cva('absolute w-full h-full top-0 left-0 flex items-center justify-center bg-white/75 z-10', {
    variants: {
        isActive: {
            true: 'flex',
            false: 'hidden',
        },
    },
    defaultVariants: {
        isActive: false,
    },
});

interface SpinnerContentProps extends VariantProps<typeof spinnerVariants> {
    className?: string;
    children?: React.ReactNode;
}

export function LoadingOverlay({ isActive, children, className }: SpinnerContentProps) {
    return (
        <div className="relative">
            <div className={cn(spinnerVariants({ isActive }), className)}>
                <Spinner size="large" />
            </div>
            {children}
        </div>
    );
}
