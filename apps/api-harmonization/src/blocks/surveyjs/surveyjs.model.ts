import { Block } from '../../utils';

export class SurveyjsBlock extends Block.Block {
    __typename!: 'SurveyJsBlock';
    code!: string;
    title?: string;
}
