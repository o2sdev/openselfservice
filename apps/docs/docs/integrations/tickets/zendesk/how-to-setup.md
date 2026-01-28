---
sidebar_position: 150
---

# How to set up

This guide will walk you through setting up the Zendesk integration in your Open Self Service application.

## Install

The first step is to install the Zendesk integration package in the integrations config workspace. This package provides all the necessary services to connect your application with Zendesk.

Install the package using npm with the following command:

```shell
npm install @o2s/integrations.zendesk --workspace=@o2s/configs.integrations
```

This command installs the integration package in the configs workspace, ensuring that all necessary dependencies are available.

## Configuration

After installing the package, you need to configure the integration in the `@o2s/configs.integrations` package. This tells the framework to use Zendesk instead of the default mocked integration.

### Step 1: Update the tickets integration config

Open the file `packages/configs/integrations/src/models/tickets.ts` and replace the import:

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

export const TicketsIntegrationConfig: ApiConfig['integrations']['tickets'] = Config.tickets!;

export import Service = Integration.Tickets.Service;
export import Request = Integration.Tickets.Request;
export import Model = Integration.Tickets.Model;
```

### Step 2: Verify AppConfig

The `AppConfig` in `apps/api-harmonization/src/app.config.ts` should already reference `Tickets.TicketsIntegrationConfig`. You don't need to modify this file - it automatically uses the configuration from `@o2s/configs.integrations`.

## Set environment variables

After configuring the integration, you need to set up environment variables that will be used by the API Harmonization server to connect to your Zendesk instance. These variables are essential for API communication.

### Required environment variables

Configure the following environment variables in your API Harmonization server:

| name                   | type   | description                                                              | required | default |
| ---------------------- | ------ | ------------------------------------------------------------------------ | -------- | ------- |
| ZENDESK_API_URL        | string | Your Zendesk API URL (e.g., `https://your-subdomain.zendesk.com/api/v2`) | yes      | -       |
| ZENDESK_API_TOKEN      | string | Base64-encoded authentication token                                      | yes      | -       |
| ZENDESK_TOPIC_FIELD_ID | number | ID of the custom field that contains the ticket topic (optional)         | no       | -       |

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
ZENDESK_TOPIC_FIELD_ID=123456
```

Make sure to set these variables in your environment configuration file (e.g., `.env`) or your deployment platform's environment variable settings.

## Module dependencies

The Zendesk integration requires the following modules to be configured:

- **Users Module** - Required for user authentication and email matching
- **HttpModule** (NestJS) - Required for HTTP requests to Zendesk API

These modules are automatically imported when you configure the integration, but ensure that the Users integration is properly set up in your application.

## Verify installation

After completing the installation and configuration steps:

1. **Rebuild the configs package** (if needed):

    ```shell
    npm run build --workspace=@o2s/configs.integrations
    ```

2. **Start the API Harmonization server**. The Zendesk integration should be registered and the ticket controller should be available at `/tickets`.

3. **Verify the installation** by:
    - Checking server logs for successful module registration
    - Testing the endpoint: `GET /tickets` (should return tickets or empty list if no tickets exist)
    - Verifying that authentication is working correctly

## Troubleshooting

| Problem                                | Solution                                                                                    |
| -------------------------------------- | ------------------------------------------------------------------------------------------- |
| Module not found                       | Verify the package is installed: `npm list @o2s/integrations.zendesk`                       |
| Cannot connect to Zendesk              | Check `ZENDESK_API_URL` is set correctly and points to `/api/v2`                            |
| Authentication failed                  | Verify `ZENDESK_API_TOKEN` is Base64-encoded correctly and matches your Zendesk credentials |
| Missing required environment variables | Ensure both `ZENDESK_API_URL` and `ZENDESK_API_TOKEN` are set                               |
| Users module not found                 | Ensure the Users integration is configured in your application                              |
| 404 errors when fetching tickets       | Verify the API URL is correct and your Zendesk instance is accessible                       |
