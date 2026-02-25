# @o2s/blocks.product-details

A block for displaying comprehensive product information including title, images, price, description.

The product-details block displays a single product with images, variants, specifications, and price. Users can select options (e.g. size, color) and navigate to variant-specific URLs. Supports add-to-cart integration when used with a commerce stack (e.g. Medusa.js).

- **Full product view** – Title, images, price, description, specs
- **Variant selection** – Option groups (size, color) or simple variants
- **Variant URLs** – Shareable links per variant
- **Products integration** – Uses Products (e.g. Medusa.js) for data

Content editors place the block; the Products integration provides product data. Developers connect Medusa.js or another Products integration.

## Installation

```bash
npm install @o2s/blocks.product-details
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as ProductDetails from '@o2s/blocks.product-details/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        ProductDetails.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as ProductDetails from '@o2s/blocks.product-details/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'product-details') {
            return (
                <ProductDetails.ProductDetailsRenderer
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

Use the SDK to fetch product details:

```typescript
import { sdk } from '@o2s/blocks.product-details/sdk';

// SDK uses NEXT_PUBLIC_API_URL for the API base URL
const productDetails = await sdk.blocks.getProductDetails(
    { id: 'product-id' },
    { 'x-locale': 'en' },
    accessToken
);
```

## Configuration

This block requires the following integrations to be configured in `AppConfig`:

```typescript
import { Products, CMS, Auth } from '@o2s/configs.integrations';

export const AppConfig: ApiConfig = {
    integrations: {
        products: Products.ProductsIntegrationConfig,  // Required
        cms: CMS.CmsIntegrationConfig,                 // Required
        auth: Auth.AuthIntegrationConfig,               // Required
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
GET /api/blocks/product-details/:id
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
        price: number;
        images: string[];
        description: string;
    };
}
```

## Related Blocks

- `@o2s/blocks.product-list` - Display list of products
- `@o2s/blocks.recommended-products` - Display recommended products


## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [product-details](https://storybook-o2s.openselfservice.com/?path=/story/blocks-productdetails--default)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)
