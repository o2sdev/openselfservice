import { Products } from '@o2s/configs.integrations';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { CMS, Models } from '@o2s/framework/modules';

export class ProductListBlock extends ApiModels.Block.Block {
    __typename!: 'ProductListBlock';
    title?: string;
    subtitle?: string;
    description?: string;
    filters?: CMS.Model.ProductListBlock.ProductListBlock['filters'];
    pagination?: CMS.Model.ProductListBlock.ProductListBlock['pagination'];
    viewToggle!: CMS.Model.ProductListBlock.ProductListBlock['viewToggle'];
    table!: CMS.Model.ProductListBlock.ProductListBlock['table'];
    grid!: CMS.Model.ProductListBlock.ProductListBlock['grid'];
    labels!: CMS.Model.ProductListBlock.ProductListBlock['labels'];
    detailsLabel!: string;
    noResults!: CMS.Model.ProductListBlock.ProductListBlock['noResults'];
    products!: {
        data: ProductListItem[];
        total: number;
    };
}

export class ProductListItem {
    id!: string;
    sku!: string;
    name!: string;
    description?: string;
    shortDescription?: string;
    price!: Models.Price.Price;
    image?: Models.Media.Media;
    link!: string;
    category!: string;
    type!: Products.Model.ProductType;
    availability!: {
        value: Products.Model.ProductAvailability | string;
        label: string;
        variant: 'default' | 'secondary' | 'destructive' | 'outline';
    };
    stock?: number;
    rating?: Products.Model.ProductRating;
    tags!: Products.Model.Product['tags'];
    detailsUrl!: string;
}
