---
sidebar_position: 100
---

# Mocked integration

In order to enable a very quick set-up of O2S, we have prepared an integration that does not rely on any external APIs. You can also use this integration to see in details how an integration should be constructed and can help you to build your own.

## Requirements

This integration is automatically installed when you start the project using the `create-o2s-app` script, but you can also install it manually into the API Harmonization server by running:

```shell
npm install @o2s/integrations.mocked --workspace=@o2s/api
```

## Supported modules

This integration handles following base module from the framework:

- articles
- cache
- cms
- invoices
- notifications
- organizations
- resources
- tickets
- users

## Data sources

This integration does not use any external APIs, and instead just returns data that is already in the normalized format. For example, you can take a look into the [tickets mapper](https://github.com/o2sdev/openselfservice/blob/feature/docs-init/packages/api/integrations/mocked/src/modules/tickets/tickets.mapper.ts) where a sample notification is mocked:

```typescript
const MOCK_TICKET_1: Tickets.Model.Ticket = {
    id: 'EL-465 920 678',
    createdAt: dateToday.toISOString(),
    updatedAt: dateToday.toISOString(),
    topic: 'TOPIC_1',
    type: 'TYPE_1',
    status: 'OPEN',
    attachments: [
        {
            name: 'Invoice.pdf',
            url: 'https://example.com/attachment.pdf',
            size: 1024,
            author: {
                name: 'Customer support',
                email: 'customer@support.com',
            },
            date: '2024-12-12T12:00:00',
            ariaLabel: 'Download Invoice.pdf',
        },
    ],
    properties: [
        {
            id: 'description',
            value: `...`,
        },
        {
            id: 'address',
            value: 'Lorem ipsum dolor sit',
        },
        {
            id: 'contact',
            value: 'Lorem ipsum dolor sit',
        },
    ],
    comments: [
        {
            author: {
                name: 'Customer support',
                email: 'customer@support.com',
            },
            date: '2024-12-12T12:00:00',
            content: `...`,
        },
    ],
};
```

### Pagination

When it comes to returning lists of objects, a randomizer is used in order to visualize that the data can change (e.g. for pagination purposes), which means that the same list will include different items every time you request it:

```typescript
function shuffleArray(array: Tickets.Model.Ticket[]) {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j] as Tickets.Model.Ticket, array[i] as Tickets.Model.Ticket];
    }
}
```

### Filtering

To visualize that filtering works, a simple filtering mechanism is also used:

```typescript
let items = MOCK_TICKETS.filter(
    (item) =>
        (!options.topic || item.topic === options.topic) &&
        (!options.type || item.type === options.type) &&
        (!options.status || item.status === options.status) &&
        (!options.dateFrom || new Date(item.createdAt) >= new Date(options.dateFrom)) &&
        (!options.dateTo || new Date(item.createdAt) <= new Date(options.dateTo)) &&
        (!options.dateFrom || new Date(item.updatedAt) >= new Date(options.dateFrom)) &&
        (!options.dateTo || new Date(item.updatedAt) <= new Date(options.dateTo)),
);
```

## Extended modules

To give an example how an integration can extend a base module from the framework, we have used notifications to [extend base model with one new field](https://github.com/o2sdev/openselfservice/blob/feature/docs-init/packages/api/integrations/mocked/src/modules/notifications/notifications.model.ts):

```typescript
import { Models, Notifications } from '@o2s/framework/modules';

export class Notification extends Notifications.Model.Notification {
    someNewField!: string;
}

export type Notifications = Models.Pagination.Paginated<Notification>;
```

This extension also includes a new endpoint in [the controller](https://github.com/o2sdev/openselfservice/blob/feature/docs-init/packages/api/integrations/mocked/src/modules/notifications/notifications.controller.ts):

```typescript
export class NotificationsController extends Notifications.Controller {
    @Get()
    someNewEndpoint() {
        return 'someNewEndpoint';
    }
}
```

and you can also check [the mapper](https://github.com/o2sdev/openselfservice/blob/feature/docs-init/packages/api/integrations/mocked/src/modules/notifications/notifications.mapper.ts) to see how this new can be used there.
