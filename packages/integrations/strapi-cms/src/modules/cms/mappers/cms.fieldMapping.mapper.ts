import { Models } from '@o2s/framework/modules';

import { FieldMappingFragment } from '@/generated/strapi';

export const mapFields = <T>(component: FieldMappingFragment[]): Models.Mapping.Mapping<T> => {
    return component.reduce(
        (acc, field) => ({
            ...acc,
            [field.name]: field.values.reduce(
                (acc, item) => ({
                    ...acc,
                    [item.key]: item.value,
                }),
                {} as { [key: string]: string },
            ),
        }),
        {} as Models.Mapping.Mapping<T>,
    );
};
