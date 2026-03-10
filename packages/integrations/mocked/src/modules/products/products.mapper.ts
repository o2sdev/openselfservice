import { Products } from '@o2s/framework/modules';

import { MOCK_PRODUCTS_DE, MOCK_PRODUCTS_EN, MOCK_PRODUCTS_PL } from '../resources/mock/products.mock';

export { MOCK_PRODUCTS_EN, MOCK_PRODUCTS_DE, MOCK_PRODUCTS_PL };

// Variant-specific overrides for PRD-004 (rotary hammer with power variants)
const VARIANT_OVERRIDES: Record<string, Partial<Products.Model.Product>> = {
    standard: {
        // Base values — no overrides needed, uses product defaults
    },
    pro: {
        shortDescription: 'Professional 1500W rotary hammer with 4.0J impact energy for concrete and masonry',
        price: { value: 449.99, currency: 'USD' },
    },
    max: {
        shortDescription: 'Professional 1800W rotary hammer with 5.0J impact energy for concrete and masonry',
        price: { value: 549.99, currency: 'USD' },
    },
};

const VARIANT_OVERRIDES_PL: Record<string, Partial<Products.Model.Product>> = {
    standard: {},
    pro: {
        shortDescription: 'Profesjonalna młotowiertarka 1500W z energią uderzenia 4,0J do betonu i murarstwa',
        price: { value: 1799.99, currency: 'PLN' },
    },
    max: {
        shortDescription: 'Profesjonalna młotowiertarka 1800W z energią uderzenia 5,0J do betonu i murarstwa',
        price: { value: 2199.99, currency: 'PLN' },
    },
};

const VARIANT_OVERRIDES_DE: Record<string, Partial<Products.Model.Product>> = {
    standard: {},
    pro: {
        shortDescription: 'Professioneller 1500W Bohrhammer mit 4,0J Schlagenergie für Beton und Mauerwerk',
        price: { value: 449.99, currency: 'EUR' },
    },
    max: {
        shortDescription: 'Professioneller 1800W Bohrhammer mit 5,0J Schlagenergie für Beton und Mauerwerk',
        price: { value: 549.99, currency: 'EUR' },
    },
};

const getVariantOverrides = (locale: string | undefined, slug: string): Partial<Products.Model.Product> => {
    if (locale === 'pl') return VARIANT_OVERRIDES_PL[slug] || {};
    if (locale === 'de') return VARIANT_OVERRIDES_DE[slug] || {};
    return VARIANT_OVERRIDES[slug] || {};
};

export const mapProduct = (id: string, locale?: string, variantId?: string): Products.Model.Product => {
    let productsSource = MOCK_PRODUCTS_EN;
    if (locale === 'pl') {
        productsSource = MOCK_PRODUCTS_PL;
    } else if (locale === 'de') {
        productsSource = MOCK_PRODUCTS_DE;
    }

    const product = productsSource.find((product) => product.id === id);
    if (!product) {
        throw new Error(`Product with id ${id} not found`);
    }

    // If product has variants, select the matching or first variant
    if (product.variants && product.variants.length > 0) {
        // variantId can be either the variant ID or slug (from URL)
        const selectedVariant = variantId
            ? product.variants.find((v) => v.id === variantId || v.slug === variantId) || product.variants[0]!
            : product.variants[0]!;

        const overrides = getVariantOverrides(locale, selectedVariant.slug);

        // Generate links for all variants
        const variantsWithLinks = product.variants.map((variant) => ({
            ...variant,
            link: `${product.link}/${variant.slug}`,
        }));

        return {
            ...product,
            ...overrides,
            variantId: selectedVariant.id,
            sku: `${product.sku}-${selectedVariant.slug.toUpperCase()}`,
            link: `${product.link}/${selectedVariant.slug}`,
            variants: variantsWithLinks,
        };
    }

    return product;
};

