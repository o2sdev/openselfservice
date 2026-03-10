# @o2s/blocks.quick-links

A block displaying quick links to important pages or resources.

The quick-links block displays a curated set of links (buttons or anchors) from the CMS. Content editors define labels and destinations—internal routes or external URLs—making it ideal for shortcuts, navigation blocks, and call-to-action clusters on dashboards or landing pages.

- **Link set from CMS** – Labels and URLs fully configurable
- **Internal or external** – Links to app routes or external sites
- **Layout flexibility** – Grid or list; styling via theme
- **CMS-driven** – No code changes to add or update links

Content editors manage links in the CMS. Developers get a configurable shortcut block with no custom backend logic.

## Installation

```bash
npm install @o2s/blocks.quick-links
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as QuickLinks from '@o2s/blocks.quick-links/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        QuickLinks.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as QuickLinks from '@o2s/blocks.quick-links/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'quick-links') {
            return (
                <QuickLinks.QuickLinksRenderer
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

Use the SDK to fetch quick links:

```typescript
import { sdk } from '@o2s/blocks.quick-links/sdk';

// SDK uses NEXT_PUBLIC_API_URL for the API base URL
const quickLinks = await sdk.blocks.getQuickLinks(
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
GET /api/blocks/quick-links/:id
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        links: QuickLink[];
    };
}
```

## Related Blocks

None


## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [quick-links](https://storybook-o2s.openselfservice.com/?path=/story/blocks-quicklinks--default)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)
