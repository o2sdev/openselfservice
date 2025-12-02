import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { Label } from '@o2s/ui/elements/label';

type CheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    ref?: React.Ref<React.ComponentRef<typeof CheckboxPrimitive.Root>>;
    hasError?: boolean;
};
const Checkbox = ({ className, ref, hasError, ...props }: CheckboxProps) => (
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
);

export interface CheckboxWithLabelProps extends Readonly<CheckboxProps> {
    label: string | React.ReactNode;
    labelClassName?: string;
    children?: React.ReactNode;
    isRequired?: boolean;
    requiredLabel?: string;
    optionalLabel?: string;
}

type CheckboxWithLabelOwnProps = CheckboxWithLabelProps & {
    ref?: React.Ref<React.ComponentRef<typeof CheckboxPrimitive.Root>>;
    hasError?: boolean;
};
const CheckboxWithLabel = ({
    className,
    label,
    labelClassName,
    id,
    children,
    hasError,
    isRequired,
    requiredLabel = '',
    optionalLabel = '',
    ref,
    ...props
}: CheckboxWithLabelOwnProps) => {
    const generatedId = React.useId();
    const checkboxId = id || generatedId;

    return (
        <div className="flex items-start space-x-2">
            <Checkbox id={checkboxId} ref={ref} {...props} className={className} hasError={hasError} />
            <div className="space-y-1 leading-none">
                <Label
                    htmlFor={checkboxId}
                    className={cn(
                        'mt-[1px]',
                        labelClassName,
                        hasError && 'text-destructive',
                        props.disabled && 'opacity-70 cursor-default',
                    )}
                >
                    <span className="pr-2">{label}</span>
                    <span className="font-normal text-sm">{isRequired ? requiredLabel : optionalLabel}</span>
                </Label>
                {children}
            </div>
        </div>
    );
};

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

export { Checkbox, Label, CheckboxWithLabel, CheckboxWithDetails };
