import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { toggleVariants } from '@o2s/ui/elements/toggle';

const ToggleGroupContext = React.createContext<
    VariantProps<typeof toggleVariants> & { currentValue?: string | string[] }
>({
    size: 'default',
    variant: 'default',
    currentValue: undefined,
});

const toggleGroupVariants = cva('flex items-center justify-center gap-1', {
    variants: {
        variant: {
            default: 'bg-transparent',
            outline: 'bg-transparent',
            solid: 'rounded-sm bg-muted p-1 gap-0',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});

type ToggleGroupProps = React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants> & { ref?: React.Ref<React.ComponentRef<typeof ToggleGroupPrimitive.Root>> };
const ToggleGroup = ({ className, variant, size, children, ref, ...props }: ToggleGroupProps) => {
    const context = React.useContext(ToggleGroupContext);
    const currentValue = 'value' in props ? props.value : undefined;

    return (
        <ToggleGroupPrimitive.Root
            ref={ref}
            className={cn(
                toggleGroupVariants({
                    variant: variant || context.variant,
                }),
                className,
            )}
            {...props}
        >
            <ToggleGroupContext.Provider value={{ variant, size, currentValue }}>
                {children}
            </ToggleGroupContext.Provider>
        </ToggleGroupPrimitive.Root>
    );
};

type ToggleGroupItemProps = React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants> & {
        ref?: React.Ref<React.ComponentRef<typeof ToggleGroupPrimitive.Item>>;
        activeIcon?: React.ReactNode;
        iconPosition?: 'left' | 'right';
    };
const ToggleGroupItem = React.forwardRef<React.ComponentRef<typeof ToggleGroupPrimitive.Item>, ToggleGroupItemProps>(
    ({ className, children, variant, size, activeIcon, value, iconPosition = 'left', ...props }, ref) => {
        const context = React.useContext(ToggleGroupContext);

        // Check if this item is active by comparing its value with the current value from ToggleGroup
        const isActive =
            context.currentValue !== undefined &&
            value !== undefined &&
            (Array.isArray(context.currentValue)
                ? context.currentValue.includes(value)
                : context.currentValue === value);

        const iconElement =
            activeIcon && isActive ? <span className="inline-flex items-center">{activeIcon}</span> : null;

        return (
            <ToggleGroupPrimitive.Item
                ref={ref}
                className={cn(
                    toggleVariants({
                        variant: context.variant || variant,
                        size: context.size || size,
                    }),
                    className,
                )}
                value={value}
                {...props}
            >
                <span className="flex items-center gap-2">
                    {iconPosition === 'left' && iconElement}
                    {children}
                    {iconPosition === 'right' && iconElement}
                </span>
            </ToggleGroupPrimitive.Item>
        );
    },
);
ToggleGroupItem.displayName = 'ToggleGroupItem';

export { ToggleGroup, ToggleGroupItem };
