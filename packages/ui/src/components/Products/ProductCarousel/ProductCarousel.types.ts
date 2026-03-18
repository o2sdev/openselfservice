import { Models } from '@o2s/framework/modules';
import React from 'react';

import { Models as FrontendModels } from '@o2s/utils.frontend';

import { CarouselProps } from '@o2s/ui/components/Media/Carousel';

export interface ProductCarouselProps {
    products: ProductSummaryItem[];
    title?: string;
    description?: Models.RichText.RichText;
    action?: React.ReactNode;
    LinkComponent: FrontendModels.Link.LinkComponent;
    carouselConfig?: Partial<CarouselProps>;
    addToCartLabel?: string;
    onAddToCart?: (sku: string, currency: Models.Price.Currency, variantId?: string) => void;
    isAddingToCart?: boolean;
    carouselClassName?: string;
    keyboardControlMode?: CarouselProps['keyboardControlMode'];
    keyboardCarouselId?: string;
}

export interface ProductSummaryItem {
    id: string;
    sku: string;
    variantId?: string;
    name: string;
    description?: Models.RichText.RichText;
    image?: Models.Media.Media;
    price?: Models.Price.Price;
    link: string;
    badges?: ProductBadge[];
}

export interface ProductBadge {
    label: string;
    variant: 'default' | 'secondary' | 'destructive' | 'outline';
}
