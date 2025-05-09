import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';

export const mapSurveyJsBlock = (data: GetComponentQuery): CMS.Model.SurveyJsBlock.SurveyJsBlock => {
    const component = data.component!.content[0];

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsSurveyJsComponent':
            return {
                id: component.id,
                title: component.title,
                code: component.survey_js_form?.code as string,
            };
    }

    throw new NotFoundException();
};
