# @o2s/blocks.checkout-shipping-address

Block for the shipping address step in the checkout flow.

The checkout-shipping-address block collects shipping address and shipping method. Users can use the same as billing address or enter a different one. Data is fetched client-side using `cartId` from localStorage. Part of the multi-step checkout flow.

- **Address form** – Shipping address fields
- **Same as billing** – Option to copy billing address
- **Shipping method** – Select delivery option
- **Cart summary** – Subtotal, tax, total alongside the form

Content editors place the block via CMS. Developers connect Carts, Checkout, and CMS integrations.

## Installation

```bash
npm install @o2s/blocks.checkout-shipping-address
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as CheckoutShippingAddress from "@o2s/blocks.checkout-shipping-address/api-harmonization";
import { AppConfig } from "./app.config";

@Module({
    imports: [CheckoutShippingAddress.Module.register(AppConfig)],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as CheckoutShippingAddress from '@o2s/blocks.checkout-shipping-address/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'checkout-shipping-address') {
            return (
                <CheckoutShippingAddress.Renderer
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

## Configuration

This block requires Carts, Checkout, and CMS integrations in `AppConfig`.

## Related Blocks

- `@o2s/blocks.cart` - Shopping cart
- `@o2s/blocks.checkout-company-data` - Company details step
- `@o2s/blocks.checkout-billing-payment` - Payment step
- `@o2s/blocks.checkout-summary` - Order summary step
- `@o2s/blocks.order-confirmation` - Order confirmation page

## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [checkout-shipping-address](https://storybook-o2s.openselfservice.com/?path=/story/blocks-checkoutshippingaddress--default)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)
