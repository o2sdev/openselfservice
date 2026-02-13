---
sidebar_position: 150
---

# How to set up

This guide will walk you through setting up the Zendesk Help Center integration for articles in your Open Self Service application.

## Install

The first step is to install the Zendesk integration package in the integrations config workspace. This package provides all the necessary services to connect your application with Zendesk Help Center.

Install the package using npm with the following command:

```shell
npm install @o2s/integrations.zendesk --workspace=@o2s/configs.integrations
```

This command installs the integration package in the configs workspace, ensuring that all necessary dependencies are available.

## Configuration

After installing the package, you need to configure the integration in the `@o2s/configs.integrations` package. This tells the framework to use Zendesk instead of the default mocked integration.

### Step 1: Update the articles integration config

Open the file `packages/configs/integrations/src/models/articles.ts` and replace the import:

**Before (using mocked integration):**

```typescript
import { Config, Integration } from '@o2s/integrations.mocked/integration';
```

**After (using Zendesk integration):**

```typescript
import { Config, Integration } from '@o2s/integrations.zendesk/integration';
```

The complete file should look like this:

```typescript
import { Config, Integration } from '@o2s/integrations.zendesk/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const ArticlesIntegrationConfig: ApiConfig['integrations']['articles'] = Config.articles!;

export import Service = Integration.Articles.Service;
export import Request = Integration.Articles.Request;
export import Model = Integration.Articles.Model;
```

### Step 2: Verify AppConfig

The `AppConfig` in `apps/api-harmonization/src/app.config.ts` should already reference `Articles.ArticlesIntegrationConfig`. You don't need to modify this file - it automatically uses the configuration from `@o2s/configs.integrations`.

## Set environment variables

After configuring the integration, you need to set up environment variables that will be used by the API Harmonization server to connect to your Zendesk Help Center instance.

### Required environment variables

Configure the following environment variables in your API Harmonization server:

| Name              | Type   | Description                                                              | Required | Default |
| ----------------- | ------ | ------------------------------------------------------------------------ | -------- | ------- |
| ZENDESK_API_URL   | string | Your Zendesk API URL (e.g., `https://your-subdomain.zendesk.com/api/v2`) | yes      | -       |
| ZENDESK_API_TOKEN | string | Base64-encoded authentication token                                      | yes      | -       |

**Important notes:**

- The `ZENDESK_API_TOKEN` should be a Base64-encoded string of `email/token:api_token` where:
    - `email/token` is the email address of the Zendesk admin account or "token"
    - `api_token` is the API token generated in the Zendesk admin interface
- You can obtain your API token from your [Zendesk admin settings](https://support.zendesk.com/hc/en-us/articles/4408843597850)
- The API URL should point to your Zendesk instance's API v2 endpoint

### Obtaining your Zendesk credentials

1. **Get your Zendesk subdomain**: Your API URL will be `https://{your-subdomain}.zendesk.com/api/v2`
2. **Generate an API token**:
    - Go to your Zendesk admin interface
    - Navigate to **Admin** > **Apps and integrations** > **APIs** > **Zendesk API**
    - Click **Add API token**
    - Copy the generated token
3. **Create Base64-encoded token**:
    - Format: `{email}:{api_token}` or `token:{api_token}`
    - Encode to Base64 (you can use online tools or command line: `echo -n "email:token" | base64`)

### Example `.env` configuration

```env
ZENDESK_API_URL=https://your-subdomain.zendesk.com/api/v2
ZENDESK_API_TOKEN=base64_encoded_token_here
```

Make sure to set these variables in your environment configuration file (e.g., `.env`) or your deployment platform's environment variable settings.

## CMS Configuration

For articles to display correctly with proper URLs, you need to configure CMS page mappings. The mocked CMS integration includes example configurations.

### Category Page Mapping

Ensure your CMS has page mappings for article categories:

```typescript
// Example: category.page.ts
export const PAGE_ZENDESK_MAINTENANCE_EN: CMS.Model.Page.Page = {
    id: '31170054759453',
    slug: '/help-and-support/31170054759453-Maintenance',
    locale: 'en',
    // ... rest of page config
};

export const PAGE_ZENDESK_MAINTENANCE_DE: CMS.Model.Page.Page = {
    id: '31170054759453',
    slug: '/hilfe-und-support/31170054759453-Wartung',
    locale: 'de',
    // ... rest of page config
};

export const PAGE_ZENDESK_MAINTENANCE_PL: CMS.Model.Page.Page = {
    id: '31170054759453',
    slug: '/pomoc-i-wsparcie/31170054759453-Konserwacja',
    locale: 'pl',
    // ... rest of page config
};
```

### Category Block Mapping

Add corresponding category blocks:

```typescript
// Example: cms.category.mapper.ts
const MOCK_ZENDESK_MAINTENANCE_BLOCK_EN: CMS.Model.CategoryBlock.CategoryBlock = {
    id: '31170054759453',
    categoryId: '31170054759453',
    // ... rest of block config
};
```

**Note**: The `id` and `categoryId` should match the Zendesk category ID.

## Verify installation

After completing the installation and configuration steps:

1. **Rebuild the configs package** (if needed):

    ```shell
    npm run build --workspace=@o2s/configs.integrations
    ```

2. **Start the API Harmonization server**. The Zendesk integration should be registered and the articles controller should be available at `/articles`.

3. **Verify the installation** by:
    - Checking server logs for successful module registration
    - Testing the endpoint: `GET /articles` (should return articles from Zendesk)
    - Verifying that locale-specific content is returned correctly

## Troubleshooting

| Problem                                | Solution                                                                                    |
| -------------------------------------- | ------------------------------------------------------------------------------------------- |
| Module not found                       | Verify the package is installed: `npm list @o2s/integrations.zendesk`                       |
| Cannot connect to Zendesk              | Check `ZENDESK_API_URL` is set correctly and points to `/api/v2`                            |
| Authentication failed                  | Verify `ZENDESK_API_TOKEN` is Base64-encoded correctly and matches your Zendesk credentials |
| Missing required environment variables | Ensure both `ZENDESK_API_URL` and `ZENDESK_API_TOKEN` are set                               |
| 404 errors when fetching articles      | Verify Help Center is enabled and has published articles                                    |
| Wrong language content                 | Check that articles are translated in Zendesk for the requested locale                      |
| Categories not showing                 | Ensure categories have translations for all required locales (en-us, de-de, pl)             |
