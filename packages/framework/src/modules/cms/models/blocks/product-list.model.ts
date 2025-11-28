import { Product } from '@/modules/products/products.model';

import { Block, DataTable, Filters, Mapping, Pagination } from '@/utils/models';

export class ProductListBlock extends Block.Block {
    title!: string;
    subtitle?: string;
    table!: DataTable.DataTable<Product>;
    fieldMapping!: Mapping.Mapping<Product>;
    pagination?: Pagination.Pagination;
    filters?: Filters.Filters<Product & { sort?: string }>;
    noResults!: {
        title: string;
        description?: string;
    };
    labels!: {
        clickToSelect: string;
        gridView: string;
        tableView: string;
    };
    detailsLabel?: string;
}
