import { CMS } from '@o2s/framework/modules';

const MOCK_NOTIFICATION_LIST_COMPONENT: CMS.Model.NotificationListComponent.NotificationListComponent = {
    id: 'notification-list-1',
    title: 'Notifications',
    subtitle: 'List of your notifications',
    table: {
        columns: [
            { id: 'status', title: 'Status' },
            { id: 'title', title: 'Title' },
            { id: 'type', title: 'Type' },
            { id: 'priority', title: 'Priority' },
            { id: 'createdAt', title: 'Date' },
        ],
        actions: {
            title: 'Actions',
            label: 'View details',
        },
    },
    fieldMapping: {
        type: {
            TYPE_1: 'Special offer',
            TYPE_2: 'Gamification',
            TYPE_3: 'Important news',
            TYPE_4: 'Appointment',
        },
        status: {
            UNVIEWED: 'Not viewed',
            VIEWED: 'Viewed',
            READ: 'Read',
        },
        priority: {
            LOW: 'Low',
            MEDIUM: 'Medium',
            HIGH: 'High',
            CRITICAL: 'Critical',
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
        label: 'Filter & Sort',
        title: 'Filter & Sort notifications',
        description: 'Use filters to find specific notifications',
        submit: 'Apply',
        reset: 'Clear',
        removeFilters: 'Remove filters ({active})',
        items: [
            {
                __typename: 'FilterSelect',
                id: 'sort',
                label: 'Sort',
                allowMultiple: false,
                options: [
                    { label: 'Type (ASC)', value: 'type_ASC' },
                    { label: 'Type (DESC)', value: 'type_DESC' },
                    { label: 'Status (ASC)', value: 'status_ASC' },
                    { label: 'Status (DESC)', value: 'status_DESC' },
                    { label: 'Priority (ASC)', value: 'priority_ASC' },
                    { label: 'Priority (DESC)', value: 'priority_DESC' },
                    { label: 'Date (ASC)', value: 'createdAt_ASC' },
                    { label: 'Date (DESC)', value: 'createdAt_DESC' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'type',
                label: 'Type',
                allowMultiple: true,
                options: [
                    { label: 'Special offer', value: 'TYPE_1' },
                    { label: 'Gamification', value: 'TYPE_2' },
                    { label: 'Important news', value: 'TYPE_3' },
                    { label: 'Appointment', value: 'TYPE_4' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'status',
                label: 'Status',
                allowMultiple: true,
                options: [
                    { label: 'Not viewed', value: 'UNVIEWED' },
                    { label: 'Viewed', value: 'VIEWED' },
                    { label: 'Read', value: 'READ' },
                ],
            },
            {
                __typename: 'FilterSelect',
                id: 'priority',
                label: 'Priority',
                allowMultiple: true,
                options: [
                    { label: 'Low Priority', value: 'low' },
                    { label: 'Medium Priority', value: 'medium' },
                    { label: 'High Priority', value: 'high' },
                    { label: 'Critical Priority', value: 'critical' },
                ],
            },
            {
                __typename: 'FilterDateRange',
                id: 'createdAt',
                label: 'Date',
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
        title: 'No notifications found',
        description: 'There are no notifications matching your criteria',
    },
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
    },
    detailsUrl: '/notifications/:id',
};

export const mapNotificationListComponent = (
    locale: string,
): CMS.Model.NotificationListComponent.NotificationListComponent => {
    const getDetailsUrl = () => {
        switch (locale) {
            case 'en':
                return `/notifications/{id}`;
            case 'de':
                return `/benachrichtigungen/{id}`;
            case 'pl':
                return `/powiadomienia/{id}`;
        }

        return '';
    };

    return {
        ...MOCK_NOTIFICATION_LIST_COMPONENT,
        detailsUrl: getDetailsUrl(),
    };
};
