---
sidebar_position: 100
---

# Essentials

The UI Library is kept as an internal package, that currently is available only within the monorepo. It is located under `./packages/ui` folder, and can be imported using the following exports:

- `@o2s/ui/components/*` - React-based UI components (`./src/components/*`),
- `@o2s/ui/globals` - the main CSS file that defines the theme (`./src/globals.css`),
- `@o2s/ui/lib/*` - various utilities and helpers, (`./src/lib/*`),
- `@o2s/ui/tailwind.config` - the Tailwind config that can used in other frotnend apps,
- `@o2s/ui/postcss.config` - PostCSS config to be used in other apps.

## Components

### Installation

#### shadcn/ui components

The components can be created using [shadcn/ui](https://ui.shadcn.com/docs) which means that you have access to their full source code. This gives you full ownership over them, and does not add any overhead that often comes with custom UI libraries.

The library is [pre-configured for monorepo](https://ui.shadcn.com/docs/monorepo) and includes all the necessary files in order to get started extending it. Adding new shadcn/ui-based components is easy and comes down to just running one command inside the `ui` folder:

```shell
npm run generate:component:shadcn
```

which will prompt you for a component you want to add, and generate the specified component in the `./src/components` folder.

:::tip
For available components, check the [shadcn/ui docs](https://ui.shadcn.com/docs/components/accordion). These docs give you component examples, and guide over how to use them.
:::

#### Custom components

You can of course also add a component that is **not** based on `shadcn/ui` just as easily. For that, [a ui-component generator](../../guides/using-generators.md#ui) can be used to quickly set up a scaffolded component that you can then customize to your own needs:

```shell
npm run generate
```

which will prompt you for the name of the component, and create a new file inside `./src/components` folder:

```typescript jsx
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

export const sampleComponentVariants = cva('', {
    variants: {},
    defaultVariants: {},
});

interface SampleComponentProps extends VariantProps<typeof sampleComponentVariants> {}

export const SampleComponent: React.FC<Readonly<SampleComponentProps>> = ({ ...props }) => {
    return <div>SampleComponent</div>;
}
```

### Usage

No mater how the component was added, using it looks the same. All that is required is to import ith from the `ui` package and use it as any other React component:

```typescript jsx
import { Button } from '@o2s/ui/components/button';

...

return (
    <Button variant="secondary" onClick={() => {}}>Click me!<Button>
);
```

The only prerequisite is that the library is declared as a dependency in the `package.json` of the app. This is already pre-configured for the `apps/frontend`, so you don't have to do anything.

### Extending and modifying

You have the option to customize every component to your needs - O2S does not force into any single UI framework. While we have decided to use both `shadcn/ui` and Tailwind (popular tools with a huge communities), you are free even replace them with a completely different approach, e.g. if you want to use regular CSS, CSS Modules or SCSS.

Using shadcn/ui components comes with many advantages, however, this also means that updating such a library is more complex, as it's not as simple as bumping the packages version. Installing the same component again will overwrite it with a new version, which may cause you to lose any customizations you have made to it.

:::info
If you decide to customize the shadcn/ui components, upgrading manually is recommended. You may also check the [diff command](https://ui.shadcn.com/docs/changelog#diff-experimental) that can help you pinpoint what has changed in the new version.
:::

## Global

See the [next chapter](./theming/index.md) for more information about the global CSS file, and how to use it.

## Configs

The UI Library exports the configs for Tailwind and PostCSS to help ensure that both the library and the Frontend app are based on the same config.

The Tailwind config can be used like this:

```js title="apps/frontend/tailwind.config.ts"
import type { Config } from 'tailwindcss';

import uiConfig from '@o2s/ui/tailwind.config';

const config = {
    ...uiConfig,
    presets: [uiConfig],
} satisfies Config;

export default config;
```

PostCSS can be used in a similar way:

```js title="apps/frontend/postcss.config.mjs"
import uiConfig from '@o2s/ui/postcss.config';

/** @type {import('postcss-load-config').Config} */
const config = {
    ...uiConfig,
};

export default config;
```
