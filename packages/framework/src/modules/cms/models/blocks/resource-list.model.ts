import { Product, Resource } from '@/modules/resources/resources.model';
import { Block, DataTable, Filters, Pagination } from '@/utils/models';

type ResourceKeys = keyof Resource | `product.${keyof Product & string}` | '__typename';

type ResourceTableColumn = Omit<DataTable.DataTableColumn<Resource>, 'id'> & {
    id: ResourceKeys;
};

type ResourceDataTable = Omit<DataTable.DataTable<Resource>, 'columns'> & {
    columns: ResourceTableColumn[];
};

type ResourceFilterSelect = Omit<Filters.FilterSelect<Resource>, 'id'> & {
    id: ResourceKeys;
};

type ResourceFilterDateRange = Omit<Filters.FilterDateRange<Resource>, 'id'> & {
    id: ResourceKeys;
};

type ResourceFilterItem = ResourceFilterSelect | ResourceFilterDateRange;

type ResourceFilters = Omit<Filters.Filters<Resource>, 'items'> & {
    items: ResourceFilterItem[];
};

export class ResourceListBlock extends Block.Block {
    title!: string;
    subtitle?: string;
    table!: ResourceDataTable;
    pagination!: Pagination.Pagination;
    filters?: ResourceFilters;
    noResults!: {
        title: string;
        description: string;
    };
    labels!: {
        today: string;
        yesterday: string;
        status: string;
        type: string;
    };
    detailsUrl!: string;
}
