import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { Label } from '@o2s/ui/elements/label';

type RadioGroupProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
    ref?: React.Ref<React.ComponentRef<typeof RadioGroupPrimitive.Root>>;
};
const RadioGroup = ({ className, ref, ...props }: RadioGroupProps) => {
    return <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} ref={ref} />;
};

type RadioGroupItemProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    ref?: React.Ref<React.ComponentRef<typeof RadioGroupPrimitive.Item>>;
};
const RadioGroupItem = ({ className, ref, ...props }: RadioGroupItemProps) => {
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
};

interface RadioGroupItemWithLabelProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
    label: string | React.ReactNode;
    labelClassName?: string;
}

type RadioGroupItemWithLabelOwnProps = RadioGroupItemWithLabelProps & {
    ref?: React.Ref<React.ComponentRef<typeof RadioGroupPrimitive.Item>>;
};
const RadioGroupItemWithLabel = ({
    className,
    label,
    labelClassName,
    id,
    ref,
    ...props
}: RadioGroupItemWithLabelOwnProps) => {
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
};

export { RadioGroup, RadioGroupItem, RadioGroupItemWithLabel };
