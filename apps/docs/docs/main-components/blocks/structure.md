---
sidebar_position: 100
---

# Structure

Each block is a separate NPM package and therefore comes with all necessary config files, like TypeScript, ESLint and Prettier configs. Each block is also independently published to the public NPM registry, and therefore can be easily versioned, so you are not forced to upgrade unless you want to.

## Folder structure

The idea of a semi-independent block is to consolidate as much code related to fetching data and rendering in one place (both to improve the overall developer experience and to facilitate easier upgrades). Therefore, each block consists of three parts:

- API Harmonization module,
- React server component,
- and SDK methods.

In effect, the folder structure of a block looks like this:

```
packages/blocks/blockName
└───src
    └───api-harmonization
    │   ├───blockName.client.ts
    │   ├───blockName.controller.ts
    │   ├───blockName.mapper.ts
    │   ├───blockName.model.ts
    │   ├───blockName.module.ts
    │   ├───blockName.request.ts
    │   ├───blockName.service.ts
    │   └───index.ts
    │
    └───frontend
    │   ├───BlockName.client.tsx
    │   ├───BlockName.renderer.tsx
    │   ├───BlockName.server.tsx
    │   ├───BlockName.types.ts
    │   └───index.ts
    │
    └───sdk
        ├───blockName.ts
        └───index.ts
```

Let's now dive deeper in each of those parts.

## API Harmonization

This part is designed to be a kind of bridge between the frontend app and the integrations in a similar way as modules within the API Harmonization server. Therefore, it follows the same guidelines and file structure as described in the [Module structure chapter](../harmonization-app/module-structure.md).

The only difference is the purpose of this part — instead of representing pages of utilities, it aims to provide all the necessary data to render a single, standalone block inside the frontend app.

## Frontend

The Frontend part of the block is a bit more logic-heavy component than a simple UI component. They often need framework-specific methods, and can directly access global data. We think of them as "standalone" components that can be put anywhere in the app, and they will:

- fit into the layout,
- fetch their necessary data,
- manage their own internal state,
- communicate with other blocks.

:::info
One of the main differences between blocks and [components](../frontend-app/component-structure.md#components) is that blocks can (and usually should) fetch their own data from API.
:::

### Server component

The server part handles fetching the initial data for the component. This is mostly done via the SDK by calling a single, dedicated method for that component:

```typescript jsx
export const Faq: React.FC<FaqProps> = async ({ id, accessToken, locale }) => {
    const data = await sdk.components.getFaq(...);

    return <FaqPure {...data} />;
};
```

:::note
This component **cannot** be designated with the `use client` annotation - async data fetching only works in server components. This also means that some features like React hooks and `window` object are unavailable.
:::

:::tip
Check [Next.js documentation](https://nextjs.org/docs/app/building-your-application/rendering/server-components) for more information about server components.
:::

### Client component

Client components are responsible for the actual rendering. This is the place where:

- the data returned from the SDK is rendered into the HTML,
- internal state is defined,
- callback functions are implemented.

```typescript jsx
'use client';

export const TicketListPure: React.FC<TicketListPureProps> = ({ ...component }) => {
    const initialFilters = {};

    const [data, setData] = useState(component);
    const [filters, setFilters] = useState(initialFilters);

    const handleFilter = async (newFilters) => {
        const newData = await sdk.components.getTicketList(newFilters);
        setData(newData);
    };

    const handleReset = async () => {
        const newData = await sdk.components.getTicketList(initialFilters);
        setFilters(initialFilters);
        setData(newData);
    };

    return (
        <div>
            <div>
                <Filters onSubmit={handleFilter} onReset={handleReset} />

                <Table>{data}</Table>
            </div>
        </div>
    );
};
```

:::note
While the name can suggest that this component should be marked with `use client`, it's **not always the case** - simpler components without much logic can still be treated as server components. This annotation should be only added when the component needs e.g. keep an internal state or use other browser-only features.
:::

This case can be illustrated with a simple component that only renders the content, without keeping any state and without any event handlers:

```typescript jsx
export const FaqPure: React.FC<FaqPureProps> = ({ ...component }) => {
    const { title, items } = component;

    return (
        <Container>
            <Typography variant="h2" asChild>
                <h2>{title}</h2>
            </Typography>

            <Accordion type="multiple">
                {items.map((item, index) => (
                    <AccordionItem key={index} value={`${index}`}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>
                            <RichText content={item.content} />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </Container>
    );
};
```

### Dynamic component

For now, an additional component between a server and a client is needed for appropriate code splitting by Next.js. This component is very simple, and only exports the client component that is [lazy loaded](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading).

This is only a temporary solution for an [already reported issue](https://github.com/vercel/next.js/issues/61066), and hopefully can be get rid of as soon as it is fixed.

### Renderer

Renderer is responsible for integration with the surrounding framework - in our case, mainly with Next.js. It can be used to customize the loading state that is rendered [while the component is streaming](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#streaming-with-suspense).

```typescript jsx
export const FaqRenderer: React.FC<FaqRendererProps> = ({ id, accessToken }) => {
    const locale = useLocale();

    return (
        <Suspense key={id} fallback={<Loading />}>
            <Faq id={id} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};
```

## SDK

The SDK part is a thin slice of the the [general SDK used globally](../../guides/sdk.md). Each block declares and returns its own instance of the SDK, that is used both:
- internally with the block (including server and client compoennts),
- externally by other frontend apps in cases when you'd like to completely take over the rendering, and re-use only the normalized and aggregated data.
