import { Block, Link, Media, RichText } from '@/utils/models';

export class CtaSectionBlock extends Block.Block {
    preTitle?: string;
    title?: string;
    description?: RichText.RichText;
    inverted?: boolean;
    image?: Media.Media;
    links?: Link.Link[];
    labels!: {
        showMore: string;
    };
}
