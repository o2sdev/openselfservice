import { CMS } from '@o2s/configs.integrations';

import { HeroSectionBlock } from './hero-section.model';

export const mapHeroSection = (cms: CMS.Model.HeroSectionBlock.HeroSectionBlock, _locale: string): HeroSectionBlock => {
    return {
        __typename: 'HeroSectionBlock',
        id: cms.id,
        preTitle: cms.preTitle,
        title: cms.title,
        highlightedText: cms.highlightedText,
        subtitle: cms.subtitle,
        description: cms.description,
        image: cms.image,
        links: cms.links,
        headingType: cms.headingType,
        inverted: cms.inverted,
        labels: cms.labels,
    };
};
