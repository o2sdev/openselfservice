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
        id: 'product-details-1',
        productId: 'PRD-015',
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
                '<p>The <strong>XL-2000</strong> is a state-of-the-art industrial machine designed for maximum efficiency and durability. With advanced automation features and energy-saving technology, this machine is perfect for modern manufacturing facilities.</p><h3>Advanced Automation Capabilities</h3><p>The XL-2000 features a fully integrated automation system with intelligent control panel that provides real-time monitoring of all critical parameters.</p><p>Key features include:</p><ul><li>Programmable operating sequences with customizable presets</li><li>Automatic fault detection and diagnostic reporting</li><li>Remote monitoring via integrated IoT connectivity</li><li>Predictive maintenance alerts</li></ul><h3>Energy Efficiency</h3><p>With an exceptional energy efficiency rating of Class A++, the XL-2000 reduces energy consumption by up to 40% compared to traditional equipment. The low noise level of 65 dB ensures compliance with workplace safety regulations.</p><h3>Durability and Maintenance</h3><p>Designed for continuous operation in demanding environments, the XL-2000 features robust construction and modular design for easy maintenance access.</p><p>Maintenance highlights:</p><ul><li>Quick-access panels for major components</li><li>Tool-free access to frequently serviced parts</li><li>Comprehensive diagnostic system</li></ul>',
            shortDescription:
                'State-of-the-art industrial machine with advanced automation and energy-saving technology',
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
        },
        actionButton: {
            label: 'Request Quote',
            href: 'https://example.com/products/xl-2000',
            variant: 'default',
            icon: 'MessageCircle',
        },
        labels: {
            specificationsTitle: 'Specifications',
            descriptionTitle: 'Description',
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
            href: 'https://example.com/products/xl-2000',
            variant: 'secondary',
            icon: 'ShoppingCart',
        },
    },
};

export const WithoutActionButton: Story = {
    args: {
        ...Default.args,
        actionButton: undefined,
    },
};
