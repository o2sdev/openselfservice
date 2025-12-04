---
sidebar_position: 200
---

# Theming

The theming system in O2S allows for dynamic management of the application's appearance directly from the CMS. Themes can be assigned to entire pages as well as individual blocks, providing full flexibility in customizing the user interface.

## Overview

The theming system is based on:
- **CSS definitions** in `packages/ui/src/theme.css` - where colors and styles are defined for each theme
- **CMS configuration** - where themes are registered and assigned to pages/blocks
- **Component application** - where themes are dynamically applied based on data from CMS

## Theme Application Levels

Themes can be applied at three levels:

1. **Global (page)** – theme assigned to the entire page, applied on the `<body>` element
2. **Block** – theme assigned to a specific block, applied on the `Container` component
3. **Default** – base theme defined in `:root` in the `theme.css` file

## Documentation Structure

- **[Defining CSS Themes](./css-themes.md)** – How to define new themes in the `theme.css` file and what variables are available
- **[CMS Configuration](./cms-configuration.md)** – How to configure themes in CMS and assign them to pages/blocks

## Quick Start

If you want to quickly add a new theme:

1. Define the theme in [`theme.css`](./css-themes.md#defining-a-new-theme)
2. Add the theme in [CMS](./cms-configuration.md)
3. Assign the theme to a [page or block](./cms-configuration.md#assigning-theme-to-page)
