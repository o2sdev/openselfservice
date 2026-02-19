# @o2s/blocks.featured-service-list

A block displaying a list of featured services.

The featured-service-list block highlights a curated set of services from the Resources integration, with labels and copy from the CMS. Content editors choose which services to feature and write marketing copy. Ideal for homepage or dashboard "Featured Services" sections.

- **Featured services** – Curated list from Resources integration
- **CMS labels** – Titles, descriptions, CTAs from CMS
- **Navigation** – Links to service detail pages
- **Resources + CMS** – Uses both for content and data

Content editors configure labels and placement via CMS. Developers connect a Resources integration (e.g. Medusa.js, mocked).

## Installation

```bash
npm install @o2s/blocks.featured-service-list
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as FeaturedServiceList from '@o2s/blocks.featured-service-list/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        FeaturedServiceList.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as FeaturedServiceList from '@o2s/blocks.featured-service-list/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'featured-service-list') {
            return (
                <FeaturedServiceList.FeaturedServiceListRenderer
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

Use the SDK to fetch featured services:

```typescript
import { getSdk } from '@o2s/blocks.featured-service-list/sdk';

const sdk = getSdk('https://your-api-url.com');

const featuredServices = await sdk.blocks.getFeaturedServiceList(
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
GET /api/blocks/featured-service-list/:id
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        services: Service[];
    };
}
```

## Related Blocks

- `@o2s/blocks.service-list` - Display list of services
- `@o2s/blocks.service-details` - Display service details


## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [featured-service-list](https://storybook-o2s.openselfservice.com/?path=/story/blocks-featuredservicelist--default)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)