import { Models } from '@o2s/framework/modules';

import { ErrorMessageComponentFragment, FormFieldComponentFragment } from '@/generated/strapi';

export const mapFormField = (component: FormFieldComponentFragment): Models.FormField.FormField => {
    switch (component.__typename) {
        case 'ComponentContentFormField':
            return {
                __typename: 'Input',
                id: component.id,
                name: component.name,
                label: component.label,
                placeholder: component.placeholder,
                errorMessages: component.errorMessages?.map(mapErrorMessage),
            };
    }
};

export const mapErrorMessage = (component: ErrorMessageComponentFragment): Models.FormField.ErrorMessage => {
    return {
        id: component.id,
        name: component.name,
        type: component.type,
        description: component.description,
    };
};
