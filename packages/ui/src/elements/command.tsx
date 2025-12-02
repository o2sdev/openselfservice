import { type DialogProps } from '@radix-ui/react-dialog';
import { Command as CommandPrimitive } from 'cmdk';
import { Search } from 'lucide-react';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { Dialog, DialogContent } from '@o2s/ui/elements/dialog';

type CommandProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive> & {
    ref?: React.Ref<React.ComponentRef<typeof CommandPrimitive>>;
};
const Command = ({ className, ref, ...props }: CommandProps) => (
    <CommandPrimitive
        ref={ref}
        className={cn(
            'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
            className,
        )}
        {...props}
    />
);

const CommandDialog = ({ children, ...props }: DialogProps) => {
    return (
        <Dialog {...props}>
            <DialogContent className="overflow-hidden p-0 shadow-lg">
                <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
                    {children}
                </Command>
            </DialogContent>
        </Dialog>
    );
};

type CommandInputProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> & {
    ref?: React.Ref<React.ComponentRef<typeof CommandPrimitive.Input>>;
};
const CommandInput = ({ className, ref, ...props }: CommandInputProps) => (
    <div className="flex items-center px-3" data-cmdk-input-wrapper="">
        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
        <CommandPrimitive.Input
            ref={ref}
            className={cn(
                'flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
                className,
            )}
            {...props}
        />
    </div>
);

type CommandListProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.List> & {
    ref?: React.Ref<React.ComponentRef<typeof CommandPrimitive.List>>;
};
const CommandList = ({ className, ref, ...props }: CommandListProps) => (
    <CommandPrimitive.List
        ref={ref}
        className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
        {...props}
    />
);

type CommandEmptyProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty> & {
    ref?: React.Ref<React.ComponentRef<typeof CommandPrimitive.Empty>>;
};
const CommandEmpty = ({ ref, ...props }: CommandEmptyProps) => (
    <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />
);

type CommandGroupProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group> & {
    ref?: React.Ref<React.ComponentRef<typeof CommandPrimitive.Group>>;
};
const CommandGroup = ({ className, ref, ...props }: CommandGroupProps) => (
    <CommandPrimitive.Group
        ref={ref}
        className={cn(
            'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
            className,
        )}
        {...props}
    />
);

type CommandSeparatorProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator> & {
    ref?: React.Ref<React.ComponentRef<typeof CommandPrimitive.Separator>>;
};
const CommandSeparator = ({ className, ref, ...props }: CommandSeparatorProps) => (
    <CommandPrimitive.Separator ref={ref} className={cn('-mx-1 h-px bg-border', className)} {...props} />
);

type CommandItemProps = React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> & {
    ref?: React.Ref<React.ComponentRef<typeof CommandPrimitive.Item>>;
};
const CommandItem = ({ className, ref, ...props }: CommandItemProps) => (
    <CommandPrimitive.Item
        ref={ref}
        className={cn(
            "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
            className,
        )}
        {...props}
    />
);

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
    return <span className={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)} {...props} />;
};
CommandShortcut.displayName = 'CommandShortcut';

export {
    Command,
    CommandDialog,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandShortcut,
    CommandSeparator,
};
