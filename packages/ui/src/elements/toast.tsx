import * as ToastPrimitives from '@radix-ui/react-toast';
import { type VariantProps, cva } from 'class-variance-authority';
import { X } from 'lucide-react';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

const ToastProvider = ToastPrimitives.Provider;

type ToastViewportProps = React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport> & {
    ref?: React.Ref<React.ElementRef<typeof ToastPrimitives.Viewport>>;
};
const ToastViewport = ({ className, ref, ...props }: ToastViewportProps) => (
    <ToastPrimitives.Viewport
        ref={ref}
        className={cn(
            'fixed top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
            className,
        )}
        {...props}
    />
);

const toastVariants = cva(
    'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full sm:data-[state=open]:slide-in-from-bottom-full',
    {
        variants: {
            variant: {
                default: 'border bg-background text-foreground',
                destructive: 'destructive group border-destructive bg-destructive text-destructive-foreground',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);

type ToastOwnProps = React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants> & { ref?: React.Ref<React.ElementRef<typeof ToastPrimitives.Root>> };
const Toast = ({ className, variant, ref, ...props }: ToastOwnProps) => {
    return <ToastPrimitives.Root ref={ref} className={cn(toastVariants({ variant }), className)} {...props} />;
};

type ToastActionProps = React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action> & {
    ref?: React.Ref<React.ElementRef<typeof ToastPrimitives.Action>>;
};
const ToastAction = ({ className, ref, ...props }: ToastActionProps) => (
    <ToastPrimitives.Action
        ref={ref}
        className={cn(
            'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 hover:group-[.destructive]:border-destructive/30 hover:group-[.destructive]:bg-destructive hover:group-[.destructive]:text-destructive-foreground focus:group-[.destructive]:ring-destructive',
            className,
        )}
        {...props}
    />
);

type ToastCloseProps = React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close> & {
    ref?: React.Ref<React.ElementRef<typeof ToastPrimitives.Close>>;
};
const ToastClose = ({ className, ref, ...props }: ToastCloseProps) => (
    <ToastPrimitives.Close
        ref={ref}
        className={cn(
            'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-hidden focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 hover:group-[.destructive]:text-red-50 focus:group-[.destructive]:ring-red-400 focus:group-[.destructive]:ring-offset-red-600',
            className,
        )}
        toast-close=""
        {...props}
    >
        <X className="h-4 w-4" />
    </ToastPrimitives.Close>
);

type ToastTitleProps = React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title> & {
    ref?: React.Ref<React.ElementRef<typeof ToastPrimitives.Title>>;
};
const ToastTitle = ({ className, ref, ...props }: ToastTitleProps) => (
    <ToastPrimitives.Title ref={ref} className={cn('text-sm font-semibold', className)} {...props} />
);

type ToastDescriptionProps = React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description> & {
    ref?: React.Ref<React.ElementRef<typeof ToastPrimitives.Description>>;
};
const ToastDescription = ({ className, ref, ...props }: ToastDescriptionProps) => (
    <ToastPrimitives.Description ref={ref} className={cn('text-sm opacity-90', className)} {...props} />
);

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
    type ToastProps,
    type ToastActionElement,
    ToastProvider,
    ToastViewport,
    Toast,
    ToastTitle,
    ToastDescription,
    ToastClose,
    ToastAction,
};
