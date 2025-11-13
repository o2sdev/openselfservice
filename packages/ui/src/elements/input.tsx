import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { Label } from '@o2s/ui/elements/label';

type AdornmentPropsWithBehavior = { behavior: 'append' | 'prepend' };

type AdornmentComponent = React.ReactNode;

export type InputProps<T extends AdornmentComponent = AdornmentComponent> =
    React.InputHTMLAttributes<HTMLInputElement> & {
        hasError?: boolean;
        readOnly?: boolean;
        children?: React.ReactNode;
    } & (
            | {
                  adornment?: T;
                  adornmentProps?: T extends AdornmentComponent ? AdornmentPropsWithBehavior : never;
              }
            | never
        );

export type InputOwnProps = InputProps & { ref?: React.Ref<HTMLInputElement> };

const Input = ({
    className,
    type,
    adornment,
    adornmentProps,
    hasError,
    readOnly = false,
    children,
    ref,
    ...props
}: InputOwnProps) => {
    return (
        <div className="grid gap-2">
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
            {children}
        </div>
    );
};

export type InputWithLabelProps = InputProps & {
    label: string | React.ReactNode;
    labelAdornment?: React.ReactNode;
    labelClassName?: string;
    children?: React.ReactNode;
    isRequired?: boolean;
    requiredLabel?: string;
    optionalLabel?: string;
    labelWrapperClassName?: string;
    isLabelHidden?: boolean;
};

export type InputWithLabelOwnProps = InputWithLabelProps & { ref?: React.Ref<HTMLInputElement> };

const InputWithLabel = ({
    label,
    labelAdornment,
    className,
    labelClassName,
    id,
    children,
    hasError,
    isRequired = false,
    optionalLabel = '',
    requiredLabel = '',
    labelWrapperClassName,
    isLabelHidden = false,
    ref,
    ...props
}: InputWithLabelOwnProps) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    const renderAdditionalLabel = () => {
        if (props.disabled || props.readOnly) return null;

        if (optionalLabel && !isRequired) {
            return <span className="font-normal text-sm">({optionalLabel})</span>;
        }

        if (requiredLabel && isRequired) {
            return <span className="font-normal text-sm">({requiredLabel})</span>;
        }

        return null;
    };

    const ariaLabel = isLabelHidden && typeof label === 'string' ? label : props['aria-label'];

    return (
        <div className="grid gap-2">
            {!isLabelHidden && (
                <div className={cn('flex items-center justify-between gap-2', labelWrapperClassName)}>
                    <Label htmlFor={inputId} className={cn(labelClassName, hasError && 'text-destructive')}>
                        <span className="pr-2">{label}</span>
                        {renderAdditionalLabel()}
                    </Label>
                    {labelAdornment}
                </div>
            )}
            <Input id={inputId} ref={ref} {...props} aria-label={ariaLabel} className={className} hasError={hasError} />
            {children}
        </div>
    );
};

export type InputWithDetailsProps = Readonly<
    InputWithLabelProps & {
        caption?: string;
        errorMessage?: string;
    }
>;

const InputWithDetails = React.forwardRef<HTMLInputElement, InputWithDetailsProps>(
    ({ caption, errorMessage, ...props }, ref) => {
        return (
            <InputWithLabel {...props} ref={ref}>
                {errorMessage && props.hasError && <p className="text-sm text-destructive">{errorMessage}</p>}
                {caption && <p className="text-sm text-muted-foreground">{caption}</p>}
            </InputWithLabel>
        );
    },
);

export { Input, InputWithLabel, InputWithDetails };
