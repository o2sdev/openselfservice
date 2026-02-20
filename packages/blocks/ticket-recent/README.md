# @o2s/blocks.ticket-recent

A block displaying recent tickets and their comments.

The ticket-recent block shows a short list of the user's most recent tickets, configurable by limit (e.g. 3 or 5). It is typically used as a dashboard widget, letting customers quickly see their latest support activity and navigate to the full ticket list or details.

- **Recent tickets** – Configurable limit (e.g. 3–5) from CMS
- **Quick access** – Links to ticket details and full list
- **Dashboard widget** – Compact view for dashboards
- **Auth-required** – Scoped to logged-in user

Content editors set the limit and place the block. Developers connect a Tickets integration to power the data.

## Installation

```bash
npm install @o2s/blocks.ticket-recent
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as TicketRecent from '@o2s/blocks.ticket-recent/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        TicketRecent.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as TicketRecent from '@o2s/blocks.ticket-recent/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'ticket-recent') {
            return (
                <TicketRecent.TicketRecentRenderer
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

Use the SDK to fetch recent tickets:

```typescript
import { getSdk } from '@o2s/blocks.ticket-recent/sdk';

const sdk = getSdk('https://your-api-url.com');

const recentTickets = await sdk.blocks.getTicketRecent(
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
        auth: Auth.AuthIntegrationConfig,            // Required
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
GET /api/blocks/ticket-recent/:id
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        tickets: Ticket[];
    };
}
```

## Related Blocks

- `@o2s/blocks.ticket-list` - Display list of tickets
- `@o2s/blocks.ticket-details` - Display ticket details


## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [ticket-recent](https://storybook-o2s.openselfservice.com/?path=/story/blocks-ticketrecent--default)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)