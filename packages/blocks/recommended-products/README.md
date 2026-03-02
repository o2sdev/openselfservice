# @o2s/blocks.recommended-products

A simple block displaying static content in the form of an RecommendedProducts.

The recommended-products block shows related or cross-sell products (e.g. up to 6) based on the current context. It can exclude the current product to avoid duplicates. Content editors place the block; the Products integration supplies recommendations. Ideal for product detail pages and cart/checkout flows.

- **Related products** – Configurable limit (e.g. up to 6); excludes current product
- **Cross-sell** – Show complementary or alternative products
- **Products integration** – Uses Products (e.g. Medusa.js) for recommendation logic
- **CMS placement** – Block placed via CMS; recommendations from integration

Content editors place the block on product or cart pages. Developers connect a Products integration with recommendation support.

## Installation

```bash
npm install @o2s/blocks.recommended-products
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as RecommendedProducts from '@o2s/blocks.recommended-products/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        RecommendedProducts.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as RecommendedProducts from '@o2s/blocks.recommended-products/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'recommended-products') {
            return (
                <RecommendedProducts.RecommendedProductsRenderer
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

Use the SDK to fetch recommended products:

```typescript
import { sdk } from '@o2s/blocks.recommended-products/sdk';

// SDK uses NEXT_PUBLIC_API_URL for the API base URL
const recommendedProducts = await sdk.blocks.getRecommendedProducts(
    { id: 'block-id' },
    { 'x-locale': 'en' },
    accessToken
);
```

## Configuration

This block requires the following integrations to be configured in `AppConfig`:

```typescript
import { Products, CMS } from '@o2s/configs.integrations';

export const AppConfig: ApiConfig = {
    integrations: {
        products: Products.ProductsIntegrationConfig,  // Required
        cms: CMS.CmsIntegrationConfig,                  // Required
    },
};
```

## Environment Variables

The required environment variables depend on which integrations you're using:

- **For MedusaJS integration**: See `@o2s/integrations.medusajs` documentation
- **For mocked integration**: No additional environment variables needed

## API

### Block Endpoint

```
GET /api/blocks/recommended-products/:id
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        products: Product[];
    };
}
```

## Related Blocks

- `@o2s/blocks.product-list` - Display list of products
- `@o2s/blocks.product-details` - Display product details


## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [recommended-products](https://storybook-o2s.openselfservice.com/?path=/story/blocks-recommendedproducts--default)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)
