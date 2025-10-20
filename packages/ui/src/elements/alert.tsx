import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

const alertVariants = cva(
    'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
    {
        variants: {
            variant: {
                default: 'bg-background text-foreground',
                destructive: 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);

type AlertProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof alertVariants> & {
        ref?: React.Ref<HTMLDivElement>;
    };
const Alert = ({ className, variant, ref, ...props }: AlertProps) => (
    <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
);

type AlertTitleProps = React.HTMLAttributes<HTMLHeadingElement> & { ref?: React.Ref<HTMLHeadingElement> };
const AlertTitle = ({ className, ref, ...props }: AlertTitleProps) => (
    <h5 ref={ref} className={cn('mb-1 font-medium leading-none tracking-tight', className)} {...props} />
);

type AlertDescriptionProps = React.HTMLAttributes<HTMLParagraphElement> & { ref?: React.Ref<HTMLDivElement> };
const AlertDescription = ({ className, ref, ...props }: AlertDescriptionProps) => (
    <div ref={ref} className={cn('text-sm [&_p]:leading-relaxed', className)} {...props} />
);

export { Alert, AlertTitle, AlertDescription };
