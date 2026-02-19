# @o2s/blocks.feature-section-grid

A simple block displaying static content in the form of an FeatureSectionGrid.

The feature-section-grid block displays a grid of feature sections, ideal for product comparisons, capability overviews, and multi-feature marketing sections. Each item includes title, description, and optional media. Content editors configure all items in the CMS.

- **Multi-feature grid** – Multiple feature sections in a single block
- **Per-item content** – Title, description, media per item
- **CMS-driven** – All content and layout via CMS
- **Navigation** – Items can link to detail pages or external URLs

Content editors add and organize feature items. Developers get a feature comparison/grid block with no custom backend logic.

## Installation

```bash
npm install @o2s/blocks.feature-section-grid
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as FeatureSectionGrid from '@o2s/blocks.feature-section-grid/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        FeatureSectionGrid.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as FeatureSectionGrid from '@o2s/blocks.feature-section-grid/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'feature-section-grid') {
            return (
                <FeatureSectionGrid.FeatureSectionGridRenderer
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

Use the SDK to fetch feature section grid data:

```typescript
import { getSdk } from '@o2s/blocks.feature-section-grid/sdk';

const sdk = getSdk('https://your-api-url.com');

const featureSectionGrid = await sdk.blocks.getFeatureSectionGrid(
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
GET /api/blocks/feature-section-grid/:id
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        id: string;
        features: Feature[];
    };
}
```

## Related Blocks

- `@o2s/blocks.feature-section` - Feature section
- `@o2s/blocks.bento-grid` - Bento grid layout


## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [feature-section-grid](https://storybook-o2s.openselfservice.com/?path=/story/blocks-featuresectiongrid--default)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)