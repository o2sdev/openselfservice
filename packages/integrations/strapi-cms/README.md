# @o2s/integrations.strapi-cms

Strapi CMS integration for O2S, providing content management functionality via GraphQL.

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)

## About Integrations in O2S

Integrations are adapters that connect O2S to external backend services. They handle API communication and normalize data from various backend services into an API-agnostic format. The frontend app communicates only with the API Harmonization server, never directly with backend services, enabling you to swap integrations without breaking the frontend.

**Documentation**: [Strapi CMS](https://www.openselfservice.com/docs/integrations/cms/strapi/overview)

## About This Integration

The Strapi integration connects O2S to a self-hosted Strapi instance via GraphQL. It provides pages, app config, header, footer, components, categories, and articles. Article search is powered by Algolia when the Search integration is configured. Content editors manage all content in Strapi; developers get a headless CMS backend with full control over hosting and schema.

- **GraphQL** – Pages, app config, header, footer, components, categories, articles
- **Articles** – Article and category management; search via Algolia
- **Cache** – Uses Cache module for performance
- **Self-hosted** – Run Strapi on your own infrastructure

Content editors use Strapi's admin UI. Developers configure `CMS_STRAPI_BASE_URL` and optionally `SEARCH_ARTICLES_INDEX_NAME` for article search.

## Installation

```bash
npm install @o2s/integrations.strapi-cms
```

## Configuration

Configure the integration via `@o2s/configs.integrations` in your `AppConfig`:

```typescript
import { Articles, CMS } from '@o2s/configs.integrations';
import { StrapiConfig } from '@o2s/integrations.strapi-cms/integration';

export const AppConfig: ApiConfig = {
    integrations: {
        articles: StrapiConfig.articles,
        cms: StrapiConfig.cms,
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

- `CMS_STRAPI_BASE_URL` - Your Strapi instance URL (e.g., `https://your-strapi.com`)
- `CMS_STRAPI_API_KEY` - Strapi API key for authentication

### Optional

- `CMS_STRAPI_GRAPHQL_ENDPOINT` - Custom GraphQL endpoint (defaults to `/graphql`)

## Example .env

```bash
CMS_STRAPI_BASE_URL=https://your-strapi.com
CMS_STRAPI_API_KEY=your-api-key-here
CMS_STRAPI_GRAPHQL_ENDPOINT=/graphql
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
