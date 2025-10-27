import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';
import { baseVariant } from '@o2s/ui/lib/utils';

import { ButtonProps } from '@o2s/ui/elements/button';

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
    <nav
        role="navigation"
        aria-label="pagination"
        className={cn('mx-auto flex w-full justify-center', className)}
        {...props}
    />
);
Pagination.displayName = 'Pagination';

type PaginationContentProps = React.ComponentProps<'ul'> & { ref?: React.Ref<HTMLUListElement> };
const PaginationContent = ({ className, ref, ...props }: PaginationContentProps) => (
    <ul ref={ref} className={cn('flex flex-row items-center gap-2', className)} {...props} />
);

type PaginationItemProps = React.ComponentProps<'li'> & { ref?: React.Ref<HTMLLIElement> };
const PaginationItem = ({ className, ref, ...props }: PaginationItemProps) => (
    <li ref={ref} className={cn('', className)} {...props} />
);

type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<ButtonProps, 'size'> &
    React.ComponentProps<'button'>;

const PaginationLink = ({ className, isActive, size = 'icon', ...props }: PaginationLinkProps) => (
    <button
        aria-current={isActive ? 'page' : undefined}
        className={cn(
            baseVariant({
                variant: isActive ? 'outline' : 'ghost',
                size,
            }),
            className,
        )}
        {...props}
    />
);
PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious = ({
    className,
    'aria-label': label,
    ...props
}: React.ComponentProps<typeof PaginationLink>) => (
    <PaginationLink aria-label={label} size="default" className={cn('gap-1 pl-2.5', className)} {...props}>
        <ChevronLeft className="h-4 w-4" />
        <span>{label}</span>
    </PaginationLink>
);
PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({ className, 'aria-label': label, ...props }: React.ComponentProps<typeof PaginationLink>) => (
    <PaginationLink aria-label={label} size="default" className={cn('gap-1 pr-2.5', className)} {...props}>
        <span>{label}</span>
        <ChevronRight className="h-4 w-4" />
    </PaginationLink>
);
PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
    <span aria-hidden className={cn('flex h-10 w-10 items-center justify-center', className)} {...props}>
        <MoreHorizontal className="h-4 w-4" />
        <span className="sr-only">More pages</span>
    </span>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';

export {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
};
