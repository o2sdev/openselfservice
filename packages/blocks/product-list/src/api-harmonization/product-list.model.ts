import { Products } from '@o2s/configs.integrations';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Models } from '@o2s/framework/modules';

export class ProductListBlock extends ApiModels.Block.Block {
    __typename!: 'ProductListBlock';
    title!: string;
    subtitle?: string;
    detailsLabel?: string;
    filters?: Models.Filters.Filters<Products.Model.Product>;
    pagination?: Models.Pagination.Pagination;
    products!: {
        data: ProductItem[];
        total: number;
    };
    table!: Models.DataTable.DataTable<ProductItem>;
    fieldMapping!: Models.Mapping.Mapping<Products.Model.Product>;
    noResults!: {
        title: string;
        description?: string;
    };
    labels!: {
        clickToSelect: string;
        gridView: string;
        listView: string;
        showMoreFilters: string;
        hideMoreFilters: string;
        noActiveFilters: string;
    };
}

export type ProductList = {
    data: ProductItem[];
    total: number;
};

export class ProductItem {
    __typename!: 'ProductItem';
    id!: string;
    sku!: string;
    name!: string;
    description!: string;
    shortDescription?: string;
    detailsUrl!: string;
    type!: {
        value: Products.Model.ProductType;
        label: string;
    };
    category!: {
        value: string;
        label: string;
    };
    price!: Models.Price.Price;
    image?: Models.Media.Media;
    tags!: Products.Model.Product['tags'];
    link!: string;
}

export type Product = ProductItem;
