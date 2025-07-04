import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { GetSurveyQuery } from '@/generated/strapi';

import { mapRoles } from '@/modules/cms/mappers/cms.roles.mapper';

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
        requiredRoles: mapRoles(survey.requiredRoles),
    };
};
