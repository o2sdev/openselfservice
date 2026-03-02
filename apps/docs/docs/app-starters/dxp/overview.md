---
sidebar_position: 000
---

# DXP Frontend Starter

The DXP Frontend Starter is designed for building knowledge bases, marketing portals, and Digital Experience Platforms (DXP) of any size.
It provides a foundation for content-rich applications that can evolve into comprehensive digital experience solutions.
Its features can be extended with Blocks or integrations O2S provides or your own.

## Quick start

To create a new DXP application:

```shell
npx create-o2s-app@latest my-dxp-portal --template dxp
```

This command automatically scaffolds the DXP starter with its default blocks and integrations — no interactive prompts needed.

Running without `--template` will show a prompt asking you to choose between `o2s`, `dxp`, or `custom`.

If you want to customize which blocks and integrations are included, use the `custom` template instead:

```shell
npx create-o2s-app@latest my-dxp-portal --template custom
```

The `custom` template launches an **interactive CLI wizard** that lets you pick blocks, integrations, and configure environment variables step by step. Use it when the DXP preset doesn't fully match your use case — for example, when you only need a subset of blocks, want to swap integrations, or are building something that doesn't neatly fit either the `dxp` or `o2s` starter. You start from a blank slate and hand-pick exactly what goes into your project.

## Options

| Option | Description |
|--------|-------------|
| `--template dxp\|o2s\|custom` | Select a template: `dxp` (pre-selects DXP blocks), `o2s` (pre-selects Customer Portal blocks), or `custom` (interactive wizard to hand-pick blocks and integrations from scratch) |
| `--blocks <list>` | Comma-separated block names to skip the block selection prompt |
| `--integrations <list>` | Comma-separated integration names to skip the integration selection prompt |
| `--skip-install` | Skip the `npm install` step |

**Non-interactive example:**

```shell
npx create-o2s-app@latest my-dxp \
  --template dxp \
  --blocks article-list,article-details \
  --integrations strapi-cms \
  --skip-install
```

## What's included

- **Content-focused frontend**: Next.js application optimized for content delivery. See the [documentation](./blocks.md) of included Blocks below.
- **Marketing capabilities**: Blocks consisting of UI and content models for building marketing sites or landing pages
- **Knowledge base features**: Pre-configured blocks for articles, categories, and search
- **DXP foundation**: Scalable architecture for evolving into full DXP solutions
- **Content management**: Integration with headless CMS platforms
- **SEO optimization**: Built-in SEO features and meta management

## Documentation

All Blocks that you can use are documented in our Storybook:

- **[Blocks and content model](./blocks.md)** - Docs on our DXP Blocks and CMS content types
- **[DXP Starter Storybook](http://storybook-dxp.openselfservice.com)** - Complete documentation of all our DXP Blocks in Storybook

## Next steps

After creating your project, follow the [Getting Started](../../getting-started/overview.md) guide to run and customize your application.

For detailed customization options, see the [Customization](../../guides/customization.md) section.
