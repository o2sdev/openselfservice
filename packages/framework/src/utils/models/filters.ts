export class Filters<T> {
    label!: string;
    title!: string;
    description?: string;
    submit!: string;
    reset?: string;
    removeFilters?: string;
    items!: FilterItem<T & { sort: string }>[];
}

export type FilterItem<T> = FilterSelect<T> | FilterDateRange<T>;

export class Filter<T> {
    id!: keyof T;
    label!: string;
}

export class FilterSelect<T> extends Filter<T> {
    __typename!: 'FilterSelect';
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
