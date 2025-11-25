import { Product, Products } from '@/modules/products/products.model';

import { Block, DataTable, Filters, Pagination } from '@/utils/models';

type ProductKeys = keyof Product | string | '__typename';

type ProductTableColumn = Omit<DataTable.DataTableColumn<Product>, 'id'> & {
    id: ProductKeys;
};

type ProductDataTable = Omit<DataTable.DataTable<Product>, 'columns'> & {
    columns: ProductTableColumn[];
};

type ProductFilterSelect = Omit<Filters.FilterSelect<Product>, 'id'> & {
    id: ProductKeys;
};

type ProductFilterDateRange = Omit<Filters.FilterDateRange<Product>, 'id'> & {
    id: ProductKeys;
};

type ProductFilterItem = ProductFilterSelect | ProductFilterDateRange;

type ProductFilters = Omit<Filters.Filters<Product>, 'items'> & {
    items: ProductFilterItem[];
};

export class ProductListBlock extends Block.Block {
    title!: string;
    subtitle?: string;
    products!: Products;
    table!: ProductDataTable;
    pagination?: Pagination.Pagination;
    filters?: ProductFilters;
    noResults!: {
        title: string;
        description: string;
    };
    labels!: {
        clickToSelect: string;
        gridView: string;
        tableView: string;
    };
    detailsLabel?: string;
}
