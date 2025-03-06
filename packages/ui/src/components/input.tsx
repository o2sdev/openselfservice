import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

type AdornmentPropsWithBehavior = { behavior: 'append' | 'prepend' };

type AdornmentComponent = React.ReactNode;

export type InputProps<T extends AdornmentComponent = AdornmentComponent> =
    React.InputHTMLAttributes<HTMLInputElement> &
        (
            | {
                  adornment?: T;
                  adornmentProps?: T extends AdornmentComponent ? AdornmentPropsWithBehavior : never;
              }
            | never
        );

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, adornment, adornmentProps, ...props }, ref) => {
        return (
            <div className={cn('relative')}>
                {adornment && adornmentProps?.behavior === 'prepend' && (
                    <div
                        className={cn(
                            'absolute top-0 left-0 flex items-center justify-center min-w-10 h-10 text-muted-foreground',
                        )}
                    >
                        {adornment}
                    </div>
                )}
                <input
                    type={type}
                    className={cn(
                        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                        adornmentProps?.behavior === 'prepend' && 'pl-12',
                        adornmentProps?.behavior === 'append' && 'pr-12',
                        className,
                    )}
                    ref={ref}
                    {...props}
                />
                {adornment && adornmentProps?.behavior === 'append' && (
                    <div
                        className={cn(
                            'absolute top-0 right-0 flex items-center justify-center min-w-10 h-10 text-muted-foreground',
                        )}
                    >
                        {adornment}
                    </div>
                )}
            </div>
        );
    },
);
Input.displayName = 'Input';

export { Input };
