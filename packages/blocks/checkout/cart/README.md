# @o2s/blocks.cart

Block for displaying and managing the shopping cart.

The cart block shows the current cart contents with items, quantities, prices, and summary. Users can update quantities, remove items, and proceed to checkout. Cart data is fetched client-side using `cartId` from localStorage. Ideal for e-commerce checkout flows.

- **Cart display** – Items, quantities, prices, subtotal, tax, total
- **Quantity updates** – Increase/decrease item quantities
- **Empty state** – Message when cart has no items

Content editors place the block via CMS. Developers connect Carts and Checkout integrations (e.g. mocked, Medusa.js).

## Installation

```bash
npm install @o2s/blocks.cart
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as Cart from "@o2s/blocks.cart/api-harmonization";
import { AppConfig } from "./app.config";

@Module({
    imports: [Cart.Module.register(AppConfig)],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as Cart from '@o2s/blocks.cart/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'cart') {
            return (
                <Cart.Renderer
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

Use the SDK to fetch cart block config or cart data:

```typescript
import { sdk } from "@o2s/blocks.cart/sdk";

// Block config (from CMS)
const block = await sdk.blocks.getCart(
    { id: "block-id" },
    { "x-locale": "en" },
    accessToken,
);

// Cart data (by cartId - typically from localStorage)
const cart = await sdk.cart.getCart(cartId, { "x-locale": "en" }, accessToken);
```

## Configuration

This block requires the following integrations to be configured in `AppConfig`:

```typescript
import { Carts, CMS } from "@o2s/configs.integrations";

export const AppConfig: ApiConfig = {
    integrations: {
        carts: Carts.CartsIntegrationConfig, // Required
        cms: CMS.CmsIntegrationConfig, // Required
    },
};
```

## Environment Variables

The required environment variables depend on which integrations you're using:

- **For mocked integration**: No additional environment variables needed
- **For MedusaJS integration**: See `@o2s/integrations.medusajs` documentation

## API

### Block Endpoint

```
GET /api/blocks/cart?id={blockId}
```

**Headers:**

- `x-locale`: Content locale (required)

**Response:** Cart block config (labels, errors, empty state, etc.)

### Carts API

Cart data is fetched via the Carts integration (`GET /carts/:cartId`). The block uses `cartId` from `localStorage` (key: `cartId`).

## Related Blocks

- `@o2s/blocks.checkout-company-data` - Company details step
- `@o2s/blocks.checkout-shipping-address` - Shipping address step
- `@o2s/blocks.checkout-billing-payment` - Payment step
- `@o2s/blocks.checkout-summary` - Order summary step
- `@o2s/blocks.order-confirmation` - Order confirmation page

## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [cart](https://storybook-o2s.openselfservice.com/?path=/story/blocks-cart--default)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)
