# @o2s/blocks.notification-details

A block displaying and managing notification details.

The notification-details block displays a single notification with full content. When the user has permission, it can auto-mark the notification as read on view. Users can also delete the notification when permitted. Permissions (view, mark_read, delete) are enforced via ACL.

- **Full notification view** – Title, body, metadata, date
- **Auto-mark read** – Mark as read on view (when ACL permits)
- **Delete** – Remove notification (when ACL permits)
- **Permission-based** – ACL for view, mark_read, delete

Content editors place the block; the Notifications integration provides notification data. Developers connect a Notifications integration.

## Installation

```bash
npm install @o2s/blocks.notification-details
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as NotificationDetails from '@o2s/blocks.notification-details/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        NotificationDetails.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as NotificationDetails from '@o2s/blocks.notification-details/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'notification-details') {
            return (
                <NotificationDetails.NotificationDetailsRenderer
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

Use the SDK to fetch notification details:

```typescript
import { sdk } from '@o2s/blocks.notification-details/sdk';

// SDK uses NEXT_PUBLIC_API_URL for the API base URL
const notificationDetails = await sdk.blocks.getNotificationDetails(
    { id: 'notification-id' },
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
        cms: CMS.CmsIntegrationConfig,                                 // Required
        auth: Auth.AuthIntegrationConfig,                              // Required
    },
};
```

## Environment Variables

The required environment variables depend on which integrations you're using:

- **For mocked integration**: No additional environment variables needed

## API

### Block Endpoint

```
GET /api/blocks/notification-details/:id
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        id: string;
        title: string;
        message: string;
        read: boolean;
    };
}
```

## Related Blocks

- `@o2s/blocks.notification-list` - Display list of notifications
- `@o2s/blocks.notification-summary` - Display notification summary


## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [notification-details](https://storybook-o2s.openselfservice.com/?path=/story/blocks-notificationdetails--default)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)
