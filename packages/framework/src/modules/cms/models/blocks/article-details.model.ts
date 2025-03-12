import { Block } from '@/utils/models';

export class ArticleDetailsBlock extends Block.Block {
    properties!: {
        [key: string]: string;
    };
    labels!: {
        today: string;
        yesterday: string;
    };
}
