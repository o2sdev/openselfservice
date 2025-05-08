import { Block, RichText } from '@/utils/models';

export class CategoryListBlock extends Block.Block {
    title?: string;
    description?: RichText.RichText;
    categoryIds?: string[];
    parent?: {
        slug: string;
    };
}
