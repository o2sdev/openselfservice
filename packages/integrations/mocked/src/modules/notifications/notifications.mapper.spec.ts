import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { STATUS_TTL, mapNotification, mapNotifications, markNotificationAs } from './notifications.mapper';

const ID = 'NOT-123-456';

// snapshotted before any test mutates the shared mocks, so that a missing rollback cannot make an assertion pass
const PRISTINE = {
    status: mapNotification(ID)!.status,
    updatedAt: mapNotification(ID)!.updatedAt,
};

const statusOf = (locale = 'en') => mapNotification(ID, locale)?.status;

describe('markNotificationAs', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        // roll every override in the shared mocks back, so that the tests stay independent
        vi.advanceTimersByTime(STATUS_TTL + 1);
        mapNotification(ID);
        vi.useRealTimers();
    });

    it('should start from an unviewed notification', () => {
        expect(PRISTINE.status).toBe('UNVIEWED');
        expect(statusOf()).toBe('UNVIEWED');
    });

    it('should mark the notification as viewed', () => {
        expect(markNotificationAs({ id: ID, status: 'VIEWED' })).toBe(true);

        expect(statusOf()).toBe('VIEWED');
        expect(mapNotification(ID)?.updatedAt).not.toBe(PRISTINE.updatedAt);
    });

    it('should mark every locale variant of the notification', () => {
        markNotificationAs({ id: ID, status: 'VIEWED' });

        expect([statusOf('en'), statusOf('pl'), statusOf('de')]).toEqual(['VIEWED', 'VIEWED', 'VIEWED']);
    });

    it('should report that a notification with an unknown id was not found', () => {
        expect(markNotificationAs({ id: 'NOT-000-000', status: 'VIEWED' })).toBe(false);
    });

    it('should keep the new status until the TTL passes', () => {
        markNotificationAs({ id: ID, status: 'VIEWED' });

        vi.advanceTimersByTime(STATUS_TTL - 1000);

        expect(statusOf()).toBe('VIEWED');
    });

    it('should go back to the status the mock started with once the TTL passes', () => {
        markNotificationAs({ id: ID, status: 'VIEWED' });

        vi.advanceTimersByTime(STATUS_TTL + 1);

        expect(statusOf()).toBe(PRISTINE.status);
        expect(mapNotification(ID)?.updatedAt).toBe(PRISTINE.updatedAt);
    });

    it('should roll the status back for every locale variant', () => {
        markNotificationAs({ id: ID, status: 'VIEWED' });

        vi.advanceTimersByTime(STATUS_TTL + 1);

        expect([statusOf('en'), statusOf('pl'), statusOf('de')]).toEqual(['UNVIEWED', 'UNVIEWED', 'UNVIEWED']);
    });

    it('should roll the status back in the list as well, not only in a single notification', () => {
        markNotificationAs({ id: ID, status: 'VIEWED' });

        vi.advanceTimersByTime(STATUS_TTL + 1);

        const listed = mapNotifications({ limit: 100 }).data.find((notification) => notification.id === ID);

        expect(listed?.status).toBe('UNVIEWED');
    });

    it('should start the TTL again every time the notification is marked', () => {
        markNotificationAs({ id: ID, status: 'VIEWED' });
        vi.advanceTimersByTime(STATUS_TTL - 1000);

        markNotificationAs({ id: ID, status: 'READ' });
        vi.advanceTimersByTime(STATUS_TTL - 1000);

        expect(statusOf()).toBe('READ');
    });

    it('should go back to the first status the mock had, not to the one set in between', () => {
        markNotificationAs({ id: ID, status: 'VIEWED' });
        markNotificationAs({ id: ID, status: 'READ' });

        vi.advanceTimersByTime(STATUS_TTL + 1);

        expect(statusOf()).toBe('UNVIEWED');
    });
});
