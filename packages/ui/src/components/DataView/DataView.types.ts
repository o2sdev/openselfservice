import { ReactNode } from 'react';

import { DataListActionsConfig, DataListColumnConfig, DataListProps } from '../DataList';

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
    enableRowSelection?: boolean;
    selectedRows?: Set<string | number>;
    onSelectionChange?: (selected: Set<string | number>) => void;
    bulkActions?: (selectedRowKeys: Set<string | number>) => ReactNode;
    bulkActionsLabel?: (count: number) => string;
    getRowKey?: DataListProps<T>['getRowKey'];
}
