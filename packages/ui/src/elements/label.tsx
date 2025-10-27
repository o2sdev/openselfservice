import * as LabelPrimitive from '@radix-ui/react-label';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

const labelVariants = cva(
    'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer',
);

type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants> & { ref?: React.Ref<React.ComponentRef<typeof LabelPrimitive.Root>> };
const Label = ({ className, ref, ...props }: LabelProps) => (
    <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
);

export { Label };
