import { Products } from '@o2s/framework/modules';

type MockProduct = Products.Model.Product;

type PriceRange = {
    min?: number;
    max?: number;
};

const PRICE_RANGE_MAP: Record<string, PriceRange> = {
    UNDER_100: { min: 0, max: 100 },
    RANGE_100_250: { min: 100, max: 250 },
    RANGE_250_500: { min: 250, max: 500 },
    ABOVE_500: { min: 500 },
};

const MOCK_PRODUCTS: MockProduct[] = [
    {
        id: 'PRD-004',
        sku: 'ABC-12345-S-BL',
        name: 'Rotary Hammer',
        description: 'Professional heavy-duty hammer drill for concrete and masonry',
        shortDescription: 'Professional heavy-duty hammer drill for concrete and masonry',
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            width: 640,
            height: 656,
            alt: 'Rotary Hammer',
        },
        price: {
            value: 100,
            currency: 'USD',
        },
        link: 'https://example.com/products/te-70-atc-avr',
        type: 'PHYSICAL',
        category: 'TOOLS',
        availability: 'IN_STOCK',
        stock: 42,
        rating: {
            value: 4.8,
            max: 5,
            count: 212,
        },
        tags: [
            {
                label: 'New',
                variant: 'secondary',
            },
            {
                label: 'Featured',
                variant: 'default',
            },
        ],
    },
    {
        id: 'PRD-005',
        sku: 'ABC-12345-S-BL',
        name: 'Cordless Angle Grinder',
        description: 'Cordless angle grinder with 22V battery platform',
        shortDescription: 'Cordless angle grinder with 22V battery platform',
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-charger.jpg',
            width: 640,
            height: 656,
            alt: 'Cordless Angle Grinder',
        },
        price: {
            value: 199.99,
            currency: 'USD',
        },
        link: 'https://example.com/products/ag-125-a22',
        type: 'PHYSICAL',
        category: 'TOOLS',
        availability: 'LOW_STOCK',
        stock: 8,
        rating: {
            value: 4.5,
            max: 5,
            count: 137,
        },
        tags: [
            {
                label: 'New',
                variant: 'secondary',
            },
            {
                label: 'Promo',
                variant: 'destructive',
            },
        ],
    },
    {
        id: 'PRD-006',
        sku: 'ABC-12345-S-BL',
        name: 'Laser Measurement',
        description: 'Laser measurement device for distance measurements',
        shortDescription: 'Laser measurement device for distance measurements',
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            width: 640,
            height: 656,
            alt: 'Laser Measurement',
        },
        price: {
            value: 100,
            currency: 'USD',
        },
        link: 'https://example.com/products/pd-s',
        type: 'PHYSICAL',
        category: 'MEASUREMENT',
        availability: 'IN_STOCK',
        stock: 68,
        rating: {
            value: 4.4,
            max: 5,
            count: 98,
        },
        tags: [
            {
                label: 'New',
                variant: 'secondary',
            },
        ],
    },
    {
        id: 'PRD-007',
        sku: 'ABC-12345-S-BL',
        name: 'Cordless Drill Driver',
        description: 'Cordless drill driver with 22V battery platform',
        shortDescription: 'Cordless drill driver with 22V battery platform',
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            width: 640,
            height: 656,
            alt: 'Cordless Drill Driver',
        },
        price: {
            value: 129.5,
            currency: 'USD',
        },
        link: 'https://example.com/products/sfc-22-a',
        type: 'PHYSICAL',
        category: 'TOOLS',
        availability: 'OUT_OF_STOCK',
        stock: 0,
        rating: {
            value: 4.3,
            max: 5,
            count: 164,
        },
        tags: [
            {
                label: 'Bestseller',
                variant: 'outline',
            },
        ],
    },
    {
        id: 'PRD-008',
        sku: 'ABC-12345-S-BL',
        name: 'Engineering Software',
        description: 'Advanced software for construction engineering calculations',
        shortDescription: 'Advanced software for construction engineering calculations',
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            width: 640,
            height: 656,
            alt: 'Engineering Software',
        },
        price: {
            value: 39.99,
            currency: 'USD',
        },
        link: 'https://example.com/products/profis-engineering',
        type: 'VIRTUAL',
        category: 'SOFTWARE',
        availability: 'IN_STOCK',
        stock: 999,
        rating: {
            value: 4.9,
            max: 5,
            count: 89,
        },
        tags: [
            {
                label: 'New',
                variant: 'secondary',
            },
            {
                label: 'Digital',
                variant: 'outline',
            },
        ],
    },
    {
        id: 'PRD-009',
        sku: 'ABC-12345-S-BL',
        name: 'RentPro Industrial™ – Flexible Equipment Rental Solutions',
        description:
            '<ul><li>Short & Long-Term Rentals</li><li>Wide Equipment Selection</li><li>Maintenance & Support Included</li></ul>',
        shortDescription:
            '<ul><li>Short & Long-Term Rentals</li><li>Wide Equipment Selection</li><li>Maintenance & Support Included</li></ul>',
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-rental.jpg',
            width: 640,
            height: 656,
            alt: 'RentPro Industrial™ – Flexible Equipment Rental Solutions',
        },
        price: {
            value: 79.83,
            currency: 'USD',
        },
        link: 'https://example.com/services/rentpro-industrial',
        type: 'VIRTUAL',
        category: 'RENTAL',
        availability: 'PREORDER',
        stock: 24,
        rating: {
            value: 4.2,
            max: 5,
            count: 45,
        },
        tags: [
            {
                label: 'Seasonal',
                variant: 'secondary',
            },
        ],
    },
    {
        id: 'PRD-010',
        sku: 'ABC-12345-S-BL',
        name: 'PrecisionPro Calibration™ – Ensuring Accuracy for Industrial Equipment',
        description:
            '<ul><li>ISO-Certified Calibration</li><li>On-Site & Remote Services</li><li>Detailed Reports</li></ul>',
        shortDescription:
            '<ul><li>ISO-Certified Calibration</li><li>On-Site & Remote Services</li><li>Detailed Reports</li></ul>',
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-calibration.jpg',
            width: 640,
            height: 656,
            alt: 'PrecisionPro Calibration™ – Ensuring Accuracy for Industrial Equipment',
        },
        price: {
            value: 19.99,
            currency: 'USD',
        },
        link: 'https://example.com/services/training',
        type: 'VIRTUAL',
        category: 'TRAINING',
        availability: 'IN_STOCK',
        stock: 55,
        rating: {
            value: 4.6,
            max: 5,
            count: 66,
        },
        tags: [
            {
                label: 'Promo',
                variant: 'destructive',
            },
            {
                label: 'New',
                variant: 'secondary',
            },
        ],
    },
    {
        id: 'PRD-011',
        sku: 'ABC-12345-S-BL',
        name: 'PowerCharge Solutions™ – Battery & Charger Management for Manufacturing',
        description: '<ul><li>Smart Diagnostics</li><li>Sustainable Recycling</li><li>On-Demand Replacements</li></ul>',
        shortDescription:
            '<ul><li>Smart Diagnostics</li><li>Sustainable Recycling</li><li>On-Demand Replacements</li></ul>',
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-charger.jpg',
            width: 640,
            height: 656,
            alt: 'PowerCharge Solutions™ – Battery & Charger Management for Manufacturing',
        },
        price: {
            value: 79.83,
            currency: 'EUR',
        },
        link: 'https://example.com/services/powercharge-solutions',
        type: 'VIRTUAL',
        category: 'MAINTENANCE',
        availability: 'LOW_STOCK',
        stock: 5,
        rating: {
            value: 4.1,
            max: 5,
            count: 38,
        },
        tags: [
            {
                label: 'Promo',
                variant: 'destructive',
            },
            {
                label: 'New',
                variant: 'secondary',
            },
        ],
    },
    {
        id: 'PRD-012',
        sku: 'ABC-12345-S-BL',
        name: 'WeldGuard Safety™ – Protective Solutions for Welding Environments',
        description:
            '<ul><li>Advanced Fume Extraction</li><li>Heat-Resistant PPE</li><li>Safety Compliance Checks</li></ul>',
        shortDescription:
            '<ul><li>Advanced Fume Extraction</li><li>Heat-Resistant PPE</li><li>Safety Compliance Checks</li></ul>',
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-welding.jpg',
            width: 640,
            height: 656,
            alt: 'WeldGuard Safety™ – Protective Solutions for Welding Environments',
        },
        price: {
            value: 10,
            currency: 'USD',
        },
        link: 'https://example.com/services/weldguard-safety',
        type: 'VIRTUAL',
        category: 'SAFETY',
        availability: 'IN_STOCK',
        stock: 150,
        rating: {
            value: 4.0,
            max: 5,
            count: 28,
        },
        tags: [
            {
                label: 'New',
                variant: 'secondary',
            },
        ],
    },
    {
        id: 'PRD-013',
        sku: 'ABC-12345-S-BL',
        name: 'MaxFlow Air Systems™ – Industrial Pneumatics Maintenance & Optimization',
        description:
            '<ul><li>Energy Efficiency Audits</li><li>Custom Airflow Solutions</li><li>Preventative Maintenance</li></ul>',
        shortDescription:
            '<ul><li>Energy Efficiency Audits</li><li>Custom Airflow Solutions</li><li>Preventative Maintenance</li></ul>',
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-air.jpg',
            width: 640,
            height: 656,
            alt: 'MaxFlow Air Systems™ – Industrial Pneumatics Maintenance & Optimization',
        },
        price: {
            value: 19.99,
            currency: 'USD',
        },
        link: 'https://example.com/services/maxflow-air-systems',
        type: 'VIRTUAL',
        category: 'MAINTENANCE',
        availability: 'PREORDER',
        stock: 30,
        rating: {
            value: 4.1,
            max: 5,
            count: 31,
        },
        tags: [
            {
                label: 'Featured',
                variant: 'default',
            },
        ],
    },
    {
        id: 'PRD-014',
        sku: 'ABC-12345-S-BL',
        name: 'RapidFix Repair™ – Fast & Reliable Industrial Tool Repairs',
        description:
            '<h2>RapidFix Repair™ – Fast & Reliable Industrial Tool Repairs</h2><ul><li>Express Repairs</li><li>Genuine Parts</li><li>Warranty Protection</li></ul>',
        shortDescription: '<ul><li>Express Repairs</li><li>Genuine Parts</li><li>Warranty Protection</li></ul>',
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-repair.jpg',
            width: 640,
            height: 656,
            alt: 'RapidFix Repair™ – Fast & Reliable Industrial Tool Repairs',
        },
        price: {
            value: 19.99,
            currency: 'EUR',
        },
        link: 'https://example.com/services/rapidfix-repair',
        type: 'VIRTUAL',
        category: 'MAINTENANCE',
        availability: 'IN_STOCK',
        stock: 70,
        rating: {
            value: 4.7,
            max: 5,
            count: 103,
        },
        tags: [
            {
                label: 'New',
                variant: 'secondary',
            },
        ],
    },
];

