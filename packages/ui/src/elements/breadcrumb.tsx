import { Slot } from '@radix-ui/react-slot';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

type BreadcrumbProps = React.ComponentPropsWithoutRef<'nav'> & {
    separator?: React.ReactNode;
    ref?: React.Ref<HTMLElement>;
};
const Breadcrumb = ({ ref, ...props }: BreadcrumbProps) => <nav ref={ref} aria-label="breadcrumb" {...props} />;

type BreadcrumbListProps = React.ComponentPropsWithoutRef<'ol'> & { ref?: React.Ref<HTMLOListElement> };
const BreadcrumbList = ({ className, ref, ...props }: BreadcrumbListProps) => (
    <ol
        ref={ref}
        className={cn(
            'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
            className,
        )}
        {...props}
    />
);

type BreadcrumbItemProps = React.ComponentPropsWithoutRef<'li'> & { ref?: React.Ref<HTMLLIElement> };
const BreadcrumbItem = ({ className, ref, ...props }: BreadcrumbItemProps) => (
    <li ref={ref} className={cn('inline-flex items-center gap-1.5', className)} {...props} />
);

type BreadcrumbLinkProps = React.ComponentPropsWithoutRef<'a'> & {
    asChild?: boolean;
    ref?: React.Ref<HTMLAnchorElement>;
};
const BreadcrumbLink = ({ asChild, className, ref, ...props }: BreadcrumbLinkProps) => {
    const Comp = asChild ? Slot : 'a';
    return <Comp ref={ref} className={cn('transition-colors hover:text-foreground', className)} {...props} />;
};

type BreadcrumbPageProps = React.ComponentPropsWithoutRef<'span'> & { ref?: React.Ref<HTMLSpanElement> };
const BreadcrumbPage = ({ className, ref, ...props }: BreadcrumbPageProps) => (
    <span
        ref={ref}
        role="link"
        aria-disabled="true"
        aria-current="page"
        className={cn('font-normal text-foreground', className)}
        {...props}
    />
);

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<'li'>) => (
    <li role="presentation" aria-hidden="true" className={cn('[&>svg]:w-3.5 [&>svg]:h-3.5', className)} {...props}>
        {children ?? <ChevronRight />}
    </li>
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
    <span
        role="presentation"
        aria-hidden="true"
        className={cn('flex h-9 w-9 items-center justify-center', className)}
        {...props}
    >
        <MoreHorizontal className="h-4 w-4" />
        <span className="sr-only">More</span>
    </span>
);
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis';

export {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbEllipsis,
};
