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

// Map Medusa price to O2S Price model
const mapPrice = (
    prices: { currency_code?: string; amount?: number }[] | null | undefined,
    defaultCurrency: string,
): Models.Price.Price => {
    const price = prices?.find((p) => p.currency_code?.toUpperCase() === defaultCurrency);
    return {
        value: price?.amount || 0,
        currency:
            (price?.currency_code?.toUpperCase() as Models.Price.Currency) ||
            (defaultCurrency as Models.Price.Currency),
    };
};

// Map Medusa thumbnail to O2S Image
const mapThumbnail = (thumbnail: string | null | undefined, alt: string): { url: string; alt: string } | undefined => {
    if (!thumbnail) return undefined;
    return { url: thumbnail, alt };
};

// Map Medusa images array to O2S Image array
const mapImages = (
    images: { url: string }[] | null | undefined,
    alt: string,
): { url: string; alt: string }[] | undefined => {
    if (!images || images.length === 0) return undefined;
    return images.map((img) => ({ url: img.url, alt }));
};

// Map Medusa tags to O2S Badge array
const mapTags = (
    tags: { value?: string }[] | null | undefined,
): { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }[] => {
    if (!tags || tags.length === 0) return [];
    return tags.map((tag) => ({ label: tag.value || '', variant: 'default' as const }));
};

