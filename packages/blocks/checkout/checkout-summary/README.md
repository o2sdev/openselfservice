# @o2s/blocks.checkout-summary

Block for the order summary step in the checkout flow.

The checkout-summary block displays the full order review before placing the order. Shows products, company details, shipping and billing address, payment method, active promo codes, order notes, and totals. Data is fetched client-side using `cartId` from localStorage. Part of the multi-step checkout flow.

- **Order review** – Products, company, shipping, payment
- **Place order** – Confirm and place the order
- **Notes** – Optional comment and special instructions
- **Cart summary** – Subtotal, tax, shipping, total

Content editors place the block via CMS. Developers connect Carts, Checkout, and CMS integrations.

## Installation

```bash
npm install @o2s/blocks.checkout-summary
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as CheckoutSummary from "@o2s/blocks.checkout-summary/api-harmonization";
import { AppConfig } from "./app.config";

@Module({
    imports: [CheckoutSummary.Module.register(AppConfig)],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as CheckoutSummary from '@o2s/blocks.checkout-summary/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'checkout-summary') {
            return (
                <CheckoutSummary.Renderer
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
- `@o2s/blocks.checkout-shipping-address` - Shipping address step
- `@o2s/blocks.checkout-billing-payment` - Payment step
- `@o2s/blocks.order-confirmation` - Order confirmation page

## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [checkout-summary](https://storybook-o2s.openselfservice.com/?path=/story/blocks-checkoutsummary--default)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)
