"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapNotificationSummary = void 0;
const mapNotificationSummary = (cms, notifications, _locale) => {
    const priorityCounts = notifications.data.reduce((acc, notification) => {
        acc[notification.priority] = (acc[notification.priority] || 0) + 1;
        return acc;
    }, {});
    const infoCards = cms.infoCards.map((card) => ({
        title: card.title,
        icon: card.icon,
        value: priorityCounts[card.variant] ?? card.value,
        description: card.description,
        variant: card.variant,
    }));
    return {
        __typename: 'NotificationSummaryBlock',
        id: cms.id,
        layout: cms.layout,
        infoCards,
    };
};
exports.mapNotificationSummary = mapNotificationSummary;
//# sourceMappingURL=notification-summary.mapper.js.map