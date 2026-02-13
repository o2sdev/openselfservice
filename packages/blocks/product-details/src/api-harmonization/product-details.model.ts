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
    // Explicitly include these fields to ensure TypeScript recognizes them
    variants?: Array<{
        id: string;
        title: string;
        slug: string;
        link?: string;
        options?: Record<string, string>;
    }>;
    optionGroups?: Array<{
        id: string;
        title: string;
        values: string[];
    }>;
    /**
     * View-level "key specs" (e.g. short bullet list) for this block only.
     */
    keySpecs?: Array<{
        value?: string;
        icon?: string;
    }>;
    /**
     * View-level detailed specs (e.g. table rows) for this block only.
     */
    detailedSpecs?: Array<{
        label: string;
        value: string;
        category?: string;
    }>;
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
    variantLabel?: string;
};

export type ProductDetailsBlock = ApiModels.Block.Block & {
    __typename: 'ProductDetailsBlock';
    product: Product;
    actionButton?: ActionButton;
    labels: Labels;
};
