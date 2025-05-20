import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

const alertVariants = cva(
    'relative w-full text-foreground rounded-lg border p-6 [&_svg~*]:pl-8 [&_svg+div]:translate-y-[-3px] [&_svg]:absolute [&_svg]:left-6 [&_svg]:top-6 [&_svg]:text-foreground',
    {
        variants: {
            variant: {
                default: 'bg-background',
                destructive:
                    'border-destructive/50 bg-destructive/10  dark:border-destructive [&_svg]:text-destructive',
                positive: 'border-green-700 bg-green-700/10 dark:border-green-700 [&_svg]:text-green-700',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);

const Alert = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
    <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h5
            ref={ref}
            className={cn('text-sm md:text-base font-medium leading-none tracking-tight', className)}
            {...props}
        />
    ),
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn('text-sm md:text-base [&_p]:leading-relaxed', className)} {...props} />
    ),
);
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
