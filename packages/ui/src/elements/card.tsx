import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

type CardProps = React.HTMLAttributes<HTMLDivElement> & { ref?: React.Ref<HTMLDivElement> };
const Card = ({ className, ref, ...props }: CardProps) => (
    <div ref={ref} className={cn('rounded-lg border bg-card text-card-foreground shadow-xs', className)} {...props} />
);

type CardSectionProps = React.HTMLAttributes<HTMLDivElement> & { ref?: React.Ref<HTMLDivElement> };
const CardHeader = ({ className, ref, ...props }: CardSectionProps) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6 pb-0', className)} {...props} />
);

const CardTitle = ({ className, ref, ...props }: CardSectionProps) => (
    <div ref={ref} className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props} />
);

const CardDescription = ({ className, ref, ...props }: CardSectionProps) => (
    <div ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
);

const CardContent = ({ className, ref, ...props }: CardSectionProps) => (
    <div ref={ref} className={cn('p-6', className)} {...props} />
);

const CardFooter = ({ className, ref, ...props }: CardSectionProps) => (
    <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
);

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
