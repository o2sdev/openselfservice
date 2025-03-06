---
sidebar_position: 100
---

# Switching integrations

An integral feature of O2S are the integrations, therefore a mechanism for replacing one integration with another also had to be in place.

Switching between integrations is a process that is not done often - it usually happens during the initial project configuration - but still our aim was for it to be relatively easy. It happens entirely within the API Harmonization server - so inside the `api-harmonization` application.

:::note
Thanks to the normalized data model, replacing an integration is completely transparent to the frontend application.
:::

## Integration config

Inside the `apps/api-harmonization/models` there are a number of files that represent all the framework modules of the `@o2s/framework` package. Inside each of them are local exports that define which integration is used for that module.

For example the `apps/api-harmonization/models/cms.ts` file that is pre-configured with a [mocked integration](../../integrations/mocked/mocked.md) looks like this:

```typescript title="integration config for the cms module"
import { ApiConfig } from '@o2s/framework/modules';
import { Config, Integration } from '@o2s/integrations.mocked/integration';

export const CmsIntegrationConfig: ApiConfig['integrations']['cms'] = Config.cms!;

export import Service = Integration.CMS.Service;
export import Request = Integration.CMS.Request;
export import Model = Integration.CMS.Model;
```

These files export four things:

1. Integration config, that is then propagated to the framework modules to let them know what implementation to actually use. This is done via the `apps/api-harmonization/app.config.ts` file that does not have to be modified at all when switching integrations.
2. A service, that is used in other components and modules:

    ```typescript title="usage of CMS.Service within ticket-list.service.ts"
    import { CMS, Tickets } from '../../models';

    @Injectable()
    export class TicketListService {
        constructor (
            private readonly cmsService: CMS.Service,
            private readonly ticketService: Tickets.Service,
        ) {}

        ...
    }
    ```

3. Requests and Models that can be used e.g. in a mapper to provide correct typings:

    ```typescript title="using models from CMS.Model in the ticket-list.mapper.ts"
    import { CMS, Tickets } from '../../models';

    export const mapTicketList = (
        tickets: Tickets.Model.Tickets,
        cms: CMS.Model.TicketListComponent.TicketListComponent,
        locale: string,
    ): TicketListComponent => {
        ...
    };
    ```

## Replacing an integration package

In order to switch an integration for a given framework module (like a CMS) all that is required is to:

1. Install a new integration as a dependency of the `api-harmonization` app:

    ```shell
    npm install @o2s/integrations.strapi-cms --workspace=@o2s/api
    ```

2. Replace the previous import with the newly installed package:

    ```typescript
    import { Config, Integration } from '@o2s/integrations.mocked/integration';
    ```

    into

    ```typescript
    import { Config, Integration } from '@o2s/integrations.strapi-cms/integration';
    ```

Once that is done, the `api-harmonization` application will start using the new integration.

:::note
Replacing an integration **does not** require any restarts, and can be done during runtime, e.g. in the middle the development process.
:::

In case a single integration package handles multiple framework modules (e.g. some CRM integration can at the same time notifications, tickets and users), this switching process needs to be handled multiple times as well for each one.

:::info
While this may seem a bit cumbersome, it also gives much more control over which integrations are used in which modules, e.g. in cases when you want to override one integration with another:

1. `Integration1` handles both notifications and tickets,
2. `Integration2` handles only tickets,

and you want to use `Integration1` only for notifications, and `Integration2` for tickets.
:::
