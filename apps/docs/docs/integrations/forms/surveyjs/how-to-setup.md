---
sidebar_position: 150
---

# How to set up

This guide will walk you through setting up the SurveyJS integration in your Open Self Service application.

## Install

The first step is to install the SurveyJS module package in your workspace. This package provides all the necessary modules and services to connect your application with SurveyJS.

Install the package using npm with the following command:

```shell
npm install @o2s/modules.surveyjs --workspace=@o2s/api --workspace=@o2s/frontend
```

This command installs the module package in both the API and frontend workspaces, ensuring that all necessary dependencies are available where they're needed.

## Set env variables

After installing the package, you need to configure environment variables that will be used by the API Harmonization server to connect to your SurveyJS instance. These variables are essential for API communication.

Configure the following environment variables in your API Harmonization server:

| name                  | type   | description                                   | required | default |
| --------------------- | ------ | --------------------------------------------- | -------- | ------- |
| API_SURVEYJS_BASE_URL | string | the base URL pointing to the SurveyJS service | yes      | -       |

You can obtain this value from your SurveyJS instance:

1. **Base URL**: The URL where your SurveyJS server is running
    - For local development: `http://localhost:3000` (or your local SurveyJS server URL)
    - For production: Your deployed SurveyJS instance URL (e.g., `https://api.surveyjs.io`)

Make sure to set this variable in your environment configuration file (e.g., `.env`) or your deployment platform's environment variable settings.

Example `.env` file:

```env
API_SURVEYJS_BASE_URL=https://api.surveyjs.io
```

## Register modules

After installing the packages and configuring environment variables, you need to register both the SurveyJS module and the surveyjs-form block in your API Harmonization server's `app.module.ts`.

Both use the `.register()` pattern with `AppConfig`:

```typescript
import * as SurveyJs from '@o2s/modules.surveyjs/api-harmonization';
import * as SurveyJsForm from '@o2s/blocks.surveyjs-form/api-harmonization';
import { AppConfig } from './app.config';

@Module({
  imports: [
    // ... other modules
    SurveyJs.Module.register(AppConfig),
    SurveyJsForm.Module.register(AppConfig),
  ],
})
export class AppModule {}
```

**Note:**

- The `SurveyJs` module provides the core functionality for fetching and submitting surveys
- The `SurveyJsForm` block enables rendering surveys through CMS blocks
- Both are required if you want to use surveys via CMS blocks

The `AppConfig` should already be configured with your CMS integration settings, as both modules require access to the CMS service to retrieve survey metadata.

## CMS configuration

The SurveyJS module integrates with your CMS (e.g., Strapi) to retrieve survey metadata. Before you can use surveys, you need to:

1. **Configure your CMS integration**: Ensure your CMS integration (Strapi, Contentful, etc.) is properly configured in `AppConfig`
2. **Create survey entries in CMS**: Create survey entries in your CMS with the following required fields:

| Field               | Type     | Required | Description                                                                                    |
| ------------------- | -------- | -------- | ---------------------------------------------------------------------------------------------- |
| `code`              | string   | Yes      | Unique identifier for the survey (e.g., `"contact-form"`)                                      |
| `surveyId`          | string   | Yes      | The SurveyJS survey ID from your SurveyJS service                                              |
| `postId`            | string   | Yes      | The SurveyJS post ID for form submissions                                                      |
| `surveyType`        | string   | Yes      | Type of survey (typically `"survey"`)                                                          |
| `submitDestination` | string[] | Yes      | Array of submission destinations (e.g., `["surveyjs"]`)                                        |
| `requiredRoles`     | string[] | Yes\*    | Array of roles required to submit the survey. It can be an empty array `[]` for public surveys |

\* `requiredRoles` is required but can be an empty array for public surveys that don't require authentication.

**Example CMS entry:**

```json
{
    "code": "contact-form",
    "surveyId": "72c90a02-6bfe-4e83-ba48-01f11752c234",
    "postId": "a91349b1-0c4c-4b7a-b712-91f04a1e6e99",
    "surveyType": "survey",
    "submitDestination": ["surveyjs"],
    "requiredRoles": []
}
```

For Strapi CMS, you can find the content model structure in the [Strapi resources repository](https://github.com/o2sdev/openselfservice-resources).

## Verify installation

Start the API Harmonization server. The SurveyJS module should be registered and the controller should be available at `/surveyjs`.

You can verify the installation by:

1. Checking server logs for successful module registration
2. Testing the endpoint: `GET /surveyjs?code={your-survey-code}` (should return survey schema or error if not configured)
3. Verifying that the frontend can import the `Survey` component from `@o2s/modules.surveyjs/frontend`

## Troubleshooting

| Problem                    | Solution                                                             |
| -------------------------- | -------------------------------------------------------------------- |
| Module not found           | Verify the package is installed: `npm list @o2s/modules.surveyjs`    |
| Cannot connect to SurveyJS | Check `API_SURVEYJS_BASE_URL` is set correctly                       |
| Survey not found           | Verify the survey code exists in your CMS and has a valid `surveyId` |
| Authorization errors       | Check that `requiredRoles` in CMS matches user roles                 |
| Frontend import errors     | Ensure the package is installed in the frontend workspace            |
