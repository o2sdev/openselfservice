import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

const badgeStatusVariants = cva(
    'inline-flex items-center rounded-full w-2 h-2 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2',
    {
        variants: {
            variant: {
                default: 'border-transparent bg-sky-500 text-primary-foreground',
                destructive: 'border-transparent bg-destructive text-destructive-foreground',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);

export interface BadgeStatusProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeStatusVariants> {}

function BadgeStatus({ className, variant, ...props }: BadgeStatusProps) {
    return <div className={cn(badgeStatusVariants({ variant }), className)} {...props} />;
}

export { BadgeStatus, badgeStatusVariants };
