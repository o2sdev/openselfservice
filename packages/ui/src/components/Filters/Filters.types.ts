import { Models } from '@o2s/framework/modules';
import { FormikErrors, FormikValues } from 'formik';

export interface FiltersProps<T, S> {
    filters?: Models.Filters.Filters<T>;
    initialValues: S;
    onSubmit: (filters: Partial<S>) => void;
    onReset: () => void;
    hasLeadingItem?: boolean;
    labels?: {
        clickToSelect?: string;
    };
}

export interface FiltersSectionProps<T, S> extends FiltersProps<T, S> {
    title?: string;
    initialFilters: S;
}

export interface FilterItemProps<T, S extends FormikValues> {
    item: Models.Filters.FilterItem<T>;
    submitForm: () => Promise<void>;
    setFieldValue: (
        field: string,
        value: string[] | string | number | boolean | null,
    ) => Promise<void | FormikErrors<S>>;
    isLeading?: boolean;
    labels?: {
        clickToSelect?: string;
    };
}
