import React from 'react';

import { DataGrid } from '@o2s/ui/components/DataGrid';
import { DataList } from '@o2s/ui/components/DataList';

import { DataViewProps } from './DataView.types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DataView = <T extends Record<string, any>>({
    viewMode,
    cardHeaderSlots,
    columnsCount,
    ...props
}: DataViewProps<T>) => {
    return (
        <>
            {viewMode === 'grid' ? (
                <DataGrid {...props} cardHeaderSlots={cardHeaderSlots} columnsCount={columnsCount} />
            ) : (
                <DataList {...props} />
            )}
        </>
    );
};
