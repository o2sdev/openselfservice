# @o2s/blocks.service-details

A block displaying details for a service.

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)

## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [service-details](https://storybook-o2s.openselfservice.com/?path=/story/blocks-servicedetails--default)

## About This Block

The service-details block displays a single service or contract (e.g. subscription, support plan, asset) with full metadata. Users can view the service and follow links to related content or actions. Permission (view) is enforced via ACL. Ideal for service detail pages in customer portals.

- **Full service view** – Status, type, metadata, related links
- **Links** – Optional links to related pages or actions
- **Permission-based** – ACL for view
- **Auth-required** – Service scoped to logged-in user

Content editors place the block; the Resources integration provides service data. Developers connect Medusa.js (with assets/services) or another Resources integration.

## Installation

```bash
npm install @o2s/blocks.service-details
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as ServiceDetails from '@o2s/blocks.service-details/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        ServiceDetails.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as ServiceDetails from '@o2s/blocks.service-details/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'service-details') {
            return (
                <ServiceDetails.ServiceDetailsRenderer
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

Use the SDK to fetch service details:

```typescript
import { getSdk } from '@o2s/blocks.service-details/sdk';

const sdk = getSdk('https://your-api-url.com');

const serviceDetails = await sdk.blocks.getServiceDetails(
    { id: 'service-id' },
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
GET /api/blocks/service-details/:id
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
        description: string;
    };
}
```

## Related Blocks

- `@o2s/blocks.service-list` - Display list of services
- `@o2s/blocks.featured-service-list` - Display featured services
