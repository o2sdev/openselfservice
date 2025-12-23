'use client';

import { createNavigation } from 'next-intl/navigation';
import React from 'react';

import { Carousel } from '@o2s/ui/components/Carousel';
import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';
import { Image } from '@o2s/ui/components/Image';
import { Price } from '@o2s/ui/components/Price';
import { RichText } from '@o2s/ui/components/RichText';

import { Badge } from '@o2s/ui/elements/badge';
import { Button } from '@o2s/ui/elements/button';
import { Separator } from '@o2s/ui/elements/separator';
import { Typography } from '@o2s/ui/elements/typography';

import { ProductDetailsPureProps } from './ProductDetails.types';

export const ProductDetailsPure: React.FC<ProductDetailsPureProps> = ({
    locale,
    routing,
    hasPriority,
    ...component
}) => {
    const { Link: LinkComponent } = createNavigation(routing);
    const { product, popularOffers, labels, actionButton } = component;

    // Image carousel slides
    const carouselSlides = product.images.map((image, index) => (
        <div key={index} className="relative w-full h-[400px] md:h-[500px]">
            <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority={hasPriority && index === 0}
            />
        </div>
    ));

    // Key specs from product data
    const keySpecs = product.keySpecs ?? [];

    return (
        <div className="w-full flex flex-col gap-8 md:gap-12">
            {/* Product Header & Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Product Info */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    {/* Image Carousel */}
                    <div className="w-full">
                        <Carousel
                            slides={carouselSlides}
                            showNavigation={true}
                            showPagination={true}
                            className="rounded-lg overflow-hidden"
                        />
                    </div>
                    {/* Title & Badges (visible on mobile, hidden on desktop) */}
                    <div className="flex flex-col gap-4 lg:hidden">
                        <Typography variant="h1" asChild>
                            <h1>{product.name}</h1>
                        </Typography>
                        {product.subtitle && (
                            <Typography variant="large" className="text-muted-foreground">
                                {product.subtitle}
                            </Typography>
                        )}

                        {/* Badges */}
                        {product.badges && product.badges.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {product.badges.map((badge, index) => (
                                    <Badge key={index} variant={badge.variant}>
                                        {badge.label}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </div>

                    <Separator className="lg:hidden" />

                    {/* Key Specs Icons */}
                    {keySpecs.length > 0 && (
                        <>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {keySpecs.map((spec, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center gap-2 p-4 bg-muted/50 rounded-lg"
                                    >
                                        {spec.icon && (
                                            <DynamicIcon name={spec.icon} size={32} className="text-primary" />
                                        )}
                                        {spec.value && (
                                            <Typography className="text-center font-medium">{spec.value}</Typography>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <Separator />
                        </>
                    )}

                    {/* Description */}
                    {product.description && (
                        <div className="flex flex-col gap-4">
                            <Typography variant="h2" asChild>
                                <h2>{labels.descriptionTitle}</h2>
                            </Typography>
                            <RichText content={product.description} />
                        </div>
                    )}

                    {/* Equipment List */}
                    {((product.equipment && product.equipment.length > 0) || product.equipmentHtml) && (
                        <div className="flex flex-col gap-4">
                            <Typography variant="h2" asChild>
                                <h2>{labels.equipmentTitle}</h2>
                            </Typography>

                            {/* Option 1: Array of strings */}
                            {product.equipment && product.equipment.length > 0 && !product.equipmentHtml && (
                                <ul className="columns-1 md:columns-2 gap-x-6 space-y-2">
                                    {product.equipment.map((item, index) => (
                                        <li key={index} className="flex items-start gap-2 break-inside-avoid">
                                            <DynamicIcon
                                                name="Check"
                                                size={20}
                                                className="text-primary shrink-0 mt-0.5"
                                            />
                                            <Typography>{item}</Typography>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Option 2: HTML from CMS */}
                            {product.equipmentHtml && (
                                <div className="columns-1 md:columns-2 gap-x-6">
                                    <RichText content={product.equipmentHtml} />
                                </div>
                            )}
                        </div>
                    )}

                    <Separator />

                    {/* Detailed Specifications Grid */}
                    {product.detailedSpecs && product.detailedSpecs.length > 0 && (
                        <div className="flex flex-col gap-4">
                            <Typography variant="h2" asChild>
                                <h2>{labels.specificationsTitle}</h2>
                            </Typography>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {product.detailedSpecs.map((spec, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center py-3 px-4 bg-muted/30 rounded-md"
                                    >
                                        <Typography className="text-muted-foreground">{spec.label}</Typography>
                                        <Typography className="font-medium">{spec.value}</Typography>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Metadata */}
                    {(product.offerNumber || product.location) && (
                        <>
                            <Separator />
                            <div className="flex items-center gap-6 flex-wrap">
                                {product.offerNumber && (
                                    <div className="flex items-center gap-2">
                                        <DynamicIcon name="FileText" size={20} className="text-muted-foreground" />
                                        <Typography>Offer: {product.offerNumber}</Typography>
                                    </div>
                                )}
                                {product.location && (
                                    <div className="flex items-center gap-2">
                                        <DynamicIcon name="MapPin" size={20} className="text-muted-foreground" />
                                        <Typography>{product.location}</Typography>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>

                {/* Right Column: Title, Badges, Price & CTA */}
                <div className="hidden lg:block lg:col-span-1">
                    <div className="sticky top-6 flex flex-col gap-4 p-6 bg-card rounded-lg border border-border">
                        {/* Title (visible on desktop only) */}
                        <div className="hidden lg:flex flex-col gap-2">
                            <Typography variant="h1" asChild>
                                <h1>{product.name}</h1>
                            </Typography>
                            {product.subtitle && (
                                <Typography variant="large" className="text-muted-foreground">
                                    {product.subtitle}
                                </Typography>
                            )}
                        </div>

                        {/* Badges (visible on desktop only) */}
                        {product.badges && product.badges.length > 0 && (
                            <div className="hidden lg:flex flex-wrap gap-2">
                                {product.badges.map((badge, index) => (
                                    <Badge key={index} variant={badge.variant}>
                                        {badge.label}
                                    </Badge>
                                ))}
                            </div>
                        )}

                        {/* Price */}
                        <div className="flex flex-col gap-1 items-end">
                            <Typography className="text-muted-foreground">Price</Typography>
                            <Typography variant="h2" className="text-primary whitespace-nowrap">
                                <Price price={product.price} />
                            </Typography>
                        </div>

                        {/* CTA Button */}
                        {actionButton && (
                            <>
                                <Separator />
                                <div className="flex flex-col gap-3">
                                    {actionButton.href ? (
                                        <Button
                                            variant={actionButton.variant || 'default'}
                                            size="lg"
                                            className="w-full"
                                            asChild
                                        >
                                            <LinkComponent href={actionButton.href}>
                                                {actionButton.icon && (
                                                    <DynamicIcon name={actionButton.icon} size={20} className="mr-2" />
                                                )}
                                                {actionButton.label}
                                            </LinkComponent>
                                        </Button>
                                    ) : (
                                        <Button
                                            variant={actionButton.variant || 'default'}
                                            size="lg"
                                            className="w-full"
                                            onClick={actionButton.onClick}
                                        >
                                            {actionButton.icon && (
                                                <DynamicIcon name={actionButton.icon} size={20} className="mr-2" />
                                            )}
                                            {actionButton.label}
                                        </Button>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Popular Offers Section */}
            {popularOffers && popularOffers.length > 0 && (
                <>
                    <Separator className="my-4" />
                    <div className="flex flex-col gap-6">
                        <Typography variant="h2" asChild>
                            <h2>{labels.recommendedOffersTitle}</h2>
                        </Typography>

                        <h3>TODO: Recommended products</h3>
                    </div>
                </>
            )}

            {/* Mobile Sticky CTA Footer */}
            {actionButton && (
                <>
                    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 shadow-lg z-50">
                        <div className="flex flex-col gap-2 max-w-7xl ml-auto mr-4">
                            <div className="flex items-center justify-end gap-2 mb-2">
                                <Typography className="text-muted-foreground">Price</Typography>
                                <Typography variant="large" className="font-bold text-primary">
                                    <Price price={product.price} />
                                </Typography>
                            </div>
                            {actionButton.href ? (
                                <Button
                                    variant={actionButton.variant || 'default'}
                                    size="default"
                                    className="w-full"
                                    asChild
                                >
                                    <LinkComponent href={actionButton.href}>{actionButton.label}</LinkComponent>
                                </Button>
                            ) : (
                                <Button
                                    variant={actionButton.variant || 'default'}
                                    size="default"
                                    className="w-full"
                                    onClick={actionButton.onClick}
                                >
                                    {actionButton.label}
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* Spacer for mobile sticky footer */}
                    <div className="lg:hidden h-32" />
                </>
            )}
        </div>
    );
};
