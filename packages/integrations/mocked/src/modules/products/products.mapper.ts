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
        keySpecs: [
            { value: '1500W', icon: 'Zap' },
            { value: '4.0J Impact', icon: 'Hammer' },
            { value: 'AVS', icon: 'Shield' },
            { value: '4.8kg', icon: 'Weight' },
        ],
        detailedSpecs: [
            { label: 'Impact Energy', value: '4.0 J' },
            { label: 'Input Power', value: '1500 W' },
            { label: 'No-Load Speed', value: '0-1100 RPM' },
            { label: 'Impact Rate', value: '0-5000 BPM' },
            { label: 'Chuck Type', value: 'SDS-Plus' },
            { label: 'Max Drilling Capacity', value: '36mm (concrete)' },
            { label: 'Weight', value: '4.8 kg' },
            { label: 'Voltage', value: '230V' },
            { label: 'Cable Length', value: '4 m' },
            { label: 'Vibration Level', value: '13 m/s²' },
            { label: 'Noise Level', value: '97 dB(A)' },
            { label: 'Certification', value: 'CE, ETL, ISO 9001' },
        ],
    },
    max: {
        shortDescription: 'Professional 1800W rotary hammer with 5.0J impact energy for concrete and masonry',
        price: { value: 549.99, currency: 'USD' },
        keySpecs: [
            { value: '1800W', icon: 'Zap' },
            { value: '5.0J Impact', icon: 'Hammer' },
            { value: 'AVS', icon: 'Shield' },
            { value: '5.2kg', icon: 'Weight' },
        ],
        detailedSpecs: [
            { label: 'Impact Energy', value: '5.0 J' },
            { label: 'Input Power', value: '1800 W' },
            { label: 'No-Load Speed', value: '0-1200 RPM' },
            { label: 'Impact Rate', value: '0-5500 BPM' },
            { label: 'Chuck Type', value: 'SDS-Max' },
            { label: 'Max Drilling Capacity', value: '40mm (concrete)' },
            { label: 'Weight', value: '5.2 kg' },
            { label: 'Voltage', value: '230V' },
            { label: 'Cable Length', value: '5 m' },
            { label: 'Vibration Level', value: '14 m/s²' },
            { label: 'Noise Level', value: '98 dB(A)' },
            { label: 'Certification', value: 'CE, ETL, ISO 9001' },
        ],
    },
};

const VARIANT_OVERRIDES_PL: Record<string, Partial<Products.Model.Product>> = {
    standard: {},
    pro: {
        shortDescription: 'Profesjonalna młotowiertarka 1500W z energią uderzenia 4,0J do betonu i murarstwa',
        price: { value: 1799.99, currency: 'PLN' },
        keySpecs: [
            { value: '1500W', icon: 'Zap' },
            { value: '4.0J Uderzenie', icon: 'Hammer' },
            { value: 'AVS', icon: 'Shield' },
            { value: '4,8kg', icon: 'Weight' },
        ],
        detailedSpecs: [
            { label: 'Energia Uderzenia', value: '4,0 J' },
            { label: 'Moc Wejściowa', value: '1500 W' },
            { label: 'Prędkość Bez Obciążenia', value: '0-1100 RPM' },
            { label: 'Częstotliwość Uderzeń', value: '0-5000 BPM' },
            { label: 'Typ Uchwytu', value: 'SDS-Plus' },
            { label: 'Maksymalna Średnica Wiercenia', value: '36mm (beton)' },
            { label: 'Waga', value: '4,8 kg' },
            { label: 'Napięcie', value: '230V' },
            { label: 'Długość Kabla', value: '4 m' },
            { label: 'Poziom Wibracji', value: '13 m/s²' },
            { label: 'Poziom Hałasu', value: '97 dB(A)' },
            { label: 'Certyfikacja', value: 'CE, ETL, ISO 9001' },
        ],
    },
    max: {
        shortDescription: 'Profesjonalna młotowiertarka 1800W z energią uderzenia 5,0J do betonu i murarstwa',
        price: { value: 2199.99, currency: 'PLN' },
        keySpecs: [
            { value: '1800W', icon: 'Zap' },
            { value: '5.0J Uderzenie', icon: 'Hammer' },
            { value: 'AVS', icon: 'Shield' },
            { value: '5,2kg', icon: 'Weight' },
        ],
        detailedSpecs: [
            { label: 'Energia Uderzenia', value: '5,0 J' },
            { label: 'Moc Wejściowa', value: '1800 W' },
            { label: 'Prędkość Bez Obciążenia', value: '0-1200 RPM' },
            { label: 'Częstotliwość Uderzeń', value: '0-5500 BPM' },
            { label: 'Typ Uchwytu', value: 'SDS-Max' },
            { label: 'Maksymalna Średnica Wiercenia', value: '40mm (beton)' },
            { label: 'Waga', value: '5,2 kg' },
            { label: 'Napięcie', value: '230V' },
            { label: 'Długość Kabla', value: '5 m' },
            { label: 'Poziom Wibracji', value: '14 m/s²' },
            { label: 'Poziom Hałasu', value: '98 dB(A)' },
            { label: 'Certyfikacja', value: 'CE, ETL, ISO 9001' },
        ],
    },
};

