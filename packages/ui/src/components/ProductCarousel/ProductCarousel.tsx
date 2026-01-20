'use client';

import React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { ProductCard } from '@o2s/ui/components/Cards/ProductCard';
import { Carousel } from '@o2s/ui/components/Carousel';
import { RichText } from '@o2s/ui/components/RichText';

import { Typography } from '@o2s/ui/elements/typography';

import { ProductCarouselProps } from './ProductCarousel.types';

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
    products,
    title,
    description,
    action,
    LinkComponent,
    carouselConfig,
    linkDetailsLabel,
    carouselClassName,
}) => {
    if (!products || products.length === 0) {
        return null;
    }

    return (
        <div className="flex flex-col gap-6">
            {/* Header section */}
            {(title || description || action) && (
                <div className="flex flex-col sm:flex-row w-full sm:items-end justify-between gap-4">
                    {(title || description) && (
                        <div className="flex flex-col gap-2">
                            {title && <Typography variant="h2">{title}</Typography>}
                            {description && <RichText content={description} />}
                        </div>
                    )}
                    {action}
                </div>
            )}

            {/* Carousel */}
            <Carousel
                slides={products.map((product) => (
                    <div key={product.id} className="flex h-full pb-12">
                        <ProductCard
                            title={product.name}
                            description={product.description}
                            price={product.price}
                            image={product.image}
                            tags={product.badges?.slice(0, 2)}
                            link={
                                linkDetailsLabel
                                    ? {
                                          label: linkDetailsLabel,
                                          url: product.link,
                                      }
                                    : undefined
                            }
                            LinkComponent={LinkComponent}
                        />
                    </div>
                ))}
                slidesPerView={1}
                spaceBetween={16}
                showNavigation={true}
                showPagination={true}
                className={cn(
                    '[&_.swiper-wrapper]:flex! [&_.swiper-wrapper]:items-stretch! [&_.swiper-slide]:h-auto! [&_.swiper-pagination]:bottom-0 [&_.swiper-pagination-bullet]:bg-primary [&_.swiper-pagination-bullet-active]:bg-primary [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet]:w-2.5 [&_.swiper-pagination-bullet]:h-2.5',
                    carouselClassName,
                )}
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
