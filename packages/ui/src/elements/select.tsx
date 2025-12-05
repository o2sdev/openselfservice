'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import { VariantProps, cva } from 'class-variance-authority';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { Label } from '@o2s/ui/elements/label';

const selectVariants = cva(
    'flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
    {
        variants: {
            variant: {
                default: 'border-input bg-background',
                secondary: 'border-tertiary-border bg-background text-tertiary-foreground hover:bg-tertiary-hover',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

export interface SelectTriggerProps
    extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>, VariantProps<typeof selectVariants> {}

type SelectTriggerOwnProps = SelectTriggerProps & {
    ref?: React.Ref<React.ComponentRef<typeof SelectPrimitive.Trigger>>;
    hasError?: boolean;
};
const SelectTrigger = ({ variant, className, children, hasError, ref, ...props }: SelectTriggerOwnProps) => (
    <SelectPrimitive.Trigger
        ref={ref}
        className={cn(selectVariants({ variant, className }), hasError && 'border-destructive focus:ring-destructive')}
        {...props}
    >
        {children}
        <SelectPrimitive.Icon asChild>
            <ChevronDown className="h-4 w-4 opacity-50" />
        </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
);

type SelectScrollUpButtonProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton> & {
    ref?: React.Ref<React.ComponentRef<typeof SelectPrimitive.ScrollUpButton>>;
};
const SelectScrollUpButton = ({ className, ref, ...props }: SelectScrollUpButtonProps) => (
    <SelectPrimitive.ScrollUpButton
        ref={ref}
        className={cn('flex cursor-default items-center justify-center py-1', className)}
        {...props}
    >
        <ChevronUp className="h-4 w-4" />
    </SelectPrimitive.ScrollUpButton>
);

type SelectScrollDownButtonProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton> & {
    ref?: React.Ref<React.ComponentRef<typeof SelectPrimitive.ScrollDownButton>>;
};
const SelectScrollDownButton = ({ className, ref, ...props }: SelectScrollDownButtonProps) => (
    <SelectPrimitive.ScrollDownButton
        ref={ref}
        className={cn('flex cursor-default items-center justify-center py-1', className)}
        {...props}
    >
        <ChevronDown className="h-4 w-4" />
    </SelectPrimitive.ScrollDownButton>
);

type SelectContentProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & {
    ref?: React.Ref<React.ComponentRef<typeof SelectPrimitive.Content>>;
};
const SelectContent = ({ className, children, position = 'popper', ref, ...props }: SelectContentProps) => (
    <SelectPrimitive.Portal>
        <SelectPrimitive.Content
            ref={ref}
            className={cn(
                'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                position === 'popper' &&
                    'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
                className,
            )}
            position={position}
            {...props}
        >
            <SelectScrollUpButton />
            <SelectPrimitive.Viewport
                className={cn(
                    'p-1',
                    position === 'popper' &&
                        'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
                )}
            >
                {children}
            </SelectPrimitive.Viewport>
            <SelectScrollDownButton />
        </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
);

type SelectLabelProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> & {
    ref?: React.Ref<React.ComponentRef<typeof SelectPrimitive.Label>>;
};
const SelectLabel = ({ className, ref, ...props }: SelectLabelProps) => (
    <SelectPrimitive.Label ref={ref} className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)} {...props} />
);

type SelectItemProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & {
    ref?: React.Ref<React.ComponentRef<typeof SelectPrimitive.Item>>;
};
const SelectItem = ({ className, children, ref, ...props }: SelectItemProps) => (
    <SelectPrimitive.Item
        ref={ref}
        className={cn(
            'relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50',
            className,
        )}
        {...props}
    >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <SelectPrimitive.ItemIndicator>
                <Check className="h-4 w-4" />
            </SelectPrimitive.ItemIndicator>
        </span>

        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
);

type SelectSeparatorProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> & {
    ref?: React.Ref<React.ComponentRef<typeof SelectPrimitive.Separator>>;
};
const SelectSeparator = ({ className, ref, ...props }: SelectSeparatorProps) => (
    <SelectPrimitive.Separator ref={ref} className={cn('-mx-1 my-1 h-px bg-muted', className)} {...props} />
);

interface SelectWithTitleProps {
    label: string | React.ReactNode;
    id: string;
    labelClassName?: string;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    dir?: 'ltr' | 'rtl';
    name?: string;
    disabled?: boolean;
    required?: boolean;
    children: React.ReactNode;
    hasError?: boolean;
    description?: string;
    errorMessage?: string;
    isRequired?: boolean;
    requiredLabel?: string;
    optionalLabel?: string;
}

type SelectWithTitleOwnProps = SelectWithTitleProps & { ref?: React.Ref<HTMLDivElement> };
const SelectWithTitle = ({
    label,
    labelClassName,
    children,
    id,
    hasError,
    description,
    errorMessage,
    isRequired,
    optionalLabel = '',
    requiredLabel = '',
    ref,
    ...props
}: SelectWithTitleOwnProps) => {
    const generatedId = React.useId();
    const selectId = id || generatedId;

    const renderAdditionalLabel = () => {
        if (props.disabled) return null;

        if (optionalLabel && !isRequired) {
            return <span className="font-normal text-sm">({optionalLabel})</span>;
        }

        if (requiredLabel && isRequired) {
            return <span className="font-normal text-sm">({requiredLabel})</span>;
        }

        return null;
    };

    return (
        <div className="grid gap-2" ref={ref}>
            <Label htmlFor={selectId} className={cn(labelClassName, hasError && 'text-destructive')}>
                <span className="pr-2">{label}</span>
                {renderAdditionalLabel()}
            </Label>
            <Select {...props}>{children}</Select>
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
            {hasError && errorMessage && <p className="text-sm text-destructive">{errorMessage}</p>}
        </div>
    );
};

export {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectLabel,
    SelectItem,
    SelectSeparator,
    SelectScrollUpButton,
    SelectScrollDownButton,
    SelectWithTitle,
};
