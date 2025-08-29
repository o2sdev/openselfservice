---
sidebar_position: 000
---

# O2S Customer Portal starter

The O2S Customer Portal starter is our default template for building customer self-service applications. It provides a complete foundation with pre-configured Blocks, integrations, and best practices for customer-facing portals.

## Quick start

To create a new customer portal application:

```shell
npx create-o2s-app@latest my-customer-portal
```

This command will:
- Download the latest O2S Customer Portal starter
- Install all dependencies
- Set up the project structure with mocked integrations
- Initialize a local SQLite database for authentication

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


