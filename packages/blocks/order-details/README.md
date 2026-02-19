# @o2s/blocks.order-details

A block displaying details for a specific order, including items, status, and history.

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)

## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [order-details](https://storybook-o2s.openselfservice.com/?path=/story/blocks-orderdetails--default)

## About This Block

The order-details block shows a single order with line items, status, and optional actions: reorder, track shipment, pay online. Permissions (view, edit, cancel, track) are enforced via ACL. Ideal for order confirmation pages and "order detail" views in customer portals.

- **Full order view** – Items, totals, status, shipping info
- **Actions** – Reorder, track, pay (when ACL permits)
- **Permission-based** – ACL controls available actions
- **Auth-required** – Order scoped to logged-in user

Content editors place the block; the Orders integration provides order data. Developers connect Medusa.js or another Orders integration.

## Installation

```bash
npm install @o2s/blocks.order-details
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as OrderDetails from '@o2s/blocks.order-details/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        OrderDetails.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as OrderDetails from '@o2s/blocks.order-details/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'order-details') {
            return (
                <OrderDetails.OrderDetailsRenderer
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

Use the SDK to fetch order details:

```typescript
import { getSdk } from '@o2s/blocks.order-details/sdk';

const sdk = getSdk('https://your-api-url.com');

const orderDetails = await sdk.blocks.getOrderDetails(
    { id: 'order-id' },
    { 'x-locale': 'en' },
    accessToken
);
```

## Configuration

This block requires the following integrations to be configured in `AppConfig`:

```typescript
import { Orders, CMS, Auth } from '@o2s/configs.integrations';

export const AppConfig: ApiConfig = {
    integrations: {
        orders: Orders.OrdersIntegrationConfig,  // Required
        cms: CMS.CmsIntegrationConfig,          // Required
        auth: Auth.AuthIntegrationConfig,        // Required
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
GET /api/blocks/order-details/:id
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        id: string;
        items: OrderItem[];
        status: string;
        total: number;
    };
}
```

## Related Blocks

- `@o2s/blocks.order-list` - Display list of orders
- `@o2s/blocks.orders-summary` - Display order summary
