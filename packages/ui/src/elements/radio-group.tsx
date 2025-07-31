import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { Label } from '@o2s/ui/elements/label';

const RadioGroup = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
    return <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
    return (
        <RadioGroupPrimitive.Item
            ref={ref}
            className={cn(
                'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer',
                className,
            )}
            {...props}
        >
            <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
                <Circle className="h-2.5 w-2.5 fill-current text-current" />
            </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
    );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

interface RadioGroupItemWithLabelProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
    label: string | React.ReactNode;
    labelClassName?: string;
}

const RadioGroupItemWithLabel = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    RadioGroupItemWithLabelProps
>(({ className, label, labelClassName, id, ...props }, ref) => {
    const generatedId = React.useId();
    const radioId = id || generatedId;

    return (
        <div className="flex items-start space-x-2">
            <RadioGroupItem id={radioId} ref={ref} {...props} className={className} />
            <Label htmlFor={radioId} className={cn('mt-[1px]', labelClassName)}>
                {label}
            </Label>
        </div>
    );
});
RadioGroupItemWithLabel.displayName = 'RadioGroupItemWithLabel';

export { RadioGroup, RadioGroupItem, RadioGroupItemWithLabel };
