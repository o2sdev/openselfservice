# @o2s/blocks.media-section

A simple block displaying static content in the form of an MediaSection.

The media-section block focuses on media (image or video) with optional text overlay or caption. Content editors use it for galleries, product visuals, video showcases, and marketing imagery. The block can link to another page or asset.

- **Media-first** – Image or video as primary content
- **Optional text** – Caption, title, or overlay from CMS
- **Link support** – Media or text can link to internal/external URLs
- **CMS-driven** – Media and text configured via CMS

Content editors upload media and set captions and links. Developers get a media showcase block with no custom backend logic.

## Installation

```bash
npm install @o2s/blocks.media-section
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as MediaSection from '@o2s/blocks.media-section/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        MediaSection.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as MediaSection from '@o2s/blocks.media-section/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'media-section') {
            return (
                <MediaSection.MediaSectionRenderer
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

Use the SDK to fetch media section data:

```typescript
import { sdk } from '@o2s/blocks.media-section/sdk';

// SDK uses NEXT_PUBLIC_API_URL for the API base URL
const mediaSection = await sdk.blocks.getMediaSection(
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
GET /api/blocks/media-section/:id
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        id: string;
        media: MediaItem[];
    };
}
```

## Related Blocks

- `@o2s/blocks.hero-section` - Hero section
- `@o2s/blocks.feature-section` - Feature section


## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [media-section](https://storybook-o2s.openselfservice.com/?path=/story/blocks-mediasection--default)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)
