import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ProductDetailsPure } from './ProductDetails.client';

const meta = {
    title: 'Blocks/ProductDetails',
    component: ProductDetailsPure,
} satisfies Meta<typeof ProductDetailsPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        __typename: 'ProductDetailsBlock',
        id: 'PRD-015',
        locale: 'en',
        routing: {
            locales: ['en', 'pl'],
            defaultLocale: 'en',
            pathnames: {
                '/products/[id]': {
                    en: '/products/[id]',
                    pl: '/produkty/[id]',
                },
            },
        },
        product: {
            id: 'PRD-015',
            sku: 'PREMIUM-XL-2000',
            name: 'Premium Industrial Machine XL-2000',
            description:
                '<p>The <strong>XL-2000</strong> is a state-of-the-art industrial machine designed for maximum efficiency and durability. With advanced automation features and energy-saving technology, this machine is perfect for modern manufacturing facilities.</p><p>Key highlights include precision engineering, easy maintenance access, and compliance with international safety standards.</p>',
            shortDescription:
                'State-of-the-art industrial machine with advanced automation and energy-saving technology',
            subtitle: 'Industrial Equipment • Manufacturing Solutions',
            image: {
                url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200',
                width: 1200,
                height: 800,
                alt: 'Premium Industrial Machine XL-2000',
            },
            images: [
                {
                    url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200',
                    alt: 'Industrial Machine Front View',
                    width: 1200,
                    height: 800,
                },
                {
                    url: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200',
                    alt: 'Industrial Machine Side View',
                    width: 1200,
                    height: 800,
                },
                {
                    url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200',
                    alt: 'Industrial Machine Control Panel',
                    width: 1200,
                    height: 800,
                },
            ],
            price: {
                value: 125000,
                currency: 'USD',
            },
            link: 'https://example.com/products/xl-2000',
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
            badges: [
                { label: 'New', variant: 'secondary' },
                { label: 'Bestseller', variant: 'default' },
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
            equipment: [
                'Advanced touch-screen control panel',
                'Automated safety shutdown system',
                'Emergency stop button',
                'LED task lighting',
                'Vibration dampening system',
                'Remote monitoring capability',
                'Preventive maintenance alerts',
                'Tool storage compartment',
                'Adjustable work height',
                'Energy consumption meter',
            ],
            location: 'Chicago, IL',
            offerNumber: 'OF-2024-XL2000-001',
        },
        popularOffers: [
            {
                id: 'PRD-005',
                name: 'Cordless Angle Grinder',
                description: 'Cordless angle grinder with 22V battery platform',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-charger.jpg',
                    alt: 'Cordless Angle Grinder',
                    width: 640,
                    height: 656,
                },
                price: {
                    value: 199.99,
                    currency: 'USD',
                },
                link: 'https://example.com/products/ag-125-a22',
                badges: [
                    { label: 'New', variant: 'secondary' },
                    { label: 'Promo', variant: 'destructive' },
                ],
            },
            {
                id: 'PRD-006',
                name: 'Laser Measurement',
                description: 'Laser measurement device for distance measurements',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
                    alt: 'Laser Measurement',
                    width: 640,
                    height: 656,
                },
                price: {
                    value: 100,
                    currency: 'USD',
                },
                link: 'https://example.com/products/pd-s',
                badges: [{ label: 'New', variant: 'secondary' }],
            },
            {
                id: 'PRD-007',
                name: 'Cordless Drill Driver',
                description: 'Cordless drill driver with 22V battery platform',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
                    alt: 'Cordless Drill Driver',
                    width: 640,
                    height: 656,
                },
                price: {
                    value: 100,
                    currency: 'USD',
                },
                link: 'https://example.com/products/sfc-22-a',
                badges: [{ label: 'New', variant: 'secondary' }],
            },
        ],
        actionButton: {
            label: 'Request Quote',
            variant: 'default',
            icon: 'MessageCircle',
            onClick: () => {
                console.log('Action button clicked');
            },
        },
        labels: {
            equipmentTitle: 'Equipment',
            specificationsTitle: 'Specifications',
            descriptionTitle: 'Description',
            recommendedOffersTitle: 'You Might Also Like',
            downloadLabel: 'Download Brochure',
        },
        hasPriority: false,
    },
};

