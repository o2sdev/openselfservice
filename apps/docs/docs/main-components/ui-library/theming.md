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

This file is then exported from the `ui` package, and can be used in other applications. For example, in the Frontend app it is imported inside the `apps/frontend/src/styles/global.css` file:

```css
@import '@o2s/ui/globals';
@import '@o2s/ui/theme';
```

## globals.css

The main purpose of the globals file is to:

1. Specify paths for the Tailwind to analyze for the existence of its classes. By default, it looks into all folders that may contain any React components, but you can extend it according to your needs:
   ```css
    @source "../../../apps/frontend/src/**/*.{js,ts,jsx,tsx}";
    @source "../../../packages/ui/src/**/*.{ts,tsx}";
    @source "../../../packages/blocks/**/*.{js,ts,jsx,tsx}";
    @source "../../../node_modules/@o2s/**/*.{js,ts,jsx,tsx}";
    @source "../../../node_modules/@dxp/**/*.{js,ts,jsx,tsx}";
    ```
2. Configure Tailwind, including custom variables, utilities or animations.

## theme.css

This file contains just the variables defining the color schemes for the Frontend app. By default, the theme file contains one default color theme:

```css
:root {
    --background: 0 0% 100%;
    --foreground: 240 6% 10%;
    ...
}
```

but it can easily be extended by further themes by simple adding new classes containing new colors:

```css
:root {
    --background: 0 0% 100%;
    --foreground: 240 6% 10%;
    ...
}

.dark {
    --background: 240 6% 10%;
    --foreground: 0 0% 100%;
    ...
}
```

To apply the new theme, you can set the CSS class on any element you want to be themed - either on the `body` (so that the entire page gets new theme) or on specific components or blocks.

:::tip
To quickly try out how theming works, you can check the [shadcn/ui theme generator](https://ui.shadcn.com/themes) to generate a new color scheme.
:::
