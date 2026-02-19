# @o2s/blocks.product-list

A block for displaying and filtering a list of products with grid and table views.

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)

## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [product-list](https://storybook-o2s.openselfservice.com/?path=/story/blocks-productlist--default)

## About This Block

The product-list block shows a paginated, filterable product catalog. Users can browse products in grid or table view, filter by attributes, and open product details. It is auth-aware and respects product visibility rules. Ideal for product catalogs, B2B portals, and e-commerce listings.

- **Paginated list** – Grid or table view; pagination and filters
- **Product details** – Links to product detail pages
- **Auth-aware** – Visibility and pricing can vary by user
- **Products integration** – Uses Products (e.g. Medusa.js) for catalog data

Content editors place the block via CMS. Developers connect a Products integration (e.g. Medusa.js).

## Installation

```bash
npm install @o2s/blocks.product-list
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as ProductList from '@o2s/blocks.product-list/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        ProductList.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as ProductList from '@o2s/blocks.product-list/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'product-list') {
            return (
                <ProductList.ProductListRenderer
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

Use the SDK to fetch product list:

```typescript
import { getSdk } from '@o2s/blocks.product-list/sdk';

const sdk = getSdk('https://your-api-url.com');

const productList = await sdk.blocks.getProductList(
    { id: 'block-id' },
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
        cms: CMS.CmsIntegrationConfig,                // Required
        auth: Auth.AuthIntegrationConfig,             // Required
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
GET /api/blocks/product-list/:id
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        products: Product[];
        pagination: Pagination;
        filters: Filter[];
    };
}
```

## Features

- Grid and table view modes
- Product filtering
- Pagination support
- Sorting options

## Related Blocks

- `@o2s/blocks.product-details` - Display product details
- `@o2s/blocks.recommended-products` - Display recommended products
