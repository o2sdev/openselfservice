import { CMS } from '@o2s/configs.integrations';

import { MediaSectionBlock } from './media-section.model';

export const mapMediaSection = (
    cms: CMS.Model.MediaSectionBlock.MediaSectionBlock,
    _locale: string,
): MediaSectionBlock => {
    return {
        __typename: 'MediaSectionBlock',
        id: cms.id,
        preTitle: cms.preTitle,
        title: cms.title,
        description: cms.description,
        media: cms.media,
        links: cms.links,
        labels: cms.labels,
    };
};
