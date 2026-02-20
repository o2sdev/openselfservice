# @o2s/blocks.user-account

A block displaying and managing user account information.

The user-account block shows the authenticated user's profile and allows editing when permitted. Users can view and update account details (e.g. name, email). Permissions (view, edit) are enforced via ACL. Typically used on "My Account" or profile pages in customer portals.

- **Profile view** – Display user name, email, and other profile fields
- **Edit profile** – Update account details (when ACL permits)
- **Permission-based** – ACL for view, edit
- **Auth-required** – Profile scoped to logged-in user

Content editors place the block via CMS. Developers connect a Users integration and Auth for authentication.

## Installation

```bash
npm install @o2s/blocks.user-account
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as UserAccount from '@o2s/blocks.user-account/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        UserAccount.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as UserAccount from '@o2s/blocks.user-account/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'user-account') {
            return (
                <UserAccount.UserAccountRenderer
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

Use the SDK to fetch user account data:

```typescript
import { getSdk } from '@o2s/blocks.user-account/sdk';

const sdk = getSdk('https://your-api-url.com');

const userAccount = await sdk.blocks.getUserAccount(
    { id: 'block-id' },
    { 'x-locale': 'en' },
    accessToken
);
```

## Configuration

This block requires the following integrations to be configured in `AppConfig`:

```typescript
import { Users, CMS, Auth } from '@o2s/configs.integrations';

export const AppConfig: ApiConfig = {
    integrations: {
        users: Users.UsersIntegrationConfig,  // Required
        cms: CMS.CmsIntegrationConfig,         // Required
        auth: Auth.AuthIntegrationConfig,        // Required
    },
};
```

## Environment Variables

The required environment variables depend on which integrations you're using:

- **For mocked integration**: See `@o2s/integrations.mocked` documentation for database setup

## API

### Block Endpoint

```
GET /api/blocks/user-account/:id
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        user: User;
        account: AccountInfo;
    };
}
```

## Related Blocks

None


## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [user-account](https://storybook-o2s.openselfservice.com/?path=/story/blocks-useraccount--default)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)