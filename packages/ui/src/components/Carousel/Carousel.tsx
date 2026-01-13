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
    labels = {
        previous: 'Previous slide',
        next: 'Next slide',
    },
    ...swiperProps
}) => {
    const swiperRef = useRef<SwiperType | null>(null);

    const [index, setIndex] = useState(startingSlideIndex);
    const [isEnd, setIsEnd] = useState(false);
    const [loop, setLoop] = useState(swiperProps.loop ?? false);

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
                {...swiperProps}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onInit={(swiper) => {
                    const loopMode = swiperProps.loop ?? swiper.params.loop ?? false;
                    setLoop(loopMode);
                    setIndex(swiper.realIndex);
                    if (!loopMode) {
                        setIsEnd(swiper.isEnd);
                    }
                }}
                onSlideChange={(swiper) => {
                    setIndex(swiper.realIndex);
                    const loopMode = swiperProps.loop ?? swiper.params.loop ?? false;
                    if (!loopMode) {
                        setIsEnd(swiper.isEnd);
                    }
                }}
                keyboard={{ enabled: true, onlyInViewport: true }}
                navigation={false}
                pagination={showPagination ? { clickable: true } : false}
                initialSlide={startingSlideIndex}
                noSwipingSelector={noSwipingSelector}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="!h-auto">
                        {slide}
                    </SwiperSlide>
                ))}
            </Swiper>

            {showNavigation && (
                <div className="absolute z-10 left-0 right-0 top-2/4 -translate-y-8 flex items-center justify-between px-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                        disabled={index === 0 && !loop}
                        aria-label={labels.previous}
                        onClick={() => {
                            swiperRef.current?.slidePrev();
                        }}
                    >
                        <ArrowLeftIcon />
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                        disabled={isEnd && !loop}
                        aria-label={labels.next}
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
