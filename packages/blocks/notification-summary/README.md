# @o2s/blocks.notification-summary

Displays a dynamic NotificationSummary showing notification counts grouped by priority.

The notification-summary block shows notification counts (e.g. unread, by priority) for the authenticated user. It acts as a dashboard widget: users see their notification workload at a glance and can navigate to the full notification list. Counts are grouped by priority from the Notifications integration.

- **Count by priority** – Unread or priority-based counts
- **Navigation** – Links to full notification list
- **Dashboard widget** – Compact summary for dashboards
- **Auth-required** – Counts scoped to logged-in user

Content editors place the block and configure labels. Developers connect a Notifications integration.

## Installation

```bash
npm install @o2s/blocks.notification-summary
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as NotificationSummary from '@o2s/blocks.notification-summary/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        NotificationSummary.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as NotificationSummary from '@o2s/blocks.notification-summary/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'notification-summary') {
            return (
                <NotificationSummary.NotificationSummaryRenderer
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

Use the SDK to fetch notification summary:

```typescript
import { sdk } from '@o2s/blocks.notification-summary/sdk';

// SDK uses NEXT_PUBLIC_API_URL for the API base URL
const notificationSummary = await sdk.blocks.getNotificationSummary(
    { id: 'block-id' },
    { 'x-locale': 'en' },
    accessToken
);
```

## Configuration

This block requires the following integrations to be configured in `AppConfig`:

```typescript
import { Notifications, CMS, Auth } from '@o2s/configs.integrations';

export const AppConfig: ApiConfig = {
    integrations: {
        notifications: Notifications.NotificationsIntegrationConfig,  // Required
        cms: CMS.CmsIntegrationConfig,                               // Required
        auth: Auth.AuthIntegrationConfig,                            // Required
    },
};
```

## Environment Variables

The required environment variables depend on which integrations you're using:

- **For mocked integration**: No additional environment variables needed

## API

### Block Endpoint

```
GET /api/blocks/notification-summary/:id
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        counts: {
            [priority: string]: number;
        };
    };
}
```

## Related Blocks

- `@o2s/blocks.notification-list` - Display list of notifications
- `@o2s/blocks.notification-details` - Display notification details


## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [notification-summary](https://storybook-o2s.openselfservice.com/?path=/story/blocks-notificationsummary--default)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)
