import { CMS } from '@o2s/configs.integrations';

import { FeatureSectionGridBlock } from './feature-section-grid.model';

export const mapFeatureSectionGrid = (
    cms: CMS.Model.FeatureSectionGridBlock.FeatureSectionGridBlock,
    _locale: string,
): FeatureSectionGridBlock => {
    return {
        __typename: 'FeatureSectionGridBlock',
        id: cms.id,
        preTitle: cms.preTitle,
        title: cms.title,
        description: cms.description,
        featureList: cms.featureList,
        inverted: cms.inverted,
        iconBorder: cms.iconBorder,
    };
};
