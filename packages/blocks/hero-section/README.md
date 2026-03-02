# @o2s/blocks.hero-section

A simple block displaying static content in the form of an HeroSection.

The hero-section block displays a hero area with title, subtitle, optional media (image or video), and CTA buttons. Content editors configure the hero for landing pages, campaign pages, and marketing entry points. Commonly used at the top of key pages.

- **Hero content** – Title, subtitle, media, and CTAs from CMS
- **Media support** – Background or inline image/video
- **CTA buttons** – Primary and secondary actions
- **CMS-driven** – Copy, media, and links fully configurable via CMS

Content editors create hero content and set CTAs. Developers get a hero block with no custom backend logic.

## Installation

```bash
npm install @o2s/blocks.hero-section
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as HeroSection from '@o2s/blocks.hero-section/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        HeroSection.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as HeroSection from '@o2s/blocks.hero-section/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'hero-section') {
            return (
                <HeroSection.HeroSectionRenderer
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

Use the SDK to fetch hero section data:

```typescript
import { sdk } from '@o2s/blocks.hero-section/sdk';

// SDK uses NEXT_PUBLIC_API_URL for the API base URL
const heroSection = await sdk.blocks.getHeroSection(
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
GET /api/blocks/hero-section/:id
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
        subtitle: string;
        image?: string;
        cta?: CTAButton;
    };
}
```

## Related Blocks

- `@o2s/blocks.cta-section` - Call-to-action section
- `@o2s/blocks.feature-section` - Feature section

## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [hero-section](https://storybook-o2s.openselfservice.com/?path=/story/blocks-herosection--default)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)
