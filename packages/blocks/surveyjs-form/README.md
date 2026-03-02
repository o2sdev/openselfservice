# @o2s/blocks.surveyjs-form

A block displaying a SurveyJS-based form that can be submitted.

The surveyjs-form block renders a configurable form using SurveyJS. Content editors reference a form by code (stored in CMS or config); the form definition can come from SurveyJS Designer or API. Ideal for surveys, feedback forms, ticket submission forms, and custom data collection. Submissions are handled by the SurveyJS/Forms integration.

- **SurveyJS forms** – Dynamic forms with validation and complex layouts
- **Form by code** – Reference form definition by code; title from CMS
- **Submit handling** – Submissions sent via Forms integration
- **Flexible** – Surveys, feedback, NPS, custom forms

Content editors place the block and set form code and title. Developers connect a Forms integration (e.g. SurveyJS module) and configure form definitions.

## Installation

```bash
npm install @o2s/blocks.surveyjs-form
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as SurveyJsForm from '@o2s/blocks.surveyjs-form/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        SurveyJsForm.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as SurveyJsForm from '@o2s/blocks.surveyjs-form/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'surveyjs-form') {
            return (
                <SurveyJsForm.SurveyJsFormRenderer
                    key={block.id}
                    id={block.id}
                    slug={slug}
                    locale={locale}
                    accessToken={session?.accessToken}
                    userId={session?.user?.id}
                    routing={routing}
                />
            );
        }
        // ... other blocks
    });
};
```

### SDK

Use the SDK to fetch and submit surveys:

```typescript
import { sdk } from '@o2s/blocks.surveyjs-form/sdk';

// SDK uses NEXT_PUBLIC_API_URL for the API base URL
// Fetch survey
const survey = await sdk.blocks.getSurveyJsForm(
    { id: 'block-id' },
    { 'x-locale': 'en' },
    accessToken
);

// Submit survey
await sdk.blocks.submitSurveyJsForm(
    { id: 'block-id', answers: {...} },
    { 'x-locale': 'en' },
    accessToken
);
```

## Configuration

This block requires the following integrations to be configured in `AppConfig`:

```typescript
import { CMS } from '@o2s/configs.integrations';

export const AppConfig: ApiConfig = {
    integrations: {
        cms: CMS.CmsIntegrationConfig,  // Required
    },
};
```

## Environment Variables

The required environment variables depend on which CMS integration you're using:

- **For Strapi CMS**: See `@o2s/integrations.strapi-cms` documentation
- **For Contentful CMS**: See `@o2s/integrations.contentful-cms` documentation
- **For mocked integration**: No additional environment variables needed

## API

### Block Endpoint

```
GET /api/blocks/surveyjs-form/:id
POST /api/blocks/surveyjs-form/:id
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        survey: Survey;
    };
}
```

## Related Packages

- `@o2s/modules.surveyjs` - SurveyJS module
- `survey-core` - SurveyJS core library
- `survey-react-ui` - SurveyJS React UI components

## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [surveyjs-form](https://storybook-o2s.openselfservice.com/?path=/story/blocks-surveyjsform--default)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)
