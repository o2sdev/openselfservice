import { Models } from '@o2s/framework/modules';

import { TableFragment } from '@/generated/contentful';

export const mapTable = <T>(component?: TableFragment): Models.DataTable.DataTable<T> => {
    if (!component) {
        return {} as Models.DataTable.DataTable<T>;
    }

    return {
        columns:
            component.columnsCollection?.items.map(
                (column, index): Models.DataTable.DataTableColumn<T> => ({
                    id: (column.field || String(index)) as keyof T,
                    title: column.title || '',
                }),
            ) || [],
        actions: component.actionsTitle
            ? {
                  title: component.actionsTitle,
                  label: component.actionsLabel,
              }
            : undefined,
    };
};
