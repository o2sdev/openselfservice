import { Block, Link } from '@/utils/models';

export class QuickLinksBlock extends Block.Block<Meta> {
    title?: string;
    description?: string;
    items!: Link.Link[];
}

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