const normalizeStringArray = (value?: string | string[]): string[] => {
    if (!value) {
        return [];
    }

    if (Array.isArray(value)) {
        return value.filter(Boolean).map((entry) => entry.trim());
    }

    return value
        .split(',')
        .map((entry) => entry.trim())
        .filter(Boolean);
};

const matchesPrice = (price: number, priceRange?: string, min?: number | string, max?: number | string) => {
    const normalizedMin = typeof min === 'string' ? Number(min) : min;
    const normalizedMax = typeof max === 'string' ? Number(max) : max;

    const range = priceRange ? PRICE_RANGE_MAP[priceRange] : undefined;
    const lowerBound = typeof normalizedMin === 'number' ? normalizedMin : range?.min;
    const upperBound = typeof normalizedMax === 'number' ? normalizedMax : range?.max;

    if (typeof lowerBound === 'number' && price < lowerBound) {
        return false;
    }

    if (typeof upperBound === 'number' && price > upperBound) {
        return false;
    }

    return true;
};

const matchesTags = (product: MockProduct, filterTags: string[]) => {
    if (!filterTags.length) {
        return true;
    }

    const productTags = product.tags.map((tag) => tag.label.toLowerCase());

    return filterTags.some((tag) => productTags.includes(tag.toLowerCase()));
};

