---
sidebar_position: 100
---

# Mocked integration

In order to enable a very quick set-up of O2S, we have prepared an integration that does not rely on any external APIs. You can also use this integration to see in details how an integration should be constructed and can help you to build your own.

## Requirements

This integration is automatically installed when you bootstrap a new portal with `npx create-o2s-app@latest my-portal`. If you need to install it manually in an existing workspace, run:

```shell
npm install @o2s/integrations.mocked --workspace=@o2s/configs.integrations
```

## Supported modules

This integration handles the following base modules from the framework:

- articles
- auth
- billing-accounts
- cache
- cms
- invoices
- notifications
- orders
- organizations
- products
- resources
- search
- tickets
- users

## Data sources

This integration does not use any external APIs, and instead just returns data that is already in the normalized format. For example, you can review the [tickets mocks](https://github.com/o2sdev/openselfservice/blob/main/packages/integrations/mocked/src/modules/tickets/tickets.mocks.ts) where localized fixtures are defined:

```typescript
const MOCK_TICKET_1_EN: Tickets.Model.Ticket = {
    id: 'EL-465-920-678',
    createdAt: dateToday.toISOString(),
    updatedAt: dateToday.toISOString(),
    topic: 'TOOL_REPAIR',
    type: 'URGENT',
    status: 'OPEN',
    attachments: [
        {
            name: 'Repair_Assessment.pdf',
            url: 'https://example.com/attachment.pdf',
            size: 1024,
            author: {
                name: 'Technical Support',
                email: 'technical@support.com',
            },
            date: '2024-12-12T12:00:00',
            ariaLabel: 'Download Repair_Assessment.pdf',
        },
    ],
    properties: [
        {
            id: 'description',
            value: `
<p>
Tool repair request for TE 70-ATC/AVR hammer drill. The device is not functioning properly - it stops during operation with Error E12 displayed.
</p>
<p>
Tool serial number: 3456789. Purchase date: 06/15/2023. Under Fleet Management program.
</p>
            `,
        },
        {
            id: 'address',
            value: '123 Construction Site, Building A, Floor 3',
        },
        {
            id: 'contact',
            value: 'John Contractor, +1 555-123-4567',
        },
    ],
    comments: [
        {
            author: {
                name: 'Technical Support',
                email: 'technical@support.com',
            },
            date: '2024-12-12T12:00:00',
            content: `
Initial assessment indicates possible motor control issue. Repair estimated to take 3-5 business days.
`,
        },
    ],
};
```

To keep lists dynamic, the same file contains helpers such as `generateRandomTicketsPL/DE/EN` that assemble 100 realistic tickets per locale with randomized topics, statuses, attachments and comments.

### Pagination

Ticket lists are built in [tickets.mapper.ts](https://github.com/o2sdev/openselfservice/blob/main/packages/integrations/mocked/src/modules/tickets/tickets.mapper.ts). `mapTickets` first selects the proper locale source and then slices it using standard offset/limit pagination:

```typescript
const { offset = 0, limit = 10, locale } = options;
let ticketsSource = MOCK_TICKETS_EN;
if (locale === 'pl') {
    ticketsSource = MOCK_TICKETS_PL;
} else if (locale === 'de') {
    ticketsSource = MOCK_TICKETS_DE;
}

return {
    data: items.slice(offset, Number(offset) + Number(limit)),
    total: items.length,
};
```

Because the mocked datasets include the generated entries mentioned above, each request can still surface different tickets, which helps to visualize changing data during demos.

### Filtering

To visualize filtering and sorting, the mapper evaluates every supported query parameter and optionally applies a deterministic sort order:

```typescript
let items = ticketsSource.filter(
    (item) =>
        (!options.topic || item.topic === options.topic) &&
        (!options.type || item.type === options.type) &&
        (!options.status || item.status === options.status) &&
        (!options.dateFrom || new Date(item.createdAt) >= new Date(options.dateFrom)) &&
        (!options.dateTo || new Date(item.createdAt) <= new Date(options.dateTo)) &&
        (!options.dateFrom || new Date(item.updatedAt) >= new Date(options.dateFrom)) &&
        (!options.dateTo || new Date(item.updatedAt) <= new Date(options.dateTo)),
);

if (options.sort) {
    const [field, order] = options.sort.split('_');
    const isAscending = order === 'ASC';

    items = items.sort((a, b) => {
        const aValue = a[field as keyof Tickets.Model.Ticket];
        const bValue = b[field as keyof Tickets.Model.Ticket];

        if (typeof aValue === 'string' && typeof bValue === 'string') {
            return isAscending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        } else if (field === 'createdAt' || field === 'updatedAt') {
            const aDate = new Date(aValue as string);
            const bDate = new Date(bValue as string);
            return isAscending ? aDate.getTime() - bDate.getTime() : bDate.getTime() - aDate.getTime();
        }
        return 0;
    });
}
```

## Extended modules

To give an example how an integration can extend a base module from the framework, we have used notifications to [extend base model with one new field](https://github.com/o2sdev/openselfservice/blob/main/packages/integrations/mocked/src/modules/notifications/notifications.model.ts):

```typescript
import { Models, Notifications } from '@o2s/framework/modules';

export class Notification extends Notifications.Model.Notification {
    someNewField!: string;
}

export type Notifications = Models.Pagination.Paginated<Notification>;
```

This extension also includes a new endpoint in [the controller](https://github.com/o2sdev/openselfservice/blob/main/packages/integrations/mocked/src/modules/notifications/notifications.controller.ts):

```typescript
export class NotificationsController extends Notifications.Controller {
    @Get()
    someNewEndpoint() {
        return 'someNewEndpoint';
    }
}
```

and you can also check [the mapper](https://github.com/o2sdev/openselfservice/blob/main/packages/integrations/mocked/src/modules/notifications/notifications.mapper.ts) to see how this new field is used there.
