import React, { useMemo } from 'react';

import { DataGrid } from '@o2s/ui/components/DataGrid';
import { DataList } from '@o2s/ui/components/DataList';

import { DataViewProps } from './DataView.types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DataView = <T extends Record<string, any>>({
    viewMode,
    cardHeaderSlots,
    columnsCount,
    enableRowSelection,
    selectedRows,
    onSelectionChange,
    bulkActions,
    bulkActionsLabel,
    data,
    getRowKey,
    ...props
}: DataViewProps<T>) => {
    // Map selected row keys to full item objects
    const selectedItems = useMemo(() => {
        if (!selectedRows || selectedRows.size === 0 || !bulkActions) {
            return [];
        }

        const defaultGetRowKey = (item: T, index: number) => {
            if ('id' in item) {
                return String(item.id);
            }
            return index;
        };

        const rowKeyExtractor = getRowKey || defaultGetRowKey;

        return data.filter((item, index) => {
            const key = rowKeyExtractor(item, index);
            return selectedRows.has(key);
        });
    }, [selectedRows, data, getRowKey, bulkActions]);

    const selectedCount = selectedRows?.size || 0;
    const showBulkActions = enableRowSelection && bulkActions && selectedCount > 0 && viewMode !== 'grid';

    return (
        <>
            {showBulkActions && (
                <div className="flex items-center justify-between gap-4 rounded-md border bg-muted/50 p-4">
                    {bulkActionsLabel && (
                        <span className="text-sm text-muted-foreground">{bulkActionsLabel(selectedCount)}</span>
                    )}
                    <div className="flex items-center gap-2">{bulkActions(selectedItems, selectedCount)}</div>
                </div>
            )}
            {viewMode === 'grid' ? (
                <DataGrid {...props} data={data} cardHeaderSlots={cardHeaderSlots} columnsCount={columnsCount} />
            ) : (
                <DataList
                    {...props}
                    data={data}
                    enableRowSelection={enableRowSelection}
                    selectedRows={selectedRows}
                    onSelectionChange={onSelectionChange}
                />
            )}
        </>
    );
};
