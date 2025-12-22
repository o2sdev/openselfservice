---
sidebar_position: 202
---

# Defining CSS Themes

Themes are defined in the `packages/ui/src/theme.css` file using CSS variables in HSL format. Each theme is a CSS class with the `theme-` prefix containing overridden color variable values.

## File Location

The main file with theme definitions is located at:

```text
packages/ui/src/theme.css
```

This file is exported from the `ui` package and imported in frontend applications:

```css
@import '@o2s/ui/globals';
@import '@o2s/ui/theme';
```

## Theme Format

Each theme is defined as a CSS class with the `theme-` prefix:

```css
.theme-{name} {
    --background: hsl(...);
    --foreground: hsl(...);
    /* ... more variables ... */
}
```

### Default Theme

The default theme is defined in the `:root` selector.

:::info Learn More
O2S uses the shadcn/ui theming approach with CSS variables. For more information:

- [shadcn/ui Theming Documentation](https://ui.shadcn.com/docs/theming) - explains the CSS variable approach and color system
- [Tailwind CSS - Using CSS Variables](https://tailwindcss.com/docs/customizing-colors#using-css-variables) - how to integrate CSS variables with Tailwind
  :::

```1:59:packages/ui/src/theme.css
:root {
    --background: hsl(0 0% 100%);
    --foreground: hsl(225 9% 9%);
    --card: hsl(220 13% 95%);
    --card-foreground: hsl(240 10% 4%);
    --popover: hsl(0 0% 100%);
    --popover-foreground: hsl(240 10% 4%);
    --primary: hsl(228 66% 50%);
    --primary-foreground: hsl(0 0% 100%);
    --secondary: hsl(228 71% 91%);
    --secondary-foreground: hsl(0 0% 0%);
    --muted: hsl(232 12% 87%);
    --muted-foreground: hsl(217 19% 27%);
    --accent: hsl(214 95% 93%);
    --accent-foreground: hsl(240 6% 10%);
    --destructive: hsl(346 100% 41%);
    --destructive-foreground: hsl(0 0% 100%);
    --border: hsl(232 12% 87%);
    --input: hsl(230 6% 81%);
    --ring: hsl(240 6% 10%);
    --radius: 0.5rem;
    --chart-1: hsl(173 58% 39%);
    --chart-2: hsl(12 76% 61%);
    --chart-3: hsl(197 37% 24%);
    --chart-4: hsl(43 74% 66%);
    --chart-5: hsl(27 87% 67%);
    --sidebar-background: hsl(0 0% 100%);
    --sidebar-foreground: hsl(217 19% 27%);
    --sidebar-primary: hsl(240 6% 10%);
    --sidebar-primary-foreground: hsl(0 0% 98%);
    --sidebar-accent: hsl(214 95% 93%);
    --sidebar-accent-foreground: hsl(240 6% 10%);
    --sidebar-border: hsl(220 13% 91%);
    --sidebar-ring: hsl(240 5% 65%);
    --navbar-background: hsl(234 25% 92%);
    --navbar-foreground: hsl(215 28% 17%);
    --navbar-primary: hsl(228 100% 19%);
    --navbar-primary-foreground: hsl(0 0% 100%);
    --navbar-border: hsl(232 12% 87%);
    --navbar-muted: hsl(228 100% 19%);
    --navbar-accent-background: hsl(214 95% 93%);
    --navbar-accent-foreground: hsl(224 64% 33%);
    --navbar-sub-background: hsl(228 32% 15%);
    --navbar-sub-foreground: hsl(0 0% 100%);
    --navbar-sub-accent: hsl(228 96% 29%);
    --footer-background: hsl(234 25% 92%);
    --footer-foreground: hsl(228 100% 19%);
    --footer-muted: hsl(240 2% 20%);
    --footer-border: hsl(230 6% 81%);
    --navbar-sub-muted: hsl(228 78% 35%);
    --tertiary: hsl(0 0% 100%);
    --tertiary-foreground: hsl(228 100% 19%);
    --tertiary-border: hsl(230 6% 81%);
    --badge-default-background: hsl(186 100% 28%);
```

## Available CSS Variables

### Basic Colors

- `--background` – main background
- `--foreground` – main text color
- `--card` – card background
- `--card-foreground` – card text color
- `--popover` – popover background
- `--popover-foreground` – popover text color

### Interactive Colors

- `--primary` – primary color (buttons, links)
- `--primary-foreground` – text color on primary element
- `--secondary` – secondary color
- `--secondary-foreground` – text color on secondary element
- `--tertiary` – tertiary color
- `--tertiary-foreground` – text color on tertiary element
- `--tertiary-border` – tertiary border color
- `--tertiary-hover` – tertiary hover color
- `--accent` – accent color
- `--accent-foreground` – text color on accent element
- `--muted` – muted color
- `--muted-foreground` – muted text color
- `--destructive` – destructive color (errors, deletion)
- `--destructive-foreground` – text color on destructive element

### Form Colors

- `--input` – input border color
- `--border` – border color
- `--ring` – focus ring color

### Navigation Colors

- `--navbar-background` – navbar background
- `--navbar-foreground` – navbar text color
- `--navbar-primary` – navbar primary color
- `--navbar-primary-foreground` – navbar primary text color
- `--navbar-border` – navbar border color
- `--navbar-muted` – navbar muted color
- `--navbar-accent-background` – navbar accent background
- `--navbar-accent-foreground` – navbar accent text color
- `--navbar-sub-background` – submenu background
- `--navbar-sub-foreground` – submenu text color
- `--navbar-sub-accent` – submenu accent color
- `--navbar-sub-muted` – submenu muted color

### Sidebar Colors

- `--sidebar-background` – sidebar background
- `--sidebar-foreground` – sidebar text color
- `--sidebar-primary` – sidebar primary color
- `--sidebar-primary-foreground` – sidebar primary text color
- `--sidebar-accent` – sidebar accent color
- `--sidebar-accent-foreground` – sidebar accent text color
- `--sidebar-border` – sidebar border color
- `--sidebar-ring` – sidebar focus ring color

### Footer Colors

- `--footer-background` – footer background
- `--footer-foreground` – footer text color
- `--footer-muted` – footer muted color
- `--footer-border` – footer border color

### Badge Colors

- `--badge-default-background` – default badge background
- `--badge-default-foreground` – default badge text color
- `--badge-secondary-background` – secondary badge background
- `--badge-secondary-foreground` – secondary badge text color

### Chart Colors

- `--chart-1` to `--chart-5` – colors for charts

### Other

- `--radius` – border radius (value in rem)

## Mapping to Tailwind

CSS variables are mapped to Tailwind classes in the `globals.css` file:

```17:56:packages/ui/src/globals.css
    --color-border: var(--border);
    --color-input: var(--input);
    --color-ring: var(--ring);
    --color-background: var(--background);
    --color-foreground: var(--foreground);

    --color-primary: var(--primary);
    --color-primary-foreground: var(--primary-foreground);

    --color-secondary: var(--secondary);
    --color-secondary-foreground: var(--secondary-foreground);

    --color-tertiary: var(--tertiary);
    --color-tertiary-foreground: var(--tertiary-foreground);
    --color-tertiary-border: var(--tertiary-border);
    --color-tertiary-hover: var(--tertiary-hover);

    --color-destructive: var(--destructive);
    --color-destructive-foreground: var(--destructive-foreground);

    --color-info: var(--info);
    --color-info-foreground: var(--info-foreground);
    --color-info-hover: var(--info-hover);
    --color-info-foreground-hover: var(--info-foreground-hover);

    --color-success: var(--success);
    --color-success-foreground: var(--success-foreground);
    --color-success-hover: var(--success-hover);
    --color-success-foreground-hover: var(--success-foreground-hover);

    --color-warning: var(--warning);
    --color-warning-foreground: var(--warning-foreground);
    --color-warning-hover: var(--warning-hover);
    --color-warning-foreground-hover: var(--warning-foreground-hover);

    --color-muted: var(--muted);
    --color-muted-foreground: var(--muted-foreground);

    --color-accent: var(--accent);
    --color-accent-foreground: var(--accent-foreground);
```

This allows you to use Tailwind classes such as `bg-background`, `text-foreground`, `bg-primary`, etc., which will automatically use values from the current theme.

## Defining a New Theme

To add a new theme:

1. Open the `packages/ui/src/theme.css` file
2. Add a new class with the `theme-` prefix:

```css
.theme-corporate {
    --background: hsl(0 0% 100%);
    --foreground: hsl(240 6% 10%);
    --primary: hsl(220 90% 50%);
    --primary-foreground: hsl(0 0% 100%);
    /* ... remaining variables ... */
}
```

3. Make sure you've defined all required variables (or at least those you want to override)
4. The theme name (without the `theme-` prefix) must match the name in CMS

:::tip
You can use the [shadcn/ui theme generator](https://ui.shadcn.com/themes) to generate a color scheme for a new theme.
:::

## HSL Format

All colors use the HSL format (Hue, Saturation, Lightness):

```css
--primary: hsl(220 90% 50%);
/* Hue: 220, Saturation: 90%, Lightness: 50% */
```

The format without commas is valid in CSS (newer syntax). If you need older syntax, you can use:

```css
--primary: hsl(220, 90%, 50%);
```

## Next Steps

- See how to [configure a theme in CMS](./cms-configuration.md)
