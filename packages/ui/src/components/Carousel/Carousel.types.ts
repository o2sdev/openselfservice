import React from 'react';
import { SwiperProps } from 'swiper/react';

export interface CarouselProps extends Omit<SwiperProps, 'children'> {
    slides: React.ReactNode[];
    className?: string;
    showNavigation?: boolean;
    showPagination?: boolean;
    startingSlideIndex?: number;
    noSwipingSelector?: string;
}
