import { CMS } from '@o2s/framework/modules';

const MOCK_SURVEY_1: CMS.Model.SurveyBlock.SurveyBlock = {
    id: 'survey-1',
    code: 'survey-1',
    surveyId: '0c4ec859-42a5-4dca-b927-67176964d5d5',
    surveyType: 'survey',
    submitDestination: ['surveyjs'],
    requiredRoles: ['selfservice_user'],
    postId: '3f239eb4-522f-4366-911a-79a2df649524',
};

const MOCK_SURVEY_2: CMS.Model.SurveyBlock.SurveyBlock = {
    id: 'survey-2',
    code: 'survey-2',
    surveyId: 'b8498eb4-ddab-4815-9133-130301fdcef3',
    surveyType: 'survey',
    submitDestination: ['surveyjs'],
    requiredRoles: [],
    postId: '8b51c735-9483-48aa-bbe8-48eb9c54f71d',
};

const MOCK_SURVEYS = [MOCK_SURVEY_1, MOCK_SURVEY_2];

export const mapSurveyBlock = (code: string): CMS.Model.SurveyBlock.SurveyBlock => {
    return MOCK_SURVEYS.find((survey) => survey.code === code) ?? MOCK_SURVEY_1;
};
