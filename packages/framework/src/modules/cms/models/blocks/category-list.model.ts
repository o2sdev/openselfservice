import { Block, RichText } from '@/utils/models';

export class CategoryListBlock extends Block.Block<Meta> {
    title?: string;
    description?: RichText.RichText;
    categoryIds?: string[];
    parent?: {
        slug: string;
    };
}

export class Meta {
    __id!: string;
    title!: string;
    description!: string;
    categories!: string;
}
