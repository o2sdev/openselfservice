import { NotFoundException } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { afterEach, describe, expect, it } from 'vitest';

import { mapNotification, markNotificationAs } from './notifications.mapper';
import { NotificationsService } from './notifications.service';

const ID = 'NOT-123-456';

describe('NotificationsService', () => {
    const service = new NotificationsService();

    afterEach(() => {
        markNotificationAs({ id: ID, status: mapNotification(ID)!.status });
    });

    describe('markAs', () => {
        it('should mark a notification that exists', async () => {
            await expect(firstValueFrom(service.markAs({ id: ID, status: 'VIEWED' }))).resolves.toBeUndefined();

            expect(mapNotification(ID)?.status).toBe('VIEWED');
        });

        it('should report a notification that does not exist as not found', async () => {
            await expect(firstValueFrom(service.markAs({ id: 'NOT-000-000', status: 'VIEWED' }))).rejects.toThrow(
                new NotFoundException('Notification with ID NOT-000-000 not found'),
            );
        });
    });
});
