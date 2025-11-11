import * as ProductsModel from '@/modules/products/products.model';
import { Block, DataTable, Filters, Pagination, Price } from '@/utils/models';

type ProductListTableRow = {
    name: string;
    sku: string;
    category: string;
    price: Price.Price;
    availability: {
        label: string;
        value: ProductsModel.ProductAvailability | string;
        variant?: 'default' | 'secondary' | 'destructive' | 'outline';
    };
    stock?: number;
    type: ProductsModel.ProductType | string;
    tags: {
        label: string;
        variant: 'default' | 'secondary' | 'destructive' | 'outline';
    }[];
};

type ProductListTableColumn = Omit<DataTable.DataTableColumn<ProductListTableRow>, 'id'> & {
    id: keyof ProductListTableRow;
};

type ProductListTable = Omit<DataTable.DataTable<ProductListTableRow>, 'columns'> & {
    columns: ProductListTableColumn[];
};

type ProductListFilterFields = {
    category: string;
    priceRange: string;
    availability: string[];
    tags: string[];
    sort: string;
};

type ProductListFilterItem =
    | Filters.FilterSelect<ProductListFilterFields>
    | Filters.FilterToggleGroup<ProductListFilterFields>;

type ProductListFilters = Omit<Filters.Filters<ProductListFilterFields>, 'items'> & {
    items: ProductListFilterItem[];
};

type ProductListViewToggle = {
    defaultView: 'grid' | 'table';
    label: string;
    gridLabel: string;
    tableLabel: string;
    ariaLabel: string;
};

export class ProductListBlock extends Block.Block {
    title?: string;
    subtitle?: string;
    description?: string;
    filters?: ProductListFilters;
    pagination?: Pagination.Pagination;
    viewToggle!: ProductListViewToggle;
    table!: ProductListTable;
    grid!: {
        detailsLabel: string;
        availabilityLabel: string;
        ratingLabel: string;
        stockLabel: string;
    };
    labels!: {
        clickToSelect?: string;
        availability: Record<ProductsModel.ProductAvailability | string, string>;
        priceRange: string;
        tags: string;
    };
    detailsLabel!: string;
    noResults!: {
        title: string;
        description?: string;
    };
}
