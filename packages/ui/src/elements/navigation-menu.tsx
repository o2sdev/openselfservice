import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

type NavigationMenuProps = React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> & {
    ref?: React.Ref<React.ElementRef<typeof NavigationMenuPrimitive.Root>>;
};
const NavigationMenu = ({ className, children, ref, ...props }: NavigationMenuProps) => (
    <NavigationMenuPrimitive.Root
        ref={ref}
        className={cn('relative z-10 flex max-w-max flex-1 items-center justify-center', className)}
        {...props}
    >
        {children}
        <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
);

type NavigationMenuListProps = React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List> & {
    ref?: React.Ref<React.ElementRef<typeof NavigationMenuPrimitive.List>>;
};
const NavigationMenuList = ({ className, ref, ...props }: NavigationMenuListProps) => (
    <NavigationMenuPrimitive.List
        ref={ref}
        className={cn('group flex flex-1 list-none items-center justify-center space-x-1', className)}
        {...props}
    />
);

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
    'no-underline hover:no-underline group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 !text-base font-medium transition-colors focus-visible:outline-ring text-navbar-primary! hover:bg-navbar-accent-background! hover:text-navbar-sub-muted! disabled:pointer-events-none disabled:opacity-50 data-active:bg-navbar-sub-accent data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent/50 data-[state=open]:bg-accent/50',
);

type NavigationMenuTriggerProps = React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger> & {
    ref?: React.Ref<React.ElementRef<typeof NavigationMenuPrimitive.Trigger>>;
};
const NavigationMenuTrigger = ({ className, children, ref, ...props }: NavigationMenuTriggerProps) => (
    <NavigationMenuPrimitive.Trigger ref={ref} className={cn(navigationMenuTriggerStyle(), 'group', className)} {...props}>
        {children}{' '}
        <ChevronDown
            className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
            aria-hidden="true"
        />
    </NavigationMenuPrimitive.Trigger>
);

type NavigationMenuContentProps = React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content> & {
    ref?: React.Ref<React.ElementRef<typeof NavigationMenuPrimitive.Content>>;
};
const NavigationMenuContent = ({ className, ref, ...props }: NavigationMenuContentProps) => (
    <NavigationMenuPrimitive.Content
        ref={ref}
        className={cn(
            'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ',
            className,
        )}
        {...props}
    />
);

const NavigationMenuLink = NavigationMenuPrimitive.Link;

type NavigationMenuViewportProps = React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport> & {
    ref?: React.Ref<React.ElementRef<typeof NavigationMenuPrimitive.Viewport>>;
};
const NavigationMenuViewport = ({ className, ref, ...props }: NavigationMenuViewportProps) => (
    <div className={cn('absolute left-0 top-full flex justify-center')}>
        <NavigationMenuPrimitive.Viewport
            className={cn(
                'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
                className,
            )}
            ref={ref}
            {...props}
        />
    </div>
);

type NavigationMenuIndicatorProps = React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator> & {
    ref?: React.Ref<React.ElementRef<typeof NavigationMenuPrimitive.Indicator>>;
};
const NavigationMenuIndicator = ({ className, ref, ...props }: NavigationMenuIndicatorProps) => (
    <NavigationMenuPrimitive.Indicator
        ref={ref}
        className={cn(
            'top-full z-1 flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
            className,
        )}
        {...props}
    >
        <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </NavigationMenuPrimitive.Indicator>
);

export {
    navigationMenuTriggerStyle,
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuContent,
    NavigationMenuTrigger,
    NavigationMenuLink,
    NavigationMenuIndicator,
    NavigationMenuViewport,
};
