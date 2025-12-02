import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

type TableProps = React.HTMLAttributes<HTMLTableElement> & { ref?: React.Ref<HTMLTableElement> };
const Table = ({ className, ref, ...props }: TableProps) => (
    <div className="relative w-full overflow-auto">
        <table ref={ref} className={cn('w-full caption-bottom text-sm', className)} {...props} />
    </div>
);

type TableHeaderProps = React.HTMLAttributes<HTMLTableSectionElement> & { ref?: React.Ref<HTMLTableSectionElement> };
const TableHeader = ({ className, ref, ...props }: TableHeaderProps) => (
    <thead ref={ref} className={cn('[&_tr]:border-b', className)} {...props} />
);

type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement> & { ref?: React.Ref<HTMLTableSectionElement> };
const TableBody = ({ className, ref, ...props }: TableBodyProps) => (
    <tbody ref={ref} className={cn('[&_tr:last-child]:border-0', className)} {...props} />
);

type TableFooterProps = React.HTMLAttributes<HTMLTableSectionElement> & { ref?: React.Ref<HTMLTableSectionElement> };
const TableFooter = ({ className, ref, ...props }: TableFooterProps) => (
    <tfoot ref={ref} className={cn('border-t bg-muted/50 font-medium last:[&>tr]:border-b-0', className)} {...props} />
);

type TableRowProps = React.HTMLAttributes<HTMLTableRowElement> & { ref?: React.Ref<HTMLTableRowElement> };
const TableRow = ({ className, ref, ...props }: TableRowProps) => (
    <tr
        ref={ref}
        className={cn('border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted', className)}
        {...props}
    />
);

type TableHeadProps = React.ThHTMLAttributes<HTMLTableCellElement> &
    React.HTMLAttributes<HTMLTableCellElement> & {
        ref?: React.Ref<HTMLTableCellElement>;
    };
const TableHead = ({ className, ref, ...props }: TableHeadProps) => (
    <th
        ref={ref}
        className={cn(
            'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
            className,
        )}
        {...props}
    />
);

type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement> &
    React.HTMLAttributes<HTMLTableCellElement> & {
        ref?: React.Ref<HTMLTableCellElement>;
    };
const TableCell = ({ className, ref, ...props }: TableCellProps) => (
    <td ref={ref} className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)} {...props} />
);

type TableCaptionProps = React.HTMLAttributes<HTMLTableCaptionElement> & { ref?: React.Ref<HTMLTableCaptionElement> };
const TableCaption = ({ className, ref, ...props }: TableCaptionProps) => (
    <caption ref={ref} className={cn('mt-4 text-sm text-muted-foreground', className)} {...props} />
);

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
