'use client';

import React from 'react';

import { ProductCard } from '@o2s/ui/components/Cards/ProductCard';
import { Carousel } from '@o2s/ui/components/Carousel';

import { Typography } from '@o2s/ui/elements/typography';

import { ProductCarouselProps } from './ProductCarousel.types';

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
    products,
    title,
    LinkComponent,
    carouselConfig,
    detailsLabel,
}) => {
    if (!products || products.length === 0) {
        return null;
    }

    return (
        <div className="flex flex-col gap-6">
            {title && (
                <Typography variant="h2" asChild>
                    <h2>{title}</h2>
                </Typography>
            )}

            <Carousel
                slides={products.map((product) => (
                    <div key={product.id} className="h-full mb-12">
                        <ProductCard
                            title={product.name}
                            description={product.description}
                            price={product.price}
                            image={product.image}
                            tags={product.badges?.slice(0, 2)}
                            link={{
                                label: detailsLabel,
                                url: product.link,
                            }}
                            LinkComponent={LinkComponent}
                        />
                    </div>
                ))}
                slidesPerView={1}
                spaceBetween={16}
                showNavigation={true}
                showPagination={true}
                className="[&_.swiper-slide]:h-auto [&_.swiper-pagination]:bottom-0 [&_.swiper-pagination-bullet]:bg-primary [&_.swiper-pagination-bullet-active]:bg-primary [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet]:w-2.5 [&_.swiper-pagination-bullet]:h-2.5"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 16,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                }}
                {...carouselConfig}
            />
        </div>
    );
};
