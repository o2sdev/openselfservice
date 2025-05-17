import { VariantProps } from 'class-variance-authority';

import { Models } from '@o2s/framework/modules';

import { badgeVariants } from '@o2s/ui/components/badge';

export interface ProductCardProps {
    title: string;
    description?: Models.RichText.RichText;
    price?: Models.Price.Price;
    tags?: Badge[];
    status?: Badge;
    link?: {
        label: string;
        url: string;
    };
    image: Models.Media.Media;
}

export interface Badge {
    label: string;
    variant: VariantProps<typeof badgeVariants>['variant'];
}
