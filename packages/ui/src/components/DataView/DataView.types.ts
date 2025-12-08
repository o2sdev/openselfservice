import { ReactNode } from 'react';

import { DataListActionsConfig, DataListColumnConfig } from '../DataList/DataList.types';

export interface DataViewProps<T> {
    viewMode: 'grid' | 'list';
    cardHeaderSlots?: {
        top?: string;
        left?: string;
        right?: string;
        bottom?: string;
    };
    columnsCount?: {
        mobile?: number;
        tablet?: number;
        desktop?: number;
    };
    data: T[];
    columns: DataListColumnConfig<T>[];
    actions?: DataListActionsConfig<T>;
    getRowKey?: (item: T, index: number) => string | number;
    enableRowSelection?: boolean;
    selectedRows?: Set<string | number>;
    onSelectionChange?: (selected: Set<string | number>) => void;
    bulkActions?: (selectedItems: T[], selectedCount: number) => ReactNode;
    bulkActionsLabel?: (count: number) => string;
}
