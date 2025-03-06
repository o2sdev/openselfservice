---
sidebar_position: 200
---

# Theming

Because the UI Library is based on `shadcn/ui`, it fully supports theming in accordance to the [official documentation](https://ui.shadcn.com/docs/theming).

:::note
Be aware that `shadcn/ui` uses the [HSL colors](https://www.smashingmagazine.com/2021/07/hsl-colors-css/) in its approach to theming.
:::

The theme is defined within the `packages/ui/src/globals.css` file, which:

1. Configures the [Tailwind](https://v2.tailwindcss.com/docs/adding-base-styles#using-css).
2. Defines the CSS variables for theming.
3. Prepares the necessary global classes (like body color and background).

This file is then exported from the `ui` package, and can be used in other applications. For example, in the Frontend app it is imported inside the `apps/frontend/src/styles/global.scss` file:

```css
@use '@o2s/ui/globals';
```

The theme variables are divided into two groups, for the default and dark themes:

```css
@layer base {
    :root {
        --background: 0 0% 100%;
        --foreground: 240 6% 10%;
        ...
    }

    .dark {
        --background: 226 57% 21%;
        --foreground: 0 0% 98%;
        ...
    }
}
```

:::tip
To quickly try out how theming works, you can check the [shadcn/ui theme generator](https://ui.shadcn.com/themes) to generate a new color scheme.
:::
