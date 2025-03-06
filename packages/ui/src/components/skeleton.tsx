import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

const skeletonVariants = cva('animate-pulse rounded-md bg-muted', {
    variants: {
        variant: {
            default: 'h-4 w-full',
            rounded: 'h-20 w-full rounded-xl',
            circle: 'h-12 w-12 rounded-full',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof skeletonVariants> {
    asChild?: boolean;
}

function Skeleton({ variant, className, ...props }: SkeletonProps) {
    return <div className={cn(skeletonVariants({ variant }), className)} {...props} />;
}

export { Skeleton };
