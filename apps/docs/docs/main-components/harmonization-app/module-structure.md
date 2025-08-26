---
sidebar_position: 100
---

# Module structure

The API Harmonization server is using two main parts:

```
apps/api-harmonization/src
└───modules
    └───module
        ├───module.controller.ts
        ├───module.mapper.ts
        ├───module.model.ts
        ├───module.module.ts
        ├───module.request.ts
        └───module.service.ts

node_modules
├───integration-1
├───integration-2
└───integration-3

packages/api/integrations
├───integration-4
├───integration-5
└───integration-6
```

## Modules

Modules are designed to be a kind of bridge between the frontend app and the integrations.

While you could technically use integrations' endpoints directly on the frontend, it is usually not the best way, as it most often also requires some kind of data aggregation (e.g., data from a CMS with data from a backend service) or orchestration. Doing that on the frontend is possible, but it also makes it more complex and may decrease the overall performance and/or the user experience.

Instead, the O2S offers a set of blocks on the side of the API Harmonization server. They are responsible for:

fetching all the necessary data from different integrations,
combining that data together, transforming it into one response for the frontend.

They usually represent either:

- larger pieces of the frontend app, like whole pages (with titles, SEO metadata and used template),
- more utility-like entities that do not have to be rendered on the frontend at all, like routing information (e.g. for sitemaps) or some general configuration data (e.g. available locales).


### Module

[A module](https://docs.nestjs.com/modules) is used to configure the dependencies of that module, including the framework modules that provide the data:

```typescript title="module metadata for the ticket list module"
@Module({})
export class TicketListModule {
    static register(_config: ApiConfig): DynamicModule {
        return {
            module: TicketListModule,
            providers: [TicketListService, CMS.Service, Tickets.Service],
            controllers: [TicketListController],
            exports: [TicketListService],
        };
    }
}
```

### Controller

[A controller](https://docs.nestjs.com/controllers) is responsible for defining the endpoints, and passing the necessary incoming data (like query params or headers) further to the service:

```typescript title="defining a simple GET endpoint"
@Controller(URL)
@UseInterceptors(LoggerService)
export class TicketListController {
    constructor(protected readonly service: TicketListService) {}

    @Get()
    getTicketList(
        @Headers() headers: AppHeaders,
        @Query() query: GetTicketListQuery
    ) {
        return this.service.getTicketList(query, headers);
    }
}
```

### Service

[A service](https://docs.nestjs.com/providers#services) handles all the necessary logic concerning data fetching and orchestration (like fetching data based on previous response):

```typescript title="handling fetching data for a ticket list module"
@Injectable()
export class TicketListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly ticketService: Tickets.Service,
    ) {}

    getTicketList(query: GetTicketListQuery, headers: AppHeaders): Observable<TicketList> {
        const cms = this.cmsService.getTicketList({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return this.ticketService
                    .getTicketList({ ...query })
                    .pipe(map((tickets) => mapTicketList(tickets, cms, headers['x-locale'])));
            }),
        );
    }
}
```

### Mapper

A mapper is responsible for data aggregation, after it is fetched from APIs:

```typescript title="combining tickets with static content from CMS"
export const mapTicket = (
    ticket: Tickets.Model.Ticket,
    cms: CMS.Model.TicketDetails.TicketDetails,
    locale: string,
): Ticket => {
    return {
        id: {
            label: cms.fieldMapping.id?.[ticket.id] || ticket.id,
            title: cms.properties?.id as string,
            value: ticket.id,
        },
        topic: {
            label: cms.fieldMapping.topic?.[ticket.topic] || ticket.topic,
            title: cms.properties?.topic as string,
            value: ticket.topic,
        },
        status: {
            label: cms.fieldMapping.status?.[ticket.status] || ticket.status,
            title: cms.properties?.status as string,
            value: ticket.status,
        },
        createdAt: formatDateRelative(ticket.createdAt, locale, cms.labels.today, cms.labels.yesterday),
    };
};
```

### Model

A model contains all data models that this module uses in its responses:

```typescript title="defining an anhanced Ticket model with additional labels for each field"
export class Ticket {
    id!: {
        value: Tickets.Model.Ticket['id'];
        title: string;
        label: string;
    };
    topic!: {
        value: Tickets.Model.Ticket['topic'];
        title: string;
        label: string;
    };
    status!: {
        value: Tickets.Model.Ticket['status'];
        title: string;
        label: string;
    };
    createdAt!: Tickets.Model.Ticket['createdAt'];
}
```

### Request

Request defines data models that this module uses in its requests (like query params or request bodies):

```typescript title="defining the query parameters for the GET endpoint"
export class GetTicketListQuery
    implements Omit<CMS.Request.GetCmsEntryParams, 'locale'>, Tickets.Request.GetTicketListQuery
{
    id!: string;
    offset?: number;
    limit?: number;
}
```

## Integrations

An integration is a package that is responsible for:

- communication with external APIs,
- normalizing data

While often integrations will not be a part of the main project, they are still an integral part of the API Harmonization server - without at least one integration configured, there is no data source available for any module

Integrations can be taken from one of two places:

- `node_modules` when they are installed as an external dependency, installed via `npm`,
- from `packages` (either internal or publishable) if you decide to create a new integration on your own.

:::tip
To learn more about integrations, check their [dedicated chapter](../../integrations/overview.md).
:::

Whatever the source of integration is, they are still used exactly the same in the API Harmonization server - they need to be:

1. Added as a dependency in the `apps/api-harmonization/packages.json`.
2. Plugged into the configuration file.

:::tip
To learn exactly what needs to be done to replace an integration and it's consequences, check the [Switching integrations chapter](../../guides/integrations/switching-integrations.md).
:::
