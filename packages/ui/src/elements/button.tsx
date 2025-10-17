import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';
import { buttonVariants } from '@o2s/ui/lib/utils';
import { baseVariant } from '@o2s/ui/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof baseVariant> {
    asChild?: boolean;
    ref?: React.Ref<HTMLButtonElement>;
}

const Button = ({ className, variant = 'primary', size = 'default', asChild = false, ref, ...props }: ButtonProps) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(baseVariant({ variant, size }), buttonVariants, className)} ref={ref} {...props} />;
};

export { Button, buttonVariants };