export const WithDiscount: Story = {
    args: {
        ...Default.args,
        id: 'PRD-010',
        product: {
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
            images: [
                {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-calibration.jpg',
                    alt: 'PrecisionPro Calibration™ – Ensuring Accuracy for Industrial Equipment',
                    width: 640,
                    height: 656,
                },
            ],
            price: {
                value: 19.99,
                currency: 'USD',
            },
            link: 'https://example.com/services/training',
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
            badges: [
                { label: 'Promo', variant: 'destructive' },
                { label: 'New', variant: 'secondary' },
            ],
        },
        popularOffers: undefined,
    },
};

export const PolishLocale: Story = {
    args: {
        ...Default.args,
        locale: 'pl',
        routing: {
            locales: ['en', 'pl'],
            defaultLocale: 'pl',
            pathnames: {
                '/products/[id]': {
                    en: '/products/[id]',
                    pl: '/produkty/[id]',
                },
            },
        },
        product: {
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
            images: [
                {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
                    alt: 'Rotary Hammer',
                    width: 640,
                    height: 656,
                },
            ],
            price: {
                value: 100,
                currency: 'USD',
            },
            link: 'https://example.com/products/te-70-atc-avr',
            type: 'PHYSICAL',
            category: 'TOOLS',
            tags: [
                {
                    label: 'New',
                    variant: 'secondary',
                },
            ],
            badges: [{ label: 'New', variant: 'secondary' }],
            keySpecs: [],
            detailedSpecs: [],
            equipment: [],
        },
        popularOffers: [
            {
                id: 'PRD-005',
                name: 'Cordless Angle Grinder',
                description: 'Cordless angle grinder with 22V battery platform',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-charger.jpg',
                    alt: 'Cordless Angle Grinder',
                    width: 640,
                    height: 656,
                },
                price: {
                    value: 199.99,
                    currency: 'USD',
                },
                link: 'https://example.com/products/ag-125-a22',
                badges: [
                    { label: 'New', variant: 'secondary' },
                    { label: 'Promo', variant: 'destructive' },
                ],
            },
            {
                id: 'PRD-006',
                name: 'Laser Measurement',
                description: 'Laser measurement device for distance measurements',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
                    alt: 'Laser Measurement',
                    width: 640,
                    height: 656,
                },
                price: {
                    value: 100,
                    currency: 'USD',
                },
                link: 'https://example.com/products/pd-s',
                badges: [{ label: 'New', variant: 'secondary' }],
            },
        ],
        actionButton: {
            label: 'Zapytaj o ofertę',
            variant: 'default',
            icon: 'MessageCircle',
            onClick: () => {
                console.log('Przycisk akcji kliknięty');
            },
        },
        labels: {
            equipmentTitle: 'Wyposażenie',
            specificationsTitle: 'Specyfikacja',
            descriptionTitle: 'Opis',
            recommendedOffersTitle: 'Popularne oferty',
            downloadLabel: 'Pobierz broszurę',
        },
    },
};

export const WithoutPopularOffers: Story = {
    args: {
        ...Default.args,
        popularOffers: undefined,
    },
};

export const MinimalProduct: Story = {
    args: {
        ...Default.args,
        id: 'PRD-012',
        product: {
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
            images: [
                {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-welding.jpg',
                    alt: 'WeldGuard Safety™ – Protective Solutions for Welding Environments',
                    width: 640,
                    height: 656,
                },
            ],
            price: {
                value: 10,
                currency: 'USD',
            },
            link: 'https://example.com/services/weldguard-safety',
            type: 'VIRTUAL',
            category: 'SAFETY',
            tags: [
                {
                    label: 'New',
                    variant: 'secondary',
                },
            ],
            badges: [{ label: 'New', variant: 'secondary' }],
            keySpecs: [],
            detailedSpecs: [],
            equipment: [],
        },
        popularOffers: undefined,
    },
};

export const WithLinkButton: Story = {
    args: {
        ...Default.args,
        actionButton: {
            label: 'View More Details',
            variant: 'default',
            icon: 'ExternalLink',
            href: '/products/PRD-004/details',
        },
    },
};

export const WithSecondaryButton: Story = {
    args: {
        ...Default.args,
        actionButton: {
            label: 'Add to Cart',
            variant: 'secondary',
            icon: 'ShoppingCart',
            onClick: () => {
                console.log('Add to cart clicked');
            },
        },
    },
};

export const WithoutActionButton: Story = {
    args: {
        ...Default.args,
        actionButton: undefined,
    },
};
