import { HttpTypes } from '@medusajs/types';

export type ProductReference = {
    id: string;
    source_product_variant_id: string;
    target_product_variant_id: string;
    reference_type: string;
    targetProduct: TargetProduct;
};

export type TargetProduct = {
    id: string;
    title: string;
    sku: string;
    ean: string;
    product_id: string;
    product: HttpTypes.AdminProduct;
};

export type RelatedProductsResponse = {
    productReferences: ProductReference[];
    count: number;
    offset: number;
    limit: number;
};
