---
sidebar_position: 200
---

# Adding new integrations

While we offer some ready-to-use integrations as a part of the opensource project, there might come a time when you need to write your own. This might be necessary when you want to either:

- connect with a completely new APIs,
- or [modify an existing integration](./extending-integrations.md) with new endpoints or extend their data model.

## Creating a new package

The first step is to create a new package inside the `packages/integrations` folder. While of course you can do this manually (by initializing a new npm project), we also offer [a generator](../using-generators.md#integrations) that will make this process much faster.

:::tip
If you decide to create an integration manually, you can check one of the pre-defined integrations like [the mocked one](https://github.com/o2sdev/openselfservice/tree/main/packages/integrations/mocked) in the main O2S repository.
:::

## Integration structure

An integration needs to follow a few basic requirements:

1. The main entrypoint needs to be `./src/integration.ts` that exports this integration's models, services and an overall config:

    ```typescript title="./src/integration.ts"
    // export of each module with this integration
    export * as Integration from './modules/index';

    // export the config, mapping the services that handle the integration for each module
    export const Config: Partial<ApiConfig['integrations']> = {
        notifications: {
            service: NotificationsService,
        },
        tickets: {
            service: TicketsService,
        },
        ...
    };
    ```

2. It needs to export this integration config via the `package.json`:
    ```json title="./package.json"
    "exports": {
        "./integration": "./dist/integration.js"
    },
    ```

Each module that you want to include in this integration needs to be placed inside the `./src/modules` folder, with `./src/modules/index.ts` file that re-exports each module:

```typescript title="./src/modules/index.ts"
export * as Notifications from './notifications';
export * as Tickets from './tickets';
```

Within each module you need to create at least three files:

1. A service that extends the module base service and implements all required methods, where you will place your logic related to API communication:
    ```typescript title="./src/modules/notifications/notifications.service.ts"
    @Injectable()
    export class NotificationsService extends Notifications.Service  {
        getNotification (options: Notifications.Request.GetNotificationParams) {
            ...
        }
        getNotificationList (options: Notifications.Request.GetNotificationListQuery) {
            ...
        }
        markAs (request: Notifications.Request.MarkNotificationAsRequest) {
            ...
        }
    }
    ```
2. A mapper with methods that will handle data normalization:
    ```typescript title="./src/modules/notifications/notifications.mapper.ts"
    export const mapNotification = (...) => {
        ...
    };
    ```
3. A central `index` file that re-exports the service:
    ```typescript title="./src/modules/notifications/index.ts"
    export { NotificationsService as Service } from './notifications.service';
    ```

## Service logic

The most important part of an integration is the service, where everything related to communication with external APIs is placed. We do not impose any single way of doing that, instead allowing you to implement it in whatever way you want. You can for example:

- use simple HTTP requests to fetch data (either using [HTTP module](https://docs.nestjs.com/techniques/http-module) or a library of your own choosing)
- fetch data using GraphQl (e.g. using [graphql-request](https://www.npmjs.com/package/graphql-request) package)
- connect to external [databases](https://docs.nestjs.com/techniques/database),
- or even mock some data directly in the integration's source files (e.g. for cases when your backend API is not yet ready).

:::tip
Check the [Techniques chapter](https://docs.nestjs.com/techniques) in the Nest.js documentation for additional guides.
:::

## External dependencies

While some integrations will be self-sufficient, others may depend on other modules, from other integrations. An example might be a [CMS integration](../../integrations/cms/strapi/overview.md) that relies upon a cache module to cache incoming requests (to reduce CMS request usage and improve performance).

You can achieve that by following a few steps:

1. Adding another module through [dependency injection](https://docs.nestjs.com/providers#dependency-injection):

    ```typescript
    import { CMS, Cache } from '@o2s/framework/modules';

    @Injectable()
    export class CmsService extends CMS.Service {
        constructor(
            private readonly cacheService: Cache.Service,
        ) {}
    }
    ```

2. Declaring that module in the `imports` section of your integration config:

    ```typescript
    import { ApiConfig, Cache } from '@o2s/framework/modules';

    export const Config: Partial<ApiConfig['integrations']> = {
        cms: {
            service: CmsService,
            imports: [Cache.Module],
        },
    };
    ```

3. Once that is done, you are ready to start using that module in your service:
    ```typescript
    private getPage<T>(key: string, getData: () => Observable<T>): Observable<T> {
        // check if entry is included in the cache
        return from(this.cacheService.get(key)).pipe(
            mergeMap((cachedData) => {
                // if it is, use it
                if (cachedData) {
                    return of(parse(cachedData));
                }
                // otherwise, fetch data from an API
                return getData().pipe(
                    map((data) => {
                        // and add it to cache for the next request
                        this.cacheService.set(key, stringify(data));
                        return data;
                    }),
                );
            }),
        );
    }
    ```

:::tip
For a full example about injecting dependencies, you can check the source code od the [Strapi CMS integration](../../integrations/cms/strapi/overview.md).
:::
