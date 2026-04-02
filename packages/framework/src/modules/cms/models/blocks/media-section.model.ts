import { Block, Link, Media } from '@/utils/models';

/** CMS block configuration for media section with optional controls labels. */
export class MediaSectionBlock extends Block.Block {
    preTitle?: string;
    title?: string;
    description?: string;
    media?: Media.Media;
    links?: Link.Link[];
    labels!: {
        showMore: string;
        play: string;
        pause: string;
        mute: string;
        unmute: string;
    };
}
