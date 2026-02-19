# @o2s/modules.surveyjs

A module that handles fetching, rendering and submitting SurveyJS-based forms.

## Installation

```bash
npm install @o2s/modules.surveyjs
```

## Usage

### Backend (API Harmonization)

Register the module in `app.module.ts`:

```typescript
import * as SurveyJs from '@o2s/modules.surveyjs/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        SurveyJs.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Use the SurveyJS components:

```typescript
import { SurveyJsRenderer } from '@o2s/modules.surveyjs/frontend';

export const SurveyPage = async ({ surveyId }) => {
    return <SurveyJsRenderer surveyId={surveyId} />;
};
```

### SDK

Use the SDK to fetch and submit surveys:

```typescript
import { getSdk } from '@o2s/modules.surveyjs/sdk';

const sdk = getSdk('https://your-api-url.com');

// Fetch survey
const survey = await sdk.surveyjs.getSurvey({ id: surveyId }, { 'x-locale': 'en' });

// Submit survey
await sdk.surveyjs.submitSurvey({ id: surveyId, answers: {...} }, { 'x-locale': 'en' });
```

## Configuration

This module requires CMS integration to be configured in `AppConfig`:

```typescript
import { CMS } from '@o2s/configs.integrations';

export const AppConfig: ApiConfig = {
    integrations: {
        cms: CMS.CmsIntegrationConfig,
    },
};
```

## Related Packages

- `@o2s/blocks.surveyjs-form` - SurveyJS form block
- `@o2s/configs.integrations` - Integration configuration
- `survey-core` - SurveyJS core library
- `survey-react-ui` - SurveyJS React UI components
