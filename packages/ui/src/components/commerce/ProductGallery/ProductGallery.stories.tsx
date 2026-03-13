import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ProductGallery } from './ProductGallery';
import { ImageItem } from './ProductGallery.types';

const meta = {
    title: 'Components/ProductGallery',
    component: ProductGallery,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof ProductGallery>;

export default meta;

type Story = StoryObj<typeof meta>;

// Sample image content (similar to Carousel's SampleSlide)
const colors = ['4F46E5', '7C3AED', 'EC4899', 'F59E0B', '10B981', '3B82F6', 'EF4444', '8B5CF6'];

const createSampleImage = (number: number): ImageItem => {
    const color = colors[(number - 1) % colors.length];
    return {
        url: `https://placehold.co/800x600/${color}/white?text=Image+${number}`,
        alt: `Image ${number}`,
    };
};

// Sample product images
const fourImages: ImageItem[] = [
    createSampleImage(1),
    createSampleImage(2),
    createSampleImage(3),
    createSampleImage(4),
];

const singleImage: ImageItem[] = [createSampleImage(1)];

const manyImages: ImageItem[] = [
    createSampleImage(1),
    createSampleImage(2),
    createSampleImage(3),
    createSampleImage(4),
    createSampleImage(5),
    createSampleImage(6),
    createSampleImage(7),
    createSampleImage(8),
];

/**
 * Default gallery with thumbnails and navigation.
 * Click main image to open fullscreen lightbox.
 * Hover thumbnails for preview.
 */
export const Default: Story = {
    args: {
        images: fourImages,
        showNavigation: true,
    },
};

/**
 * Gallery with many images (8+ items).
 * Tests thumbnail scrolling and lightbox with multiple images.
 */
export const ManyImages: Story = {
    args: {
        images: manyImages,
        showNavigation: true,
    },
};

/**
 * Gallery without thumbnails.
 * Shows pagination dots and always-visible navigation arrows.
 */
export const WithoutThumbnails: Story = {
    args: {
        images: fourImages,
        showNavigation: true,
        showThumbnails: false,
        showPagination: true,
    },
};

/**
 * Single image gallery.
 * No thumbnails or pagination needed.
 */
export const SingleImage: Story = {
    args: {
        images: singleImage,
        showNavigation: false,
    },
};
