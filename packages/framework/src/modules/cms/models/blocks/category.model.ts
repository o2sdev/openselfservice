import { SlotBlock } from '@/modules/cms/models/page.model';

import { Block, Pagination } from '@/utils/models';

export class CategoryBlock extends Block.Block {
    title!: string;
    description?: string;
    categoryId!: string;
    components?: SlotBlock[];
    componentsPosition!: 'top' | 'bottom';
    pagination?: Pagination.Pagination;
    parent?: {
        slug: string;
    };
    labels!: {
        today: string;
        yesterday: string;
    };
}
