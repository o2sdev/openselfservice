import { Block, Pagination } from '@/utils/models';

export class OrganizationListBlock extends Block.Block {
    title?: string;
    subtitle?: string;
    pagination?: Pagination.Pagination;
    noResults!: {
        title: string;
        description?: string;
    };
    labels!: {
        apply: string;
    };
}
