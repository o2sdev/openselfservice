import { CMS } from '@o2s/configs.integrations';

import { Models } from '@o2s/utils.api-harmonization';

export class CtaSectionBlock extends Models.Block.Block {
    __typename!: 'CtaSectionBlock';
    preTitle?: CMS.Model.CtaSectionBlock.CtaSectionBlock['preTitle'];
    title!: CMS.Model.CtaSectionBlock.CtaSectionBlock['title'];
    inverted?: CMS.Model.CtaSectionBlock.CtaSectionBlock['inverted'];
    labels!: CMS.Model.CtaSectionBlock.CtaSectionBlock['labels'];
    image?: CMS.Model.CtaSectionBlock.CtaSectionBlock['image'];
    links?: CMS.Model.CtaSectionBlock.CtaSectionBlock['links'];
    description?: CMS.Model.CtaSectionBlock.CtaSectionBlock['description'];
}
