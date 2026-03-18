import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/surveyjs.client';

export type SurveyJsFormProps = Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>>;

export type SurveyJsFormPureProps = SurveyJsFormProps & Model.SurveyjsBlock;

export type SurveyJsFormRendererProps = Models.BlockProps.BlockWithSlugProps<ReturnType<typeof defineRouting>>;
