import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { baseVariant, cn, linkVariants } from '@o2s/ui/lib/utils';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof baseVariant> {
    asChild?: boolean;
}

const Link: React.FC<LinkProps> = ({ className, variant = 'link', asChild = false, ...restProps }) => {
    const Comp = asChild ? Slot : 'a';
    return (
        <Comp
            className={cn(
                baseVariant({ variant, size: variant === 'link' ? 'none' : 'default' }),
                linkVariants,
                className,
            )}
            {...restProps}
        />
    );
};

export { Link, linkVariants };
