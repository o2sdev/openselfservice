# @o2s/blocks.service-list

A block displaying a list of services.

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)

## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [service-list](https://storybook-o2s.openselfservice.com/?path=/story/blocks-servicelist--default)

## About This Block

The service-list block shows a paginated, filterable list of services or contracts (e.g. subscriptions, support plans, assets) for the authenticated user. Users can filter by status, type, or category and navigate to service details. Permission (view) is enforced via ACL. Ideal for "My Services" or account pages.

- **Paginated list** – Browse services with pagination and filters
- **Filters** – By status, type, category
- **Service details** – Links to service detail pages
- **Auth-required** – Services scoped to logged-in user

Content editors place the block via CMS. Developers connect a Resources integration (e.g. Medusa.js with assets/services, mocked).

## Installation

```bash
npm install @o2s/blocks.service-list
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as ServiceList from '@o2s/blocks.service-list/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        ServiceList.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as ServiceList from '@o2s/blocks.service-list/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'service-list') {
            return (
                <ServiceList.ServiceListRenderer
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

Use the SDK to fetch service list:

```typescript
import { getSdk } from '@o2s/blocks.service-list/sdk';

const sdk = getSdk('https://your-api-url.com');

const serviceList = await sdk.blocks.getServiceList(
    { id: 'block-id' },
    { 'x-locale': 'en' },
    accessToken
);
```

## Configuration

This block requires the following integrations to be configured in `AppConfig`:

```typescript
import { Resources, CMS, Auth } from '@o2s/configs.integrations';

export const AppConfig: ApiConfig = {
    integrations: {
        resources: Resources.ResourcesIntegrationConfig,  // Required
        cms: CMS.CmsIntegrationConfig,                   // Required
        auth: Auth.AuthIntegrationConfig,                 // Required
    },
};
```

## Environment Variables

The required environment variables depend on which integrations you're using:

- **For mocked integration**: No additional environment variables needed

## API

### Block Endpoint

```
GET /api/blocks/service-list/:id
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        services: Service[];
        pagination: Pagination;
    };
}
```

## Related Blocks

- `@o2s/blocks.service-details` - Display service details
- `@o2s/blocks.featured-service-list` - Display featured services
