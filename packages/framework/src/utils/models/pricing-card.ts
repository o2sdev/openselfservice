import { Badge, FeatureItem, Link, Media, Price } from '@/utils/models';

export class PricingCard {
    title!: string;
    image?: Media.Media;
    description?: string;
    price?: Price.Price;
    isPromoted?: boolean;
    tags?: Badge.Badge[];
    links?: Link.Link[];
    featureListTitle?: string;
    featureList?: FeatureItem.FeatureItem[];
}
