import { Models } from '@o2s/framework/modules';

import { TableFragment } from '@/generated/strapi';

export const mapTable = <T>(component: TableFragment): Models.DataTable.DataTable<T> => {
    return {
        columns: component.columns.map(
            (column): Models.DataTable.DataTableColumn<T> => ({
                id: column.field as keyof T,
                title: column.title,
            }),
        ),
        actions: component.actionsTitle
            ? {
                  title: component.actionsTitle,
                  label: component.actionsLabel,
              }
            : undefined,
    };
};
