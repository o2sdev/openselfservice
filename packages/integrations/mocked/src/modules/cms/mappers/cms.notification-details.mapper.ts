import { CMS } from '@o2s/framework/modules';

const MOCK_NOTIFICATION_DETAILS_COMPONENT_EN: CMS.Model.NotificationDetailsComponent.NotificationDetailsComponent = {
    id: 'notification-list-1',
    fieldMapping: {
        type: {
            GENERAL_NOTIFICATION: 'General notification',
            TICKET_UPDATE: 'Ticket update',
            TYPE_1: 'Special offer',
            TYPE_2: 'Changes',
            TYPE_3: 'Important news',
        },
        status: {
            UNVIEWED: 'Not viewed',
            VIEWED: 'Viewed',
            READ: 'Read',
        },
        priority: {
            low: 'Low Priority',
            medium: 'Medium Priority',
            high: 'High Priority',
            critical: 'Critical Priority',
        },
    },
    properties: {
        id: 'ID',
        title: 'Title',
        content: 'Content',
        type: 'Type',
        status: 'Status',
        priority: 'Priority',
        createdAt: 'Created At',
        updatedAt: 'Updated At',
    },
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
    },
};

const MOCK_NOTIFICATION_DETAILS_COMPONENT_DE: CMS.Model.NotificationDetailsComponent.NotificationDetailsComponent = {
    id: 'notification-list-1',
    fieldMapping: {
        type: {
            GENERAL_NOTIFICATION: 'Allgemeine Benachrichtigung',
            TICKET_UPDATE: 'Ticket-Aktualisierung',
            TYPE_1: 'Sonderangebot',
            TYPE_2: 'Änderungen',
            TYPE_3: 'Wichtige Neuigkeiten',
        },
        status: {
            UNVIEWED: 'Nicht angesehen',
            VIEWED: 'Angesehen',
            READ: 'Gelesen',
        },
        priority: {
            low: 'Niedrige Priorität',
            medium: 'Mittlere Priorität',
            high: 'Hohe Priorität',
            critical: 'Kritische Priorität',
        },
    },
    properties: {
        id: 'ID',
        title: 'Titel',
        content: 'Inhalt',
        type: 'Typ',
        status: 'Status',
        priority: 'Priorität',
        createdAt: 'Erstellt am',
        updatedAt: 'Aktualisiert am',
    },
    labels: {
        today: 'Heute',
        yesterday: 'Gestern',
    },
};

const MOCK_NOTIFICATION_DETAILS_COMPONENT_PL: CMS.Model.NotificationDetailsComponent.NotificationDetailsComponent = {
    id: 'notification-list-1',
    fieldMapping: {
        type: {
            GENERAL_NOTIFICATION: 'Ogólne powiadomienie',
            TICKET_UPDATE: 'Aktualizacja biletu',
            TYPE_1: 'Oferta specjalna',
            TYPE_2: 'Zmiany',
            TYPE_3: 'Ważne wiadomości',
        },
        status: {
            UNVIEWED: 'Nieprzeczytane',
            VIEWED: 'Wyświetlone',
            READ: 'Przeczytane',
        },
        priority: {
            low: 'Niski priorytet',
            medium: 'Średni priorytet',
            high: 'Wysoki priorytet',
            critical: 'Krytyczny priorytet',
        },
    },
    properties: {
        id: 'ID',
        title: 'Tytuł',
        content: 'Treść',
        type: 'Typ',
        status: 'Status',
        priority: 'Priorytet',
        createdAt: 'Utworzono',
        updatedAt: 'Zaktualizowano',
    },
    labels: {
        today: 'Dziś',
        yesterday: 'Wczoraj',
    },
};

export const mapNotificationDetailsComponent = (
    locale: string,
): CMS.Model.NotificationDetailsComponent.NotificationDetailsComponent => {
    switch (locale) {
        case 'de':
            return MOCK_NOTIFICATION_DETAILS_COMPONENT_DE;
        case 'pl':
            return MOCK_NOTIFICATION_DETAILS_COMPONENT_PL;
        default:
            return MOCK_NOTIFICATION_DETAILS_COMPONENT_EN;
    }
};
