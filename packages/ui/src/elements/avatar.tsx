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

type AvatarOwnProps = AvatarProps & { ref?: React.Ref<React.ComponentRef<typeof AvatarPrimitive.Root>> };
const Avatar = ({ name, email, className, ref, ...props }: AvatarOwnProps) => (
    <div className="flex items-center gap-2">
        <AvatarPrimitive.Root
            ref={ref}
            className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
            {...props}
        />
        {name && <AvatarUser name={name} email={email} />}
    </div>
);

type AvatarImageProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> & {
    ref?: React.Ref<React.ComponentRef<typeof AvatarPrimitive.Image>>;
};
const AvatarImage = ({ className, alt = '', ref, ...props }: AvatarImageProps) => (
    <AvatarPrimitive.Image ref={ref} className={cn('aspect-square h-full w-full', className)} alt={alt} {...props} />
);

export interface AvatarFallbackProps
    extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>, VariantProps<typeof avatarVariants> {
    name: string;
}

type AvatarFallbackOwnProps = AvatarFallbackProps & {
    ref?: React.Ref<React.ComponentRef<typeof AvatarPrimitive.Fallback>>;
};
const AvatarFallback = ({ variant, className, name, ref, ...props }: AvatarFallbackOwnProps) => {
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
};

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
