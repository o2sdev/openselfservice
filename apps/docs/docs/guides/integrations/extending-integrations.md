---
sidebar_position: 300
---

# Extending integrations

As mentioned in the [previous chapter](./adding-new-integrations.md), it's also possible to create an integration that "only" adds to or modifies an exising one. You may want to choose this option (instead of creating one from scratch) if you don't want to implement all the data fetching and orchestration on your own, and instead only want to e.g. add a new field to the data model.

## Creating an integration

You can start by following the exact same steps [as previously](./adding-new-integrations.md#creating-a-new-package) to create a new package. Let's assume you want to create a new integration (called `extended-notifications`) where you want to modify the notifications module by:

1. Adding a new field to the `Notification` model.
2. Adding a new service and endpoint to return the latest critical notification.

Once that is ready, you can start by:

1. Adding another integration as a dependency to your own:
    ```shell
    npm install @o2s/integrations.mocked --workspace=@o2s/integrations.extended-notifications
    ```
2. Modifying the service of the module you want to extend, by choosing to `extend` another integration (instead of `implement`ing the base service):
    ```typescript
    @Injectable()
    export class NotificationsService extends Notifications.Service  {
    }
    ```

With that prepared, you can start writing your own implementation.

### Extending the model

The first thing is to create `notifications.model.ts` file with classes that extend the normalized data model, and add the new field:

```typescript title="notifications.model.ts"
import { Models, Notifications } from '@o2s/framework/modules';

export class Notification extends Notifications.Model.Notification {
    someNewField!: string;
}

export type Notifications = Models.Pagination.Paginated<Notification>;
```

### Implementing the mappers

The next step is to create new mappers so that you could add the `someNewField` in the notification:

```typescript title="notifications.mapper.ts"
import { Notifications } from '@o2s/framework/modules';

import * as CustomNotifications from './notifications.model';

export const mapNotification = (notification: Notifications.Model.Notification): CustomNotifications.Notification => {
    return {
        ...notification, // use all existing fields as they are
        someNewField: `${notification.priority}:${notification.title}`, // add the new field based on existing values
    };
};

export const mapNotifications = (
    notifications: Notifications.Model.Notifications,
): CustomNotifications.Notifications => {
    return {
        ...notifications,
        data: notifications.data.map(mapNotification), // use the mapper for a single notifications to map the list
    };
};
```

### Implementing the service

Once the mappers are ready, you can use them in the override methods inside the service:

```typescript title="notifications.service.ts"
import { Notifications } from '@o2s/framework/modules';

import { Integration as MockedIntegration } from '@o2s/integrations.mocked/integration'

import * as CustomNotifications from './notifications.model'
import { mapNotification, mapNotifications } from 'src/modules/notifications/notifications.mapper';

@Injectable()
export class NotificationsService extends MockedIntegration.Notifications.Service  {
    getNotification (params: Notifications.Request.GetNotificationParams): Observable<CustomNotifications.Notification> {
        return super.getNotification(params).pipe(map(notification => mapNotification(notification)));
    }

    getNotificationList (options: Notifications.Request.GetNotificationListQuery): Observable<CustomNotifications.Notifications> {
        return super.getNotificationList(options).pipe(map(notifications => mapNotifications(notifications)));
    }

    getLatestCriticalNotification(): Observable<CustomNotifications.Notification> {
        return super.getNotificationList({
            limit: 1,
            priority: 'CRITICAL',
        }).pipe(map(notifications => mapNotification(notifications.data[0])))
    }
}
```

### Implementing the controller

Even though the `getLatestCriticalNotification` is available to use in other modules (like in a block that aggregates data), you can still make it available directly via en endpoint.

In order to do that, you need to create a new controller inside your module:
```typescript title="notifications.controller.ts"
import { Notifications } from '@o2s/framework/modules';
import { NotificationsService } from './notifications.service';

@Injectable()
export class NotificationsController extends Notifications.Controller {
    constructor(protected readonly notificationService: NotificationsService) {
        super(notificationService);
    }

    @Get()
    getLatestCriticalNotification() {
        return this.notificationService.getLatestCriticalNotification();
    }
}
```

## Using the extended integration

You can follow the instructions from the [Switching integrations chapter](./switching-integrations.md) to replace the package used for the notifications with `@o2s/integrations.extended-notifications`. This then can allow you to

- use the new field in mappers that use notifications:
```typescript title="apps/api-harmonization/src/blocks/notification-list/notification-list.mapper.ts"
export const mapNotification = (notification: Notifications.Model.Notification): Notification => {
    return {
        id: notification.id,
        title: notification.someNewField, // usage of the newly added field
        ...
    };
};
```
- use the new method in other services:
```typescript title="apps/api-harmonization/src/blocks/notification-details/notification-details.service.ts"
    getNotificationDetailsBlock(...): Observable<NotificationDetailsBlock> {
    const cms = this.cmsService.getNotificationDetailsBlock({ ...query, locale: headers['x-locale'] });
    const notification = this.notificationService.getLatestCriticalNotification(); // usage of the new method

    return forkJoin([notification, cms]).pipe(
        map(([notification, cms]) => {
            if (!notification) {
                throw new NotFoundException();
            }

            return mapNotificationDetails(notification, cms, headers['x-locale']);
        }),
    );
}
```
