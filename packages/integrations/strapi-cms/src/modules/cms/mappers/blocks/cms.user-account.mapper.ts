import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';

import { mapFormField } from '../cms.form-field.mapper';

export const mapUserAccountBlock = (data: GetComponentQuery): CMS.Model.UserAccountBlock.UserAccountBlock => {
    const component = data.component!.content[0];
    const configurableTexts = data.configurableTexts!;

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsUserAccount':
            return {
                id: component.id,
                title: component.title,
                basicInformationTitle: component.basicInformationTitle,
                basicInformationDescription: component.basicInformationDescription,
                fields: component.inputs.map(mapFormField),
                labels: {
                    edit: configurableTexts.actions.edit,
                    save: configurableTexts.actions.save,
                    cancel: configurableTexts.actions.cancel,
                    delete: configurableTexts.actions.delete,
                    logOut: configurableTexts.actions.logOut,
                },
            };
    }

    throw new NotFoundException();
};
