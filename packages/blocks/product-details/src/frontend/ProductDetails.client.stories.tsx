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
            {
                id: 'PRD-008',
                name: 'Professional Calibration',
                description: 'Professional calibration service for industrial equipment',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/services-charger.jpg',
                    alt: 'Professional Calibration Service',
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
            specificationsTitle: 'Specifications',
            descriptionTitle: 'Description',
            recommendedOffersTitle: 'You Might Also Like',
            recommendedOffersDetailsLabel: 'Details',
            downloadLabel: 'Download Brochure',
            priceLabel: 'Price',
            offerLabel: 'Offer',
        },
        hasPriority: false,
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