const VARIANT_OVERRIDES_DE: Record<string, Partial<Products.Model.Product>> = {
    standard: {},
    pro: {
        shortDescription: 'Professioneller 1500W Bohrhammer mit 4,0J Schlagenergie für Beton und Mauerwerk',
        price: { value: 449.99, currency: 'EUR' },
        keySpecs: [
            { value: '1500W', icon: 'Zap' },
            { value: '4.0J Schlag', icon: 'Hammer' },
            { value: 'AVS', icon: 'Shield' },
            { value: '4,8kg', icon: 'Weight' },
        ],
        detailedSpecs: [
            { label: 'Schlagenergie', value: '4,0 J' },
            { label: 'Eingangsleistung', value: '1500 W' },
            { label: 'Leerlaufdrehzahl', value: '0-1100 U/min' },
            { label: 'Schlagfrequenz', value: '0-5000 BPM' },
            { label: 'Spannfuttertyp', value: 'SDS-Plus' },
            { label: 'Max. Bohrdurchmesser', value: '36mm (Beton)' },
            { label: 'Gewicht', value: '4,8 kg' },
            { label: 'Spannung', value: '230V' },
            { label: 'Kabellänge', value: '4 m' },
            { label: 'Vibrationspegel', value: '13 m/s²' },
            { label: 'Geräuschpegel', value: '97 dB(A)' },
            { label: 'Zertifizierung', value: 'CE, ETL, ISO 9001' },
        ],
    },
    max: {
        shortDescription: 'Professioneller 1800W Bohrhammer mit 5,0J Schlagenergie für Beton und Mauerwerk',
        price: { value: 549.99, currency: 'EUR' },
        keySpecs: [
            { value: '1800W', icon: 'Zap' },
            { value: '5.0J Schlag', icon: 'Hammer' },
            { value: 'AVS', icon: 'Shield' },
            { value: '5,2kg', icon: 'Weight' },
        ],
        detailedSpecs: [
            { label: 'Schlagenergie', value: '5,0 J' },
            { label: 'Eingangsleistung', value: '1800 W' },
            { label: 'Leerlaufdrehzahl', value: '0-1200 U/min' },
            { label: 'Schlagfrequenz', value: '0-5500 BPM' },
            { label: 'Spannfuttertyp', value: 'SDS-Max' },
            { label: 'Max. Bohrdurchmesser', value: '40mm (Beton)' },
            { label: 'Gewicht', value: '5,2 kg' },
            { label: 'Spannung', value: '230V' },
            { label: 'Kabellänge', value: '5 m' },
            { label: 'Vibrationspegel', value: '14 m/s²' },
            { label: 'Geräuschpegel', value: '98 dB(A)' },
            { label: 'Zertifizierung', value: 'CE, ETL, ISO 9001' },
        ],
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
