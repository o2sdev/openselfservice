---
sidebar_position: 100
---

# Component structure

The frontend app component structure is divided into 3 main areas:

```
apps/frontend/src
└───components
│   │
│   └───Component
│       ├───Component.tsx
│       └───Component.types.tsx
│
└───containers
│   │
│   └───Container
│       ├───Container.client.tsx
│       ├───Container.renderer.tsx
│       ├───Container.server.tsx
│       └───Container.types.tsx
│
└───templates
    │
    └───Template
        ├───Template.tsx
        └───Template.types.tsx
```

## Components

Into this group belong all reusable components that are not base building blocks like simple buttons or dropdowns (these are subject to the [UI Library](../ui-library)).

These components are generally kept quite small and simple, and usually delegate actions to the parent component. These components **should not** fetch any data - if that's necessary, it should also be delegated to the parent.

Components that fall under this category include blocks that repeat on many different pages:

- pagination and filters,
- reusable messages,
- generic rich text component.

## Containers

Containers, on the other hand, are more logic-heavy components. They often need framework-specific methods, and can directly access global data. We think of them as "standalone" components that can be put anywhere in the app, and they will:

- fit into the layout,
- fetch their necessary data,
- manage their own internal state,
- communicate with other containers.

:::info
One of the main difference between containers and components is that containers can (and usually should) fetch their own data from API.
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

## Templates and slots

O2S gives you control over which components are rendered on whic page. Because there are pre-defined pages, we are using instead a system of templates with slots for components.

The templates can vary, from simple ones like one- or two-column layouts with just a few generic slots (like left/right ones) to more complex for pages where you want to have more control over what goes where.

The slot system is quite simple - each template can define any number of them, and you can easily place them in the layout you choose:

```typescript jsx
export const TwoColumnTemplate = async ({ data, session }) => {
    return (
        <div className="container">
            <div className="top">
                {renderComponents(data.slots.top, session.accessToken)}
            </div>

            <div>
                <div className="left">
                    {renderComponents(data.slots.left, session.accessToken)}
                </div>

                <div className="right">
                    {renderComponents(data.slots.right, session.accessToken)}
                </div>
            </div>

            <div className="bottom">
                {renderComponents(data.slots.bottom, session.accessToken)}
            </div>
        </div>
    );
};
```

where `renderComponents` handles actual rendering inside each slot, based on components' names from `__typename` field:

```typescript jsx
export const renderComponents = (components, accessToken) => {
    return components.map((component) => {
        switch (component.__typename) {
            case 'FaqComponent':
                return (
                    <FaqRenderer
                        key={component.id}
                        id={component.id}
                        accessToken={accessToken}
                    />
                );
        }
    });
};
```

This allows you to compose new pages via a CMS (where such templates should also be reflected) and easily pick and choose which components you want.

:::note
There is no validation about which components can be placed into which slot - this should be handled on the CMS/integration side (either by technical limits or just by appropriate instructions) to prevent situations when component "does not fit" in a slot.
:::
