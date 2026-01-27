---
sidebar_position: 150
---

# How to set up

This guide will walk you through setting up the Contentful CMS integration in your Open Self-Service application.

## Install

The first step is to install the Contentful integration package in your workspace. This package provides all the necessary modules and services to connect your application with Contentful CMS.

Install the package using npm with the following command:

```shell
npm install @o2s/integrations.contentful-cms --workspace=@o2s/configs.integrations --workspace=@o2s/frontend
```

This command installs the integration package in both the integrations configuration workspace and the frontend workspace, ensuring that all necessary dependencies are available where they're needed.

## Configuration

After installing the package, you need to configure the integration in the `@o2s/configs.integrations` package. This tells the framework to use Contentful CMS instead of the default mocked integration.

### Step 1: Update the CMS integration config

Open the file `packages/configs/integrations/src/models/cms.ts` and replace the import:

**Before (using mocked integration):**

```typescript
import { Config, Integration } from '@o2s/integrations.mocked/integration';
```

**After (using Contentful CMS integration):**

```typescript
import { Config, Integration } from '@o2s/integrations.contentful-cms/integration';
```

The complete file should look like this:

```typescript
import { Config, Integration } from '@o2s/integrations.contentful-cms/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const CmsIntegrationConfig: ApiConfig['integrations']['cms'] = Config.cms!;

export import Service = Integration.CMS.Service;
export import Request = Integration.CMS.Request;
export import Model = Integration.CMS.Model;
```

### Step 2: Update the Articles integration config (if using articles)

If you plan to use articles functionality, you also need to update `packages/configs/integrations/src/models/articles.ts`:

```typescript
import { Config, Integration } from '@o2s/integrations.contentful-cms/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const ArticlesIntegrationConfig: ApiConfig['integrations']['articles'] = Config.articles!;

export import Service = Integration.Articles.Service;
export import Request = Integration.Articles.Request;
export import Model = Integration.Articles.Model;
```

### Step 3: Verify AppConfig

The `AppConfig` in `apps/api-harmonization/src/app.config.ts` should already reference the integration configs. You don't need to modify this file - it automatically uses the configuration from `@o2s/configs.integrations`.

## Set env variables

After installing the package, you need to configure environment variables that will be used by the API Harmonization server to connect to your Contentful space. These variables are essential for authentication and space identification.

Configure the following environment variables in your API Harmonization server:

| name             | type   | description                                       | required                       |
| ---------------- | ------ | ------------------------------------------------- | ------------------------------ |
| CF_SPACE_ID      | string | the Contentful space ID                           | yes                            |
| CF_ENV           | string | the Contentful environment ID (default: `master`) | yes                            |
| CF_TOKEN         | string | the Contentful delivery API token                 | yes                            |
| CF_PREVIEW_TOKEN | string | the Contentful preview API token                  | no (required for Live Preview) |

You can obtain these values from your Contentful space settings:

1. **Space ID**: Found in your Contentful space settings under "General" - this uniquely identifies your Contentful space
2. **Environment ID**: Usually `master` for production, or create custom environments for staging or development
3. **Delivery API token**: Create in Contentful under "Settings" → "API keys" → "Content delivery / preview tokens" - this token is used to fetch published content
4. **Preview API token**: Create in Contentful under "Settings" → "API keys" → "Content preview tokens" - this token is required only if you want to use Live Preview functionality to access draft content

Make sure to set these variables in your environment configuration file (e.g., `.env`) or your deployment platform's environment variable settings.

## Import content model

Before you can start using the integration, you need to import the content model structure into your Contentful space. The content model defines the structure of your content types, including Pages, Templates, and Blocks that will be used in your application.

The content model includes predefined content types that are compatible with the Open Self-Service framework, such as:

- Page content types for managing routes
- Template content types for defining page layouts
- Block content types for reusable content components

To import the content model, go to our resource repository where you can find detailed instructions and the content model definitions:

- [**Open Self-Service** resources](https://github.com/o2sdev/openselfservice-resources/tree/main/packages/cms/contentful/o2s)

Follow the instructions in the repository to import the content model into your Contentful space. This will set up all the necessary content types and their relationships that the integration expects to work with.

## Generate TS types

Once you have set up your Contentful space and configured the environment variables, you need to generate TypeScript types from your GraphQL schema. This step is crucial for type safety and provides autocomplete support in your IDE.

The code generation process uses [graphql-codegen](https://the-guild.dev/graphql/codegen) to introspect your Contentful GraphQL schema and generate TypeScript types and SDK methods based on your GraphQL queries.

Run the following command to generate the types:

```shell
npm run generate
```

This command will:

- Connect to your Contentful space using the configured environment variables
- Introspect the GraphQL schema from Contentful
- Generate TypeScript types for all content models
- Create strongly typed SDK methods for executing GraphQL operations
- Output the generated code to `./generated/contentful.ts`

The generated types ensure compile-time validation of your queries and provide full type safety when working with Contentful content in your application. For more details about code generation, query structure, and how to use the generated SDK, see the [GraphQL integration documentation](./graphql.md).
