import { CMS } from '@o2s/framework/modules';

const MOCK_SURVEY_1: CMS.Model.Survey.Survey = {
    code: 'contact-us',
    surveyId: '72c90a02-6bfe-4e83-ba48-01f11752c234',
    surveyType: 'survey',
    submitDestination: ['surveyjs'],
    requiredRoles: [],
    postId: 'a91349b1-0c4c-4b7a-b712-91f04a1e6e99',
};

const MOCK_SURVEY_2: CMS.Model.Survey.Survey = {
    code: 'complaint-form',
    surveyId: '3897de9c-279b-4c50-b359-09f5c73a3c49',
    surveyType: 'survey',
    submitDestination: ['surveyjs'],
    requiredRoles: ['selfservice_org_user'],
    postId: 'e0f1b26b-a434-44ab-9608-c49dcd0658ec',
};

const MOCK_SURVEY_3: CMS.Model.Survey.Survey = {
    code: 'request-device-maintenance',
    surveyId: 'd93ccc83-4aff-418b-9e9b-c9c3447908cf',
    surveyType: 'survey',
    submitDestination: ['surveyjs'],
    requiredRoles: ['selfservice_org_user'],
    postId: '17931fe3-2492-408c-8f91-8fc062606604',
};

const MOCK_SURVEY_4: CMS.Model.Survey.Survey = {
    code: 'create-ticket',
    surveyId: 'bf251bfa-8f6a-4e2b-a79c-554e3d45ec41',
    surveyType: 'survey',
    submitDestination: ['tickets'],
    requiredRoles: ['selfservice_org_user'],
    postId: 'f6798232-c45b-4378-9fe5-838bdc12ca88',
};

const MOCK_SURVEYS = [MOCK_SURVEY_1, MOCK_SURVEY_2, MOCK_SURVEY_3, MOCK_SURVEY_4];

export const mapSurvey = (code: string): CMS.Model.Survey.Survey => {
    return MOCK_SURVEYS.find((survey) => survey.code === code) ?? MOCK_SURVEY_1;
};
