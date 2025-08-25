import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

const badgeVariants = cva(
    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2',
    {
        variants: {
            variant: {
                default:
                    'border-transparent bg-badge-default-background text-badge-default-foreground hover:bg-badge-default-background/80',
                secondary:
                    'border-transparent bg-badge-secondary-background text-badge-secondary-foreground hover:bg-badge-secondary-background/80',
                destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
                outline: 'text-foreground border-border',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
    return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
