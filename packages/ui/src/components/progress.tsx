import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
    orientation?: 'horizontal' | 'vertical';
}

const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(
    ({ className, value, orientation = 'horizontal', ...props }, ref) => (
        <ProgressPrimitive.Root
            ref={ref}
            className={cn(
                'relative overflow-hidden rounded-full bg-secondary',
                orientation === 'horizontal' ? 'h-4 w-full' : 'h-40 w-4',
                className,
            )}
            {...props}
        >
            <ProgressPrimitive.Indicator
                className="h-full w-full flex-1 bg-primary transition-all"
                style={{
                    transform:
                        orientation === 'horizontal'
                            ? `translateX(-${100 - (value || 0)}%)`
                            : `translateY(-${100 - (value || 0)}%)`,
                }}
            />
        </ProgressPrimitive.Root>
    ),
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
