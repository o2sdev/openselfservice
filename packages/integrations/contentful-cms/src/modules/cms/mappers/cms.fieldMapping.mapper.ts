import { Models } from '@o2s/framework/modules';

import { FieldMappingFragment } from '@/generated/contentful';

export const mapFields = <T>(component?: FieldMappingFragment[]): Models.Mapping.Mapping<T> => {
    if (!component) {
        return {};
    }

    return component.reduce((acc, field) => {
        if (!field.name) {
            return acc;
        }

        return {
            ...acc,
            [field.name]: field.valuesCollection?.items.reduce(
                (acc, item) => {
                    if (!item.key) {
                        return acc;
                    }

                    return {
                        ...acc,
                        [item.key]: item.value,
                    };
                },
                {} as { [key: string]: string },
            ),
        };
    }, {} as Models.Mapping.Mapping<T>);
};
