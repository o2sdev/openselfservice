import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { GetSurveyQuery } from '@/generated/strapi';

export const mapSurvey = (data: GetSurveyQuery): CMS.Model.Survey.Survey => {
    const survey = data.surveyJsForms[0];

    if (!survey) {
        throw new NotFoundException();
    }

    return {
        code: survey.code,
        surveyId: survey.surveyId,
        surveyType: survey.surveyType,
        postId: survey.postId,
        submitDestination: survey.submitDestination ? (survey.submitDestination as string[]) : [],
        requiredRoles: survey.requiredRoles ? (survey.requiredRoles as string[]) : [],
        labels: {
            requiredLabel: data.configurableTexts?.validation?.isRequired || '',
            optionalLabel: data.configurableTexts?.validation?.isOptional || '',
        },
    };
};
