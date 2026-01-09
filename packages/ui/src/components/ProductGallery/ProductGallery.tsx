'use client';

import { X } from 'lucide-react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { A11y, Keyboard, Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { cn } from '@o2s/ui/lib/utils';

import { Image } from '@o2s/ui/components/Image';

import { ProductGalleryProps } from './ProductGallery.types';

export const ProductGallery: React.FC<Readonly<ProductGalleryProps>> = ({
    images,
    className,
    showNavigation = true,
    showThumbnails = true,
    showPagination = false,
    speed = 300,
    shouldPreloadGallery = false,
    ...swiperProps
}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [lightboxInitialSlide, setLightboxInitialSlide] = useState(0);
    const [lightboxThumbsSwiper, setLightboxThumbsSwiper] = useState<SwiperType | null>(null);
    const [lightboxMainSwiper, setLightboxMainSwiper] = useState<SwiperType | null>(null);

    const mainModules = useMemo(
        () => [
            A11y,
            Keyboard,
            ...(showNavigation ? [Navigation] : []),
            ...(showPagination ? [Pagination] : []),
            Thumbs,
        ],
        [showNavigation, showPagination],
    );

    const handleThumbnailHover = (index: number, swiperInstance: SwiperType | null) => {
        swiperInstance?.slideToLoop(index, 0);
    };

    const handleOpenLightbox = useCallback(() => {
        if (mainSwiper) {
            setLightboxInitialSlide(mainSwiper.realIndex);
        }
        setIsLightboxOpen(true);
    }, [mainSwiper]);

    const handleCloseLightbox = useCallback(() => {
        setIsLightboxOpen(false);
    }, []);

    // Handle ESC key to close lightbox
    useEffect(() => {
        if (!isLightboxOpen) return;

        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleCloseLightbox();
            }
        };

        document.addEventListener('keydown', handleEscKey);
        // Prevent body scroll when lightbox is open
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscKey);
            document.body.style.overflow = '';
        };
    }, [isLightboxOpen, handleCloseLightbox]);

    // Return null if no images
    if (!images || images.length === 0) {
        return null;
    }

    return (
        <div className={cn('w-full flex flex-col gap-2', className)}>
            {/* Main Gallery */}
            <div className="group relative">
                <Swiper
                    className={cn(
                        'w-full rounded-lg overflow-hidden',
                        showNavigation &&
                            showThumbnails &&
                            '[&_.swiper-button-next]:opacity-0 [&_.swiper-button-prev]:opacity-0 [&_.swiper-button-next]:transition-opacity [&_.swiper-button-prev]:transition-opacity group-hover:[&_.swiper-button-next]:opacity-100 group-hover:[&_.swiper-button-prev]:opacity-100',
                    )}
                    modules={mainModules}
                    keyboard={{ enabled: true, onlyInViewport: true }}
                    navigation={showNavigation}
                    pagination={showPagination ? { clickable: true } : false}
                    speed={speed}
                    loop={true}
                    thumbs={{
                        swiper: showThumbnails && thumbsSwiper && !thumbsSwiper?.destroyed ? thumbsSwiper : null,
                    }}
                    onSwiper={setMainSwiper}
                    {...swiperProps}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="relative w-full h-[400px] md:h-[500px] cursor-pointer"
                                onClick={handleOpenLightbox}
                            >
                                <Image
                                    src={image.url}
                                    alt={image.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 1200px"
                                    preload={shouldPreloadGallery && index === 0}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Thumbnail Gallery */}
            {showThumbnails && images.length > 1 && (
                <div className="flex justify-center">
                    <Swiper
                        modules={[Thumbs]}
                        onSwiper={setThumbsSwiper}
                        watchSlidesProgress
                        spaceBetween={8}
                        slidesPerView="auto"
                        freeMode
                    >
                        {images.map((image, index) => (
                            <SwiperSlide
                                key={index}
                                className="w-auto! border-b-2 border-transparent [&.swiper-slide-thumb-active]:border-primary"
                            >
                                <div
                                    className="relative w-[60px] h-[60px] md:w-[80px] md:h-[80px] cursor-pointer"
                                    onMouseEnter={() => handleThumbnailHover(index, mainSwiper)}
                                    onClick={handleOpenLightbox}
                                >
                                    <Image
                                        src={image.url}
                                        alt={image.alt}
                                        fill
                                        className="object-cover"
                                        sizes="100px"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}

            {/* Fullscreen Lightbox */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center"
                    onClick={handleCloseLightbox}
                >
                    {/* Close Button */}
                    <button
                        onClick={handleCloseLightbox}
                        className="absolute top-4 right-4 z-50 p-2"
                        aria-label="Close lightbox"
                    >
                        <X className="h-6 w-6" />
                    </button>

                    {/* Lightbox Content */}
                    <div className="w-full max-w-7xl flex flex-col gap-4 p-4" onClick={(e) => e.stopPropagation()}>
                        {/* Lightbox Main Gallery */}
                        <Swiper
                            className="w-full"
                            modules={mainModules}
                            keyboard={{ enabled: true, onlyInViewport: true }}
                            navigation={showNavigation}
                            speed={speed}
                            loop={true}
                            initialSlide={lightboxInitialSlide}
                            onSwiper={setLightboxMainSwiper}
                            thumbs={{
                                swiper:
                                    lightboxThumbsSwiper && !lightboxThumbsSwiper?.destroyed
                                        ? lightboxThumbsSwiper
                                        : null,
                            }}
                        >
                            {images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative w-full h-[60vh] md:h-[70vh]">
                                        <Image
                                            src={image.url}
                                            alt={image.alt}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 100vw, 1400px"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Lightbox Thumbnails */}
                        {images.length > 1 && (
                            <div className="flex justify-center">
                                <Swiper
                                    modules={[Thumbs]}
                                    onSwiper={setLightboxThumbsSwiper}
                                    watchSlidesProgress
                                    spaceBetween={8}
                                    slidesPerView="auto"
                                    freeMode
                                >
                                    {images.map((image, index) => (
                                        <SwiperSlide
                                            key={index}
                                            className="w-auto! border-b-2 border-transparent [&.swiper-slide-thumb-active]:border-primary"
                                        >
                                            <div
                                                className="relative w-[60px] h-[60px] md:w-[80px] md:h-[80px] cursor-pointer"
                                                onMouseEnter={() => handleThumbnailHover(index, lightboxMainSwiper)}
                                            >
                                                <Image
                                                    src={image.url}
                                                    alt={image.alt}
                                                    fill
                                                    className="object-cover"
                                                    sizes="80px"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
