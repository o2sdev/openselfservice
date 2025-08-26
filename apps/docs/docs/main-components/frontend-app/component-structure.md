---
sidebar_position: 100
---

# Component structure

The frontend app component structure is divided into three main areas:

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
│   └───Containers
│       ├───Container.tsx
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

Components that fall under this category include elements that repeat on many different pages:

- pagination and filters,
- reusable messages,
- generic rich text component.

## Containers

Containers are more complex that regular components, and generally not as reusable (all not reusable at all). We don't impose many restrictions here - containers can in some instances fetch/post data or define callbacks without having to delegate this do their parents.

Some examples of containers include:

- header and footer
- sign-in and sign-up forms.

## Templates and slots

O2S gives you control over which components are rendered on whic page. Because there are pre-defined pages, we are using instead a system of templates with slots for components.

The templates can vary, from simple ones like one- or two-column layouts with just a few generic slots (like left/right ones) to more complex for pages where you want to have more control over what goes where.

The slot system is quite simple - each template can define any number of them, and you can easily place them in the layout you choose:

```typescript jsx
export const TwoColumnTemplate = async ({ data, session }) => {
    return (
        <div className="block">
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
