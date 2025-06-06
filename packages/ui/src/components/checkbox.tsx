import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { Label } from '@o2s/ui/components/label';

interface CheckboxProps extends Readonly<React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>> {
    hasError?: boolean;
}

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
    ({ className, hasError, ...props }, ref) => (
        <CheckboxPrimitive.Root
            ref={ref}
            className={cn(
                'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
                hasError &&
                    'border-destructive data-[state=checked]:bg-destructive data-[state=checked]:border-destructive',
                className,
            )}
            {...props}
        >
            <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
                <Check className="h-4 w-4" />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    ),
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

interface CheckboxWithLabelProps extends Readonly<CheckboxProps> {
    label: string | React.ReactNode;
    labelClassName?: string;
    children?: React.ReactNode;
    isRequired?: boolean;
    requiredLabel: string;
    optionalLabel: string;
}

const CheckboxWithLabel = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxWithLabelProps>(
    (
        {
            className,
            label,
            labelClassName,
            id,
            children,
            hasError,
            isRequired,
            requiredLabel,
            optionalLabel,
            ...props
        },
        ref,
    ) => {
        const generatedId = React.useId();
        const checkboxId = id || generatedId;

        return (
            <div className="flex items-start space-x-2">
                <Checkbox id={checkboxId} ref={ref} {...props} className={className} hasError={hasError} />
                <div className="space-y-1 leading-none">
                    <Label
                        htmlFor={checkboxId}
                        className={cn('mt-[1px]', labelClassName, hasError && 'text-destructive')}
                    >
                        <span className="pr-2">{label}</span>
                        <span className="font-normal text-sm">({isRequired ? requiredLabel : optionalLabel})</span>
                    </Label>
                    {children}
                </div>
            </div>
        );
    },
);
CheckboxWithLabel.displayName = 'CheckboxWithLabel';

export type CheckboxWithDetailsProps = Readonly<
    CheckboxWithLabelProps & {
        description?: string;
        errorMessage?: string;
    }
>;

const CheckboxWithDetails = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxWithDetailsProps>(
    ({ description, errorMessage, ...props }, ref) => {
        return (
            <CheckboxWithLabel {...props} ref={ref}>
                {description && <p className="text-sm text-muted-foreground">{description}</p>}
                {errorMessage && props.hasError && <p className="text-sm text-destructive">{errorMessage}</p>}
            </CheckboxWithLabel>
        );
    },
);
CheckboxWithDetails.displayName = 'CheckboxWithDetails';

export { Checkbox, Label, CheckboxWithLabel, CheckboxWithDetails };
