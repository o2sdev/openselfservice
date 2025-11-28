import { CMS } from '@o2s/configs.integrations';

import { PricingSectionBlock } from './pricing-section.model';

export const mapPricingSection = (
    cms: CMS.Model.PricingSectionBlock.PricingSectionBlock,
    _locale: string,
): PricingSectionBlock => {
    return {
        __typename: 'PricingSectionBlock',
        id: cms.id,
        title: cms.title,
        subtitle: cms.subtitle,
        description: cms.description,
        headingType: cms.headingType,
        pricingList: cms.pricingList,
    };
};
