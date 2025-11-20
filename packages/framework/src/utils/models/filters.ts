export class Filters<T> {
    label!: string;
    title!: string;
    description?: string;
    submit!: string;
    reset?: string;
    close!: string;
    removeFilters?: string;
    items!: FilterItem<T & { sort: string; search: string }>[];
}

export type FilterItem<T> =
    | FilterSelect<T>
    | FilterDateRange<T>
    | FilterToggleGroup<T>
    | FilterText<T>
    | FilterViewModeToggle<T>;

export class Filter<T> {
    id!: keyof T;
    label!: string;
    isLeading?: boolean;
}

export class FilterSelect<T> extends Filter<T> {
    __typename!: 'FilterSelect';
    allowMultiple!: boolean;
    options!: {
        value: string;
        label: string;
    }[];
}

export class FilterToggleGroup<T> extends Filter<T> {
    __typename!: 'FilterToggleGroup';
    allowMultiple!: boolean;
    options!: {
        value: string;
        label: string;
    }[];
}

export class FilterDateRange<T> extends Filter<T> {
    __typename!: 'FilterDateRange';
    from!: {
        value?: string;
        label: string;
    };
    to!: {
        value?: string;
        label: string;
    };
}

export class FilterText<T> extends Filter<T> {
    __typename!: 'FilterText';
    isLabelHidden?: boolean;
    placeholder?: string;
}

export class FilterViewModeToggle<T> extends Filter<T> {
    __typename!: 'FilterViewModeToggle';
    value?: 'list' | 'grid';
    onChange?: (value: 'list' | 'grid') => void;
}
