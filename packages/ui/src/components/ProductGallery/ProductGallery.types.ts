import { SwiperProps } from 'swiper/react';

export interface ImageItem {
    url: string;
    alt: string;
}

export interface ProductGalleryProps extends Omit<SwiperProps, 'children'> {
    images: ImageItem[];
    className?: string;
    showNavigation?: boolean;
    showThumbnails?: boolean;
    showPagination?: boolean;
    speed?: number;
    shouldPreloadGallery?: boolean;
}
