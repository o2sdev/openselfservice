import { Notifications } from '@o2s/framework/modules';

import * as CustomNotifications from './notifications.model';

const dateToday = new Date();
const dateYesterday = new Date();
dateYesterday.setDate(dateYesterday.getDate() - 1);

const MOCK_NOTIFICATION_1: CustomNotifications.Notification = {
    id: 'NOT-123-456',
    title: 'Power cut',
    content:
        'Once upon a time, in a far-off land surrounded by towering mountains and lush green valleys, there was a king who was known far and wide for his extreme laziness. This king, who sat upon a grand golden throne encrusted with jewels, spent his days doing nothing but lounging, feasting, and daydreaming. The affairs of the kingdom—its people, its prosperity, and its future—were the least of his concerns. While the people toiled and the advisors worked tirelessly, the king found joy only in his comfort. One fateful morning, as the sun cast its golden rays through the stained-glass windows of the royal hall, a group of his most trusted advisors approached him. Their faces were etched with worry, and they carried scrolls, ledgers, and maps that detailed the dire state of the kingdom. Bowing respectfully before the lounging king, the chief advisor cleared his throat and spoke with urgency.',
    type: 'TYPE_3',
    priority: 'HIGH',
    status: 'UNVIEWED',
    createdAt: dateToday.toISOString(),
    updatedAt: dateToday.toISOString(),
    someNewField: 'someNewField',
};

const MOCK_NOTIFICATION_2: CustomNotifications.Notification = {
    id: 'NOT-123-457',
    title: 'System maintenance very long title Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    content: 'Scheduled maintenance will be performed tonight.',
    type: 'TYPE_3',
    priority: 'MEDIUM',
    status: 'UNVIEWED',
    createdAt: dateYesterday.toISOString(),
    updatedAt: dateYesterday.toISOString(),
    someNewField: 'someNewField',
};

const MOCK_NOTIFICATION_3: CustomNotifications.Notification = {
    id: 'NOT-123-458',
    title: 'New feature available',
    content: 'Check out our latest platform updates!',
    type: 'TYPE_2',
    priority: 'LOW',
    status: 'READ',
    createdAt: '2024-03-17T15:30:00Z',
    updatedAt: '2024-03-17T15:30:00Z',
    someNewField: 'someNewField',
};

const MOCK_NOTIFICATION_4: CustomNotifications.Notification = {
    id: 'NOT-123-459',
    title: 'Aktualizacja systemu HR',
    content:
        'W przyszłym tygodniu zostanie wprowadzona nowa funkcjonalność w systemie HR. Prosimy o zapoznanie się z dokumentacją.',
    type: 'TYPE_1',
    priority: 'MEDIUM',
    status: 'UNVIEWED',
    createdAt: '2024-03-16T10:00:00Z',
    updatedAt: '2024-03-16T10:00:00Z',
    someNewField: 'someNewField',
};

const MOCK_NOTIFICATION_5: CustomNotifications.Notification = {
    id: 'NOT-123-460',
    title: 'Przypomnienie o szkoleniu BHP',
    content: 'Przypominamy o obowiązkowym szkoleniu BHP, które odbędzie się w następny poniedziałek.',
    type: 'TYPE_2',
    priority: 'HIGH',
    status: 'READ',
    createdAt: '2024-03-15T08:30:00Z',
    updatedAt: '2024-03-15T14:20:00Z',
    someNewField: 'someNewField',
};

const RANDOM_MOCK_NOTIFICATIONS: CustomNotifications.Notification[] = Array.from({ length: 100 }, (_, index) => ({
    id: `NOT-123-${469 + index}`,
    title: `Random Notification ${index + 1}`,
    content: 'This is a randomly generated notification content.',
    type: `TYPE_${Math.floor(Math.random() * 3) + 1}`,
    priority: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'][
        Math.floor(Math.random() * 4)
    ] as Notifications.Model.NotificationPriority,
    status: ['UNVIEWED', 'VIEWED', 'READ'][Math.floor(Math.random() * 3)] as Notifications.Model.NotificationStatus,
    createdAt: new Date(2024, 2, Math.floor(Math.random() * 31) + 1).toISOString(),
    updatedAt: new Date(2024, 2, Math.floor(Math.random() * 31) + 1).toISOString(),
    someNewField: 'someNewField',
}));

const MOCK_NOTIFICATIONS = [
    MOCK_NOTIFICATION_1,
    MOCK_NOTIFICATION_2,
    MOCK_NOTIFICATION_3,
    MOCK_NOTIFICATION_4,
    MOCK_NOTIFICATION_5,
    ...RANDOM_MOCK_NOTIFICATIONS,
];

export const mapNotification = (id: string): CustomNotifications.Notification | undefined => {
    return MOCK_NOTIFICATIONS.find((notification) => notification.id === id);
};

export const mapNotifications = (
    options: Notifications.Request.GetNotificationListQuery,
): CustomNotifications.Notifications => {
    const { offset = 0, limit = 10 } = options;
    let filteredNotifications = MOCK_NOTIFICATIONS.filter(
        (notification) =>
            (!options.type || notification.type === options.type) &&
            (!options.priority || notification.priority === options.priority) &&
            (!options.status || notification.status === options.status) &&
            (!options.dateFrom || new Date(notification.createdAt) >= new Date(options.dateFrom)) &&
            (!options.dateTo || new Date(notification.createdAt) <= new Date(options.dateTo)) &&
            (!options.dateFrom || new Date(notification.updatedAt) >= new Date(options.dateFrom)) &&
            (!options.dateTo || new Date(notification.updatedAt) <= new Date(options.dateTo)),
    );

    if (options.sort) {
        const [field, order] = options.sort.split('_');
        const isAscending = order === 'ASC';

        filteredNotifications = filteredNotifications.sort((a, b) => {
            const aValue = a[field as keyof CustomNotifications.Notification];
            const bValue = b[field as keyof CustomNotifications.Notification];

            if (typeof aValue === 'string' && typeof bValue === 'string') {
                return isAscending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
            } else if (field === 'createdAt' || field === 'updatedAt') {
                const aDate = new Date(aValue);
                const bDate = new Date(bValue);
                return isAscending ? aDate.getTime() - bDate.getTime() : bDate.getTime() - aDate.getTime();
            }
            return 0;
        });
    } else {
        shuffleArray(filteredNotifications);
    }

    return {
        data: filteredNotifications.slice(offset, Number(offset) + Number(limit)),
        total: filteredNotifications.length,
    };
};

function shuffleArray(array: CustomNotifications.Notification[]) {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [
            array[j] as CustomNotifications.Notification,
            array[i] as CustomNotifications.Notification,
        ];
    }
}
