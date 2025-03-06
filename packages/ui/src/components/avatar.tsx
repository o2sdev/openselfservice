import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { Typography } from '@o2s/ui/components/typography';

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

const AvatarFallback = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Fallback>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
        ref={ref}
        className={cn('flex h-full w-full items-center justify-center rounded-full bg-muted', className)}
        {...props}
    />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

type AvatarUserProps = {
    name: string;
    email?: string;
} & React.ComponentProps<'p'>;

const AvatarUser = ({ name, email, className, ...props }: AvatarUserProps) => (
    <p className={cn('flex flex-col gap-0.5', className)} {...props}>
        <Typography variant="small" asChild>
            <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">{name}</span>
        </Typography>
        {email && (
            <Typography variant="small" asChild>
                <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">{email}</span>
            </Typography>
        )}
    </p>
);
AvatarUser.displayName = 'AvatarUser';

export { Avatar, AvatarImage, AvatarFallback };
