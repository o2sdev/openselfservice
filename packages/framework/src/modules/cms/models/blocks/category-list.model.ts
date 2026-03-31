import { Block, RichText } from '@/utils/models';

/** CMS block configuration for category list view. */
export class CategoryListBlock extends Block.Block<Meta> {
    title?: string;
    description?: RichText.RichText;
    categoryIds?: string[];
    parent?: {
        slug: string;
    };
}

/** CMS metadata map for category list block editor fields. */
export class Meta {
    __id!: string;
    title!: string;
    description!: string;
    categories!: string;
}
