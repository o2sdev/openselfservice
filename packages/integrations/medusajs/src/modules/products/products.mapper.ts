import { HttpTypes } from '@medusajs/types';

import { Models, Products } from '@o2s/framework/modules';

import { CompatibleServicesResponse } from '../resources/response.types';

import { RelatedProductsResponse } from './response.types';

export const mapProduct = (
    productVariant: HttpTypes.AdminProductVariant,
    defaultCurrency: string,
): Products.Model.Product => {
    //TODO: Find customer currency
    const price = productVariant.prices?.find((price) => price.currency_code.toUpperCase() === defaultCurrency);
    return {
        id: productVariant.id,
        name: productVariant?.product?.title || '',
        description: productVariant?.product?.description || '',
        // There is no short description in Medusa
        shortDescription: productVariant?.product?.description
            ? `${productVariant.product.description.slice(0, 100)}...`
            : undefined,
        image: productVariant?.product?.thumbnail
            ? {
                  url: productVariant?.product?.thumbnail,
                  name: productVariant?.product?.title,
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
                name: product.title,
                description: product?.description || '',
                image: product?.thumbnail
                    ? {
                          url: product.thumbnail,
                          name: product.title,
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
                name: product.targetProduct.title,
                description: product.targetProduct.product?.description || '',
                shortDescription: product.targetProduct.product?.description || undefined,
                image: {
                    url: product.targetProduct.product?.thumbnail || '',
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

const mapProductType = (type?: HttpTypes.AdminProductType): Products.Model.ProductType => {
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
