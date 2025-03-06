import { CMS } from '@o2s/framework/modules';

const MOCK_TICKET_LIST_COMPONENT: CMS.Model.TicketListComponent.TicketListComponent = {
    id: 'ticket-list-1',
    title: 'Cases overview',
    subtitle: 'Your recent cases',
    table: {
        columns: [
            { id: 'topic', title: 'Topic' },
            { id: 'type', title: 'Case type' },
            { id: 'status', title: 'Status' },
            { id: 'updatedAt', title: 'Date' },
        ],
        actions: {
            title: 'Action',
            label: 'Details',
        },
    },
    fieldMapping: {
        topic: {
            TOPIC_1: 'Case Title with Extended Dotted Formatting',
            TOPIC_2: 'Topic 2',
            TOPIC_3: 'Case Title with Extended Dotted Formatting',
            TOPIC_4: 'Topic 4',
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
    pagination: {
        limit: 5,
        legend: 'of {total}',
        prev: 'Previous',
        next: 'Next',
        selectPage: 'Select page',
    },
    filters: {
        label: 'Filters & Sort',
        title: 'Filters & Sort',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        submit: 'Apply',
        reset: 'Clear',
        removeFilters: 'Remove filters ({active})',
        items: [
            {
                __typename: 'FilterSelect',
                id: 'sort',
                label: 'Sort by',
                allowMultiple: false,
                options: [
                    { label: 'Topic ASC', value: 'topic_ASC' },
                    { label: 'Topic DESC', value: 'topic_DESC' },
                    { label: 'Type ASC', value: 'type_ASC' },
                    { label: 'Type DESC', value: 'type_DESC' },
                    { label: 'Status ASC', value: 'status_ASC' },
                    { label: 'Status DESC', value: 'status_DESC' },
                    { label: 'Updated ASC', value: 'updatedAt_ASC' },
                    { label: 'Updated DESC', value: 'updatedAt_DESC' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'topic',
                label: 'Topic',
                allowMultiple: true,
                options: [
                    { label: 'Case Title with Extended Dotted Formatting', value: 'TOPIC_1' },
                    { label: 'Topic 2', value: 'TOPIC_2' },
                    { label: 'Topic 3', value: 'TOPIC_3' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'type',
                label: 'Case type',
                allowMultiple: false,
                options: [
                    { label: 'TV + Internet', value: 'TYPE_1' },
                    { label: 'TV + Internet', value: 'TYPE_2' },
                    { label: 'Type 3', value: 'TYPE_3' },
                ],
            },
            {
                __typename: 'FilterDateRange',
                id: 'updatedAt',
                label: 'Period of time',
                from: {
                    label: 'From',
                },
                to: {
                    label: 'To',
                },
            },
        ],
    },
    noResults: {
        title: "So far, there's nothing here",
        description: '',
    },
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
    },
    detailsUrl: '/cases/{id}',
};

export const mapTicketListComponent = (locale: string): CMS.Model.TicketListComponent.TicketListComponent => {
    const getDetailsUrl = () => {
        switch (locale) {
            case 'en':
                return `/cases/{id}`;
            case 'de':
                return `/faelle/{id}`;
            case 'pl':
                return `/zgloszenia/{id}`;
        }

        return '';
    };

    return {
        ...MOCK_TICKET_LIST_COMPONENT,
        detailsUrl: getDetailsUrl(),
    };
};
