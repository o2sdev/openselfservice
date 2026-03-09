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
npm install @o2s/integrations.strapi-cms --workspace=@o2s/configs.integrations
```

## Environment variables

Configure the following environment variables in your API Harmonization server:

| name                | type   | description                                            |
| ------------------- | ------ | ------------------------------------------------------ |
| CMS_STRAPI_BASE_URL | string | the base URL pointing to the domain hosting Strapi CMS |

You can obtain this value from your Strapi instance settings - it should be the URL where your Strapi server is running (e.g., `http://localhost:1337` for local development).

## Content model import

For Strapi we ship a **predefined content model and sample data** that matches how O2S expects pages, templates and blocks to be structured.  
These resources live in a separate companion repository:

- [**Open Self Service** resources](https://github.com/o2sdev/openselfservice-resources/tree/main/packages/cms/strapi/o2s)
- [**DXP Starter Kit** resources](https://github.com/o2sdev/openselfservice-resources/tree/main/packages/cms/strapi/dxp)

The `openselfservice-resources` repo is intentionally separate from the main `openselfservice` codebase – it only contains exports and example data for external tools (like Strapi), so that your application repository stays focused on framework code and integrations.
In practice this includes things like CMS configurations (content models, plugins, sample content), initial products and assets for commerce engines, and CI/CD pipeline templates for deploying O2S.

To import the content model into your own Strapi instance:

1. Choose the folder that matches your starter (`o2s` or `dxp`) in the resources repo.
2. Follow the README in that folder to import the Strapi export (content types and optional data).
3. Start your Strapi instance with the imported model.

For a detailed, step‑by‑step guide (including rationale, repository layout and troubleshooting), see **[How to set up](./how-to-setup.md)**.

## Code generation

After setting up your Strapi instance and configuring the environment variables, you need to generate TypeScript types from your GraphQL schema. Run:

```shell
npm run generate
```

For more details about code generation and GraphQL integration, see the [GraphQL integration documentation](./graphql.md).
