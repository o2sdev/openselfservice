---
sidebar_position: 300
---

# Creating the frontend component

Once the harmonizing component is ready, the next step is to use [a generator](../using-generators.md#frontend) to create a scaffolded frontend container, with a consistend name (`TicketsSummary`). It will generate a new folder: `./apps/frontend/src/containers/TicketsSummary/`.

### Updating the component resolver

The first thing we need to do is to update the `renderComponents` function inside `apps/frontend/src/utils/renderComponents.tsx` file so that it includes the newly added [renderer](../../main-components/frontend-app/component-structure.md#renderer):

```typescript jsx
import { TicketsSummaryRenderer } from '@/containers/TicketsSummary/TicketsSummary.renderer';

export const renderComponents = (components, slug, accessToken) => {
    return components.map((component) => {
        switch (component.__typename as Modules.Page.Model.Components) {
            case 'TicketsSummaryComponent':
                return (
                    <TicketsSummaryRenderer
                        key={component.id}
                        id={component.id}
                        accessToken={accessToken}
                    />
                );
        }
    });
};

```

### Fetch component data

Next, we need to fetch the initial data required to actually render the component.

Let's start with extending the SDK with a new method that will fetch the harmonizing component. We need to create a new file in the `./src/api/components` folder, called `tickets-summary.ts`:

```typescript
import { Components, Headers } from '@o2s/framework';
import { Sdk } from '@o2s/framework/sdk';

// the URL should be taken from the component, and not be hardcoded
const API_URL = Components.TicketsSummary.URL;

export const ticketsSummary = (sdk: Sdk) => ({
    components: {
        // the name of the method should be consistend with the name of the component
        getTicketsSummary: (
            // every argument should be strongly typed and use the types
            // exported from the API Harmonization server
            query: Components.TicketsSummary.Request.GetTicketsSummaryComponentQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Components.TicketsSummary.Model.TicketsSummaryComponent> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    ...headers,
                    Authorization: `Bearer ${authorization}`,
                },
                params: query,
            }),
    },
});
```

which we can then use in the `./src/api/sdk.ts` file where the SDK is initialized:

```typescript
import { extendSdk, getSdk } from '@o2s/framework/sdk';

import { ticketsSummary } from '@/api/components/tickets-summmary';

export const sdk = extendSdk(internalSdk, {
    components: {
        getTicketsSummary: ticketsSummary(internalSdk).components.getTicketsSummary,
    },
});
```

This allows us to use this method anywhere in the frontend app, but at the moment we only need it in the server component located at `./src/containers/TicketSummary/ticketsSummary.server.tsx`. It should already be prepared correctly after that file was generated:

```typescript jsx
const data = await sdk.components.getTicketsSummary(
    {
        id,
    },
    { 'x-locale': locale },
    accessToken,
);
```

### Render the content

In the last step we need to display the component. Let's edit the `./ticketsSummary.client.tsx` file and render the content in a simple layout:

```typescript jsx
export const TicketsSummaryPure: React.FC<TicketsSummaryPureProps> = ({ ...component }) => {
    const {
        title,
        tickets: { closed, open, latest },
    } = component;

    return (
        <Card>
            <CardHeader>
                <Typography variant="h2" asChild>
                    <h1>{title}</h1>
                </Typography>
            </CardHeader>
            <CardContent>
                <TextItem title={open.label}>{open.value}</TextItem>
                <TextItem title={closed.label}>{closed.value}</TextItem>

                <Typography variant="h4" asChild>
                    <h3>{latest.title}</h3>
                </Typography>

                <TextItem title={latest.topic.label}>{latest.topic.value}</TextItem>
                <TextItem title={latest.type.label}>{latest.type.value}</TextItem>
                <TextItem title={'latest.editDate.label'}>{latest.editDate.value}</TextItem>
            </CardContent>
            <CardFooter></CardFooter>
        </Card>
    );
};
```
