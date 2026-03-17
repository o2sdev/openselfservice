import { CMS } from '@o2s/configs.integrations';

import { Models } from '@o2s/utils.api-harmonization';

export class HeroSectionBlock extends Models.Block.Block {
    __typename!: 'HeroSectionBlock';
    preTitle?: CMS.Model.HeroSectionBlock.HeroSectionBlock['preTitle'];
    title!: CMS.Model.HeroSectionBlock.HeroSectionBlock['title'];
    highlightedText?: CMS.Model.HeroSectionBlock.HeroSectionBlock['highlightedText'];
    subtitle!: CMS.Model.HeroSectionBlock.HeroSectionBlock['subtitle'];
    description!: CMS.Model.HeroSectionBlock.HeroSectionBlock['description'];
    image!: CMS.Model.HeroSectionBlock.HeroSectionBlock['image'];
    links!: CMS.Model.HeroSectionBlock.HeroSectionBlock['links'];
    headingType?: CMS.Model.HeroSectionBlock.HeroSectionBlock['headingType'];
    inverted?: CMS.Model.HeroSectionBlock.HeroSectionBlock['inverted'];
    labels!: CMS.Model.HeroSectionBlock.HeroSectionBlock['labels'];
}
