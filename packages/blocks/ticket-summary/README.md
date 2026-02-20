# @o2s/blocks.ticket-summary

Displays a dynamic TicketSummary showing ticket counts grouped by status.

The ticket-summary block displays ticket counts (e.g. open, closed, in progress) for the authenticated user. It acts as a dashboard widget: users see their support workload at a glance and can navigate to the ticket list. Counts are grouped by status from the Tickets integration.

- **Status counts** – Ticket counts by status (open, closed, etc.)
- **Navigation** – Links to full ticket list
- **Dashboard widget** – Compact summary for dashboards
- **Auth-required** – Counts scoped to logged-in user

Content editors place the block and configure labels. Developers connect a Tickets integration (e.g. Zendesk).

## Installation

```bash
npm install @o2s/blocks.ticket-summary
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as TicketSummary from '@o2s/blocks.ticket-summary/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        TicketSummary.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as TicketSummary from '@o2s/blocks.ticket-summary/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'ticket-summary') {
            return (
                <TicketSummary.TicketSummaryRenderer
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

Use the SDK to fetch ticket summary:

```typescript
import { getSdk } from '@o2s/blocks.ticket-summary/sdk';

const sdk = getSdk('https://your-api-url.com');

const ticketSummary = await sdk.blocks.getTicketSummary(
    { id: 'block-id' },
    { 'x-locale': 'en' },
    accessToken
);
```

## Configuration

This block requires the following integrations to be configured in `AppConfig`:

```typescript
import { Tickets, CMS, Auth } from '@o2s/configs.integrations';

export const AppConfig: ApiConfig = {
    integrations: {
        tickets: Tickets.TicketsIntegrationConfig,  // Required
        cms: CMS.CmsIntegrationConfig,              // Required
        auth: Auth.AuthIntegrationConfig,             // Required
    },
};
```

## Environment Variables

The required environment variables depend on which integrations you're using:

- **For Zendesk integration**: See `@o2s/integrations.zendesk` documentation
- **For mocked integration**: No additional environment variables needed

## API

### Block Endpoint

```
GET /api/blocks/ticket-summary/:id
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        counts: {
            [status: string]: number;
        };
    };
}
```

## Related Blocks

- `@o2s/blocks.ticket-list` - Display list of tickets
- `@o2s/blocks.ticket-details` - Display ticket details


## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [ticket-summary](https://storybook-o2s.openselfservice.com/?path=/story/blocks-ticketsummary--default)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)