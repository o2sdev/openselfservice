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
    const path = basePath ? `${basePath}/${slug}` : `/${slug}`;
    if (variantSlug) {
        return `${path}/${variantSlug}`;
    }
    return path;
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

// Helper to extract prices from variant (handles Store API variants and Admin API variants for compatibility)
// Store API variants have prices via field expansion (*variants.prices)
const getVariantPrices = (
    variant: HttpTypes.AdminProductVariant | HttpTypes.StoreProductVariant,
): { currency_code?: string; amount?: number }[] | null | undefined => {
    // Check if variant has prices property (Store API via field expansion, or Admin API)
    if ('prices' in variant && variant.prices) {
        return variant.prices as { currency_code?: string; amount?: number }[];
    }
    // Type assertion for Store API variants where TypeScript types may not include prices
    const storeVariant = variant as HttpTypes.StoreProductVariant & {
        prices?: Array<{ currency_code?: string; amount?: number }>;
    };
    return storeVariant.prices || null;
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

// Collect all available raw attributes from variant/product.
// Returns all known spec fields (weight, height, width, length, material, origin_country, hs_code, mid_code).
// Variant attributes take precedence over product attributes.
// The block layer will filter and format these based on CMS configuration.
// Accepts both AdminProductVariant and StoreProductVariant types
const collectVariantAttributes = (variant: HttpTypes.StoreProductVariant): Products.Model.ProductAttributes => {
    const attributes: Products.Model.ProductAttributes = {};
    // Store API variants have product nested, Admin API variants have it as a property
    const product = 'product' in variant ? variant.product : undefined;

    // List of known spec fields to collect from Medusa
    // These should match the fields requested in productDetailFields
    const knownFields = ['weight', 'height', 'width', 'length', 'material', 'origin_country', 'hs_code', 'mid_code'];

    for (const field of knownFields) {
        // Check variant first, then fall back to product
        const variantValue = variant[field as keyof typeof variant];
        const productValue = product?.[field as keyof typeof product];
        const value = variantValue ?? productValue;

        if (value) {
            attributes[field] = String(value);
        }
    }

    return attributes;
};

// Calculate if a variant is in stock based on Medusa inventory data
// inventory_quantity comes from Store API field expansion (+variants.inventory_quantity)
type VariantWithInventory = HttpTypes.StoreProductVariant & { inventory_quantity?: number | null };

// Accepts both AdminProductVariant and StoreProductVariant types
const isVariantInStock = (variant: HttpTypes.StoreProductVariant): boolean => {
    // If inventory is not managed, always in stock
    if (!variant.manage_inventory) {
        return true;
    }

    // If backorders are allowed, always in stock
    if (variant.allow_backorder) {
        return true;
    }

    // Check inventory_quantity (from Store API field expansion)
    const inventoryQuantity = (variant as VariantWithInventory).inventory_quantity;

    // If inventory_quantity is not available or null, default to in stock (fail gracefully)
    if (inventoryQuantity === undefined || inventoryQuantity === null) {
        return true;
    }

    // Out of stock if quantity is 0 or less
    return inventoryQuantity > 0;
};

// Map Medusa variant options to Record<optionId, value>
// Accepts StoreProductVariant (primary) and AdminProductVariant (for compatibility)
const getVariantOptionsMap = (
    variant: HttpTypes.AdminProductVariant | HttpTypes.StoreProductVariant,
): Record<string, string> => {
    const options = variant.options;
    if (!options || !Array.isArray(options)) {
        return {};
    }
    return options.reduce(
        (acc, option) => {
            if (option.option_id && option.value != null) {
                acc[option.option_id] = option.value;
            }
            return acc;
        },
        {} as Record<string, string>,
    );
};

// Map a list of Medusa variants to ProductVariantOption[]
// Accepts StoreProductVariant[] (primary) and AdminProductVariant[] (for compatibility)
const mapVariantOptions = (
    variants: HttpTypes.AdminProductVariant[] | HttpTypes.StoreProductVariant[],
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
            inStock: isVariantInStock(variant),
        };
    });
};

