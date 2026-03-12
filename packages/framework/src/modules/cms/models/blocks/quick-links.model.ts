import { Block, Link } from '@/utils/models';

/** CMS block configuration for quick links list. */
export class QuickLinksBlock extends Block.Block<Meta> {
    title?: string;
    description?: string;
    items!: Link.Link[];
}

/** CMS metadata map for quick links block editor fields. */
export class Meta {
    __id!: string;
    title!: string;
    description!: string;
    items!: {
        __id: string;
        label: string;
        url: string;
        icon: string;
    }[];
}
