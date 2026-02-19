# @o2s/blocks.cta-section

A simple block displaying static content in the form of an CtaSection.

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)

## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [cta-section](https://storybook-o2s.openselfservice.com/?path=/story/blocks-ctasection--default)

## About This Block

The cta-section block displays a call-to-action with title, description, and one or more buttons/links. Content editors configure the copy and destinations in the CMS. Commonly used for conversion sections, sign-up prompts, and marketing CTAs on landing pages or within articles.

- **CTA content** – Title, description, and buttons/links from CMS
- **Multiple buttons** – Support for primary and secondary actions
- **Internal or external links** – Buttons can point to app routes or external URLs
- **CMS-driven** – Copy and placement fully configurable via CMS

Content editors write copy and set button destinations. Developers get a reusable CTA block with no backend logic beyond CMS fetch.

## Installation

```bash
npm install @o2s/blocks.cta-section
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as CtaSection from '@o2s/blocks.cta-section/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        CtaSection.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as CtaSection from '@o2s/blocks.cta-section/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'cta-section') {
            return (
                <CtaSection.CtaSectionRenderer
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

Use the SDK to fetch CTA section data:

```typescript
import { getSdk } from '@o2s/blocks.cta-section/sdk';

const sdk = getSdk('https://your-api-url.com');

const ctaSection = await sdk.blocks.getCtaSection(
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
GET /api/blocks/cta-section/:id
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
        description: string;
        buttonText: string;
        buttonLink: string;
    };
}
```

## Related Blocks

- `@o2s/blocks.hero-section` - Hero section
- `@o2s/blocks.pricing-section` - Pricing section
