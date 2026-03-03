import { Block } from '@/utils/models';

/** CMS block configuration for grid-based feature section. */
export class FeatureSectionGridBlock extends Block.Block {
    preTitle?: string;
    title?: string;
    description?: string;
    featureList?: FeatureItem[];
    inverted?: boolean;
    iconBorder?: boolean;
}

/** Single feature item rendered in feature grid block. */
export class FeatureItem {
    title?: string;
    description?: string;
    icon?: string;
}
