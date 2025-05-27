import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { Label } from '@o2s/ui/components/label';

interface RadioGroupContextType {
    hasError?: boolean;
}

const RadioGroupContext = React.createContext<RadioGroupContextType>({});

const useRadioGroupContext = () => {
    return React.useContext(RadioGroupContext);
};

const RadioGroup = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Root>,
    Readonly<React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>>
>(({ className, ...props }, ref) => {
    return <RadioGroupPrimitive.Root className={cn('grid gap-2', className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    Readonly<React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>>
>(({ className, ...props }, ref) => {
    const context = useRadioGroupContext();
    const hasError = context.hasError;

    return (
        <RadioGroupPrimitive.Item
            ref={ref}
            className={cn(
                'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer',
                hasError && 'border-destructive text-destructive',
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

interface RadioGroupItemWithLabelProps
    extends Readonly<React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>> {
    label: string | React.ReactNode;
    labelClassName?: string;
    children?: React.ReactNode;
}

const RadioGroupItemWithLabel = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    Readonly<RadioGroupItemWithLabelProps>
>(({ className, label, labelClassName, id, children, ...props }, ref) => {
    const context = useRadioGroupContext();
    const hasError = context.hasError;
    const generatedId = React.useId();
    const radioId = id || generatedId;

    return (
        <div className="flex items-start space-x-2">
            <RadioGroupItem id={radioId} ref={ref} {...props} className={className} />
            <div className="space-y-1 leading-none">
                <Label htmlFor={radioId} className={cn('mt-[1px]', labelClassName, hasError && 'text-destructive')}>
                    {label}
                </Label>
                {children}
            </div>
        </div>
    );
});
RadioGroupItemWithLabel.displayName = 'RadioGroupItemWithLabel';

export type RadioGroupItemWithDetailsProps = Readonly<
    RadioGroupItemWithLabelProps & {
        description?: string;
    }
>;

const RadioGroupItemWithDetails = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    RadioGroupItemWithDetailsProps
>(({ description, ...props }, ref) => {
    return (
        <RadioGroupItemWithLabel {...props} ref={ref}>
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </RadioGroupItemWithLabel>
    );
});
RadioGroupItemWithDetails.displayName = 'RadioGroupItemWithDetails';

interface RadioGroupWithDetailsProps extends Readonly<React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>> {
    hasError?: boolean;
    description?: string;
    errorMessage?: string;
    label?: string;
    labelClassName?: string;
}

const RadioGroupWithDetails = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Root>,
    Readonly<RadioGroupWithDetailsProps>
>(({ className, hasError, description, errorMessage, label, labelClassName, children, ...props }, ref) => {
    const contextValue = React.useMemo(() => ({ hasError }), [hasError]);

    return (
        <RadioGroupContext.Provider value={contextValue}>
            <div className="flex flex-col gap-2">
                {label && (
                    <Label
                        className={cn(
                            'text-sm font-medium leading-none',
                            labelClassName,
                            hasError && 'text-destructive',
                        )}
                    >
                        {label}
                    </Label>
                )}
                <RadioGroup className={className} {...props} ref={ref}>
                    {children}
                </RadioGroup>
                {description && <div className="text-sm text-muted-foreground">{description}</div>}
                {hasError && errorMessage && <div className="text-sm text-destructive font-medium">{errorMessage}</div>}
            </div>
        </RadioGroupContext.Provider>
    );
});
RadioGroupWithDetails.displayName = 'RadioGroupWithDetails';

export {
    RadioGroup,
    RadioGroupItem,
    RadioGroupItemWithLabel,
    RadioGroupItemWithDetails,
    RadioGroupWithDetails,
    useRadioGroupContext,
};
