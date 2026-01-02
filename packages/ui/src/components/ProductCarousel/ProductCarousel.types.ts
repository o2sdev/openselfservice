import { Models } from '@o2s/framework/modules';
import React from 'react';

import { Models as FrontendModels } from '@o2s/utils.frontend';

import { CarouselProps } from '@o2s/ui/components/Carousel';

export interface ProductCarouselProps {
    products: ProductSummaryItem[];
    title?: string;
    description?: Models.RichText.RichText;
    action?: React.ReactNode;
    LinkComponent: FrontendModels.Link.LinkComponent;
    carouselConfig?: Partial<CarouselProps>;
    linkDetailsLabel?: string;
    carouselClassName?: string;
}

export interface ProductSummaryItem {
    id: string;
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
