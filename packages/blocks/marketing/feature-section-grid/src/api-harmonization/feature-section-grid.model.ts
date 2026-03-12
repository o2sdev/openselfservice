import { CMS } from '@o2s/configs.integrations';

import { Models } from '@o2s/utils.api-harmonization';

export class FeatureSectionGridBlock extends Models.Block.Block {
    __typename!: 'FeatureSectionGridBlock';
    preTitle?: CMS.Model.FeatureSectionGridBlock.FeatureSectionGridBlock['preTitle'];
    title!: CMS.Model.FeatureSectionGridBlock.FeatureSectionGridBlock['title'];
    description?: CMS.Model.FeatureSectionGridBlock.FeatureSectionGridBlock['description'];
    featureList!: CMS.Model.FeatureSectionGridBlock.FeatureSectionGridBlock['featureList'];
    inverted?: CMS.Model.FeatureSectionGridBlock.FeatureSectionGridBlock['inverted'];
    iconBorder?: CMS.Model.FeatureSectionGridBlock.FeatureSectionGridBlock['iconBorder'];
}
