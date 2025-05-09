import { CMS } from '../../models';

import { SurveyjsBlock } from './surveyjs.model';

export const mapSurveyjs = (cms: CMS.Model.SurveyJsBlock.SurveyJsBlock, _locale: string): SurveyjsBlock => {
    return {
        __typename: 'SurveyJsBlock',
        id: cms.id,
        code: cms.code,
        title: cms.title,
    };
};
