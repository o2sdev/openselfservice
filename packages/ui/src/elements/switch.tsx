import { Label } from '@radix-ui/react-label';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

const Switch = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitives.Root>,
    React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
    <SwitchPrimitives.Root
        className={cn(
            'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
            className,
        )}
        {...props}
        ref={ref}
    >
        <SwitchPrimitives.Thumb
            className={cn(
                'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
            )}
        />
    </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

const SwitchWithLabel = ({
    label,
    id,
    labelClassName,
    ...props
}: React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & { label: string; labelClassName?: string }) => {
    const generatedId = React.useId();
    const radioId = id || generatedId;

    return (
        <div className="flex items-start space-x-2">
            <Label htmlFor={radioId} className={cn('mt-[1px]', labelClassName)}>
                {label}
            </Label>
            <Switch {...props} id={radioId} className={props.className} />
        </div>
    );
};

export { Switch, SwitchWithLabel };
