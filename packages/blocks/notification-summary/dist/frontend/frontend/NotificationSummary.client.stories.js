import { NotificationSummaryPure } from './NotificationSummary.client';
const meta = {
    title: 'Blocks/NotificationSummary',
    component: NotificationSummaryPure,
};
export default meta;
export const Default = {
    args: {
        routing: {
            locales: ['en', 'de', 'pl'],
            defaultLocale: 'en',
            pathnames: {
                '/login': {
                    en: '/sign-in',
                    de: '/einloggen',
                    pl: '/logowanie',
                },
            },
        },
        __typename: 'NotificationSummaryBlock',
        id: 'notification-summary-1',
        layout: 'horizontal',
        infoCards: [
            {
                title: 'High Priority',
                icon: 'AlertCircle',
                value: 12,
                description: 'High priority notifications',
                variant: 'HIGH',
            },
            {
                title: 'Medium Priority',
                icon: 'Info',
                value: 5,
                description: 'Medium priority notifications',
                variant: 'MEDIUM',
            },
        ],
        accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSWiaWF0IjoxNzU2MzI0NTg0fQ.wFAXi1DbgN67z8xQcqZdGz9YeAolbim3lecVIzV2rv0',
        locale: 'en',
    },
};
export const Vertical = {
    args: {
        ...Default.args,
        layout: 'vertical',
    },
};
export const AllPriorities = {
    args: {
        ...Default.args,
        infoCards: [
            {
                title: 'Critical Priority',
                icon: 'AlertTriangle',
                value: 3,
                description: 'Critical priority notifications',
                variant: 'CRITICAL',
            },
            {
                title: 'High Priority',
                icon: 'AlertCircle',
                value: 12,
                description: 'High priority notifications',
                variant: 'HIGH',
            },
            {
                title: 'Medium Priority',
                icon: 'Info',
                value: 5,
                description: 'Medium priority notifications',
                variant: 'MEDIUM',
            },
            {
                title: 'Low Priority',
                icon: 'Bell',
                value: 8,
                description: 'Low priority notifications',
                variant: 'LOW',
            },
        ],
    },
};
export const SinglePriority = {
    args: {
        ...Default.args,
        infoCards: [
            {
                title: 'High Priority',
                icon: 'AlertCircle',
                value: 12,
                description: 'High priority notifications',
                variant: 'HIGH',
            },
        ],
    },
};
