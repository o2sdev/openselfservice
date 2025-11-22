import React from 'react';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../elements/table';
import { renderCell } from '../../lib/renderCell';
import { cn } from '../../lib/utils';

import { DataListProps } from './DataList.types';

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
