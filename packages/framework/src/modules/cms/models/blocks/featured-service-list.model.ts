import { Block, Pagination } from '@/utils/models';

export class FeaturedServiceListBlock extends Block.Block {
    title?: string;
    pagination?: Pagination.Pagination;
    noResults!: {
        title: string;
        description?: string;
    };
    detailsLabel!: string;
    detailsUrl!: string;
    labels!: {
        on: string;
        off: string;
    };
}
