import { Block } from '@/utils/models';

/** CMS block configuration for SurveyJS renderer block. */
export class SurveyJsBlock extends Block.Block {
    title?: string;
    code!: string;
}
