import { Block } from '@/utils/models';

export class ArticleSearchBlock extends Block.Block {
    title?: string;
    inputLabel!: string;
    noResults!: {
        title: string;
        description?: string;
    };
}
