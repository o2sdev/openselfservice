import { Block, Pagination } from '@/utils/models';

/** CMS block configuration for featured services list. */
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
