import { Article } from '@/modules/articles/articles.model';
import { SlotBlock } from '@/modules/cms/models/page.model';
import { Block, Media, RichText } from '@/utils/models';

export class CategoryBlock extends Block.Block {
    title!: string;
    description!: RichText.RichText;
    icon?: Media.Media;
    components?: SlotBlock[];
    items!: Omit<Article, 'sections'>[];
}
