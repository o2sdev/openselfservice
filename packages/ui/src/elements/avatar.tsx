import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { Typography } from '@o2s/ui/elements/typography';

const avatarVariants = cva('flex h-full w-full items-center justify-center rounded-full border', {
    variants: {
        variant: {
            default: 'text-foreground bg-background border-muted',
            secondary: 'text-tertiary-foreground bg-tertiary border-tertiary-border hover:bg-tertiary-hover',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});

type AvatarProps = {
    name?: string;
    email?: string;
} & React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;

const Avatar = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(
    ({ name, email, className, ...props }, ref) => (
        <div className="flex items-center gap-2">
            <AvatarPrimitive.Root
                ref={ref}
                className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
                {...props}
            />
            {name && <AvatarUser name={name} email={email} />}
        </div>
    ),
);
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Image>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Image ref={ref} className={cn('aspect-square h-full w-full', className)} {...props} />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

export interface AvatarFallbackProps
    extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>,
        VariantProps<typeof avatarVariants> {
    name: string;
}

const AvatarFallback = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Fallback>, AvatarFallbackProps>(
    ({ variant, className, name, ...props }, ref) => {
        const initials = name
            .split(' ')
            .map((name) => name[0])
            .join('')
            .toUpperCase();

        return (
            <AvatarPrimitive.Fallback ref={ref} className={cn(avatarVariants({ variant, className }))} {...props}>
                {initials}
            </AvatarPrimitive.Fallback>
        );
    },
);
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

type AvatarUserProps = {
    name: string;
    email?: string;
} & React.ComponentProps<'p'>;

const AvatarUser = ({ name, email, className, ...props }: AvatarUserProps) => (
    <p className={cn('flex flex-col gap-0.5', className)} {...props}>
        <Typography variant="small" asChild>
            <span className="whitespace-nowrap overflow-hidden text-ellipsis">{name}</span>
        </Typography>
        {email && (
            <Typography variant="small" asChild>
                <span className="whitespace-nowrap overflow-hidden text-ellipsis">{email}</span>
            </Typography>
        )}
    </p>
);
AvatarUser.displayName = 'AvatarUser';

export { Avatar, AvatarImage, AvatarFallback };
