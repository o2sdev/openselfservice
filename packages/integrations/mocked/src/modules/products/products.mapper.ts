import { Products } from '@o2s/framework/modules';

const MOCK_PRODUCT_1: Products.Model.Product = {
    id: 'PRD-004',
    name: 'Rotary Hammer',
    description: 'Professional heavy-duty hammer drill for concrete and masonry',
    shortDescription: 'Professional heavy-duty hammer drill for concrete and masonry',
    image: 'https://example.com/products/te-70-atc-avr.jpg',
    price: {
        value: 100,
        currency: 'USD',
    },
    link: 'https://example.com/products/te-70-atc-avr',
    type: 'PHYSICAL',
    category: 'TOOLS',
};

const MOCK_PRODUCT_2: Products.Model.Product = {
    id: 'PRD-005',
    name: 'Cordless Angle Grinder',
    description: 'Cordless angle grinder with 22V battery platform',
    shortDescription: 'Cordless angle grinder with 22V battery platform',
    image: 'https://example.com/products/ag-125-a22.jpg',
    price: {
        value: 199.99,
        currency: 'USD',
    },
    link: 'https://example.com/products/ag-125-a22',
    type: 'PHYSICAL',
    category: 'TOOLS',
};

const MOCK_PRODUCT_3: Products.Model.Product = {
    id: 'PRD-006',
    name: 'Laser Measurement',
    description: 'Laser measurement device for distance measurements',
    shortDescription: 'Laser measurement device for distance measurements',
    image: 'https://example.com/products/pd-s.jpg',
    price: {
        value: 100,
        currency: 'USD',
    },
    link: 'https://example.com/products/pd-s',
    type: 'PHYSICAL',
    category: 'MEASUREMENT',
};

const MOCK_PRODUCT_4: Products.Model.Product = {
    id: 'PRD-007',
    name: 'Cordless Drill Driver',
    description: 'Cordless drill driver with 22V battery platform',
    shortDescription: 'Cordless drill driver with 22V battery platform',
    image: 'https://example.com/products/sfc-22-a.jpg',
    price: {
        value: 100,
        currency: 'USD',
    },
    link: 'https://example.com/products/sfc-22-a',
    type: 'PHYSICAL',
    category: 'TOOLS',
};

const MOCK_PRODUCT_5: Products.Model.Product = {
    id: 'PRD-008',
    name: 'Engineering Software',
    description: 'Advanced software for construction engineering calculations',
    shortDescription: 'Advanced software for construction engineering calculations',
    image: 'https://example.com/products/profis-engineering.jpg',
    price: {
        value: 39.99,
        currency: 'USD',
    },
    link: 'https://example.com/products/profis-engineering',
    type: 'VIRTUAL',
    category: 'SOFTWARE',
};

const MOCK_PRODUCT_6: Products.Model.Product = {
    id: 'PRD-009',
    name: 'Premium Support',
    description: '24/7 Technical Support Service',
    shortDescription: '24/7 Technical Support Service',
    image: 'https://example.com/products/premium-support.jpg',
    price: {
        value: 39.99,
        currency: 'USD',
    },
    link: 'https://example.com/services/premium-support',
    type: 'VIRTUAL',
    category: 'SUPPORT',
};

const MOCK_PRODUCT_7: Products.Model.Product = {
    id: 'PRD-010',
    name: 'Professional Training',
    description: 'Comprehensive Tool Usage Training',
    shortDescription: 'Comprehensive Tool Usage Training',
    image: 'https://example.com/products/training.jpg',
    price: {
        value: 19.99,
        currency: 'USD',
    },
    link: 'https://example.com/services/training',
    type: 'VIRTUAL',
    category: 'TRAINING',
};

const MOCK_PRODUCT_8: Products.Model.Product = {
    id: 'PRD-011',
    name: 'Regular Maintenance',
    description: 'Scheduled Tool Maintenance Service',
    shortDescription: 'Scheduled Tool Maintenance Service',
    image: 'https://example.com/products/maintenance.jpg',
    price: {
        value: 19.99,
        currency: 'USD',
    },
    link: 'https://example.com/services/maintenance',
    type: 'VIRTUAL',
    category: 'MAINTENANCE',
};

const MOCK_PRODUCT_9: Products.Model.Product = {
    id: 'PRD-012',
    name: 'Extended Warranty',
    description: 'Additional 2 Years Warranty Coverage',
    shortDescription: 'Additional 2 Years Warranty Coverage',
    image: 'https://example.com/products/warranty.jpg',
    price: {
        value: 10,
        currency: 'USD',
    },
    link: 'https://example.com/services/warranty',
    type: 'VIRTUAL',
    category: 'WARRANTY',
};

const MOCK_PRODUCT_10: Products.Model.Product = {
    id: 'PRD-013',
    name: 'Cloud Storage',
    description: 'Project Data Cloud Storage Service',
    shortDescription: 'Project Data Cloud Storage Service',
    image: 'https://example.com/products/cloud-storage.jpg',
    price: {
        value: 10,
        currency: 'USD',
    },
    link: 'https://example.com/services/cloud-storage',
    type: 'VIRTUAL',
    category: 'CLOUD',
};

const MOCK_PRODUCTS = [
    MOCK_PRODUCT_1,
    MOCK_PRODUCT_2,
    MOCK_PRODUCT_3,
    MOCK_PRODUCT_4,
    MOCK_PRODUCT_5,
    MOCK_PRODUCT_6,
    MOCK_PRODUCT_7,
    MOCK_PRODUCT_8,
    MOCK_PRODUCT_9,
    MOCK_PRODUCT_10,
];

export const mapProduct = (id: string): Products.Model.Product => {
    const product = MOCK_PRODUCTS.find((product) => product.id === id);
    if (!product) {
        throw new Error(`Product with id ${id} not found`);
    }
    return product;
};

export const mapProducts = (query: Products.Request.GetProductListQuery): Products.Model.Products => {
    const filteredProducts = MOCK_PRODUCTS.filter((product) => {
        if (query.type && product.type !== query.type) {
            return false;
        }
        if (query.category && product.category !== query.category) {
            return false;
        }
        return true;
    });
    return {
        data: filteredProducts,
        total: filteredProducts.length,
    };
};
