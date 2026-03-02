---
sidebar_position: 000
---

# O2S Customer Portal starter

The O2S Customer Portal starter is our default template for building customer self-service applications. It provides a complete foundation with pre-configured Blocks, integrations, and best practices for customer-facing portals.

## Quick start

To create a new customer portal application:

```shell
npx create-o2s-app@latest my-customer-portal --template o2s
```

This command automatically scaffolds the O2S Customer Portal with its default blocks and integrations — no interactive prompts needed.

Running without `--template` will show a prompt asking you to choose between `o2s`, `dxp`, or `custom`.

To customize which blocks and integrations are included, use the `custom` template:

```shell
npx create-o2s-app@latest my-customer-portal --template custom
```

The `custom` template launches an **interactive CLI wizard** that lets you pick blocks, integrations, and configure environment variables step by step. Use it when the O2S Customer Portal preset doesn't fully match your use case — for example, when you only need a subset of blocks, want to swap integrations, or are building something that doesn't neatly fit either the `o2s` or `dxp` starter. You start from a blank slate and hand-pick exactly what goes into your project.

## Options

| Option | Description |
|--------|-------------|
| `--template o2s` | Select the O2S Customer Portal template (pre-selects recommended blocks) |
| `--blocks <list>` | Comma-separated block names to skip the block selection prompt |
| `--integrations <list>` | Comma-separated integration names to skip the integration selection prompt |
| `--skip-install` | Skip the `npm install` step |

**Non-interactive example:**

```shell
npx create-o2s-app@latest my-portal \
  --template o2s \
  --blocks ticket-list,invoice-list \
  --integrations zendesk,strapi-cms \
  --skip-install
```

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
