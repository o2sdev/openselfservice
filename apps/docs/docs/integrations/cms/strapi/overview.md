---
sidebar_position: 100
---

# Strapi CMS

this package provides a full integration with [Strapi CMS](https://strapi.io/), enabling comprehensive content management capabilities for your application. The integration supports content management, page management, and content localization, allowing you to create and manage multilingual content with ease.

## In this section

- [How to set up](./how-to-setup.md) - Step-by-step guide for setting up the Strapi CMS integration
- [Features](./features.md) - Overview of features supported by the Strapi CMS integration
- [Supported blocks](./blocks.md) - Implementation status of all blocks available in the O2S framework
- [Content model](./content-model.md) - Structure and organization of the Strapi content model
- [GraphQL integration](./graphql.md) - Detailed information about GraphQL integration, code generation, and query structure

## Installation

First, install the Strapi integration package:

```shell
npm install @o2s/integrations.strapi-cms --workspace=@o2s/api
```

## Environment variables

Configure the following environment variables in your API Harmonization server:

| name                | type   | description                                            |
| ------------------- | ------ | ------------------------------------------------------ |
| CMS_STRAPI_BASE_URL | string | the base URL pointing to the domain hosting Strapi CMS |

You can obtain this value from your Strapi instance settings - it should be the URL where your Strapi server is running (e.g., `http://localhost:1337` for local development).

## Content model import

To start, go to our resource repository where you can find the instructions on how to import the content model into your own Strapi instance:

- [**Open Self Service** resources](https://github.com/o2sdev/openselfservice-resources/tree/main/packages/cms/strapi/o2s)
- [**DXP Starter Kit** resources](https://github.com/o2sdev/openselfservice-resources/tree/main/packages/cms/strapi/dxp)

## Code generation

After setting up your Strapi instance and configuring the environment variables, you need to generate TypeScript types from your GraphQL schema. Run:

```shell
npm run generate
```

For more details about code generation and GraphQL integration, see the [GraphQL integration documentation](./graphql.md).
