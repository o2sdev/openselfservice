import { Block, Media, RichText } from '@/utils/models';

export class CategoryListBlock extends Block.Block {
    title!: string;
    description?: RichText.RichText;
    items!: Category[];
}

export class Category {
    id!: string;
    title!: string;
    description!: RichText.RichText;
    icon?: Media.Media;
}
