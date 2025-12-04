import { Block } from '@/utils/models';

export class FeatureSectionGridBlock extends Block.Block {
    preTitle?: string;
    title?: string;
    description?: string;
    featureList?: FeatureItem[];
    inverted?: boolean;
    iconBorder?: boolean;
}

export class FeatureItem {
    title?: string;
    description?: string;
    icon?: string;
}