// Extract option groups from variants (Size, Color, etc.) with unique values per group
// Apply variantOptionGroups for translated titles
// Order is derived from the order of variantOptionGroups if provided, otherwise keep natural order
// Accepts StoreProductVariant[] (primary) and AdminProductVariant[] (for compatibility)
const mapOptionGroups = (
    variants: HttpTypes.AdminProductVariant[] | HttpTypes.StoreProductVariant[],
    variantOptionGroups?: { medusaTitle: string; label: string }[],
): Products.Model.ProductOptionGroup[] => {
    const groupsById = new Map<string, { medusaTitle: string; title: string; values: Set<string> }>();

    for (const variant of variants) {
        const options = variant.options;
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

    // Apply CMS order if provided, otherwise keep natural API order
    let sortedGroups = groupsWithKeys;
    if (variantOptionGroups && variantOptionGroups.length > 0) {
        const orderMap = new Map(variantOptionGroups.map((g, i) => [g.medusaTitle, i]));
        sortedGroups = groupsWithKeys.sort((a, b) => {
            const orderA = orderMap.get(a.medusaTitle) ?? Number.MAX_SAFE_INTEGER;
            const orderB = orderMap.get(b.medusaTitle) ?? Number.MAX_SAFE_INTEGER;
            return orderA - orderB;
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
// Accepts StoreProductVariant (primary) and AdminProductVariant (for compatibility)
const getVariantTitle = (variant: HttpTypes.AdminProductVariant | HttpTypes.StoreProductVariant): string => {
    if (variant.options && Array.isArray(variant.options) && variant.options.length > 0) {
        return variant.options
            .map((option: { value?: string }) => option.value)
            .filter(Boolean)
            .join(' / ');
    }
    return variant.title || variant.id;
};

export const mapProduct = (
    productVariant: HttpTypes.StoreProductVariant,
    defaultCurrency: string,
    allVariants: HttpTypes.StoreProductVariant[] | undefined,
    basePath: string,
    variantOptionGroups?: { medusaTitle: string; label: string }[],
): Products.Model.Product => {
    if (!productVariant) {
        throw new NotFoundException('Product variant is undefined');
    }

    // Store API variants have product nested, Admin API variants have it as a property
    const product = 'product' in productVariant ? productVariant.product : undefined;

    // Validate required fields
    if (!product?.id) {
        throw new NotFoundException(`Product ID is required but missing for variant ${productVariant.id}`);
    }
    if (!productVariant.sku) {
        throw new NotFoundException(`Product variant SKU is required but missing for product ${product.id}`);
    }

    // Collect all available raw attributes from variant/product.
    const attributes = collectVariantAttributes(productVariant);

    return {
        id: product.id,
        sku: productVariant.sku,
        name: product?.title || '',
        description: product?.description || '',
        shortDescription: (product?.subtitle as string) || '',
        variantId: productVariant.id,
        image: mapThumbnail(product?.thumbnail, product?.title || ''),
        images: mapImages(product?.images, product?.title || ''),
        price: mapPrice(getVariantPrices(productVariant), defaultCurrency),
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

/**
 * Maps a list of Medusa products to O2S Products model.
 * Accepts StoreProductListResponse (primary, from Store API) and AdminProductListResponse (for compatibility).
 */
export const mapProducts = (
    data: HttpTypes.StoreProductListResponse | HttpTypes.AdminProductListResponse,
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
                    price: mapPrice(getVariantPrices(firstVariant), defaultCurrency),
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
    variantOptionGroups?: { medusaTitle: string; label: string }[],
): Products.Model.Products => {
    return {
        data: data.compatibleServices.map((product) => {
            return mapProduct(product, defaultCurrency, undefined, basePath, variantOptionGroups);
        }),
        total: data.count,
    };
};

export const mapFeaturedServices = (
    data: FeaturedServicesResponse,
    defaultCurrency: string,
    basePath: string,
    variantOptionGroups?: { medusaTitle: string; label: string }[],
): Products.Model.Products => {
    return {
        data: data.featuredServices.map((product) => {
            return mapProduct(product, defaultCurrency, undefined, basePath, variantOptionGroups);
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