const matchesAvailability = (product: MockProduct, availabilityFilters: string[]) => {
    if (!availabilityFilters.length || !product.availability) {
        return true;
    }

    return availabilityFilters.includes(product.availability);
};

const matchesSearch = (product: MockProduct, search?: string) => {
    if (!search) {
        return true;
    }

    const normalizedSearch = search.toLowerCase();
    return (
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.description.toLowerCase().includes(normalizedSearch) ||
        product.shortDescription?.toLowerCase().includes(normalizedSearch)
    );
};

const sortProducts = (products: MockProduct[], sort?: string) => {
    if (!sort) {
        return products;
    }

    const [field, direction = 'ASC'] = sort.split('_');
    const isAscending = direction !== 'DESC';

    return [...products].sort((a, b) => {
        switch (field) {
            case 'price': {
                return isAscending ? a.price.value - b.price.value : b.price.value - a.price.value;
            }
            case 'name': {
                return isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
            }
            case 'rating': {
                const ratingA = a.rating?.value || 0;
                const ratingB = b.rating?.value || 0;
                return isAscending ? ratingA - ratingB : ratingB - ratingA;
            }
            default: {
                return 0;
            }
        }
    });
};

export const mapProduct = (id: string): Products.Model.Product => {
    const product = MOCK_PRODUCTS.find((item) => item.id === id);
    if (!product) {
        throw new Error(`Product with id ${id} not found`);
    }
    return product;
};

