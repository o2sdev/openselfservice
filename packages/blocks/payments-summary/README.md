# @o2s/blocks.payments-summary

A block displaying a summary of payments, including overdue and to-be-paid amounts.

The payments-summary block presents the customer's financial overview on dashboards and billing pages. It aggregates overdue amounts (past due) and upcoming payment amounts, giving a clear picture of what needs to be paid. Customers can navigate directly to payment or invoice screens to settle bills.

- **Overdues and upcoming totals** – Clear summary of amounts due
- **Direct pay** – Links to pay invoices
- **Permission-based** – Respects ACL (view, pay)
- **CMS labels** – Labels and copy configurable via CMS

Content editors configure block placement and labels via CMS. Developers get a ready-made billing summary widget that works with any invoice integration (e.g. mocked or ERP-backed).

## Installation

```bash
npm install @o2s/blocks.payments-summary
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as PaymentsSummary from '@o2s/blocks.payments-summary/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        PaymentsSummary.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as PaymentsSummary from '@o2s/blocks.payments-summary/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'payments-summary') {
            return (
                <PaymentsSummary.PaymentsSummaryRenderer
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

Use the SDK to fetch payments summary:

```typescript
import { sdk } from '@o2s/blocks.payments-summary/sdk';

// SDK uses NEXT_PUBLIC_API_URL for the API base URL
const paymentsSummary = await sdk.blocks.getPaymentsSummary(
    { id: 'block-id' },
    { 'x-locale': 'en' },
    accessToken
);
```

## Configuration

This block requires the following integrations to be configured in `AppConfig`:

```typescript
import { Invoices, CMS, Auth } from '@o2s/configs.integrations';

export const AppConfig: ApiConfig = {
    integrations: {
        invoices: Invoices.InvoicesIntegrationConfig,  // Required
        cms: CMS.CmsIntegrationConfig,                // Required
        auth: Auth.AuthIntegrationConfig,              // Required
    },
};
```

## Environment Variables

The required environment variables depend on which integrations you're using:

- **For mocked integration**: No additional environment variables needed

## API

### Block Endpoint

```
GET /api/blocks/payments-summary/:id
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        overdue: number;
        toBePaid: number;
        total: number;
    };
}
```

## Related Blocks

- `@o2s/blocks.payments-history` - Display payment history
- `@o2s/blocks.invoice-list` - Display invoice list

## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [payments-summary](https://storybook-o2s.openselfservice.com/?path=/story/blocks-payments-summary--default)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)
