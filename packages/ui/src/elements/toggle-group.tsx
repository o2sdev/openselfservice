import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { toggleVariants } from '@o2s/ui/elements/toggle';

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
    size: 'default',
    variant: 'default',
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

const ToggleGroup = React.forwardRef<
    React.ElementRef<typeof ToggleGroupPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => {
    const context = React.useContext(ToggleGroupContext);

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
            <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
        </ToggleGroupPrimitive.Root>
    );
});

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
    React.ElementRef<typeof ToggleGroupPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
    const context = React.useContext(ToggleGroupContext);

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
            {...props}
        >
            {children}
        </ToggleGroupPrimitive.Item>
    );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
