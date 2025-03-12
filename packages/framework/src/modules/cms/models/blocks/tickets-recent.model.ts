import { Block } from '@/utils/models';

export class TicketRecentBlock extends Block.Block {
    title?: string;
    noResults?: string;
    commentsTitle?: string;
    labels!: {
        today: string;
        yesterday: string;
        details: string;
    };
    limit!: number;
    detailsUrl!: string;
}
