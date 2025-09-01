import { defineRouting } from 'next-intl/routing';

import { Model } from '../api-harmonization/surveyjs.client';

export interface SurveyJsFormProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
}

export type SurveyJsFormPureProps = SurveyJsFormProps & Model.SurveyjsBlock;

export interface SurveyJsFormRendererProps extends Omit<SurveyJsFormProps, ''> {
    slug: string[];
}
