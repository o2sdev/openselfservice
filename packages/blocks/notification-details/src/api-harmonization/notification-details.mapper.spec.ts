import { CMS, Notifications } from '@o2s/configs.integrations';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Utils } from '@o2s/utils.api-harmonization';

import { mapNotification, mapNotificationDetails } from './notification-details.mapper';

vi.mock('@o2s/utils.api-harmonization', () => ({
    Utils: {
        Date: {
            formatDateRelative: vi.fn(),
        },
    },
}));

describe('notification-details.mapper', () => {
    const createMockCms = (overrides = {}): CMS.Model.NotificationDetailsBlock.NotificationDetailsBlock => ({
        id: 'block-123',
        properties: {
            id: 'ID',
            title: 'Title',
            content: 'Content',
            type: 'Type',
            status: 'Status',
            priority: 'Priority',
        },
        fieldMapping: {
            id: { 'notification-001': 'Notification #001' },
            title: { 'Test Title': 'Test Title Label' },
            content: { 'Test Content': 'Test Content Label' },
            type: { ALERT: 'Alert', INFO: 'Information' },
            status: { READ: 'Read', UNVIEWED: 'Unviewed' },
            priority: { HIGH: 'High', LOW: 'Low' },
        },
        labels: {
            today: 'Today',
            yesterday: 'Yesterday',
        },
        ...overrides,
    });

    const createMockNotification = (overrides = {}): Notifications.Model.Notification => ({
        id: 'notification-001',
        title: 'Test Notification',
        content: 'Test Content',
        type: 'ALERT',
        status: 'UNVIEWED',
        priority: 'HIGH',
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-20T14:30:00Z',
        someNewField: 'custom value',
        ...overrides,
    });

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(Utils.Date.formatDateRelative).mockReturnValue('formatted-date');
    });

    describe('field mapping with fallbacks', () => {
        it('should use CMS mapping when available for all fields', () => {
            const notification = createMockNotification({
                id: 'notification-001',
                title: 'Test Title',
                content: 'Test Content',
                type: 'ALERT',
                status: 'UNVIEWED',
                priority: 'HIGH',
            });
            const cms = createMockCms({
                fieldMapping: {
                    id: { 'notification-001': 'Notification #001' },
                    title: { 'Test Title': 'Test Title Label' },
                    content: { 'Test Content': 'Test Content Label' },
                    type: { ALERT: 'Alert Notification' },
                    status: { UNVIEWED: 'Unviewed Notification' },
                    priority: { HIGH: 'High Priority' },
                },
            });

            const result = mapNotification(notification, cms, 'en', 'UTC');

            expect(result.id.label).toBe('Notification #001');
            expect(result.title.label).toBe('Test Title Label');
            expect(result.content.label).toBe('Test Content Label');
            expect(result.type.label).toBe('Alert Notification');
            expect(result.status.label).toBe('Unviewed Notification');
            expect(result.priority.label).toBe('High Priority');
        });

        it('should fallback to raw value when no mapping exists', () => {
            const notification = createMockNotification({
                id: 'unknown-id',
                title: 'Unknown Title',
                content: 'Unknown Content',
                type: 'UNKNOWN_TYPE',
                status: 'UNKNOWN_STATUS',
                priority: 'UNKNOWN_PRIORITY',
            });
            const cms = createMockCms({
                fieldMapping: {
                    id: {},
                    title: {},
                    content: {},
                    type: {},
                    status: {},
                    priority: {},
                },
            });

            const result = mapNotification(notification, cms, 'en', 'UTC');

            expect(result.id.label).toBe('unknown-id');
            expect(result.title.label).toBe('Unknown Title');
            expect(result.content.label).toBe('Unknown Content');
            expect(result.type.label).toBe('UNKNOWN_TYPE');
            expect(result.status.label).toBe('UNKNOWN_STATUS');
            expect(result.priority.label).toBe('UNKNOWN_PRIORITY');
        });
    });

    describe('date formatting', () => {
        it('should format createdAt and updatedAt using formatDateRelative', () => {
            const notification = createMockNotification({
                createdAt: '2024-01-15T10:00:00Z',
                updatedAt: '2024-01-20T14:30:00Z',
            });
            vi.mocked(Utils.Date.formatDateRelative)
                .mockReturnValueOnce('Jan 15, 2024')
                .mockReturnValueOnce('Jan 20, 2024');

            const result = mapNotification(notification, createMockCms(), 'en', 'UTC');

            expect(Utils.Date.formatDateRelative).toHaveBeenCalledWith(
                '2024-01-15T10:00:00Z',
                'en',
                'Today',
                'Yesterday',
                'UTC',
            );
            expect(Utils.Date.formatDateRelative).toHaveBeenCalledWith(
                '2024-01-20T14:30:00Z',
                'en',
                'Today',
                'Yesterday',
                'UTC',
            );
            expect(result.createdAt).toBe('Jan 15, 2024');
            expect(result.updatedAt).toBe('Jan 20, 2024');
        });
    });

    describe('mapNotificationDetails', () => {
        it('should set correct __typename and id from cms', () => {
            const notification = createMockNotification();

            const result = mapNotificationDetails(notification, createMockCms(), 'en', 'UTC');

            expect(result.__typename).toBe('NotificationDetailsBlock');
            expect(result.id).toBe('block-123');
        });

        it('should preserve custom fields', () => {
            const notification = createMockNotification({ someNewField: 'custom value' });

            const result = mapNotificationDetails(notification, createMockCms(), 'en', 'UTC');

            expect(result.data.customField).toBe('custom value');
        });
    });
});
