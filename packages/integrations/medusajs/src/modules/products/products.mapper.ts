import { HttpTypes } from '@medusajs/types';
import { NotFoundException } from '@nestjs/common';
import slugifyLib from 'slugify';

import { Models, Products } from '@o2s/framework/modules';

import { CompatibleServicesResponse, FeaturedServicesResponse } from '../resources/response.types';

import { RelatedProductsResponse } from './response.types';

// Generate variant slug from SKU
const getVariantSlug = (variantSku?: string | null): string | null => {
    if (variantSku) {
        return slugifyLib(variantSku, { lower: true, strict: true });
    }
    return null;
};

// Generate SEO-friendly product link
// Uses handle if available, otherwise falls back to product ID
const generateProductLink = (
    basePath: string,
    productHandle: string | null | undefined,
    productId: string,
    variantSku?: string | null,
): string => {
    const slug = productHandle || productId;
    const variantSlug = getVariantSlug(variantSku);
    if (variantSlug) {
        return `${basePath}/${slug}/${variantSlug}`;
    }
    return `${basePath}/${slug}`;
};

// Note: VARIANT_SPEC_FIELDS moved to environment variable MEDUSA_VARIANT_SPEC_FIELDS

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
const mapVariantToDetailedSpecs = (
    variant: HttpTypes.AdminProductVariant,
    specFields: string[],
): Products.Model.DetailedSpec[] => {
    const specs: Products.Model.DetailedSpec[] = [];
    const product = variant.product;

    for (const field of specFields) {
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

// Map Medusa variant options to Record<optionId, value>
type MedusaOptionValue = { option_id?: string; value?: string };
const getVariantOptionsMap = (variant: HttpTypes.AdminProductVariant): Record<string, string> => {
    const options = variant.options as MedusaOptionValue[] | undefined;
    if (!options || !Array.isArray(options)) {
        return {};
    }
    return Object.fromEntries(
        options
            .filter((option) => option.option_id && option.value != null)
            .map((option) => [option.option_id!, option.value!]),
    );
};

// Map a list of Medusa variants to ProductVariantOption[]
const mapVariantOptions = (
    variants: HttpTypes.AdminProductVariant[],
    basePath: string,
    productHandle: string | null | undefined,
    productId: string,
): Products.Model.ProductVariantOption[] => {
    return variants.map((variant) => {
        const title = getVariantTitle(variant);
        const optionsMap = getVariantOptionsMap(variant);
        const slug = getVariantSlug(variant.sku) || variant.id;
        return {
            id: variant.id,
            title,
            slug,
            link: generateProductLink(basePath, productHandle, productId, variant.sku),
            options: Object.keys(optionsMap).length > 0 ? optionsMap : undefined,
        };
    });
};

// Extract option groups from variants (Size, Color, etc.) with unique values per group
const mapOptionGroups = (variants: HttpTypes.AdminProductVariant[]): Products.Model.ProductOptionGroup[] => {
    const groupsById = new Map<string, { title: string; values: Set<string> }>();

    for (const variant of variants) {
        const options = variant.options as
            | { option_id?: string; value?: string; option?: { title?: string } }[]
            | undefined;
        if (!options || !Array.isArray(options)) continue;

        for (const option of options) {
            if (!option.option_id || option.value == null) continue;
            const title = option.option?.title ?? option.option_id;
            if (!groupsById.has(option.option_id)) {
                groupsById.set(option.option_id, { title, values: new Set() });
            }
            groupsById.get(option.option_id)!.values.add(option.value);
        }
    }

    return Array.from(groupsById.entries()).map(([id, { title, values }]) => ({
        id,
        title,
        values: Array.from(values),
    }));
};

// Get a display title for a variant from its options or title
const getVariantTitle = (variant: HttpTypes.AdminProductVariant): string => {
    if (variant.options && Array.isArray(variant.options) && variant.options.length > 0) {
        return variant.options
            .map((option: { value?: string }) => option.value)
            .filter(Boolean)
            .join(' / ');
    }
    return variant.title || variant.id;
};

export const mapProduct = (
    productVariant: HttpTypes.AdminProductVariant,
    defaultCurrency: string,
    allVariants: HttpTypes.AdminProductVariant[] | undefined,
    basePath: string,
    specFields: string[],
): Products.Model.Product => {
    if (!productVariant) {
        throw new NotFoundException('Product variant is undefined');
    }

    const product = productVariant?.product;
    const price = productVariant.prices?.find((p) => p.currency_code?.toUpperCase() === defaultCurrency);

    // Build detailedSpecs from variant attributes dynamically
    const detailedSpecs = mapVariantToDetailedSpecs(productVariant, specFields);

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
        link: generateProductLink(basePath, product?.handle, product?.id || '', productVariant.sku),
        type: mapProductType(product?.type || undefined),
        category: product?.categories?.[0]?.name || '',
        tags:
            product?.tags?.map((tag) => ({
                label: tag.value || '',
                variant: 'default',
            })) || [],
        detailedSpecs: detailedSpecs.length > 0 ? detailedSpecs : undefined,
        keySpecs: mapKeySpecsFromMetadata(productVariant),
        optionGroups: allVariants ? mapOptionGroups(allVariants) : undefined,
        variants:
            allVariants && allVariants.length > 1
                ? mapVariantOptions(allVariants, basePath, product?.handle, product?.id || '')
                : undefined,
    };
};

export const mapProducts = (
    data: HttpTypes.AdminProductListResponse,
    defaultCurrency: string,
    basePath: string,
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
                link: generateProductLink(basePath, product.handle, product.id, firstVariant?.sku),
                type: mapProductType(product?.type || undefined),
                category: product.categories?.[0]?.name || '',
                tags:
                    product.tags?.map((tag) => ({
                        label: tag.value || '',
                        variant: 'default',
                    })) || [],
                variants:
                    product.variants && product.variants.length > 1
                        ? mapVariantOptions(product.variants, basePath, product.handle, product.id)
                        : undefined,
            };
        }),
        total: categoryFilter ? products.length : data.count,
    };
};

export const mapRelatedProducts = (
    data: RelatedProductsResponse,
    defaultCurrency: string,
    basePath: string,
): Products.Model.Products => {
    return {
        data: data.productReferences.map((ref) => {
            const targetProduct = ref.targetProduct;
            const product = targetProduct.product;
            const price = targetProduct.prices?.find((p) => p.currency_code?.toUpperCase() === defaultCurrency);

            return {
                id: targetProduct.product?.id || targetProduct.id,
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
                link: generateProductLink(basePath, product?.handle, product?.id || '', targetProduct.sku),
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
    basePath: string,
    specFields: string[],
): Products.Model.Products => {
    return {
        data: data.compatibleServices.map((product) => {
            return mapProduct(product, defaultCurrency, undefined, basePath, specFields);
        }),
        total: data.count,
    };
};

export const mapFeaturedServices = (
    data: FeaturedServicesResponse,
    defaultCurrency: string,
    basePath: string,
    specFields: string[],
): Products.Model.Products => {
    return {
        data: data.featuredServices.map((product) => {
            return mapProduct(product, defaultCurrency, undefined, basePath, specFields);
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