// Collect raw attributes from variant/product based on specFieldsMapping.
// Only includes fields that are in specFieldsMapping.
// Order is determined by the order of keys in specFieldsMapping.
// Variant attributes take precedence over product attributes.
const collectVariantAttributes = (
    variant: HttpTypes.AdminProductVariant,
    specFieldsMapping: Record<string, { label: string; showInKeySpecs?: boolean; icon?: string }>,
): Products.Model.ProductAttributes => {
    const attributes: Products.Model.ProductAttributes = {};
    const product = variant.product;

    for (const [field, config] of Object.entries(specFieldsMapping)) {
        // Check variant first, then fall back to product
        const variantValue = variant[field as keyof HttpTypes.AdminProductVariant];
        const productValue = product?.[field as keyof HttpTypes.AdminProduct];
        const value = variantValue ?? productValue;

        if (value != null && value !== '') {
            attributes[field] = String(value);
        }
    }

    return attributes;
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
// Apply variantOptionGroups for translated titles
// Order is derived from the order of variantOptionGroups if provided, otherwise keep natural order
const mapOptionGroups = (
    variants: HttpTypes.AdminProductVariant[],
    variantOptionGroups?: { medusaTitle: string; label: string }[],
): Products.Model.ProductOptionGroup[] => {
    const groupsById = new Map<string, { medusaTitle: string; title: string; values: Set<string> }>();

    for (const variant of variants) {
        const options = variant.options as
            | { option_id?: string; value?: string; option?: { title?: string } }[]
            | undefined;
        if (!options || !Array.isArray(options)) continue;

        for (const option of options) {
            if (!option.option_id || option.value == null) continue;
            const medusaTitle = option.option?.title ?? option.option_id;
            const mappedGroup = variantOptionGroups?.find((groupConfig) => groupConfig.medusaTitle === medusaTitle);
            const translatedTitle = mappedGroup?.label ?? medusaTitle;
            if (!groupsById.has(option.option_id)) {
                groupsById.set(option.option_id, { medusaTitle, title: translatedTitle, values: new Set() });
            }
            groupsById.get(option.option_id)!.values.add(option.value);
        }
    }

    // Map to objects with both medusaTitle (for sorting) and translated title (for display)
    const groupsWithKeys = Array.from(groupsById.entries()).map(([id, { medusaTitle, title, values }]) => ({
        id,
        medusaTitle,
        title,
        values: Array.from(values),
    }));

    // Sort by variantOptionGroups order if provided (using medusaTitle as key)
    let sortedGroups = groupsWithKeys;
    if (variantOptionGroups) {
        const optionGroupsOrder = variantOptionGroups.map((groupConfig) => groupConfig.medusaTitle);
        sortedGroups = groupsWithKeys.sort((a, b) => {
            const indexA = optionGroupsOrder.indexOf(a.medusaTitle);
            const indexB = optionGroupsOrder.indexOf(b.medusaTitle);

            // If both in order array, sort by position
            if (indexA !== -1 && indexB !== -1) {
                return indexA - indexB;
            }
            // If only A is in order, A comes first
            if (indexA !== -1) {
                return -1;
            }
            // If only B is in order, B comes first
            if (indexB !== -1) {
                return 1;
            }
            // Neither in order - keep natural order (no change)
            return 0;
        });
    }

    // Return without medusaTitle (only id, title, values)
    return sortedGroups.map(({ id, title, values }) => ({
        id,
        title,
        values,
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
    specFieldsMapping: Record<string, { label: string; showInKeySpecs?: boolean; icon?: string }>,
    variantOptionGroups?: { medusaTitle: string; label: string }[],
): Products.Model.Product => {
    if (!productVariant) {
        throw new NotFoundException('Product variant is undefined');
    }

    const product = productVariant?.product;

    // Validate required fields
    if (!product?.id) {
        throw new Error(`Product ID is required but missing for variant ${productVariant.id}`);
    }
    if (!productVariant.sku) {
        throw new Error(`Product variant SKU is required but missing for product ${product.id}`);
    }

    // Collect raw attributes based on specFieldsMapping.
    const attributes = collectVariantAttributes(productVariant, specFieldsMapping);

    return {
        id: product.id,
        sku: productVariant.sku,
        name: product?.title || '',
        description: product?.description || '',
        shortDescription: (product?.subtitle as string) || '',
        variantId: productVariant.id,
        image: mapThumbnail(product?.thumbnail, product?.title || ''),
        images: mapImages(product?.images, product?.title || ''),
        price: mapPrice(productVariant.prices, defaultCurrency),
        link: generateProductLink(basePath, product?.handle, product?.id || '', productVariant.sku),
        type: mapProductType(product?.type || undefined),
        category: product?.categories?.[0]?.name || '',
        tags: mapTags(product?.tags),
        attributes: Object.keys(attributes).length > 0 ? attributes : undefined,
        optionGroups: allVariants ? mapOptionGroups(allVariants, variantOptionGroups) : undefined,
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
        data: products
            .filter((product) => {
                // Filter out products with missing required fields
                const firstVariant = product.variants?.[0];
                if (!product.id) {
                    console.warn('[mapProducts] Skipping product without ID:', product);
                    return false;
                }
                if (!firstVariant?.sku) {
                    console.warn(`[mapProducts] Skipping product ${product.id} without variant SKU`);
                    return false;
                }
                return true;
            })
            .map((product) => {
                const firstVariant = product.variants![0]!;

                return {
                    id: product.id,
                    sku: firstVariant.sku!,
                    name: product.title,
                    description: product?.description || '',
                    variantId: firstVariant?.id || '',
                    image: mapThumbnail(product?.thumbnail, product.title),
                    images: mapImages(product.images, product.title),
                    price: mapPrice(firstVariant?.prices, defaultCurrency),
                    link: generateProductLink(basePath, product.handle, product.id, firstVariant?.sku),
                    type: mapProductType(product?.type || undefined),
                    category: product.categories?.[0]?.name || '',
                    tags: mapTags(product.tags),
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
        data: data.productReferences
            .filter((ref) => {
                // Filter out products with missing required fields
                const targetProduct = ref.targetProduct;
                const product = targetProduct.product;
                const productId = product?.id || targetProduct.id;

                if (!productId) {
                    console.warn('[mapRelatedProducts] Skipping product reference without ID:', ref);
                    return false;
                }
                if (!targetProduct.sku) {
                    console.warn(`[mapRelatedProducts] Skipping product ${productId} without SKU`);
                    return false;
                }
                return true;
            })
            .map((ref) => {
                const targetProduct = ref.targetProduct;
                const product = targetProduct.product;
                const productId = product?.id || targetProduct.id;

                return {
                    id: productId,
                    sku: targetProduct.sku!,
                    name: targetProduct.title,
                    description: product?.description || '',
                    shortDescription: product?.subtitle || product?.description || undefined,
                    image: mapThumbnail(product?.thumbnail, targetProduct.title) || {
                        url: '',
                        alt: targetProduct.title,
                    },
                    images: mapImages(product?.images, product?.title || ''),
                    price: mapPrice(targetProduct.prices, defaultCurrency),
                    link: generateProductLink(basePath, product?.handle, product?.id || '', targetProduct.sku),
                    type: mapProductType(product?.type || undefined),
                    category: product?.categories?.[0]?.name || '',
                    tags: mapTags(product?.tags),
                };
            }),
        total: data.count,
    };
};

export const mapCompatibleServices = (
    data: CompatibleServicesResponse,
    defaultCurrency: string,
    basePath: string,
    specFieldsMapping: Record<string, { label: string; showInKeySpecs?: boolean; icon?: string }>,
    variantOptionGroups?: { medusaTitle: string; label: string }[],
): Products.Model.Products => {
    return {
        data: data.compatibleServices.map((product) => {
            return mapProduct(product, defaultCurrency, undefined, basePath, specFieldsMapping, variantOptionGroups);
        }),
        total: data.count,
    };
};

export const mapFeaturedServices = (
    data: FeaturedServicesResponse,
    defaultCurrency: string,
    basePath: string,
    specFieldsMapping: Record<string, { label: string; showInKeySpecs?: boolean; icon?: string }>,
    variantOptionGroups?: { medusaTitle: string; label: string }[],
): Products.Model.Products => {
    return {
        data: data.featuredServices.map((product) => {
            return mapProduct(product, defaultCurrency, undefined, basePath, specFieldsMapping, variantOptionGroups);
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
