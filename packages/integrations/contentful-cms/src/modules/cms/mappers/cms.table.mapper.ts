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

export const mapTableMeta = (component?: TableFragment): Models.DataTable.DataTableMeta => {
    if (!component) {
        return {} as Models.DataTable.DataTableMeta;
    }

    return {
        __id: component.sys.id,
        columns:
            component.columnsCollection?.items.map((column) => ({
                __id: column.sys.id,
                id: 'id',
                title: 'title',
            })) || [],
        actions: component.actionsTitle
            ? {
                  __id: component.sys.id,
                  title: 'title',
                  label: 'label',
              }
            : undefined,
    };
};
