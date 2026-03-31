# @o2s/blocks.order-confirmation

Block for displaying the order confirmation page after successful checkout.

The order-confirmation block shows order details, items, totals, shipping and billing addresses after the customer completes the checkout. Typically displayed on a dedicated confirmation page (e.g. `/checkout/confirmation/:orderId`). Data is fetched server-side by orderId from the URL.

- **Order summary** – Items, subtotal, tax, discount, shipping, total
- **Addresses** – Shipping and billing address display
- **Status** – Order status badge
- **Actions** – View orders, continue shopping

Content editors place the block via CMS. Developers connect Orders and CMS integrations.

## Installation

```bash
npm install @o2s/blocks.order-confirmation
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as OrderConfirmation from "@o2s/blocks.order-confirmation/api-harmonization";
import { AppConfig } from "./app.config";

@Module({
    imports: [OrderConfirmation.Module.register(AppConfig)],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as OrderConfirmation from '@o2s/blocks.order-confirmation/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'order-confirmation') {
            return (
                <OrderConfirmation.Renderer
                    key={block.id}
                    id={block.id}
                    slug={slug}
                    locale={locale}
                    accessToken={session?.accessToken}
                    userId={session?.user?.id}
                    routing={routing}
                    orderId={orderId}
                />
            );
        }
        // ... other blocks
    });
};
```

## Configuration

This block requires Orders and CMS integrations in `AppConfig`.

## Related Blocks

- `@o2s/blocks.cart` - Shopping cart
- `@o2s/blocks.checkout-company-data` - Company details step
- `@o2s/blocks.checkout-shipping-address` - Shipping address step
- `@o2s/blocks.checkout-billing-payment` - Payment step
- `@o2s/blocks.checkout-summary` - Order summary step (places the order)

## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [order-confirmation](https://storybook-o2s.openselfservice.com/?path=/story/blocks-orderconfirmation--default)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)
