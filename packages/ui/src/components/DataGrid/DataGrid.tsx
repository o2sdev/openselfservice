import React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { DataListColumnConfig } from '@o2s/ui/components/DataList';

import { Card, CardContent, CardFooter, CardHeader } from '@o2s/ui/elements/card';
import { Separator } from '@o2s/ui/elements/separator';
import { Typography } from '@o2s/ui/elements/typography';

import { renderCell } from '../../lib/renderCell';

import { DataGridProps } from './DataGrid.types';

const GRID_COLS_MAP: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
};

const getGridColsClass = (cols: number): string => {
    return GRID_COLS_MAP[cols] || 'grid-cols-1';
};

const defaultGetRowKey = <T extends Record<string, unknown>>(item: T, index: number): string | number => {
    if ('id' in item) {
        return String(item.id);
    }
    return index;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function DataGrid<T extends Record<string, any>>({
    data,
    columns,
    actions,
    cardHeaderSlots,
    getRowKey,
    className,
    getRowClassName,
    columnsCount,
}: DataGridProps<T>) {
    const rowKeyExtractor = getRowKey || defaultGetRowKey;

    const mobileCols = columnsCount?.mobile ?? 1;
    const tabletCols = columnsCount?.tablet ?? 2;
    const desktopCols = columnsCount?.desktop ?? 3;

    // Build responsive grid classes
    const gridClasses = cn(
        'grid gap-4',
        getGridColsClass(mobileCols),
        `md:${getGridColsClass(tabletCols)}`,
        `lg:${getGridColsClass(desktopCols)}`,
        className,
    );

    const findColumnById = (id: string | undefined): DataListColumnConfig<T> | undefined => {
        if (!id) return undefined;
        return columns.find((col) => col.id === id);
    };

    const topColumn = findColumnById(cardHeaderSlots?.top);
    const leftColumn = findColumnById(cardHeaderSlots?.left);
    const rightColumn = findColumnById(cardHeaderSlots?.right);
    const bottomColumn = findColumnById(cardHeaderSlots?.bottom);

    const slotIds = [
        cardHeaderSlots?.top,
        cardHeaderSlots?.left,
        cardHeaderSlots?.right,
        cardHeaderSlots?.bottom,
    ].filter(Boolean) as string[];
    const bodyColumns = columns.filter((col) => !slotIds.includes(String(col.id)));

    return (
        <div className={gridClasses}>
            {data.map((item, index) => {
                const rowKey = rowKeyExtractor(item, index);
                const rowClassName = getRowClassName ? getRowClassName(item) : undefined;

                return (
                    <Card key={rowKey} className={cn('flex flex-col', rowClassName)}>
                        {(topColumn || leftColumn || rightColumn || bottomColumn) && (
                            <CardHeader>
                                {topColumn && (
                                    <div className="mb-2">{renderCell(item[topColumn.id], item, topColumn)}</div>
                                )}
                                <div className="flex items-start justify-between gap-4">
                                    {(leftColumn || bottomColumn) && (
                                        <div className="flex-1 flex flex-col gap-2">
                                            {leftColumn && (
                                                <Typography variant="h3" className="font-bold">
                                                    {renderCell(item[leftColumn.id], item, leftColumn)}
                                                </Typography>
                                            )}
                                            {bottomColumn && (
                                                <Typography variant="small" className="text-muted-foreground">
                                                    {renderCell(item[bottomColumn.id], item, bottomColumn)}
                                                </Typography>
                                            )}
                                        </div>
                                    )}
                                    {rightColumn && (
                                        <div className="shrink-0">
                                            {renderCell(item[rightColumn.id], item, rightColumn)}
                                        </div>
                                    )}
                                </div>
                            </CardHeader>
                        )}

                        <CardContent className="flex-1 pb-3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {bodyColumns.map((column) => {
                                    const value = item[column.id];
                                    const cellContent = renderCell(value, item, column);

                                    if (cellContent == null) {
                                        return null;
                                    }

                                    return (
                                        <div key={String(column.id)} className="flex flex-col gap-1">
                                            <Typography variant="small" className="text-muted-foreground">
                                                {column.title}
                                            </Typography>
                                            <div className="text-sm font-medium">{cellContent}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </CardContent>

                        {actions && (
                            <CardFooter
                                className={cn('pt-0 pb-3 flex flex-col gap-3 items-end', actions.cellClassName)}
                            >
                                <Separator />
                                {actions.render ? actions.render(item) : null}
                            </CardFooter>
                        )}
                    </Card>
                );
            })}
        </div>
    );
}
