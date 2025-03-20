import { Article } from '@/modules/articles/articles.model';
import { SlotBlock } from '@/modules/cms/models/page.model';
import { Block, Media } from '@/utils/models';

export class CategoryBlock extends Block.Block {
    title?: string;
    description?: string;
    icon?: Media.Media;
    components?: SlotBlock[];
    articles!: Omit<Article, 'sections'>[];
}
