# @o2s/integrations.contentful-cms

Contentful CMS integration for O2S, providing content management functionality via GraphQL.

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)

## About Integrations in O2S

Integrations are adapters that connect O2S to external backend services. They handle API communication and normalize data from various backend services into an API-agnostic format. The frontend app communicates only with the API Harmonization server, never directly with backend services, enabling you to swap integrations without breaking the frontend.

**Documentation**: [Contentful CMS](https://www.openselfservice.com/docs/integrations/cms/contentful/overview)

## About This Integration

The Contentful integration connects O2S to Contentful via GraphQL and REST. It provides pages, app config, header, footer, components, and supports Live Preview so content editors see changes in real time. Block mappings cover FAQ, tickets, notifications, invoices, services, payments, user account, orders, articles, categories, products, and more. Uses the Cache module for performance.

- **GraphQL + REST** – Delivery and Preview APIs; locales via REST
- **Live Preview** – Real-time preview as editors edit in Contentful
- **Block mappings** – Full support for O2S blocks
- **Cache** – Cached blocks and page data

Content editors use Contentful's web app; Live Preview requires `CF_PREVIEW_TOKEN`. Developers configure space, environment, and tokens.

## Installation

```bash
npm install @o2s/integrations.contentful-cms
```

## Configuration

Configure the integration via `@o2s/configs.integrations` in your `AppConfig`:

```typescript
import { Articles, CMS } from '@o2s/configs.integrations';
import { ContentfulConfig } from '@o2s/integrations.contentful-cms/integration';

export const AppConfig: ApiConfig = {
    integrations: {
        articles: ContentfulConfig.articles,
        cms: ContentfulConfig.cms,
    },
};
```

Or use the pre-configured integration from `@o2s/configs.integrations`:

```typescript
import { Articles, CMS } from '@o2s/configs.integrations';

export const AppConfig: ApiConfig = {
    integrations: {
        articles: Articles.ArticlesIntegrationConfig,
        cms: CMS.CmsIntegrationConfig,
    },
};
```

## Environment Variables

### Required

- `CMS_CONTENTFUL_SPACE_ID` - Your Contentful space ID
- `CMS_CONTENTFUL_ACCESS_TOKEN` - Contentful access token
- `CMS_CONTENTFUL_ENVIRONMENT` - Contentful environment (e.g., `master`)

### Optional

- `CMS_CONTENTFUL_PREVIEW_TOKEN` - Contentful preview token for draft content

## Example .env

```bash
CMS_CONTENTFUL_SPACE_ID=your-space-id
CMS_CONTENTFUL_ACCESS_TOKEN=your-access-token
CMS_CONTENTFUL_ENVIRONMENT=master
CMS_CONTENTFUL_PREVIEW_TOKEN=your-preview-token
```

## Features

- GraphQL-based content fetching
- Article and content management
- Live preview support
- Multi-locale content support

## Related Packages

- `@o2s/blocks.article` - Display articles
- `@o2s/blocks.article-list` - Display article lists
- `@o2s/configs.integrations` - Integration configuration
