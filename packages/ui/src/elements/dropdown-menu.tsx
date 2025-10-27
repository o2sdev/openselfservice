import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

type DropdownMenuSubTriggerProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
    ref?: React.Ref<React.ComponentRef<typeof DropdownMenuPrimitive.SubTrigger>>;
};
const DropdownMenuSubTrigger = ({ className, inset, children, ref, ...props }: DropdownMenuSubTriggerProps) => (
    <DropdownMenuPrimitive.SubTrigger
        ref={ref}
        className={cn(
            'flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
            inset && 'pl-8',
            className,
        )}
        {...props}
    >
        {children}
        <ChevronRight className="ml-auto" />
    </DropdownMenuPrimitive.SubTrigger>
);
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

type DropdownMenuSubContentProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> & {
    ref?: React.Ref<React.ComponentRef<typeof DropdownMenuPrimitive.SubContent>>;
};
const DropdownMenuSubContent = ({ className, ref, ...props }: DropdownMenuSubContentProps) => (
    <DropdownMenuPrimitive.SubContent
        ref={ref}
        className={cn(
            'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]',
            className,
        )}
        {...props}
    />
);
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

type DropdownMenuContentProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> & {
    ref?: React.Ref<React.ComponentRef<typeof DropdownMenuPrimitive.Content>>;
};
const DropdownMenuContent = ({ className, sideOffset = 4, ref, ...props }: DropdownMenuContentProps) => (
    <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
            ref={ref}
            sideOffset={sideOffset}
            className={cn(
                'z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]',
                className,
            )}
            {...props}
        />
    </DropdownMenuPrimitive.Portal>
);
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

type DropdownMenuItemProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    ref?: React.Ref<React.ComponentRef<typeof DropdownMenuPrimitive.Item>>;
};
const DropdownMenuItem = ({ className, inset, ref, ...props }: DropdownMenuItemProps) => (
    <DropdownMenuPrimitive.Item
        ref={ref}
        className={cn(
            'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
            inset && 'pl-8',
            className,
        )}
        {...props}
    />
);
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

type DropdownMenuCheckboxItemProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> & {
    ref?: React.Ref<React.ComponentRef<typeof DropdownMenuPrimitive.CheckboxItem>>;
};
const DropdownMenuCheckboxItem = ({ className, children, checked, ref, ...props }: DropdownMenuCheckboxItemProps) => (
    <DropdownMenuPrimitive.CheckboxItem
        ref={ref}
        className={cn(
            'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            className,
        )}
        checked={checked}
        {...props}
    >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <DropdownMenuPrimitive.ItemIndicator>
                <Check className="h-4 w-4" />
            </DropdownMenuPrimitive.ItemIndicator>
        </span>
        {children}
    </DropdownMenuPrimitive.CheckboxItem>
);
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

type DropdownMenuRadioItemProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> & {
    ref?: React.Ref<React.ComponentRef<typeof DropdownMenuPrimitive.RadioItem>>;
};
const DropdownMenuRadioItem = ({ className, children, ref, ...props }: DropdownMenuRadioItemProps) => (
    <DropdownMenuPrimitive.RadioItem
        ref={ref}
        className={cn(
            'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            className,
        )}
        {...props}
    >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <DropdownMenuPrimitive.ItemIndicator>
                <Circle className="h-2 w-2 fill-current" />
            </DropdownMenuPrimitive.ItemIndicator>
        </span>
        {children}
    </DropdownMenuPrimitive.RadioItem>
);
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

type DropdownMenuLabelProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
    ref?: React.Ref<React.ComponentRef<typeof DropdownMenuPrimitive.Label>>;
};
const DropdownMenuLabel = ({ className, inset, ref, ...props }: DropdownMenuLabelProps) => (
    <DropdownMenuPrimitive.Label
        ref={ref}
        className={cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
        {...props}
    />
);
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

type DropdownMenuSeparatorProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> & {
    ref?: React.Ref<React.ComponentRef<typeof DropdownMenuPrimitive.Separator>>;
};
const DropdownMenuSeparator = ({ className, ref, ...props }: DropdownMenuSeparatorProps) => (
    <DropdownMenuPrimitive.Separator ref={ref} className={cn('-mx-1 my-1 h-px bg-muted', className)} {...props} />
);

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
    return <span className={cn('ml-auto text-xs tracking-widest opacity-60', className)} {...props} />;
};
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';

export {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuGroup,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuRadioGroup,
};
