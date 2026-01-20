import { Models } from '@o2s/framework/modules';
import { FormikErrors, FormikValues } from 'formik';

export interface FilterLabels {
    clickToSelect?: string;
    showMoreFilters?: string;
    hideMoreFilters?: string;
    noActiveFilters?: string;
    clearAllFilters?: string;
    removeFilterAriaLabel?: string;
}

export interface FiltersProps<T, S> {
    filters?: Models.Filters.Filters<T>;
    initialValues: S;
    onSubmit: (filters: Partial<S>) => void;
    onReset: () => void;
    hasLeadingItem?: boolean;
    variant?: 'drawer' | 'inline';
    labels?: FilterLabels;
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
    labels?: FilterLabels;
    isInlineVariant?: boolean;
}
