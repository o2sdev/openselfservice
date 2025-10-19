import React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { Price } from '@o2s/ui/components/Price';

import { Badge } from '@o2s/ui/elements/badge';
import { BadgeStatus } from '@o2s/ui/elements/badge-status';
import { Button } from '@o2s/ui/elements/button';
import { Link } from '@o2s/ui/elements/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@o2s/ui/elements/table';

import { DataListColumnConfig, DataListProps } from './DataList.types';

/**
 * Default cell renderer based on column type
 */
function renderCell<T>(value: Record<string, unknown>, item: T, column: DataListColumnConfig<T>): React.ReactNode {
    if (value === null || value === undefined) {
        return null;
    }

    if (column.type === 'custom') {
        return column.render(value, item, column);
    }

    switch (column.type) {
        case 'text': {
            const displayField = column.displayField || 'label';
            if (typeof value === 'object' && value !== null) {
                return String(value[displayField]);
            }
            return String(value);
        }

        case 'badge': {
            const badgeLabel = String(value[column.labelField || 'label']);
            const badgeValue = String(value[column.valueField || 'value']);
            const variant = column.variant ? column.variant(badgeValue) : 'default';

            return <Badge variant={variant}>{badgeLabel}</Badge>;
        }

        case 'status':
            return <BadgeStatus variant="default" />;

        case 'date': {
            const dateDisplayField = column.displayField || 'label';
            if (typeof value === 'object' && value !== null) {
                return String(value[dateDisplayField]);
            }
            return String(value);
        }

        case 'price': {
            if (typeof value === 'object' && value !== null && 'value' in value) {
                const priceValue = value as { value: number; currency?: string };
                const currency = (
                    column.config?.currencyKey ? String(item[column.config.currencyKey]) : priceValue.currency || 'USD'
                ) as 'USD' | 'EUR' | 'GBP' | 'PLN';
                return <Price price={{ value: priceValue.value, currency }} />;
            }
            if (typeof value === 'object' && value !== null) {
                return <Price price={value as unknown as { value: number; currency: 'USD' | 'EUR' | 'GBP' | 'PLN' }} />;
            }
            return null;
        }

        case 'link': {
            const linkDisplayField = column.displayField || 'label';
            const linkLabel =
                typeof value === 'object' && value !== null ? String(value[linkDisplayField]) : String(value);
            const _href = column.config?.hrefKey ? String(item[column.config.hrefKey]) : '#';
            const linkVariant = column.config?.variant ? column.config.variant : 'link';
            const linkClassName = column.config?.className
                ? column.config.className
                : 'flex items-center justify-end gap-2';

            if (linkVariant === 'link') {
                return (
                    <Link asChild>
                        <Button variant="link" className={linkClassName}>
                            {linkLabel}
                        </Button>
                    </Link>
                );
            }
            return (
                <Button variant={linkVariant} className={linkClassName}>
                    {linkLabel}
                </Button>
            );
        }

        default:
            return String(value);
    }
}

/**
 * DataList component - A reusable table component for displaying data
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function DataList<T extends Record<string, any>>({
    data,
    columns,
    actions,
    getRowKey,
    className,
    getRowClassName,
}: DataListProps<T>) {
    // Default row key extractor
    const defaultGetRowKey = (item: T, index: number) => {
        if ('id' in item) {
            return String(item.id);
        }
        return index;
    };

    const rowKeyExtractor = getRowKey || defaultGetRowKey;

    return (
        <Table className={className}>
            <TableHeader>
                <TableRow>
                    {columns.map((column) => (
                        <TableHead
                            key={String(column.id)}
                            className={cn(
                                'py-3 px-4 text-sm font-medium text-muted-foreground',
                                column.headerClassName,
                            )}
                        >
                            {column.title}
                        </TableHead>
                    ))}
                    {actions && (
                        <TableHead className="py-3 px-4 text-sm font-medium text-muted-foreground">
                            {actions.title}
                        </TableHead>
                    )}
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((item, index) => {
                    const rowKey = rowKeyExtractor(item, index);
                    const rowClassName = getRowClassName ? getRowClassName(item) : undefined;

                    return (
                        <TableRow key={rowKey} className={rowClassName}>
                            {columns.map((column) => {
                                const value = item[column.id];
                                const cellContent = renderCell(value, item, column);

                                const cellClassName =
                                    typeof column.cellClassName === 'string'
                                        ? column.cellClassName
                                        : column.cellClassName?.(item);

                                const defaultClassName = column.type === 'text' ? 'truncate whitespace-nowrap' : '';

                                return (
                                    <TableCell key={String(column.id)} className={cn(defaultClassName, cellClassName)}>
                                        {cellContent}
                                    </TableCell>
                                );
                            })}
                            {actions && (
                                <TableCell className={cn('py-0', actions.cellClassName)}>
                                    {actions.render ? actions.render(item) : null}
                                </TableCell>
                            )}
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}
