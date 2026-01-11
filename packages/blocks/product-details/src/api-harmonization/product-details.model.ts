import { Products } from '@o2s/configs.integrations';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

export type Badge = {
    label: string;
    variant: 'default' | 'secondary' | 'destructive' | 'outline';
};

export type Product = Products.Model.Product & {
    badges?: Badge[];
    images:
        | NonNullable<Products.Model.Product['images']>
        | (Products.Model.Product['image'] extends undefined ? never : [Products.Model.Product['image']]);
};

export type ActionButton = {
    label: string;
    href: string;
    variant?: 'default' | 'secondary' | 'destructive' | 'outline';
    icon?: string;
};

export type Labels = {
    actionButtonLabel?: string;
    downloadLabel?: string;
    specificationsTitle: string;
    descriptionTitle: string;
    priceLabel: string;
    offerLabel: string;
};

export type ProductDetailsBlock = ApiModels.Block.Block & {
    __typename: 'ProductDetailsBlock';
    product: Product;
    actionButton?: ActionButton;
    labels: Labels;
};
