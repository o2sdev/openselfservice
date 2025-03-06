import { CMS } from '@o2s/framework/modules';

const MOCK_TICKET_DETAILS_COMPONENT: CMS.Model.TicketDetailsComponent.TicketDetailsComponent = {
    id: 'ticket-list-1',
    title: 'Case details',
    commentsTitle: 'Comments',
    attachmentsTitle: 'Attachments',
    properties: {
        id: 'Case ID',
        topic: 'Topic',
        type: 'Case type',
        status: 'Status',
        description: 'Additional notes',
        address: 'Service address',
        contact: 'Form of contact',
    },
    fieldMapping: {
        topic: {
            TOPIC_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel mollis nibh. Nunc arcu lorem.',
            TOPIC_2: 'Topic 2',
            TOPIC_3: 'Topic 3',
            TOPIC_4: 'Lorem ipsum TEST TEST TEST',
            TOPIC_5: 'Topic 5',
        },
        type: {
            TYPE_1: 'TV + Internet',
            TYPE_2: 'TV + Internet',
            TYPE_3: 'Type 3',
            TYPE_4: 'Type 4',
            TYPE_5: 'Type 5',
        },
        status: {
            OPEN: 'Under consideration',
            CLOSED: 'Resolved',
            IN_PROGRESS: 'New response',
        },
    },
    labels: {
        showMore: 'Show case details',
        showLess: 'Show less details',
        today: 'Today',
        yesterday: 'Yesterday',
    },
};

export const mapTicketDetailsComponent = (): CMS.Model.TicketDetailsComponent.TicketDetailsComponent => {
    return MOCK_TICKET_DETAILS_COMPONENT;
};
