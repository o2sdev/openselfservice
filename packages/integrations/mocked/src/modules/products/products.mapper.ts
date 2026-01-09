import { Products } from '@o2s/framework/modules';

const MOCK_PRODUCT_1: Products.Model.Product = {
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
    link: '/products/PRD-004',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'New',
            variant: 'secondary',
        },
    ],
};

const MOCK_PRODUCT_2: Products.Model.Product = {
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
    link: '/products/PRD-005',
    type: 'PHYSICAL',
    category: 'TOOLS',
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
};

const MOCK_PRODUCT_3: Products.Model.Product = {
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
    link: '/products/PRD-006',
    type: 'PHYSICAL',
    category: 'MEASUREMENT',
    tags: [
        {
            label: 'New',
            variant: 'secondary',
        },
    ],
};

const MOCK_PRODUCT_4: Products.Model.Product = {
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
        value: 100,
        currency: 'USD',
    },
    link: '/products/PRD-007',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'New',
            variant: 'secondary',
        },
    ],
};

const MOCK_PRODUCT_5: Products.Model.Product = {
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
    link: '/products/PRD-008',
    type: 'VIRTUAL',
    category: 'SOFTWARE',
    tags: [
        {
            label: 'New',
            variant: 'secondary',
        },
    ],
};

const MOCK_PRODUCT_6: Products.Model.Product = {
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
    link: '/products/PRD-009',
    type: 'VIRTUAL',
    category: 'RENTAL',
    tags: [
        {
            label: 'New',
            variant: 'secondary',
        },
    ],
};

const MOCK_PRODUCT_7: Products.Model.Product = {
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
    link: '/products/PRD-010',
    type: 'VIRTUAL',
    category: 'TRAINING',
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
};

const MOCK_PRODUCT_8: Products.Model.Product = {
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
    link: '/products/PRD-011',
    type: 'VIRTUAL',
    category: 'MAINTENANCE',
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
};

const MOCK_PRODUCT_9: Products.Model.Product = {
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
    link: '/products/PRD-012',
    type: 'VIRTUAL',
    category: 'SAFETY',
    tags: [
        {
            label: 'New',
            variant: 'secondary',
        },
    ],
};

const MOCK_PRODUCT_10: Products.Model.Product = {
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
    link: '/products/PRD-013',
    type: 'VIRTUAL',
    category: 'MAINTENANCE',
    tags: [
        {
            label: 'New',
            variant: 'secondary',
        },
    ],
};

const MOCK_PRODUCT_11: Products.Model.Product = {
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
    link: '/products/PRD-014',
    type: 'VIRTUAL',
    category: 'MAINTENANCE',
    tags: [
        {
            label: 'New',
            variant: 'secondary',
        },
    ],
};

const MOCK_PRODUCT_12: Products.Model.Product = {
    id: 'PRD-015',
    sku: 'PREMIUM-XL-2000',
    name: 'Premium Industrial Machine XL-2000',
    description:
        '<p>The <strong>XL-2000</strong> is a state-of-the-art industrial machine designed for maximum efficiency and durability. With advanced automation features and energy-saving technology, this machine is perfect for modern manufacturing facilities.</p><h3>Advanced Automation Capabilities</h3><p>The XL-2000 features a fully integrated automation system with intelligent control panel that provides real-time monitoring of all critical parameters.</p><p>Key features include:</p><ul><li>Programmable operating sequences with customizable presets</li><li>Automatic fault detection and diagnostic reporting</li><li>Remote monitoring via integrated IoT connectivity</li><li>Predictive maintenance alerts</li></ul><h3>Energy Efficiency</h3><p>With an exceptional energy efficiency rating of Class A++, the XL-2000 reduces energy consumption by up to 40% compared to traditional equipment. The low noise level of 65 dB ensures compliance with workplace safety regulations.</p><h3>Durability and Maintenance</h3><p>Designed for continuous operation in demanding environments, the XL-2000 features robust construction and modular design for easy maintenance access.</p><p>Maintenance highlights:</p><ul><li>Quick-access panels for major components</li><li>Tool-free access to frequently serviced parts</li><li>Comprehensive diagnostic system</li></ul>',
    shortDescription: 'State-of-the-art industrial machine with advanced automation and energy-saving technology',
    subtitle: 'Industrial Equipment • Manufacturing Solutions',
    image: {
        url: 'https://picsum.photos/1200/800',
        width: 1200,
        height: 800,
        alt: 'Premium Industrial Machine XL-2000',
    },
    images: [
        {
            url: 'https://picsum.photos/1200/800?random=1',
            alt: 'Industrial Machine Front View',
            width: 1200,
            height: 800,
        },
        {
            url: 'https://picsum.photos/1200/800?random=2',
            alt: 'Industrial Machine Side View',
            width: 1200,
            height: 800,
        },
        {
            url: 'https://picsum.photos/1200/800?random=3',
            alt: 'Industrial Machine Control Panel',
            width: 1200,
            height: 800,
        },
    ],
    price: {
        value: 125000,
        currency: 'USD',
    },
    link: '/products/PRD-015',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'New',
            variant: 'secondary',
        },
        {
            label: 'Bestseller',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '2024', icon: 'Calendar' },
        { value: 'New', icon: 'CheckCircle' },
        { value: 'Electric', icon: 'Fuel' },
        { value: 'Automatic', icon: 'Settings' },
    ],
    detailedSpecs: [
        { label: 'Engine Power', value: '150 kW' },
        { label: 'Max Speed', value: '2800 RPM' },
        { label: 'Operating Voltage', value: '380-480V' },
        { label: 'Dimensions', value: '2500 x 1800 x 2200 mm' },
        { label: 'Weight', value: '3500 kg' },
        { label: 'Energy Efficiency', value: 'Class A++' },
        { label: 'Noise Level', value: '65 dB' },
        { label: 'Operating Temperature', value: '-10°C to +40°C' },
        { label: 'Protection Rating', value: 'IP54' },
        { label: 'Certification', value: 'CE, ISO 9001' },
    ],
    location: 'Chicago, IL',
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
    MOCK_PRODUCT_11,
    MOCK_PRODUCT_12,
];

export const mapProduct = (id: string): Products.Model.Product => {
    const product = MOCK_PRODUCTS.find((product) => product.id === id);
    if (!product) {
        throw new Error(`Product with id ${id} not found`);
    }
    return product;
};

export const mapProducts = (options: Products.Request.GetProductListQuery): Products.Model.Products => {
    const { sort } = options;
    const filteredProducts = MOCK_PRODUCTS.filter((product) => {
        if (options.type && product.type !== options.type) {
            return false;
        }
        if (options.category && product.category !== options.category) {
            return false;
        }
        return true;
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
        data: data,
        total: data.length,
    };
};

export const mapRelatedProducts = (options: Products.Request.GetRelatedProductListParams): Products.Model.Products => {
    const { offset = 0, limit = 10, sort } = options;

    const products: Products.Model.Product[] = MOCK_PRODUCTS;

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
        data: data.slice(Number(offset), Number(offset) + Number(limit)),
        total: data.length,
    };
};
