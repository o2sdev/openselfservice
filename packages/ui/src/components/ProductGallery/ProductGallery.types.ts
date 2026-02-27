import { SwiperProps } from 'swiper/react';

import { KeyboardControlMode } from '../Carousel/Carousel.types';

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
    keyboardControlMode?: KeyboardControlMode;
    defaultKeyboardActive?: boolean;
    keyboardCarouselId?: string;
}
