import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

const linkVariants = cva(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    {
        variants: {
            variant: {
                default: 'text-primary underline-offset-4 hover:underline',
                primaryButton:
                    'h-10 px-4 py-2 no-underline hover:no-underline bg-primary text-primary-foreground hover:bg-primary/90',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof linkVariants> {
    asChild?: boolean;
}

const Link: React.FC<LinkProps> = ({ className, variant, asChild = false, ...restProps }) => {
    const Comp = asChild ? Slot : 'a';
    return <Comp className={cn(linkVariants({ variant, className }))} {...restProps} />;
};

export { Link, linkVariants };
