import React, { useCallback, useMemo, useState } from 'react';

import { Button } from '../../elements/button';
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
    bulkActions,
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

    // Selection state for bulk actions
    const [selectedKeys, setSelectedKeys] = useState<Set<string | number>>(new Set());

    // Clear selection when data changes (e.g., pagination)
    // Using useMemo to derive valid selection based on current data
    const validSelectedKeys = useMemo(() => {
        const currentRowKeys = new Set(data.map((item, index) => rowKeyExtractor(item, index)));
        const validKeys = new Set<string | number>();

        selectedKeys.forEach((key) => {
            if (currentRowKeys.has(key)) {
                validKeys.add(key);
            }
        });

        return validKeys;
    }, [data, selectedKeys, rowKeyExtractor]);

    // Helper: Check if a row is selected
    const isRowSelected = useCallback(
        (rowKey: string | number): boolean => {
            return validSelectedKeys.has(rowKey);
        },
        [validSelectedKeys],
    );

    // Helper: Get selected row data
    const getSelectedRows = useCallback((): T[] => {
        return data.filter((item, index) => {
            const rowKey = rowKeyExtractor(item, index);
            return validSelectedKeys.has(rowKey);
        });
    }, [data, rowKeyExtractor, validSelectedKeys]);

    // Helper: Check if all rows are selected
    const isAllSelected = useMemo((): boolean => {
        if (data.length === 0) return false;
        return data.every((item, index) => {
            const rowKey = rowKeyExtractor(item, index);
            return validSelectedKeys.has(rowKey);
        });
    }, [data, rowKeyExtractor, validSelectedKeys]);

    // Helper: Check indeterminate state (some but not all selected)
    const isIndeterminate = useMemo((): boolean => {
        const selectedCount = validSelectedKeys.size;
        return selectedCount > 0 && selectedCount < data.length;
    }, [validSelectedKeys, data.length]);

    // Handler: Toggle individual row selection
    const handleRowSelect = useCallback((rowKey: string | number) => {
        setSelectedKeys((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(rowKey)) {
                newSet.delete(rowKey);
            } else {
                newSet.add(rowKey);
            }
            return newSet;
        });
    }, []);

    // Handler: Select all rows on current page
    const handleSelectAll = useCallback(() => {
        const allKeys = data.map((item, index) => rowKeyExtractor(item, index));
        setSelectedKeys(new Set(allKeys));
    }, [data, rowKeyExtractor]);

    // Handler: Deselect all rows
    const handleDeselectAll = useCallback(() => {
        setSelectedKeys(new Set());
    }, []);

    // Determine if header checkbox should be checked or indeterminate
    const headerCheckboxChecked = isAllSelected;
    const headerCheckboxIndeterminate = isIndeterminate;

    // Handler for header checkbox
    const handleHeaderCheckboxChange = useCallback(() => {
        if (isAllSelected) {
            handleDeselectAll();
        } else {
            handleSelectAll();
        }
    }, [isAllSelected, handleSelectAll, handleDeselectAll]);

    return (
        <>
            {/* Action Bar - only visible when rows are selected */}
            {bulkActions && validSelectedKeys.size > 0 && (
                <div className="flex items-center justify-between rounded-lg bg-muted p-4 mb-4">
                    {/* Selection Count */}
                    <div className="text-sm text-muted-foreground">{validSelectedKeys.size} selected</div>

                    {/* Bulk Action Buttons */}
                    <div className="flex items-center gap-2">
                        {bulkActions.map((action, index) => {
                            const variant = action.variant || (index === 0 ? 'primary' : 'secondary');
                            return (
                                <Button
                                    key={index}
                                    variant={variant}
                                    onClick={() => action.onAction(getSelectedRows())}
                                >
                                    {action.label}
                                </Button>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Table */}
            <Table className={className}>
                <TableHeader>
                    <TableRow>
                        {/* Checkbox Column Header */}
                        {bulkActions && (
                            <TableHead className="w-12">
                                <Checkbox
                                    checked={headerCheckboxChecked}
                                    // @ts-expect-error - indeterminate is a valid prop for Radix checkbox
                                    indeterminate={headerCheckboxIndeterminate}
                                    onCheckedChange={handleHeaderCheckboxChange}
                                    aria-label="Select all rows"
                                />
                            </TableHead>
                        )}

                        {/* Regular Columns */}
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

                        {/* Actions Column */}
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
                        const selected = bulkActions ? isRowSelected(rowKey) : false;

                        return (
                            <TableRow
                                key={rowKey}
                                className={rowClassName}
                                data-state={selected ? 'selected' : undefined}
                            >
                                {/* Checkbox Column Cell */}
                                {bulkActions && (
                                    <TableCell>
                                        <Checkbox
                                            checked={selected}
                                            onCheckedChange={() => handleRowSelect(rowKey)}
                                            aria-label={`Select row ${rowKey}`}
                                        />
                                    </TableCell>
                                )}

                                {/* Regular Columns */}
                                {columns.map((column) => {
                                    const value = item[column.id];
                                    const cellContent = renderCell(value, item, column);

                                    const cellClassName =
                                        typeof column.cellClassName === 'string'
                                            ? column.cellClassName
                                            : column.cellClassName?.(item);

                                    const defaultClassName = column.type === 'text' ? 'truncate whitespace-nowrap' : '';

                                    return (
                                        <TableCell
                                            key={String(column.id)}
                                            className={cn(defaultClassName, cellClassName)}
                                        >
                                            {cellContent}
                                        </TableCell>
                                    );
                                })}

                                {/* Actions Column */}
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
        </>
    );
}
