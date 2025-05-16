import { Blocks } from '@o2s/api-harmonization';

export interface SurveyJsProps {
    id: string;
    accessToken?: string;
    locale: string;
}

export type SurveyJsPureProps = SurveyJsProps & Blocks.Surveyjs.Model.SurveyjsBlock;
