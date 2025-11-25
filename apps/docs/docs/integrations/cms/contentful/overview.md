---
sidebar_position: 100
---

# Contentful CMS

This integration provides a full integration with [Contentful CMS](https://www.contentful.com/).

## Installation

First, install the Contentful integration package:

```shell
npm install @o2s/integrations.contentful-cms --workspace=@o2s/api
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

To start, go to our resource repository where you can find the instructions on how to import the content model into your own Contentful space. Depending on which starter you use, this is one of:

- [**Open Self Service** resources](https://github.com/o2sdev/openselfservice-resources/tree/main/packages/cms/contentful/o2s)
- [**DXP Starter Kit** resources](https://github.com/o2sdev/openselfservice-resources/tree/main/packages/cms/contentful/dxp)

## Code generation

After setting up your Contentful space and configuring the environment variables, you need to generate TypeScript types from your GraphQL schema. Run:

```shell
npm run generate
```

## Supported modules

This integration handles the following base modules from the framework:

- cms

## Dependencies

This integration relies on the following base modules from the framework:

- cache

## GraphQL integration

To connect with Contentful, the [GraphQL API](https://www.contentful.com/developers/docs/references/graphql/) is used as the primary API. For this purpose, a dedicated [GraphqlService](https://github.com/o2sdev/openselfservice/blob/main/packages/integrations/contentful-cms/src/modules/graphql/graphql.service.ts) is used that relies on:

- [graphql-request](https://www.npmjs.com/package/graphql-request) package as a GraphQL client,
- [graphql-codegen](https://the-guild.dev/graphql/codegen) for TypeScript code generation, based on GraphQL schema and queries.

The integration uses a dual SDK approach with separate clients for published content (Delivery API) and draft content (Preview API), allowing seamless switching between published and draft content based on the `preview` parameter.

For more details about GraphQL integration, code generation, and query structure, see the [GraphQL documentation](./graphql.md).

## REST Delivery API

The integration also uses Contentful's REST Delivery API for specific operations that are not available through GraphQL, such as retrieving locale information via the `getLocales` method.

## Live Preview

Contentful integration includes built-in support for Live Preview, which allows content editors to see their changes in real-time. The implementation uses a metadata pattern to bridge the gap between our normalized data model and Contentful's content structure.

For detailed information about Live Preview implementation, setup, and usage, see the [Live Preview documentation](./live-preview.md).

## Cache integration

In order to allow further optimizations, the `cache` module is used for caching retrieved CMS entries (as long as caching is enabled globally).

Cached entries are [stringified](https://www.npmjs.com/package/flatted) and saved using the `{id}-{locale}` key to make them fully unique within the caching service.

## Additional resources

For a detailed implementation story and technical deep-dive, see our blog article: [Integrating Contentful with Live Preview into composable apps](/blog/integrating-contentful-with-live-preview-into-composable-apps).
