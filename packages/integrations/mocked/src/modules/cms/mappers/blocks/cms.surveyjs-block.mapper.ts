import { CMS } from '@o2s/framework/modules';

const MOCK_SURVEYJS_BLOCK_1_EN: CMS.Model.SurveyJsBlock.SurveyJsBlock = {
    id: 'survey-1',
    title: 'Contact us',
    code: 'contact-us',
};

const MOCK_SURVEYJS_BLOCK_1_PL: CMS.Model.SurveyJsBlock.SurveyJsBlock = {
    id: 'survey-1',
    title: 'Kontaktuj się z nami',
    code: 'contact-us',
};

const MOCK_SURVEYJS_BLOCK_1_DE: CMS.Model.SurveyJsBlock.SurveyJsBlock = {
    id: 'survey-1',
    title: 'Kontaktiere uns',
    code: 'contact-us',
};

const MOCK_SURVEYJS_BLOCK_2_EN: CMS.Model.SurveyJsBlock.SurveyJsBlock = {
    id: 'survey-2',
    title: 'Complaint form',
    code: 'complaint-form',
};

const MOCK_SURVEYJS_BLOCK_2_PL: CMS.Model.SurveyJsBlock.SurveyJsBlock = {
    id: 'survey-2',
    title: 'Formularz reklamacji',
    code: 'complaint-form',
};

const MOCK_SURVEYJS_BLOCK_2_DE: CMS.Model.SurveyJsBlock.SurveyJsBlock = {
    id: 'survey-2',
    title: 'Beschwerdeformular',
    code: 'complaint-form',
};

export const mapSurveyJsBlock = (locale: string, id: string): CMS.Model.SurveyJsBlock.SurveyJsBlock => {
    switch (locale) {
        case 'en':
            return (
                [MOCK_SURVEYJS_BLOCK_1_EN, MOCK_SURVEYJS_BLOCK_2_EN].find((block) => block.id === id) ||
                MOCK_SURVEYJS_BLOCK_1_EN
            );
        case 'de':
            return (
                [MOCK_SURVEYJS_BLOCK_1_DE, MOCK_SURVEYJS_BLOCK_2_DE].find((block) => block.id === id) ||
                MOCK_SURVEYJS_BLOCK_1_DE
            );
        case 'pl':
            return (
                [MOCK_SURVEYJS_BLOCK_1_PL, MOCK_SURVEYJS_BLOCK_2_PL].find((block) => block.id === id) ||
                MOCK_SURVEYJS_BLOCK_1_PL
            );
        default:
            return MOCK_SURVEYJS_BLOCK_1_EN;
    }
};
