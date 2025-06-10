import { HttpTypes } from '@medusajs/types';

import { Models, Products } from '@o2s/framework/modules';

import { CompatibleServicesResponse, FeaturedServicesResponse } from '../resources/response.types';

import { RelatedProductsResponse } from './response.types';

export const mapProduct = (
    productVariant: HttpTypes.AdminProductVariant,
    defaultCurrency: string,
): Products.Model.Product => {
    //TODO: Find customer currency
    const price = productVariant.prices?.find((price) => price.currency_code.toUpperCase() === defaultCurrency);
    return {
        id: productVariant.id,
        sku: productVariant?.sku || '',
        name: productVariant?.product?.title || '',
        description: productVariant?.product?.description || '',
        shortDescription: (productVariant?.product?.subtitle as string) || '',
        variantId: productVariant?.product?.id || '',
        image: productVariant?.product?.thumbnail
            ? {
                  url: productVariant?.product?.thumbnail,
                  alt: productVariant?.product?.title,
              }
            : undefined,
        price: {
            value: price?.amount || 0,
            currency:
                (price?.currency_code.toUpperCase() as Models.Price.Currency) ||
                (defaultCurrency as Models.Price.Currency),
        },
        link: '',
        type: mapProductType(productVariant?.product?.type || undefined),
        category: productVariant?.product?.categories?.[0]?.name || '',
        tags: [],
    };
};

export const mapProducts = (
    data: HttpTypes.AdminProductListResponse,
    defaultCurrency: string,
): Products.Model.Products => {
    return {
        data: data.products.map((product) => {
            return {
                id: product.id,
                sku: '',
                name: product.title,
                description: product?.description || '',
                image: product?.thumbnail
                    ? {
                          url: product.thumbnail,
                          alt: product.title,
                      }
                    : undefined,
                price: {
                    value: 0,
                    currency: defaultCurrency as Models.Price.Currency,
                },
                link: '',
                type: mapProductType(product?.type || undefined),
                category: product.categories?.[0]?.name || '',
                tags: [],
            };
        }),
        total: data.count,
    };
};

export const mapRelatedProducts = (data: RelatedProductsResponse, defaultCurrency: string): Products.Model.Products => {
    return {
        data: data.productReferences.map((product) => {
            return {
                id: product.targetProduct.id,
                sku: product.targetProduct.sku || '',
                name: product.targetProduct.title,
                description: product.targetProduct.product?.description || '',
                shortDescription: product.targetProduct.product?.description || undefined,
                image: {
                    url: product.targetProduct.product?.thumbnail || '',
                    alt: product.targetProduct.title,
                },
                price: {
                    value: 0,
                    currency: defaultCurrency as Models.Price.Currency,
                },
                link: '',
                type: mapProductType(product.targetProduct.product?.type || undefined),
                category: product.targetProduct.product?.categories?.[0]?.name || '',
                tags: [],
            };
        }),
        total: data.count,
    };
};

export const mapCompatibleServices = (
    data: CompatibleServicesResponse,
    defaultCurrency: string,
): Products.Model.Products => {
    return {
        data: data.compatibleServices.map((product) => {
            return mapProduct(product, defaultCurrency);
        }),
        total: data.count,
    };
};

export const mapFeaturedServices = (
    data: FeaturedServicesResponse,
    defaultCurrency: string,
): Products.Model.Products => {
    return {
        data: data.featuredServices.map((product) => {
            return mapProduct(product, defaultCurrency);
        }),
        total: data.count,
    };
};

export const mapProductType = (type?: HttpTypes.AdminProductType): Products.Model.ProductType => {
    if (!type) {
        return 'PHYSICAL';
    }
    switch (type?.value) {
        case 'PHYSICAL':
            return 'PHYSICAL';
        case 'VIRTUAL':
            return 'VIRTUAL';
        default:
            return 'PHYSICAL';
    }
};
