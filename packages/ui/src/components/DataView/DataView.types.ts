import { DataListActionsConfig, DataListColumnConfig } from '@o2s/ui/components/DataList/DataList.types';

export interface DataViewProps<T> {
    viewMode: 'grid' | 'list';
    slots?: {
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
}
