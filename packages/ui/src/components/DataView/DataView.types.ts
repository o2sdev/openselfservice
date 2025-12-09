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
    getRowKey?: DataListProps<T>['getRowKey'];
}
