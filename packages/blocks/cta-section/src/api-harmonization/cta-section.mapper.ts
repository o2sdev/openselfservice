import { CMS } from '@o2s/configs.integrations';

import { CtaSectionBlock } from './cta-section.model';

export const mapCtaSection = (cms: CMS.Model.CtaSectionBlock.CtaSectionBlock, _locale: string): CtaSectionBlock => {
    return {
        __typename: 'CtaSectionBlock',
        id: cms.id,
        preTitle: cms.preTitle,
        title: cms.title,
        description: cms.description,
        inverted: cms.inverted,
        labels: cms.labels,
        image: cms.image,
        links: cms.links,
    };
};
