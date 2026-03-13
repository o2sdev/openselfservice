import { CMS } from '@o2s/configs.integrations';

import { Models } from '@o2s/utils.api-harmonization';

export class FeatureSectionBlock extends Models.Block.Block {
    __typename!: 'FeatureSectionBlock';
    preTitle?: CMS.Model.FeatureSectionBlock.FeatureSectionBlock['preTitle'];
    title!: CMS.Model.FeatureSectionBlock.FeatureSectionBlock['title'];
    featureList!: CMS.Model.FeatureSectionBlock.FeatureSectionBlock['featureList'];
    inverted?: CMS.Model.FeatureSectionBlock.FeatureSectionBlock['inverted'];
    labels!: CMS.Model.FeatureSectionBlock.FeatureSectionBlock['labels'];
    image?: CMS.Model.FeatureSectionBlock.FeatureSectionBlock['image'];
    links?: CMS.Model.FeatureSectionBlock.FeatureSectionBlock['links'];
    description?: CMS.Model.FeatureSectionBlock.FeatureSectionBlock['description'];
    iconBorder?: CMS.Model.FeatureSectionBlock.FeatureSectionBlock['iconBorder'];
}
