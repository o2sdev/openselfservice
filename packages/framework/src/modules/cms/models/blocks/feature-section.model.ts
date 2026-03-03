import { Block, Link, Media, RichText } from '@/utils/models';

/** CMS block configuration for feature section with media and links. */
export class FeatureSectionBlock extends Block.Block {
    preTitle?: string;
    title?: string;
    description?: RichText.RichText;
    featureList?: {
        title?: string;
        description?: RichText.RichText;
        icon?: string;
    }[];
    inverted?: boolean;
    image?: Media.Media;
    links?: Link.Link[];
    iconBorder?: boolean;
    labels!: {
        showMore: string;
    };
}
