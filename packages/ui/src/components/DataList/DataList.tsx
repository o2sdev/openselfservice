import React from 'react';

import { Checkbox } from '../../elements/checkbox';
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
    enableRowSelection = false,
    selectedRows,
    onSelectionChange,
}: DataListProps<T>) {
    // Default row key extractor
    const defaultGetRowKey = (item: T, index: number) => {
        if ('id' in item) {
            return String(item.id);
        }
        return index;
    };

    const rowKeyExtractor = getRowKey || defaultGetRowKey;

    // Row selection handlers
    const handleSelectAll = (checked: boolean) => {
        if (!onSelectionChange) return;

        if (checked) {
            const allKeys = new Set(data.map((item, index) => rowKeyExtractor(item, index)));
            onSelectionChange(allKeys);
        } else {
            onSelectionChange(new Set());
        }
    };

    const handleRowSelect = (rowKey: string | number, checked: boolean) => {
        if (!onSelectionChange || !selectedRows) return;

        const newSelected = new Set(selectedRows);
        if (checked) {
            newSelected.add(rowKey);
        } else {
            newSelected.delete(rowKey);
        }
        onSelectionChange(newSelected);
    };

    // Calculate selection state
    const allRowKeys = data.map((item, index) => rowKeyExtractor(item, index));
    const selectedCount = selectedRows?.size || 0;
    const allSelected = enableRowSelection && data.length > 0 && selectedCount === allRowKeys.length;
    const someSelected = enableRowSelection && selectedCount > 0 && selectedCount < allRowKeys.length;

    return (
        <Table className={className}>
            <TableHeader>
                <TableRow>
                    {enableRowSelection && (
                        <TableHead className="w-12 py-3 px-4">
                            <Checkbox
                                checked={allSelected ? true : someSelected ? 'indeterminate' : false}
                                onCheckedChange={handleSelectAll}
                                aria-label="Select all"
                            />
                        </TableHead>
                    )}
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
                    const isRowSelected = enableRowSelection && selectedRows?.has(rowKey);

                    return (
                        <TableRow key={rowKey} className={rowClassName}>
                            {enableRowSelection && (
                                <TableCell className="w-12 py-3 px-4">
                                    <Checkbox
                                        checked={isRowSelected}
                                        onCheckedChange={(checked) => handleRowSelect(rowKey, !!checked)}
                                        aria-label="Select row"
                                    />
                                </TableCell>
                            )}
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
