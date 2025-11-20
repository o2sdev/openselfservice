'use client';

import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { A11y, Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { cn } from '@o2s/ui/lib/utils';

import { CarouselProps } from './Carousel.types';

export const Carousel: React.FC<Readonly<CarouselProps>> = ({
    slides,
    className,
    showNavigation = true,
    showPagination = true,
    modules = [],
    startingSlideIndex = 0,
    noSwipingSelector,
    ...swiperProps
}) => {
    const allModules = [
        A11y,
        Keyboard,
        ...(showNavigation ? [Navigation] : []),
        ...(showPagination ? [Pagination] : []),
        ...modules,
    ];

    return (
        <Swiper
            className={cn('w-full', className)}
            modules={allModules}
            keyboard={{ enabled: true, onlyInViewport: true }}
            navigation={showNavigation}
            pagination={showPagination ? { clickable: true } : false}
            initialSlide={startingSlideIndex}
            noSwipingSelector={noSwipingSelector}
            {...swiperProps}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>{slide}</SwiperSlide>
            ))}
        </Swiper>
    );
};
