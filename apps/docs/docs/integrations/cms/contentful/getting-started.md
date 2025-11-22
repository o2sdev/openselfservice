---
sidebar_position: 100
---

# Getting started

To help you get straight to building, we have prepared an export of both the content model and example content from **[Contentful](https://www.contentful.com/)**. This will significantly simplify the process of setting up your own CMS space by providing you with a predefined structure and sample data to kickstart your project.

With this export, you receive a ready-to-use content model that mirrors O2S's structure, ensuring everything is organized and optimized from the start. From there, you can fully customize both the content model and data to suit your specific needs.

## Installation

First, install the Contentful integration package:

```shell
npm install @o2s/integrations.contentful-cms --workspace=@o2s/api
```

## Environment variables

Configure the following environment variables in your API Harmonization server:

| name              | type   | description                                    | required |
|-------------------|--------|------------------------------------------------|----------|
| CF_SPACE_ID       | string | the Contentful space ID                       | yes      |
| CF_ENV             | string | the Contentful environment ID (default: `master`) | yes      |
| CF_TOKEN           | string | the Contentful delivery API token             | yes      |
| CF_PREVIEW_TOKEN   | string | the Contentful preview API token               | no (required for Live Preview) |

You can obtain these values from your Contentful space settings:

1. **Space ID**: Found in your Contentful space settings under "General"
2. **Environment ID**: Usually `master` for production, or create custom environments
3. **Delivery API token**: Create in Contentful under "Settings" → "API keys" → "Content delivery / preview tokens"
4. **Preview API token**: Create in Contentful under "Settings" → "API keys" → "Content preview tokens"

## Content model import

To start, go to our resource repository where you can find the instructions on how to import the content model into your own Contentful space. Depending on which starter you use, this is one of:

- [**Open Self Service** resources](https://github.com/o2sdev/openselfservice-resources/tree/main/packages/cms/contentful/o2s)
- [**DXP Starter Kit** resources](https://github.com/o2sdev/openselfservice-resources/tree/main/packages/cms/contentful/dxp)

## Code generation

After setting up your Contentful space and configuring the environment variables, you need to generate TypeScript types from your GraphQL schema. Run:

```shell
npm run generate
```

:::info
This command requires that the `CF_SPACE_ID`, `CF_ENV`, and `CF_TOKEN` environment variables are set in order to retrieve the GraphQL schema from Contentful.
:::

For detailed information about code generation, GraphQL queries, and the generated SDK, see the [GraphQL documentation](./graphql.md#code-generation).