export const mapProducts = (options: Products.Request.GetProductListQuery): Products.Model.Products => {
    const availabilityFilters = normalizeStringArray(options.availability as string | string[] | undefined);
    const tagFilters = normalizeStringArray(options.tags as string | string[] | undefined);

    const filteredProducts = MOCK_PRODUCTS.filter((product) => {
        if (options.type && product.type !== options.type) {
            return false;
        }

        if (options.category && product.category !== options.category) {
            return false;
        }

        if (!matchesAvailability(product, availabilityFilters)) {
            return false;
        }

        if (!matchesTags(product, tagFilters)) {
            return false;
        }

        if (!matchesPrice(product.price.value, options.priceRange, options.minPrice, options.maxPrice)) {
            return false;
        }

        if (!matchesSearch(product, options.search)) {
            return false;
        }

        return true;
    });

    const sortedProducts = sortProducts(filteredProducts, options.sort);

    const limit = typeof options.limit === 'number' ? options.limit : Number(options.limit ?? 12) || 12;
    const offset = typeof options.offset === 'number' ? options.offset : Number(options.offset ?? 0) || 0;

    return {
        data: sortedProducts.slice(offset, offset + limit),
        total: filteredProducts.length,
    };
};

export const mapRelatedProducts = (
    options: Products.Request.GetRelatedProductListParams,
): Products.Model.Products => {
    const { offset = 0, limit = 10, sort } = options;

    const related = sortProducts(MOCK_PRODUCTS, sort);

    return {
        data: related.slice(Number(offset), Number(offset) + Number(limit)),
        total: related.length,
    };
};
