# @o2s/blocks.checkout-company-data

Block for the company details step in the checkout flow.

The checkout-company-data block collects company information (name, tax ID, billing address) for the order. Data is fetched client-side using `cartId` from localStorage. Part of the multi-step checkout flow.

- **Company form** – Company name, tax ID, billing address
- **Cart summary** – Subtotal, tax, total alongside the form
- **Validation** – Tax ID, postal code, email validation

Content editors place the block via CMS. Developers connect Carts, Checkout, and CMS integrations.

## Installation

```bash
npm install @o2s/blocks.checkout-company-data
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as CheckoutCompanyData from "@o2s/blocks.checkout-company-data/api-harmonization";
import { AppConfig } from "./app.config";

@Module({
    imports: [CheckoutCompanyData.Module.register(AppConfig)],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as CheckoutCompanyData from '@o2s/blocks.checkout-company-data/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'checkout-company-data') {
            return (
                <CheckoutCompanyData.Renderer
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
- `@o2s/blocks.checkout-shipping-address` - Shipping address step
- `@o2s/blocks.checkout-billing-payment` - Payment step
- `@o2s/blocks.checkout-summary` - Order summary step
- `@o2s/blocks.order-confirmation` - Order confirmation page

## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [checkout-company-data](https://storybook-o2s.openselfservice.com/?path=/story/blocks-checkoutcompanydata--default)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)
