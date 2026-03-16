---
sidebar_position: 000
---

# O2S Customer Portal starter

The O2S Customer Portal starter is our default template for building customer self-service applications. It provides a complete foundation with pre-configured Blocks, integrations, and best practices for customer-facing portals.

## Quick start

To create a new customer portal application:

```shell
npx create-o2s-app my-customer-portal --template o2s
```

This command automatically scaffolds the O2S Customer Portal with its default blocks and integrations — no interactive prompts needed.

For all available CLI options (custom template, non-interactive mode, etc.), see the [Installation](../../getting-started/installation.md#cli-options) guide.

## What's included

- **Frontend app**: Next.js application with pre-configured [Blocks](./blocks.md)
- **API Harmonization server**: NestJS server for API integration
- **Mocked integration**: Ready-to-use mocked data for development. Replace it with your preferred real APIs.
- **Authentication**: Local SQLite-based authentication system
- **UI Library**: Pre-built components and design system. Storybook coming soon.

## Documentation

- **[Blocks and content model](./blocks.md)** - Docs on O2S Blocks and CMS content types
- **[O2S Storybook](http://storybook-o2s.openselfservice.com)** - Complete documentation of all O2S Blocks in Storybook

## Next steps

After creating your project, follow the [Getting Started](../../getting-started/overview.md) guide to run and customize your application.

For detailed customization options, see the [Customization](../../guides/customization.md) section.
