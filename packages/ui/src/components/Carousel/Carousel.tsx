'use client';

import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { A11y, Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { cn } from '@o2s/ui/lib/utils';

import { Button } from '@o2s/ui/elements/button';

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
    const swiperRef = useRef<SwiperType>(null);

    const [index, setIndex] = useState(startingSlideIndex);
    const [isEnd, setIsEnd] = useState(false);

    const allModules = [
        A11y,
        Keyboard,
        ...(showNavigation ? [Navigation] : []),
        ...(showPagination ? [Pagination] : []),
        ...modules,
    ];

    return (
        <div className="relative">
            <Swiper
                className={cn('w-full', className)}
                modules={allModules}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onInit={(swiper) => {
                    setIndex(swiper.realIndex);
                    setIsEnd(swiper.isEnd);
                }}
                onSlideChange={(swiper) => {
                    setIndex(swiper.realIndex);
                    setIsEnd(swiper.isEnd);
                }}
                keyboard={{ enabled: true, onlyInViewport: true }}
                navigation={false}
                pagination={showPagination ? { clickable: true } : false}
                initialSlide={startingSlideIndex}
                noSwipingSelector={noSwipingSelector}
                {...swiperProps}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="!h-auto">
                        {slide}
                    </SwiperSlide>
                ))}
            </Swiper>

            {showNavigation && (
                <div className="flex items-center gap-8 lg:justify-start justify-center">
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full absolute z-10 top-2/4 !-translate-y-8 -left-5"
                        disabled={index === 0}
                        onClick={() => {
                            swiperRef.current?.slidePrev();
                        }}
                    >
                        <ArrowLeftIcon />
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full absolute z-10 top-2/4 !-translate-y-8 -right-5"
                        disabled={isEnd}
                        onClick={() => {
                            swiperRef.current?.slideNext();
                        }}
                    >
                        <ArrowRightIcon />
                    </Button>
                </div>
            )}
        </div>
    );
};
