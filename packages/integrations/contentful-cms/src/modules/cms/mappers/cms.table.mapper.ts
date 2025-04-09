import { Entry } from 'contentful';

import { Models } from '@o2s/framework/modules';

import { IComponentTableFields } from '@/generated/contentful';

export const mapTable = <T>(component: Entry<IComponentTableFields>): Models.DataTable.DataTable<T> => {
    const { fields } = component;

    return {
        columns: fields.columns.map(
            (column): Models.DataTable.DataTableColumn<T> => ({
                id: column.fields.field as keyof T,
                title: column.fields.title,
            }),
        ),
        actions: component.fields.actionsTitle
            ? {
                  title: fields.actionsTitle,
                  label: fields.actionsLabel,
              }
            : undefined,
    };
};
