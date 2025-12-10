import { Models } from '@o2s/framework/modules';
import { ReactNode } from 'react';

type DataTableColumn<T> = Models.DataTable.DataTableColumn<T>;
type DataTableActions = Models.DataTable.DataTableActions;

/**
 * Column type definitions for DataList
 */
export type ColumnType = 'text' | 'badge' | 'date' | 'price' | 'link' | 'status' | 'custom';

/**
 * Common configuration shared by all column types
 */
interface DataListColumnCommonConfig<T> extends DataTableColumn<T> {
    type: ColumnType;

    /**
     * Additional CSS classes for the header cell
     */
    headerClassName?: string;

    /**
     * Additional CSS classes for the body cell
     */
    cellClassName?: string | ((item: T) => string);
}

/**
 * Text column configuration
 */
export interface DataListColumnTextConfig<T> extends DataListColumnCommonConfig<T> {
    type: 'text';
    displayField?: string;
}

/**
 * Badge column configuration
 */
export interface DataListColumnBadgeConfig<T> extends DataListColumnCommonConfig<T> {
    type: 'badge';
    labelField?: string;
    valueField?: string;
    variant?: (value: string) => 'default' | 'destructive' | 'outline' | 'secondary';
}

/**
 * Date column configuration
 */
export interface DataListColumnDateConfig<T> extends DataListColumnCommonConfig<T> {
    type: 'date';
    displayField?: string;
    valueField?: string;
}

/**
 * Price column configuration
 */
export interface DataListColumnPriceConfig<T> extends DataListColumnCommonConfig<T> {
    type: 'price';
    config?: {
        currencyKey?: keyof T;
    };
}

/**
 * Link column configuration
 */
export interface DataListColumnLinkConfig<T> extends DataListColumnCommonConfig<T> {
    type: 'link';
    displayField?: string;
    config?: {
        hrefKey?: keyof T;
        variant?: 'link' | 'default';
        className?: string;
    };
}

/**
 * Status column configuration
 */
export interface DataListColumnStatusConfig<T> extends DataListColumnCommonConfig<T> {
    type: 'status';
}

/**
 * Custom column configuration with render function
 */
export interface DataListColumnCustomConfig<T> extends DataListColumnCommonConfig<T> {
    type: 'custom';
    render: (value: unknown, item: T, column: DataListColumnCustomConfig<T>) => ReactNode;
}

/**
 * Discriminated union of all column configuration types
 */
export type DataListColumnConfig<T> =
    | DataListColumnTextConfig<T>
    | DataListColumnBadgeConfig<T>
    | DataListColumnDateConfig<T>
    | DataListColumnPriceConfig<T>
    | DataListColumnLinkConfig<T>
    | DataListColumnStatusConfig<T>
    | DataListColumnCustomConfig<T>;

/**
 * Actions configuration with rendering options
 */
export interface DataListActionsConfig<T = unknown> extends DataTableActions {
    /**
     * Custom renderer for the actions cell
     */
    render?: (item: T) => ReactNode;

    /**
     * Additional CSS classes for the actions cell
     */
    cellClassName?: string;
}

/**
 * Props for DataList component
 */
export interface DataListProps<T> {
    /**
     * Array of data items to display
     */
    data: T[];

    /**
     * Column configurations
     */
    columns: DataListColumnConfig<T>[];

    /**
     * Optional actions configuration
     */
    actions?: DataListActionsConfig<T>;

    /**
     * Optional row key extractor
     */
    getRowKey?: (item: T, index: number) => string | number;

    /**
     * Optional className for the table
     */
    className?: string;

    /**
     * Optional row className function
     */
    getRowClassName?: (item: T) => string;

    /**
     * Enable row selection with checkboxes
     */
    enableRowSelection?: boolean;

    /**
     * Set of selected row keys (controlled mode)
     */
    selectedRows?: Set<string | number>;

    /**
     * Callback when selection changes
     */
    onSelectionChange?: (selected: Set<string | number>) => void;
}
