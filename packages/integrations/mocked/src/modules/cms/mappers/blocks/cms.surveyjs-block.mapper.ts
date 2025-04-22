import { CMS } from '@o2s/framework/modules';

const MOCK_SURVEYJS_BLOCK_1_EN: CMS.Model.SurveyJsBlock.SurveyJsBlock = {
    id: 'survey-1-id',
    title: 'Survey 1',
    code: 'complaint-O2S',
};

const MOCK_SURVEYJS_BLOCK_1_PL: CMS.Model.SurveyJsBlock.SurveyJsBlock = {
    id: 'survey-1-id',
    title: 'Ankieta 1',
    code: 'complaint-O2S',
};

const MOCK_SURVEYJS_BLOCK_1_DE: CMS.Model.SurveyJsBlock.SurveyJsBlock = {
    id: 'survey-1-id',
    title: 'Anketa 1',
    code: 'complaint-O2S',
};

export const mapSurveyJsBlock = (locale: string): CMS.Model.SurveyJsBlock.SurveyJsBlock => {
    switch (locale) {
        case 'en':
            return MOCK_SURVEYJS_BLOCK_1_EN;
        case 'de':
            return MOCK_SURVEYJS_BLOCK_1_DE;
        case 'pl':
            return MOCK_SURVEYJS_BLOCK_1_PL;
        default:
            return MOCK_SURVEYJS_BLOCK_1_EN;
    }
};
