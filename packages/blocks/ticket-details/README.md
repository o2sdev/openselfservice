# @o2s/blocks.ticket-details

A block for displaying and managing ticket details.

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)

## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [ticket-details](https://storybook-o2s.openselfservice.com/?path=/story/blocks-ticketdetails--default)

## About This Block

The ticket-details block displays a single support ticket with its comments and metadata. Users can view the ticket, read the conversation, and—when permitted—edit, close, or reopen the ticket. Actions are permission-based via ACL (view, edit, close, reopen).

- **Full ticket view** – Subject, status, comments, metadata
- **Comment thread** – Ticket conversation with replies
- **Actions** – Edit, close, reopen (when ACL permits)
- **Permission-based** – ACL controls available actions

Content editors place the block; the Tickets integration provides ticket data. Developers connect Zendesk or another Tickets integration.

## Installation

```bash
npm install @o2s/blocks.ticket-details
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as TicketDetails from '@o2s/blocks.ticket-details/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        TicketDetails.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as TicketDetails from '@o2s/blocks.ticket-details/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'ticket-details') {
            return (
                <TicketDetails.TicketDetailsRenderer
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

Use the SDK to fetch ticket details:

```typescript
import { getSdk } from '@o2s/blocks.ticket-details/sdk';

const sdk = getSdk('https://your-api-url.com');

const ticketDetails = await sdk.blocks.getTicketDetails(
    { id: 'ticket-id' },
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
        auth: Auth.AuthIntegrationConfig,           // Required
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
GET /api/blocks/ticket-details/:id
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        id: string;
        subject: string;
        status: string;
        comments: Comment[];
    };
}
```

## Related Blocks

- `@o2s/blocks.ticket-list` - Display list of tickets
- `@o2s/blocks.ticket-summary` - Display ticket summary
