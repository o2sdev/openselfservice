# @o2s/blocks.invoice-list

A block for displaying and managing invoice list.

The invoice-list block shows a paginated, filterable list of invoices for the authenticated user. Users can view invoices, download PDFs (single or bulk), and pay when permitted. Permissions (view, create, pay, delete) are enforced via ACL. Ideal for billing and account pages in customer portals.

- **Paginated list** – Browse invoices with pagination and filters
- **PDF download** – Single and bulk PDF download
- **Pay invoices** – Direct pay when ACL permits
- **Permission-based** – ACL for view, create, pay, delete

Content editors place the block via CMS. Developers connect an Invoices integration (e.g. mocked, ERP-backed).

## Installation

```bash
npm install @o2s/blocks.invoice-list
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as InvoiceList from '@o2s/blocks.invoice-list/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        InvoiceList.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as InvoiceList from '@o2s/blocks.invoice-list/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'invoice-list') {
            return (
                <InvoiceList.InvoiceListRenderer
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

Use the SDK to fetch invoice list data:

```typescript
import { sdk } from '@o2s/blocks.invoice-list/sdk';

// SDK uses NEXT_PUBLIC_API_URL for the API base URL
const invoiceList = await sdk.blocks.getInvoiceList(
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
        cms: CMS.CmsIntegrationConfig,                  // Required
        auth: Auth.AuthIntegrationConfig,                // Required
    },
};
```

## Environment Variables

The required environment variables depend on which integrations you're using:

- **For mocked integration**: No additional environment variables needed
- **For other integrations**: See the respective integration package documentation

## API

### Block Endpoint

```
GET /api/blocks/invoice-list/:id
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        invoices: Invoice[];
        pagination: Pagination;
    };
}
```

## Related Blocks

- `@o2s/blocks.payments-summary` - Display payments summary
- `@o2s/blocks.payments-history` - Display payment history

## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [invoice-list](https://storybook-o2s.openselfservice.com/?path=/story/blocks-invoicelist--default)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)
