import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { Label } from '@o2s/ui/elements/label';

type CheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    ref?: React.Ref<React.ElementRef<typeof CheckboxPrimitive.Root>>;
};
const Checkbox = ({ className, ref, ...props }: CheckboxProps) => (
    <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
            'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
            className,
        )}
        {...props}
    >
        <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
            <Check className="h-4 w-4" />
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
);

export interface CheckboxWithLabelProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
    label: string | React.ReactNode;
    labelClassName?: string;
}

type CheckboxWithLabelOwnProps = CheckboxWithLabelProps & {
    ref?: React.Ref<React.ElementRef<typeof CheckboxPrimitive.Root>>;
};
const CheckboxWithLabel = ({ className, label, labelClassName, id, ref, ...props }: CheckboxWithLabelOwnProps) => {
    const generatedId = React.useId();
    const checkboxId = id || generatedId;

    return (
        <div className="flex items-start space-x-2">
            <Checkbox id={checkboxId} ref={ref} {...props} className={className} />
            <Label htmlFor={checkboxId} className={cn('mt-[1px]', labelClassName)}>
                {label}
            </Label>
        </div>
    );
};

export { Checkbox, Label, CheckboxWithLabel };
