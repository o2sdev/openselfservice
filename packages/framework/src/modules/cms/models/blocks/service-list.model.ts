import { Product } from '@/modules/products/products.model';
import { Contract } from '@/modules/resources/resources.model';
import { Block, Filters, Mapping, Pagination } from '@/utils/models';

export class ServiceListBlock extends Block.Block {
    title?: string;
    subtitle?: string;
    pagination?: Pagination.Pagination;
    fields!: Mapping.Mapping<Contract & Product>;
    filters?: Filters.Filters<Contract & Product & { sort?: string }>;
    noResults!: {
        title: string;
        description?: string;
    };
    detailsLabel!: string;
    detailsUrl!: string;
    labels!: {
        today: string;
        yesterday: string;
    };
}
