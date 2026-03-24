---
sidebar_position: 150
---

# How to set up

This guide will walk you through setting up the Strapi CMS integration in your Open Self Service application.

## Install

The first step is to install the Strapi integration package in your workspace. This package provides all the necessary modules and services to connect your application with Strapi CMS.

Install the package using npm with the following command:

```shell
npm install @o2s/integrations.strapi-cms --workspace=@o2s/configs.integrations
```

This command installs the integration package in the integrations config workspace, where integration packages are configured and resolved.

## Configuration

After installing the package, you need to configure the integration in the `@o2s/configs.integrations` package. This tells the framework to use Strapi CMS instead of the default mocked integration.

### Step 1: Update the CMS integration config

Open the file `packages/configs/integrations/src/models/cms.ts` and replace the import:

**Before (using mocked integration):**

```typescript
import { Config, Integration } from '@o2s/integrations.mocked/integration';
```

**After (using Strapi CMS integration):**

```typescript
import { Config, Integration } from '@o2s/integrations.strapi-cms/integration';
```

The complete file should look like this:

```typescript
import { Config, Integration } from '@o2s/integrations.strapi-cms/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const CmsIntegrationConfig: ApiConfig['integrations']['cms'] = Config.cms!;

export import Service = Integration.CMS.Service;
export import Request = Integration.CMS.Request;
export import Model = Integration.CMS.Model;
```

### Step 2: Update the Articles integration config (if using articles)

If you plan to use articles functionality, you also need to update `packages/configs/integrations/src/models/articles.ts`:

```typescript
import { Config, Integration } from '@o2s/integrations.strapi-cms/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const ArticlesIntegrationConfig: ApiConfig['integrations']['articles'] = Config.articles!;

export import Service = Integration.Articles.Service;
export import Request = Integration.Articles.Request;
export import Model = Integration.Articles.Model;
```

### Step 3: Verify AppConfig

The `AppConfig` in `apps/api-harmonization/src/app.config.ts` should already reference the integration configs. You don't need to modify this file - it automatically uses the configuration from `@o2s/configs.integrations`.

## Set env variables

After installing the package, you need to configure environment variables that will be used by the API Harmonization server to connect to your Strapi instance. These variables are essential for authentication and API communication.

Configure the following environment variables in your API Harmonization server:

| name                | type   | description                                            | required |
| ------------------- | ------ | ------------------------------------------------------ | -------- |
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

To help you get straight to building, we provide **ready-made exports of the content model and example content** in a separate companion repository.

### About the `openselfservice-resources` repository

We intentionally keep content model exports and example data **outside of the main `openselfservice` repo**:

- the main repo focuses on **application code, framework and integrations**,
- the [`openselfservice-resources`](https://github.com/o2sdev/openselfservice-resources) repo acts as a base of **resources for external tools** integrated with O2S – for example CMS configuration (content models, plugins, sample content), initial products and assets for commerce engines, or CI/CD templates for deploying O2S.

This separation keeps the main codebase lightweight while still giving you a convenient, ready-to-use starting point for your own CMS setup. You are free to fork or copy the resources and adapt them to your own project.

### Choosing the right content model export

Depending on which starter you use, you should pick one of the following folders in the resources repo:

- [**Open Self Service** resources](https://github.com/o2sdev/openselfservice-resources/tree/main/packages/cms/strapi/o2s) – default O2S demo / starter setup,
- [**DXP Starter Kit** resources](https://github.com/o2sdev/openselfservice-resources/tree/main/packages/cms/strapi/dxp) – extended DXP starter variant.

Each folder includes:

- Strapi export of the **content model** (content types and relations),
- optional **example content** to quickly get a working demo.

### Step-by-step: importing the content model

1. **Clone the resources repository (optional but recommended)**
    ```bash
    git clone https://github.com/o2sdev/openselfservice-resources.git
    cd openselfservice-resources
    ```
2. **Locate the Strapi export for your starter**
    - for the default O2S setup: `packages/cms/strapi/o2s`,
    - for the DXP starter: `packages/cms/strapi/dxp`.
3. **Follow the README in that folder**  
   The folder contains instructions specific to the given export (e.g. how to use Strapi’s import/export capabilities for content types and data).
4. **Import the content model into your Strapi instance**  
   After following the export-specific steps, your Strapi instance should have all required content types (pages, templates, blocks) and relationships expected by the O2S integration.
5. **(Optional) Customize the model and content**  
   Treat the imported model as a starting point. You can adjust fields, add new types or modify sample content to match your use case – just remember that some changes may require updating queries or types on the O2S side.

We provide **content models and example data**, but we **do not manage the full configuration** of your Strapi server (deployment, auth, plugins, backups, etc.). Those aspects stay in your control.

Once the content model is imported and your Strapi instance is running, you can proceed to generate TypeScript types.

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
