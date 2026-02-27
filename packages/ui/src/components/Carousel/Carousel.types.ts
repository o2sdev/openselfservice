import React from 'react';
import { SwiperProps } from 'swiper/react';

export type KeyboardControlMode = 'swiper-native' | 'managed' | 'off';

export interface CarouselProps extends Omit<SwiperProps, 'children'> {
    slides: React.ReactNode[];
    className?: string;
    showNavigation?: boolean;
    showPagination?: boolean;
    startingSlideIndex?: number;
    noSwipingSelector?: string;
    keyboardControlMode?: KeyboardControlMode;
    defaultKeyboardActive?: boolean;
    keyboardCarouselId?: string;
    labels?: {
        previous?: string;
        next?: string;
    };
}
