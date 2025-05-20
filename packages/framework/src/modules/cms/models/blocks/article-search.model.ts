import { Block } from '@/utils/models';

export class ArticleSearchBlock extends Block.Block {
    title?: string;
    label?: string;
    labels!: {
        today: string;
        yesterday: string;
    };
    noResults!: {
        title: string;
        description?: string;
    };
}
