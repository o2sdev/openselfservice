import { Products } from '@o2s/configs.integrations';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

export type Badge = {
    label: string;
    variant: 'default' | 'secondary' | 'destructive' | 'outline';
};

export type ProductSummary = {
    id: string;
    sku: string;
    variantId?: string;
    name: string;
    description?: string;
    image: Products.Model.Product['image'];
    price: Products.Model.Product['price'];
    link: string;
    badges?: Badge[];
};

export type Labels = {
    title?: string;
    detailsLabel?: string;
    addToCartLabel?: string;
    addToCartSuccess?: string;
    addToCartError?: string;
    viewCartLabel?: string;
};

export type RecommendedProductsBlock = ApiModels.Block.Block & {
    __typename: 'RecommendedProductsBlock';
    products: ProductSummary[];
    labels: Labels;
    cartPath?: string;
};
