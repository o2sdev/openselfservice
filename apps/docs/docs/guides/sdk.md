---
sidebar_position: 300
---

# The SDK

The SDK in O2S provides a **developer-friendly way** to interact with the API Harmonization Server.
It abstracts complex API requests and ensures **type-safe, structured data retrieval** in different modules.

This chapter covers:

- How to **initialize and use the SDK** in your application.
- How to **extend the SDK** to support additional APIs.
- How to **override SDK methods** to customize behavior.

## Initializing the SDK

In order to start using the SDK, you need to first initialize it and provide the URL of the Harmonization server:

```typescript
import { getSdk } from '@o2s/framework/sdk';

export const sdk = getSdk({
    apiUrl: '...',
});
```

:::info
If you're using the provided frontend application, this will be already pre-configured for you within the `./apps/frontend/src/api/sdk.ts` file. Otherwise, create that file by your own, remembering to export the `sdk` object.

:::

## Using the SDK

Once the SDK is initialized, you can import and use it in other files and components:

```typescript
import { sdk } from '@/api/sdk';

const data = await sdk.tickets.getTicket();
```

Since the whole SDK is strongly typed, you can easily access the internal properties of received object:

```typescript
const { id, status, attachments } = await sdk.tickets.getTicket();
```

## Extending the SDK

Out of the box, the SDK provides methods for the modules available in the `@o2s/framework` package. However, it will often be necessary to extend them (either by modifying the normalized data model or adding new endpoints) which should also be reflected in the SDK.

To do that, you can use the `extendSdk` method and override the defaults:

```typescript
import { Notifications } from '@o2s/integrations.mocked/sdk';

import { extendSdk, getSdk } from '@o2s/framework/sdk';

const internalSdk = getSdk({
    apiUrl: '...',
});

export const sdk = extendSdk(internalSdk, {
    notifications: {
        ...Notifications.extend(internalSdk),
    },
});
```

where `Notifications.extend()` is a custom method specified within and integration that extends `notifications` module:

```typescript
import { Sdk } from '@o2s/framework/sdk';

const API_URL = '/notifications';

export const extend = (sdk: Sdk) => ({
    someNewEndpoint: (authorization: string): Promise<string> =>
        sdk.makeRequest({
            method: 'patch',
            url: `${API_URL}`,
            headers: {
                Authorization: `Bearer ${authorization}`,
            },
        }),
});
```

:::tip
Check the [Extending integrations](./integrations/extending-integrations.md) chapter for more information how this extension should be defined.
:::

## Overriding SDK methods

Depending on your requirements, you may have a need to execute some code either before or after SDK methods are run - like caching or additional logging. This is also possible using the `extendSdk`, where you can override the defaults with your own, while still having access to the original methods:

```typescript
export const sdk = extendSdk(internalSdk, {
    notifications: {
        getNotification: (...props) => {
            // execute code before
            const data = internalSdk.notifications.getNotification(...props);
            // execute code after
            return data;
        },
    },
});
```
