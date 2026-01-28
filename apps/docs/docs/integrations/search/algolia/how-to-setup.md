---
sidebar_position: 150
---

# How to set up

This guide will walk you through setting up the Algolia integration in your Open Self Service application.

## Install

The first step is to install the Algolia integration package in the integrations config workspace. This package provides all the necessary services to connect your application with Algolia.

Install the package using npm with the following command:

```shell
npm install @o2s/integrations.algolia --workspace=@o2s/configs.integrations
```

This command installs the integration package in the configs workspace, ensuring that all necessary dependencies are available.

## Configuration

After installing the package, you need to configure the integration in the `@o2s/configs.integrations` package. This tells the framework to use Algolia instead of the default mocked integration.

### Update the search integration config

Open the file `packages/configs/integrations/src/models/search.ts` and replace the import:

**Before (using mocked integration):**

```typescript
import { Config, Integration } from '@o2s/integrations.mocked/integration';
```

**After (using Algolia integration):**

```typescript
import { Config, Integration } from '@o2s/integrations.algolia/integration';
```

The complete file should look like this:

```typescript
import { Config, Integration } from '@o2s/integrations.algolia/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const SearchIntegrationConfig: ApiConfig['integrations']['search'] = Config.search!;

export import Service = Integration.Search.Service;
```

### Verify AppConfig

The `AppConfig` in `apps/api-harmonization/src/app.config.ts` should already reference `Search.SearchIntegrationConfig`. You don't need to modify this file - it automatically uses the configuration from `@o2s/configs.integrations`.

## Set environment variables

After configuring the integration, you need to set up environment variables that will be used by the API Harmonization server to connect to your Algolia instance. These variables are essential for API communication.

### Required environment variables

Configure the following environment variables in your API Harmonization server:

| name            | type   | description                                  | required | default |
| --------------- | ------ | -------------------------------------------- | -------- | ------- |
| ALGOLIA_APP_ID  | string | Your Algolia application ID                  | yes      | -       |
| ALGOLIA_API_KEY | string | Your Algolia API key with search permissions | yes      | -       |

**Important notes:**

- The `ALGOLIA_API_KEY` should have **search permissions** only. For security reasons, do not use an admin API key with write permissions.
- You can obtain both values from your [Algolia dashboard](https://www.algolia.com/account/api-keys/).
- The API key must have at least read access to the indexes you want to search.

### Additional environment variables

Other integrations (such as CMS integrations) may use the following variable for article indexing:

| name                       | type   | description                            | required | default |
| -------------------------- | ------ | -------------------------------------- | -------- | ------- |
| SEARCH_ARTICLES_INDEX_NAME | string | Name of the Algolia index for articles | no       | -       |

### Obtaining your Algolia credentials

1. **Create an Algolia account**: If you don't have one, [sign up for Algolia](https://www.algolia.com/)
2. **Get your Application ID**:
    - Go to your [Algolia dashboard](https://www.algolia.com/manage/api-keys/)
    - Your Application ID is displayed at the top of the page
3. **Create a Search-Only API Key**:
    - In the API Keys section, create a new key with **search** permissions only
    - Copy the generated API key
    - **Important**: Never use an admin key with write permissions in your application

### Example `.env` configuration

```env
ALGOLIA_APP_ID=your_app_id_here
ALGOLIA_API_KEY=your_search_api_key_here
SEARCH_ARTICLES_INDEX_NAME=articles
```

Make sure to set these variables in your environment configuration file (e.g., `.env`) or your deployment platform's environment variable settings.

## Set up Algolia indexes

Before you can use the integration, you need to set up indexes in your Algolia dashboard:

1. **Create an index**: Go to your Algolia dashboard and create a new index
2. **Configure index settings**: Set up attributes for faceting, filtering, and searchable attributes
3. **Index your data**: Use Algolia's indexing API or dashboard to add your data to the index

**Note**: If you plan to use sorting, you'll need to create separate indexes for each sort configuration. The integration appends `_{field}_{order}` to the index name when sorting is specified.

For example:

- Base index: `articles`
- With sort by `publishedAt` descending: `articles_publishedAt_desc`

## Verify installation

After completing the installation and configuration steps:

1. **Rebuild the configs package** (if needed):

    ```shell
    npm run build --workspace=@o2s/configs.integrations
    ```

2. **Start the API Harmonization server**. The Algolia integration should be registered and the search controller should be available at `/search`.

3. **Verify the installation** by:
    - Checking server logs for successful integration registration (should show Algolia service initialization)
    - Testing the endpoint: `GET /search?index={your-index-name}` (should return results or error if not configured)
    - Verifying that environment variables are correctly loaded (check for any errors about missing `ALGOLIA_APP_ID` or `ALGOLIA_API_KEY`)

## Troubleshooting

| Problem                       | Solution                                                                                                                         |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Module not found              | Verify the package is installed: `npm list @o2s/integrations.algolia`                                                            |
| Cannot connect to Algolia     | Check `ALGOLIA_APP_ID` and `ALGOLIA_API_KEY` are set correctly                                                                   |
| Index not found (404)         | Verify the index name exists in your Algolia dashboard                                                                           |
| Authorization errors          | Check that your API key has read access to the index                                                                             |
| Missing environment variables | Ensure both `ALGOLIA_APP_ID` and `ALGOLIA_API_KEY` are set in your `.env` file                                                   |
| Integration not working       | Verify that the import in `packages/configs/integrations/src/models/search.ts` points to `@o2s/integrations.algolia/integration` |

## Next steps

Once the integration is set up, you can:

- Learn about available [features](./features.md)
- See [usage examples](./usage.md) for how to use the search functionality
- Configure your indexes in Algolia dashboard
- Start implementing search in your application
