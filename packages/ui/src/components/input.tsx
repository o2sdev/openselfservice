import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { Label } from '@o2s/ui/components/label';

type AdornmentPropsWithBehavior = { behavior: 'append' | 'prepend' };

type AdornmentComponent = React.ReactNode;

export type InputProps<T extends AdornmentComponent = AdornmentComponent> = Readonly<
    React.InputHTMLAttributes<HTMLInputElement> & {
        hasError?: boolean;
        readOnly?: boolean;
    } & (
            | {
                  adornment?: T;
                  adornmentProps?: T extends AdornmentComponent ? AdornmentPropsWithBehavior : never;
              }
            | never
        )
>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, adornment, adornmentProps, hasError, readOnly = false, ...props }, ref) => {
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
                        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                        adornmentProps?.behavior === 'prepend' && 'pl-12',
                        adornmentProps?.behavior === 'append' && 'pr-12',
                        hasError && 'border-destructive focus-visible:ring-destructive',
                        readOnly && 'cursor-not-allowed text-muted-foreground',
                        className,
                    )}
                    ref={ref}
                    readOnly={readOnly}
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

export type InputWithLabelProps = Readonly<
    InputProps & {
        label: string | React.ReactNode;
        labelAdornment?: React.ReactNode;
        labelClassName?: string;
        children?: React.ReactNode;
        isRequired?: boolean;
        requiredLabel: string;
        optionalLabel: string;
    }
>;

const InputWithLabel = React.forwardRef<HTMLInputElement, InputWithLabelProps>(
    (
        {
            label,
            labelAdornment,
            className,
            labelClassName,
            id,
            children,
            hasError,
            isRequired = false,
            requiredLabel,
            optionalLabel,
            ...props
        },
        ref,
    ) => {
        const generatedId = React.useId();
        const inputId = id || generatedId;

        return (
            <div className="grid gap-2">
                <div className="flex items-center justify-between gap-2">
                    <Label htmlFor={inputId} className={cn(labelClassName, hasError && 'text-destructive')}>
                        <span className="pr-2">{label}</span>
                        {!props.readOnly && (
                            <span className="font-normal text-sm">({isRequired ? requiredLabel : optionalLabel})</span>
                        )}
                    </Label>
                    {labelAdornment}
                </div>
                <Input id={inputId} ref={ref} {...props} className={className} hasError={hasError} />
                {children}
            </div>
        );
    },
);
InputWithLabel.displayName = 'InputWithLabel';

export type InputWithDetailsProps = Readonly<
    InputWithLabelProps & {
        description?: string;
        errorMessage?: string;
    }
>;

const InputWithDetails = React.forwardRef<HTMLInputElement, InputWithDetailsProps>(
    ({ description, errorMessage, ...props }, ref) => {
        return (
            <InputWithLabel {...props} ref={ref}>
                {description && <p className="text-sm text-muted-foreground">{description}</p>}
                {errorMessage && props.hasError && <p className="text-sm text-destructive">{errorMessage}</p>}
            </InputWithLabel>
        );
    },
);
InputWithDetails.displayName = 'InputWithDetails';

export { Input, InputWithLabel, InputWithDetails };
