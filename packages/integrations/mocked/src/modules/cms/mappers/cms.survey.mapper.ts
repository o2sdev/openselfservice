import { CMS } from '@o2s/framework/modules';

const MOCK_SURVEY_1: CMS.Model.Survey.Survey = {
    code: 'complaint',
    surveyId: 'cb0dd450-ce17-498d-a847-2567ecbf5dd1',
    surveyType: 'survey',
    submitDestination: ['surveyjs'],
    requiredRoles: ['selfservice_user'],
    postId: '9e10a78e-a3ce-4618-9c4e-484c95d0bd84',
};

const MOCK_SURVEY_2: CMS.Model.Survey.Survey = {
    code: 'survey-2',
    surveyId: 'b8498eb4-ddab-4815-9133-130301fdcef3',
    surveyType: 'survey',
    submitDestination: ['surveyjs'],
    requiredRoles: [],
    postId: '8b51c735-9483-48aa-bbe8-48eb9c54f71d',
};

const MOCK_SURVEYS = [MOCK_SURVEY_1, MOCK_SURVEY_2];

export const mapSurvey = (code: string): CMS.Model.Survey.Survey => {
    return MOCK_SURVEYS.find((survey) => survey.code === code) ?? MOCK_SURVEY_1;
};
