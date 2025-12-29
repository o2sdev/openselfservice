import { Models } from '@o2s/framework/modules';

import { Models as FrontendModels } from '@o2s/utils.frontend';

import { CarouselProps } from '@o2s/ui/components/Carousel';

export interface ProductCarouselProps {
    products: ProductSummaryItem[];
    title?: string;
    variant?: 'personalized' | 'category-based';
    LinkComponent: FrontendModels.Link.LinkComponent;
    carouselConfig?: Partial<CarouselProps>;
    detailsLabel: string;
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
