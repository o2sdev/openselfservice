import { CMS } from '@o2s/configs.integrations';

import { BentoGridBlock } from './bento-grid.model';

export const mapBentoGrid = (cms: CMS.Model.BentoGridBlock.BentoGridBlock, _locale: string): BentoGridBlock => {
    return {
        __typename: 'BentoGridBlock',
        id: cms.id,
        preTitle: cms.preTitle,
        title: cms.title,
        description: cms.description,
        items: cms.items,
    };
};
