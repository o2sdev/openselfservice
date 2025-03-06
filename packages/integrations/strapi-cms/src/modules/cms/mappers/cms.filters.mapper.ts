import { Models } from '@o2s/framework/modules';

import { FilterItemFragment, FiltersFragment } from '@/generated/strapi';

export const mapFilters = <T>(component?: FiltersFragment): Models.Filters.Filters<T> | undefined => {
    if (!component) return undefined;

    return {
        label: component.buttonLabel,
        title: component.title,
        description: component.description,
        submit: component.submitLabel,
        reset: component.clearLabel,
        removeFilters: component.removeFiltersLabel,
        items: mapFiltersItems(component.items),
    };
};

export const mapFiltersItems = <T>(filters: FilterItemFragment[]): Models.Filters.FilterItem<T>[] => {
    return filters.reduce<Models.Filters.FilterItem<T>[]>((acc, filter) => {
        const field = filter.field[0]!;
        switch (field.__typename) {
            case 'ComponentContentFilterSelect':
                acc.push({
                    __typename: 'FilterSelect',
                    id: field.field as keyof T,
                    label: field.label,
                    allowMultiple: field.multiple,
                    options: field.items.map((item) => ({
                        value: item.key,
                        label: item.value,
                    })),
                });
                break;
            case 'ComponentContentFilterDateRange':
                acc.push({
                    __typename: 'FilterDateRange',
                    id: field.field as keyof T,
                    label: field.label,
                    from: {
                        label: field.from,
                    },
                    to: {
                        label: field.to,
                    },
                });
                break;
        }
        return acc;
    }, []);
};
