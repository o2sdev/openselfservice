import { Block } from '@/utils/models';

/** CMS block configuration for survey descriptor. */
export class SurveyBlock extends Block.Block {
    code!: string;
    surveyId!: string;
    requiredRoles!: string[];
    surveyType!: string;
    submitDestination!: string[];
    postId!: string;
}
