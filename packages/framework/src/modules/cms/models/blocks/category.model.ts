import { SlotBlock } from '@/modules/cms/models/page.model';
import { Block } from '@/utils/models';

export class CategoryBlock extends Block.Block {
    categoryId!: string;
    components?: SlotBlock[];
    parent?: {
        slug: string;
    };
}