export const mapProductBySku = (sku: string, locale?: string): Products.Model.Product => {
    let productsSource = MOCK_PRODUCTS_EN;
    if (locale === 'pl') {
        productsSource = MOCK_PRODUCTS_PL;
    } else if (locale === 'de') {
        productsSource = MOCK_PRODUCTS_DE;
    }

    const product = productsSource.find((product) => product.sku === sku);
    if (!product) {
        throw new Error(`Product with SKU ${sku} not found`);
    }
    return product;
};

export const mapProducts = (options: Products.Request.GetProductListQuery): Products.Model.Products => {
    const { sort, locale, offset = 0, limit = 12 } = options;

    let productsSource = MOCK_PRODUCTS_EN;
    if (locale === 'pl') {
        productsSource = MOCK_PRODUCTS_PL;
    } else if (locale === 'de') {
        productsSource = MOCK_PRODUCTS_DE;
    }

    const filteredProducts = productsSource
        .filter((product) => {
            if (options.type && product.type !== options.type) {
                return false;
            }
            if (options.category && product.category !== options.category) {
                return false;
            }
            return true;
        })
        .map((product) => {
            // Select first variant by default for products with variants
            if (product.variants && product.variants.length > 0) {
                const firstVariant = product.variants[0]!;
                const overrides = getVariantOverrides(locale, firstVariant.slug);
                return {
                    ...product,
                    ...overrides,
                    variantId: firstVariant.id,
                    link: `${product.link}/${firstVariant.slug}`,
                };
            }
            return product;
        });

    const data = [...filteredProducts];

    if (sort) {
        const [field, order] = sort.split('_');
        const isAscending = order === 'ASC';

        data.sort((a, b) => {
            const aValue = a[field as keyof Products.Model.Product];
            const bValue = b[field as keyof Products.Model.Product];

            if (field === 'name') {
                const aField = a.name;
                const bField = b.name;
                return isAscending ? aField.localeCompare(bField) : bField.localeCompare(aField);
            } else if (field === 'price') {
                const aPrice = a.price.value;
                const bPrice = b.price.value;
                return isAscending ? aPrice - bPrice : bPrice - aPrice;
            } else if (typeof aValue === 'string' && typeof bValue === 'string') {
                return isAscending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
            } else if (typeof aValue === 'number' && typeof bValue === 'number') {
                return isAscending ? aValue - bValue : bValue - aValue;
            }
            return 0;
        });
    }

    return {
        data: data.slice(offset, Number(offset) + Number(limit)),
        total: data.length,
    };
};

export const mapRelatedProducts = (options: Products.Request.GetRelatedProductListParams): Products.Model.Products => {
    const { offset = 0, limit = 10, sort, locale } = options;

    let productsSource = MOCK_PRODUCTS_EN;
    if (locale === 'pl') {
        productsSource = MOCK_PRODUCTS_PL;
    } else if (locale === 'de') {
        productsSource = MOCK_PRODUCTS_DE;
    }

    const products: Products.Model.Product[] = productsSource;

    if (!products.length) {
        return {
            data: [],
            total: 0,
        };
    }

    const data = products;

    if (sort) {
        const [field, order] = sort.split('_');
        const isAscending = order === 'ASC';

        data.sort((a, b) => {
            const aValue = a[field as keyof Products.Model.Product];
            const bValue = b[field as keyof Products.Model.Product];

            if (field === 'name') {
                const aField = a.name;
                const bField = b.name;
                return isAscending ? aField.localeCompare(bField) : bField.localeCompare(aField);
            } else if (field === 'price') {
                const aPrice = a.price.value;
                const bPrice = b.price.value;
                return isAscending ? aPrice - bPrice : bPrice - aPrice;
            } else if (typeof aValue === 'string' && typeof bValue === 'string') {
                return isAscending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
            } else if (typeof aValue === 'number' && typeof bValue === 'number') {
                return isAscending ? aValue - bValue : bValue - aValue;
            }
            return 0;
        });
    }

    return {
        data: data.slice(offset, Number(offset) + Number(limit)),
        total: data.length,
    };
};
