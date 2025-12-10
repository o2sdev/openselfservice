---
sidebar_position: 500
---

# Storybook

Storybook is a development environment and living documentation tool for UI components in Open Self Service. It provides an isolated workspace where you can develop, test, and document components independently from the main application.

## Running Storybook Locally

To start Storybook in your local development environment, run the following command from the root of the project:

```shell
npm run storybook
```

This will start the Storybook development server on `http://localhost:6006` by default.

:::info
Make sure all dependencies are installed before running Storybook. If you encounter any issues, try running `npm install` first. You may also need to build the packages first by running `npm run build` or `npm run dev` to ensure all dependencies are properly compiled.
:::

## Building Storybook

To build a static version of Storybook for deployment:

```shell
npm run build-storybook
```

This command will build both the project and Storybook, creating a static site that can be deployed to any hosting service.

## What's Included

Our Storybook instance includes stories from multiple parts of the codebase:

### Frontend App Components

Components from the main frontend application located in `apps/frontend/src/**/*.stories.*`

### Blocks

Reusable block components from `packages/blocks/**/src/frontend/**/*.stories.*`

### UI Library

UI components from the shared UI package in `packages/ui/**/*.stories.*`

## Public Storybook Instance

We maintain a publicly accessible Storybook instance that is always up-to-date with the latest version:

**🔗 [https://storybook-o2s.openselfservice.com/](https://storybook-o2s.openselfservice.com/)**

This public instance serves as living documentation, making it easy to browse and explore available components and their usage without setting up a local environment.

## Features

Storybook includes several useful addons:

- **Docs Addon**: Automatic documentation generation from component code
- **Accessibility Addon**: Test and ensure components meet accessibility standards
- **Themes Addon**: Switch between different themes to test component appearance

## Creating New Stories

To add a new story for a component, create a file with the `.stories.tsx` extension in the same directory as your component. Storybook will automatically discover and include it.

Example story structure:

```typescript
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { YourComponent } from './YourComponent';

const meta = {
    title: 'Components/YourComponent',
    component: YourComponent,
    tags: ['autodocs'],
} satisfies Meta<typeof YourComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        // component props
    },
};
```

## References

- [Storybook Documentation](https://storybook.js.org/docs)
- [Storybook for Next.js](https://storybook.js.org/docs/get-started/frameworks/nextjs)
- [Writing Stories](https://storybook.js.org/docs/writing-stories)
