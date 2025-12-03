---
sidebar_position: 150
---

# How to set up

This guide will walk you through setting up the Strapi CMS integration in your Open Self Service application.

## Install

The first step is to install the Strapi integration package in your workspace. This package provides all the necessary modules and services to connect your application with Strapi CMS.

Install the package using npm with the following command:

```shell
npm install @o2s/integrations.strapi-cms --workspace=@o2s/api
```

This command installs the integration package in the API workspace, ensuring that all necessary dependencies are available where they're needed.

## Set env variables

After installing the package, you need to configure environment variables that will be used by the API Harmonization server to connect to your Strapi instance. These variables are essential for authentication and API communication.

Configure the following environment variables in your API Harmonization server:

| name                | type   | description                                            | required |
|---------------------|--------|--------------------------------------------------------|----------|
| CMS_STRAPI_BASE_URL | string | the base URL pointing to the domain hosting Strapi CMS | yes      |

You can obtain this value from your Strapi instance:

1. **Base URL**: The URL where your Strapi server is running
   - For local development: `http://localhost:1337`
   - For production: Your deployed Strapi instance URL (e.g., `https://cms.yourdomain.com`)

Make sure to set this variable in your environment configuration file (e.g., `.env`) or your deployment platform's environment variable settings.

## Import content model

Before you can start using the integration, you need to import the content model structure into your Strapi instance. The content model defines the structure of your content types, including Pages, Templates, and Blocks that will be used in your application.

The content model includes predefined content types that are compatible with the Open Self Service framework, such as:
- Page content types for managing routes
- Template content types for defining page layouts
- Block content types for reusable content components

To help you get straight to building, we have prepared an export of both the content model and example content from Strapi. This will significantly simplify the process of setting up your own CMS server by providing you with a predefined structure and sample data to kickstart your project.

With this export, you receive a ready-to-use content model that mirrors O2S's structure, ensuring everything is organized and optimized from the start. From there, you can fully customize both the content model and data to suit your specific needs.

To import the content model, go to our resource repository where you can find detailed instructions. Depending on which starter you use, this is one of:

- [**Open Self Service** resources](https://github.com/o2sdev/openselfservice-resources/tree/main/packages/cms/strapi/o2s)
- [**DXP Starter Kit** resources](https://github.com/o2sdev/openselfservice-resources/tree/main/packages/cms/strapi/dxp)

Follow the instructions in the repository to import the content model into your Strapi instance. This will set up all the necessary content types and their relationships that the integration expects to work with.

## Generate TS types

Once you have set up your Strapi instance and configured the environment variables, you need to generate TypeScript types from your GraphQL schema. This step is crucial for type safety and provides autocomplete support in your IDE.

The code generation process uses [graphql-codegen](https://the-guild.dev/graphql/codegen) to introspect your Strapi GraphQL schema and generate TypeScript types and SDK methods based on your GraphQL queries.

Run the following command to generate the types:

```shell
npm run generate
```

:::info
This command requires that the `CMS_STRAPI_BASE_URL` environment variable is set in order to retrieve the GraphQL schema from Strapi.
:::

This command will:
- Connect to your Strapi instance using the configured environment variables
- Introspect the GraphQL schema from Strapi
- Generate TypeScript types for all content models
- Create strongly typed SDK methods for executing GraphQL operations
- Output the generated code to `./generated/strapi.ts`

The generated types ensure compile-time validation of your queries and provide full type safety when working with Strapi content in your application. For more details about code generation, query structure, and how to use the generated SDK, see the [GraphQL integration documentation](./graphql.md).

