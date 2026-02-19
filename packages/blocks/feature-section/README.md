# @o2s/blocks.feature-section

A simple block displaying static content in the form of an FeatureSection.

The feature-section block highlights a single feature with title, description, optional media (image or video), and links. Content editors create feature highlights for product pages, landing pages, and marketing sections. Layout can place media left or right of text.

- **Feature highlight** – Title, description, media, and optional links from CMS
- **Media support** – Image or video; layout configurable
- **Links** – Optional CTA or related links
- **CMS-driven** – All content configured via CMS

Content editors create feature content and set media and links. Developers get a feature highlight block with no custom backend logic.

## Installation

```bash
npm install @o2s/blocks.feature-section
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as FeatureSection from '@o2s/blocks.feature-section/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        FeatureSection.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as FeatureSection from '@o2s/blocks.feature-section/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'feature-section') {
            return (
                <FeatureSection.FeatureSectionRenderer
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

Use the SDK to fetch feature section data:

```typescript
import { getSdk } from '@o2s/blocks.feature-section/sdk';

const sdk = getSdk('https://your-api-url.com');

const featureSection = await sdk.blocks.getFeatureSection(
    { id: 'block-id' },
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
GET /api/blocks/feature-section/:id
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        id: string;
        title: string;
        features: Feature[];
    };
}
```

## Related Blocks

- `@o2s/blocks.feature-section-grid` - Feature section with grid layout
- `@o2s/blocks.hero-section` - Hero section


## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [feature-section](https://storybook-o2s.openselfservice.com/?path=/story/blocks-featuresection--default)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)