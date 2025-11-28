import { CMS } from '@o2s/configs.integrations';

import { FeatureSectionBlock } from './feature-section.model';

export const mapFeatureSection = (
    cms: CMS.Model.FeatureSectionBlock.FeatureSectionBlock,
    _locale: string,
): FeatureSectionBlock => {
    return {
        __typename: 'FeatureSectionBlock',
        id: cms.id,
        preTitle: cms.preTitle,
        title: cms.title,
        featureList: cms.featureList,
        description: cms.description,
        inverted: cms.inverted,
        labels: cms.labels,
        image: cms.image,
        links: cms.links,
        iconBorder: cms.iconBorder,
    };
};
