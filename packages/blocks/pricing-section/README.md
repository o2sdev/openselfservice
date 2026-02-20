# @o2s/blocks.pricing-section

A simple block displaying static content in the form of an PricingSection.

The pricing-section block displays pricing plans or tiers with title, description, and pricing cards/options. Content editors configure plans, prices, features, and CTAs in the CMS. Ideal for pricing pages, plan comparison tables, and subscription marketing.

- **Pricing content** – Plans, prices, features, and CTAs from CMS
- **Multiple plans** – Support for several pricing tiers
- **CTA per plan** – Each plan can have its own sign-up or purchase link
- **CMS-driven** – All pricing content configurable via CMS

Content editors manage pricing plans and CTAs. Developers get a pricing block with no custom backend logic.

## Installation

```bash
npm install @o2s/blocks.pricing-section
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as PricingSection from '@o2s/blocks.pricing-section/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        PricingSection.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as PricingSection from '@o2s/blocks.pricing-section/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'pricing-section') {
            return (
                <PricingSection.PricingSectionRenderer
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

Use the SDK to fetch pricing section data:

```typescript
import { getSdk } from '@o2s/blocks.pricing-section/sdk';

const sdk = getSdk('https://your-api-url.com');

const pricingSection = await sdk.blocks.getPricingSection(
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
GET /api/blocks/pricing-section/:id
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        id: string;
        plans: PricingPlan[];
    };
}
```

## Related Blocks

- `@o2s/blocks.cta-section` - Call-to-action section
- `@o2s/blocks.feature-section` - Feature section


## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [pricing-section](https://storybook-o2s.openselfservice.com/?path=/story/blocks-pricingsection--default)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)