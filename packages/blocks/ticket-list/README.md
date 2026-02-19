# @o2s/blocks.ticket-list

A block for displaying and managing user cases and tickets.

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)

## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [ticket-list](https://storybook-o2s.openselfservice.com/?path=/story/blocks-ticketlist--default)

## About This Block

The ticket-list block shows a paginated, filterable list of support tickets or cases for the authenticated user. Users can create new tickets, view details, and (when permitted) delete tickets. Content editors place the block via CMS; the Tickets integration (e.g. Zendesk) provides the data.

- **Paginated list** – Browse tickets with pagination and filters
- **Create tickets** – Create new support tickets (when ACL permits)
- **Permission-based** – ACL for view, create, delete
- **Auth-required** – Tickets scoped to logged-in user

Content editors place the block and configure labels. Developers connect a Tickets integration (e.g. Zendesk) to power the list.

## Installation

```bash
npm install @o2s/blocks.ticket-list
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as TicketList from '@o2s/blocks.ticket-list/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        TicketList.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as TicketList from '@o2s/blocks.ticket-list/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'ticket-list') {
            return (
                <TicketList.TicketListRenderer
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

Use the SDK to fetch ticket list data:

```typescript
import { getSdk } from '@o2s/blocks.ticket-list/sdk';

const sdk = getSdk('https://your-api-url.com');

const ticketList = await sdk.blocks.getTicketList(
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
GET /api/blocks/ticket-list/:id
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        tickets: Ticket[];
        pagination: Pagination;
    };
}
```

## Related Blocks

- `@o2s/blocks.ticket-details` - Display individual ticket details
- `@o2s/blocks.ticket-summary` - Display ticket summary statistics
- `@o2s/blocks.ticket-recent` - Display recent tickets
