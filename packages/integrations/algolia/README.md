# @o2s/integrations.algolia

Algolia integration for O2S, providing search functionality.

The Algolia integration implements the O2S Search module. It provides generic `search` and article-specific `searchArticles` methods with query, facet filters, numeric filters, pagination, and sort (via index suffix). Used by Articles integrations (e.g. Strapi CMS) for full-text article search in knowledge bases and help centers.

- **Generic search** – search(indexName, payload) for any index
- **Article search** – searchArticles with query, facets, pagination
- **Facets & filters** – Facet and numeric filters; sort via index suffix
- **Index names** – May include sort suffix (e.g. `indexName_field_order`)

Developers configure `ALGOLIA_APP_ID` and `ALGOLIA_API_KEY`. Article search is typically used with Strapi CMS or Contentful; content editors manage articles in the CMS; search indexes are synced by the CMS or external process.

## Installation

```bash
npm install @o2s/integrations.algolia
```

## Configuration

Configure the integration via `@o2s/configs.integrations` in your `AppConfig`:

```typescript
import { Search } from '@o2s/configs.integrations';
import { AlgoliaConfig } from '@o2s/integrations.algolia/integration';

export const AppConfig: ApiConfig = {
    integrations: {
        search: AlgoliaConfig.search,
    },
};
```

Or use the pre-configured integration from `@o2s/configs.integrations`:

```typescript
import { Search } from '@o2s/configs.integrations';

export const AppConfig: ApiConfig = {
    integrations: {
        search: Search.SearchIntegrationConfig,
    },
};
```

## Environment Variables

### Required

- `ALGOLIA_APPLICATION_ID` - Your Algolia application ID
- `ALGOLIA_API_KEY` - Algolia API key (search-only key recommended)

### Optional

- `ALGOLIA_INDEX_NAME` - Default index name

## Example .env

```bash
ALGOLIA_APPLICATION_ID=your-app-id
ALGOLIA_API_KEY=your-api-key
ALGOLIA_INDEX_NAME=your-index-name
```

## Features

- Full-text search
- Faceted search
- Search suggestions
- Index management

## Related Packages

- `@o2s/blocks.article-search` - Search articles
- `@o2s/configs.integrations` - Integration configuration


## About Integrations in O2S

Integrations are adapters that connect O2S to external backend services. They handle API communication and normalize data from various backend services into an API-agnostic format. The frontend app communicates only with the API Harmonization server, never directly with backend services, enabling you to swap integrations without breaking the frontend.

**Documentation**: [Algolia search](https://www.openselfservice.com/docs/integrations/search/algolia/overview)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)