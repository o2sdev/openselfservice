import { DataListActionsConfig, DataListColumnConfig } from '../DataList/DataList.types';

/**
 * Grid column count configuration for responsive layout
 */
export interface DataGridColumnsCount {
    /**
     * Number of columns on mobile devices (< 768px)
     * @default 1
     */
    mobile?: number;

    /**
     * Number of columns on tablet devices (768px - 1024px)
     * @default 2
     */
    tablet?: number;

    /**
     * Number of columns on desktop devices (> 1024px)
     * @default 3
     */
    desktop?: number;
}

/**
 * Props for DataGrid component
 */
export interface DataGridProps<T> {
    /**
     * Array of data items to display
     */
    data: T[];

    /**
     * Column configurations (shared with DataList)
     */
    columns: DataListColumnConfig<T>[];

    /**
     * Optional actions configuration
     */
    actions?: DataListActionsConfig<T>;

    /**
     * Optional card header slots configuration for positioning columns in the card header
     */
    cardHeaderSlots?: {
        top?: string;
        left?: string;
        right?: string;
        bottom?: string;
    };

    /**
     * Optional row key extractor
     */
    getRowKey?: (item: T, index: number) => string | number;

    /**
     * Optional className for the grid container
     */
    className?: string;

    /**
     * Optional row className function
     */
    getRowClassName?: (item: T) => string;

    /**
     * Optional grid column count configuration
     */
    columnsCount?: DataGridColumnsCount;
}
