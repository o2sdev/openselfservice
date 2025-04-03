import { Entry } from 'contentful';

import { Models } from '@o2s/framework/modules';

import { IComponentFieldMappingFields } from '@/generated/contentful';

export const mapFields = <T>(component: Entry<IComponentFieldMappingFields>[]): Models.Mapping.Mapping<T> => {
    return component.reduce(
        (acc, field) => ({
            ...acc,
            [field.fields.name]: field.fields.values.reduce(
                (acc, item) => ({
                    ...acc,
                    [item.fields.key]: item.fields.value,
                }),
                {} as { [key: string]: string },
            ),
        }),
        {} as Models.Mapping.Mapping<T>,
    );
};
