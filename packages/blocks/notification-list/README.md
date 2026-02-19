# @o2s/blocks.notification-list

A block displaying and managing notifications.

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)

## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [notification-list](https://storybook-o2s.openselfservice.com/?path=/story/blocks-notificationlist--default)

## About This Block

The notification-list block shows a paginated, filterable list of notifications for the authenticated user (e.g. inbox or notification center). Users can mark notifications as read and delete them when permitted. Permissions (view, mark_read, delete) are enforced via ACL.

- **Paginated list** – Browse notifications with pagination and filters
- **Mark as read** – Mark single or bulk as read (when ACL permits)
- **Delete** – Remove notifications (when ACL permits)
- **Permission-based** – ACL for view, mark_read, delete

Content editors place the block via CMS. Developers connect a Notifications integration (e.g. mocked, push provider).

## Installation

```bash
npm install @o2s/blocks.notification-list
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as NotificationList from '@o2s/blocks.notification-list/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        NotificationList.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as NotificationList from '@o2s/blocks.notification-list/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'notification-list') {
            return (
                <NotificationList.NotificationListRenderer
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

Use the SDK to fetch notification list:

```typescript
import { getSdk } from '@o2s/blocks.notification-list/sdk';

const sdk = getSdk('https://your-api-url.com');

const notificationList = await sdk.blocks.getNotificationList(
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
GET /api/blocks/notification-list/:id
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        notifications: Notification[];
        pagination: Pagination;
    };
}
```

## Related Blocks

- `@o2s/blocks.notification-details` - Display notification details
- `@o2s/blocks.notification-summary` - Display notification summary
