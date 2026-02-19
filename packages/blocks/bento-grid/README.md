# @o2s/blocks.bento-grid

A simple block displaying static content in the form of an BentoGrid.

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)

## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [bento-grid](https://storybook-o2s.openselfservice.com/?path=/story/blocks-bentogrid--default)

## About This Block

The bento-grid block renders a flexible grid layout with preTitle, title, description, and a set of items (cards, tiles) from the CMS. Each item can include media, text, and links. Ideal for landing pages, feature highlights, product comparisons, and marketing sections with a modern bento-style layout.

- **Grid layout** – PreTitle, title, description, and configurable items from CMS
- **Item links** – Each grid item can link to internal or external destinations
- **CMS-driven** – All content and layout configured via CMS
- **Responsive** – Grid adapts to screen size

Content editors create grid items, add media, and set links. Developers get a versatile landing-page block with no custom backend logic.

## Installation

```bash
npm install @o2s/blocks.bento-grid
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as BentoGrid from '@o2s/blocks.bento-grid/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        BentoGrid.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as BentoGrid from '@o2s/blocks.bento-grid/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'bento-grid') {
            return (
                <BentoGrid.BentoGridRenderer
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

Use the SDK to fetch bento grid data:

```typescript
import { getSdk } from '@o2s/blocks.bento-grid/sdk';

const sdk = getSdk('https://your-api-url.com');

const bentoGrid = await sdk.blocks.getBentoGrid(
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
GET /api/blocks/bento-grid/:id
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        id: string;
        items: BentoGridItem[];
    };
}
```

## Related Blocks

- `@o2s/blocks.feature-section-grid` - Feature section grid
- `@o2s/blocks.hero-section` - Hero section
