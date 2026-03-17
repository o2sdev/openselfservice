import { CMS } from '@o2s/configs.integrations';

import { Models } from '@o2s/utils.api-harmonization';

export class MediaSectionBlock extends Models.Block.Block {
    __typename!: 'MediaSectionBlock';
    preTitle?: CMS.Model.MediaSectionBlock.MediaSectionBlock['preTitle'];
    title?: CMS.Model.MediaSectionBlock.MediaSectionBlock['title'];
    description?: CMS.Model.MediaSectionBlock.MediaSectionBlock['description'];
    media?: CMS.Model.MediaSectionBlock.MediaSectionBlock['media'];
    links?: CMS.Model.MediaSectionBlock.MediaSectionBlock['links'];
    labels!: CMS.Model.MediaSectionBlock.MediaSectionBlock['labels'];
}
