# @o2s/blocks.orders-summary

A block displaying a summary of orders, including statistics and recent activity.

The orders-summary block displays order statistics for the current period vs the previous period (e.g. order count, totals), with configurable date range. It serves as a dashboard widget for customers to see their ordering activity at a glance and navigate to the full order list.

- **Period comparison** – Current vs previous period stats
- **Configurable date range** – From CMS block config
- **Dashboard widget** – Compact analytics for dashboards
- **Auth-required** – Stats scoped to logged-in user

Content editors configure the date range and place the block. Developers connect an Orders integration.

## Installation

```bash
npm install @o2s/blocks.orders-summary
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as OrdersSummary from '@o2s/blocks.orders-summary/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        OrdersSummary.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as OrdersSummary from '@o2s/blocks.orders-summary/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'orders-summary') {
            return (
                <OrdersSummary.OrdersSummaryRenderer
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

Use the SDK to fetch orders summary:

```typescript
import { sdk } from '@o2s/blocks.orders-summary/sdk';

// SDK uses NEXT_PUBLIC_API_URL for the API base URL
const ordersSummary = await sdk.blocks.getOrdersSummary(
    { id: 'block-id' },
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
GET /api/blocks/orders-summary/:id
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        statistics: OrderStatistics;
        recentOrders: Order[];
    };
}
```

## Related Blocks

- `@o2s/blocks.order-list` - Display list of orders
- `@o2s/blocks.order-details` - Display order details


## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [orders-summary](https://storybook-o2s.openselfservice.com/?path=/story/blocks-orderssummary--default)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)
