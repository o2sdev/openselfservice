import { Models } from '@o2s/framework/modules';

export interface FiltersProps<T, S> {
    filters?: Models.Filters.Filters<T>;
    initialValues: S;
    onSubmit: (filters: Partial<S>) => void;
    onReset: () => void;
}
