---
sidebar_position: 100
---

# Switching integrations

An integral feature of O2S are the integrations, therefore, a mechanism for replacing one integration with another also had to be in place.

Switching between integrations is a process that is not done often - it usually happens during the initial project configuration - but still our aim was for it to be relatively easy. It happens entirely within the configuration, inside the `@o2s/configs.integrations` package that is shared across other apps.

:::note
Thanks to the normalized data model, replacing an integration is completely transparent to the frontend application.
:::

## Integration config

All integration assignments are defined in a single file: `packages/configs/integrations/src/config.ts`. This file uses the `createIntegrationConfig` helper from `@o2s/framework/config` to map each framework domain to an integration module, with runtime validation that each integration provides the domain it's assigned to.

The default configuration, pre-configured with a [mocked integration](../../integrations/mocked/mocked.md), looks like this:

```typescript title="packages/configs/integrations/src/config.ts"
import * as Mocked from '@o2s/integrations.mocked/integration';

import { createIntegrationConfig } from '@o2s/framework/config';
import type { ApiConfig } from '@o2s/framework/modules';

const result = createIntegrationConfig({
    cms: Mocked,
    tickets: Mocked,
    articles: Mocked,
    notifications: Mocked,
    // ... all other domains
});

export const integrations: ApiConfig['integrations'] = result.integrations;

// Type exports for consumers
export import CMS = Mocked.Integration.CMS;
export import Tickets = Mocked.Integration.Tickets;
export import Articles = Mocked.Integration.Articles;
// ... all other domains
```

This file exports two things:

1. Integration config (`integrations`), that is propagated to the framework modules via `apps/api-harmonization/app.config.ts`. This file does not need to be modified when switching integrations.
2. Type namespaces (Services, Requests, Models) used in blocks and modules:

    ```typescript title="usage of services within page.service.ts"
    import { Articles, Auth, CMS } from '@o2s/configs.integrations';

    @Injectable()
    export class TicketListService {
        constructor (
            private readonly cmsService: CMS.Service,
            private readonly articlesService: Articles.Service,
            private readonly authService: Auth.Service,
        ) {}

        ...
    }
    ```

3. Requests and Models that can be used, e.g. in a mapper to provide correct typings:

    ```typescript title="using models in the page.mapper.ts"
    import { Articles, CMS } from '@o2s/configs.integrations';

    export const mapPage = (page: CMS.Model.Page.Page): Page => {...};

    export const mapArticle = (
        article: Articles.Model.Article,
        category: Articles.Model.Category,
    ): Page => {...};
    ```

## Replacing an integration package

In order to switch an integration for a given framework module (like a CMS) all that is required is to:

1. Install a new integration as a dependency of the `@o2s/configs.integrations` package:

    ```shell
    npm install @o2s/integrations.strapi-cms --workspace=@o2s/configs.integrations
    ```

2. Open `packages/configs/integrations/src/config.ts` and:

    a. Import the new integration module:

    ```typescript
    import * as Strapi from '@o2s/integrations.strapi-cms/integration';
    ```

    b. Change the domain assignment from `Mocked` to the new integration:

    ```typescript
    const result = createIntegrationConfig({
        cms: Strapi,     // changed from Mocked
        articles: Strapi, // changed from Mocked
        // ... other domains remain unchanged
    });
    ```

    c. Update the matching `export import` type aliases:

    ```typescript
    export import CMS = Strapi.Integration.CMS;
    export import Articles = Strapi.Integration.Articles;
    ```

Once that is done, the application will start using the new integration.

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
