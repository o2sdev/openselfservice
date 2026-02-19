---
sidebar_position: 100
---

# Contentful CMS

this package provides a full integration with [Contentful CMS](https://www.contentful.com/), enabling comprehensive content management capabilities for your application. The integration supports content management, page management, and content localization, allowing you to create and manage multilingual content with ease. Additionally, Contentful integration includes built-in support for Live Preview, enabling content editors to see their changes in real-time as they edit content in the Contentful web app.

## In this section

- [How to set up](./how-to-setup.md) - Step-by-step guide for setting up the Contentful CMS integration
- [Features](./features.md) - Overview of features supported by the Contentful CMS integration
- [Supported blocks](./blocks.md) - Implementation status of all blocks available in the O2S framework
- [Content model](./content-model.md) - Structure and organization of the Contentful content model
- [GraphQL integration](./graphql.md) - Detailed information about GraphQL integration, code generation, and query structure
- [Live Preview](./live-preview.md) - Implementation details, setup, and usage of Live Preview functionality

## Installation

First, install the Contentful integration package:

```shell
npm install @o2s/integrations.contentful-cms --workspace=@o2s/configs.integrations --workspace=@o2s/frontend
```

## Environment variables

Configure the following environment variables in your API Harmonization server:

| name             | type   | description                                       | required                       |
| ---------------- | ------ | ------------------------------------------------- | ------------------------------ |
| CF_SPACE_ID      | string | the Contentful space ID                           | yes                            |
| CF_ENV           | string | the Contentful environment ID (default: `master`) | yes                            |
| CF_TOKEN         | string | the Contentful delivery API token                 | yes                            |
| CF_PREVIEW_TOKEN | string | the Contentful preview API token                  | no (required for Live Preview) |

You can obtain these values from your Contentful space settings:

1. **Space ID**: Found in your Contentful space settings under "General"
2. **Environment ID**: Usually `master` for production, or create custom environments
3. **Delivery API token**: Create in Contentful under "Settings" → "API keys" → "Content delivery / preview tokens"
4. **Preview API token**: Create in Contentful under "Settings" → "API keys" → "Content preview tokens"

## Content model import

To start, go to our resource repository where you can find the instructions on how to import the content model into your own Contentful space:

- [**Open Self Service** resources](https://github.com/o2sdev/openselfservice-resources/tree/main/packages/cms/contentful/o2s)

## Code generation

After setting up your Contentful space and configuring the environment variables, you need to generate TypeScript types from your GraphQL schema. Run:

```shell
npm run generate
```

## Additional resources

For a detailed implementation story and technical deep-dive, see our blog article: [Integrating Contentful with Live Preview into composable Next.js apps](/blog/integrating-contentful-with-live-preview-into-composable-nextjs-apps).
