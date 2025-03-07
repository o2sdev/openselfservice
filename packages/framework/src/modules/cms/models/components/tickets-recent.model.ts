import { Component } from '@/utils/models';

export class TicketRecentComponent extends Component.Component {
    title?: string;
    noResults?: string;
    commentsTitle?: string;
    labels!: {
        today: string;
        yesterday: string;
        details: string;
    };
    detailsUrl!: string;
}
