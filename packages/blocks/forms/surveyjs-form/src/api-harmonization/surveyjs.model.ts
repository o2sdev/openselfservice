import { Models as ApiModels } from '@o2s/utils.api-harmonization';

export class SurveyjsBlock extends ApiModels.Block.Block {
    __typename!: 'SurveyJsBlock';
    code!: string;
    title?: string;
}
