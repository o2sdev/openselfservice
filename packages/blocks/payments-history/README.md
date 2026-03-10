# @o2s/blocks.payments-history

A block displaying payment history.

The payments-history block shows a list of past payments for the authenticated user. Users can view payment details and navigate to pay outstanding invoices when permitted. Permissions (view, pay) are enforced via ACL. Typically used on billing or account history pages.

- **Payment history list** – Past payments with amounts and dates
- **Pay invoices** – Navigate to pay when ACL permits
- **Permission-based** – ACL for view, pay
- **Auth-required** – Payments scoped to logged-in user

Content editors place the block via CMS. Developers connect an Invoices integration.

## Installation

```bash
npm install @o2s/blocks.payments-history
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as PaymentsHistory from '@o2s/blocks.payments-history/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        PaymentsHistory.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as PaymentsHistory from '@o2s/blocks.payments-history/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'payments-history') {
            return (
                <PaymentsHistory.PaymentsHistoryRenderer
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

Use the SDK to fetch payment history:

```typescript
import { sdk } from '@o2s/blocks.payments-history/sdk';

// SDK uses NEXT_PUBLIC_API_URL for the API base URL
const paymentsHistory = await sdk.blocks.getPaymentsHistory(
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
GET /api/blocks/payments-history/:id
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        payments: Payment[];
        pagination: Pagination;
    };
}
```

## Related Blocks

- `@o2s/blocks.payments-summary` - Display payments summary
- `@o2s/blocks.invoice-list` - Display invoice list


## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [payments-history](https://storybook-o2s.openselfservice.com/?path=/story/blocks-paymentshistory--default)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)
