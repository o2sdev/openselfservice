import { HttpTypes } from '@medusajs/types';
import { NotFoundException } from '@nestjs/common';

import { Models, Products } from '@o2s/framework/modules';

import { CompatibleServicesResponse, FeaturedServicesResponse } from '../resources/response.types';

import { RelatedProductsResponse } from './response.types';

// Fields to extract as detailed specs from variant
const VARIANT_SPEC_FIELDS = [
    'weight',
    'height',
    'width',
    'length',
    'material',
    'origin_country',
    'hs_code',
    'mid_code',
] as const;

// Convert snake_case to Title Case
const formatLabel = (key: string): string => {
    return key
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

// Extract keySpecs from product/variant metadata
// Medusa stores metadata values as strings, so we need to parse JSON
// Expected format: key="keySpecs", value='[{ "value": "1200W", "icon": "Zap" }, ...]'
const mapKeySpecsFromMetadata = (variant: HttpTypes.AdminProductVariant): Products.Model.KeySpecItem[] | undefined => {
    const variantMetadata = variant.metadata as Record<string, unknown> | null;
    const productMetadata = variant.product?.metadata as Record<string, unknown> | null;

    // Check variant metadata first, then product metadata
    const rawKeySpecs = variantMetadata?.keySpecs ?? productMetadata?.keySpecs;

    if (!rawKeySpecs) {
        return undefined;
    }

    // Parse if it's a string (Medusa stores metadata values as strings)
    let keySpecs: { value?: string; icon?: string }[];
    if (typeof rawKeySpecs === 'string') {
        try {
            keySpecs = JSON.parse(rawKeySpecs);
        } catch {
            return undefined;
        }
    } else if (Array.isArray(rawKeySpecs)) {
        keySpecs = rawKeySpecs;
    } else {
        return undefined;
    }

    if (!Array.isArray(keySpecs) || keySpecs.length === 0) {
        return undefined;
    }

    return keySpecs.map((spec) => ({
        value: spec.value,
        icon: spec.icon,
    }));
};

// Map variant and product attributes to detailedSpecs dynamically
// Variant attributes take precedence over product attributes
const mapVariantToDetailedSpecs = (variant: HttpTypes.AdminProductVariant): Products.Model.DetailedSpec[] => {
    const specs: Products.Model.DetailedSpec[] = [];
    const product = variant.product;

    for (const field of VARIANT_SPEC_FIELDS) {
        // Check variant first, then fall back to product
        const variantValue = variant[field as keyof HttpTypes.AdminProductVariant];
        const productValue = product?.[field as keyof HttpTypes.AdminProduct];
        const value = variantValue ?? productValue;

        if (value != null && value !== '') {
            specs.push({
                label: formatLabel(field),
                value: String(value),
            });
        }
    }

    return specs;
};

export const mapProduct = (
    productVariant: HttpTypes.AdminProductVariant,
    defaultCurrency: string,
): Products.Model.Product => {
    if (!productVariant) {
        throw new NotFoundException('Product variant is undefined');
    }

    const product = productVariant?.product;
    const price = productVariant.prices?.find((p) => p.currency_code?.toUpperCase() === defaultCurrency);

    // Build detailedSpecs from variant attributes dynamically
    const detailedSpecs = mapVariantToDetailedSpecs(productVariant);

    return {
        id: product?.id || '',
        sku: productVariant?.sku || '',
        name: product?.title || '',
        description: product?.description || '',
        shortDescription: (product?.subtitle as string) || '',
        variantId: productVariant.id,
        image: product?.thumbnail
            ? {
                  url: product.thumbnail,
                  alt: product.title,
              }
            : undefined,
        images: product?.images?.map((img) => ({
            url: img.url,
            alt: product?.title || '',
        })),
        price: {
            value: price?.amount || 0,
            currency:
                (price?.currency_code?.toUpperCase() as Models.Price.Currency) ||
                (defaultCurrency as Models.Price.Currency),
        },
        link: `/products/${product?.id || ''}`,
        type: mapProductType(product?.type || undefined),
        category: product?.categories?.[0]?.name || '',
        tags:
            product?.tags?.map((tag) => ({
                label: tag.value || '',
                variant: 'default',
            })) || [],
        detailedSpecs: detailedSpecs.length > 0 ? detailedSpecs : undefined,
        keySpecs: mapKeySpecsFromMetadata(productVariant),
    };
};

export const mapProducts = (
    data: HttpTypes.AdminProductListResponse,
    defaultCurrency: string,
    categoryFilter?: string,
): Products.Model.Products => {
    let products = data.products;

    // Filter by category name if provided
    if (categoryFilter) {
        products = products.filter((product) => product.categories?.some((cat) => cat.name === categoryFilter));
    }

    return {
        data: products.map((product) => {
            const firstVariant = product.variants?.[0];
            const price = firstVariant?.prices?.find((p) => p.currency_code?.toUpperCase() === defaultCurrency);

            return {
                id: product.id,
                sku: firstVariant?.sku || '',
                name: product.title,
                description: product?.description || '',
                variantId: firstVariant?.id || '',
                image: product?.thumbnail
                    ? {
                          url: product.thumbnail,
                          alt: product.title,
                      }
                    : undefined,
                images: product.images?.map((img) => ({
                    url: img.url,
                    alt: product.title,
                })),
                price: {
                    value: price?.amount || 0,
                    currency:
                        (price?.currency_code?.toUpperCase() as Models.Price.Currency) ||
                        (defaultCurrency as Models.Price.Currency),
                },
                link: `/products/${product.id}`,
                type: mapProductType(product?.type || undefined),
                category: product.categories?.[0]?.name || '',
                tags:
                    product.tags?.map((tag) => ({
                        label: tag.value || '',
                        variant: 'default',
                    })) || [],
            };
        }),
        total: categoryFilter ? products.length : data.count,
    };
};

export const mapRelatedProducts = (data: RelatedProductsResponse, defaultCurrency: string): Products.Model.Products => {
    return {
        data: data.productReferences.map((ref) => {
            const targetProduct = ref.targetProduct;
            const product = targetProduct.product;
            const price = targetProduct.prices?.find((p) => p.currency_code?.toUpperCase() === defaultCurrency);

            return {
                id: targetProduct.id,
                sku: targetProduct.sku || '',
                name: targetProduct.title,
                description: product?.description || '',
                shortDescription: product?.subtitle || product?.description || undefined,
                image: {
                    url: product?.thumbnail || '',
                    alt: targetProduct.title,
                },
                images: product?.images?.map((img) => ({
                    url: img.url,
                    alt: product?.title || '',
                })),
                price: {
                    value: price?.amount || 0,
                    currency:
                        (price?.currency_code?.toUpperCase() as Models.Price.Currency) ||
                        (defaultCurrency as Models.Price.Currency),
                },
                link: `/products/${product?.id || ''}`,
                type: mapProductType(product?.type || undefined),
                category: product?.categories?.[0]?.name || '',
                tags:
                    product?.tags?.map((tag) => ({
                        label: tag.value || '',
                        variant: 'default',
                    })) || [],
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
