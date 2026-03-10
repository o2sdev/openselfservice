# @o2s/blocks.article-search

Block for searching articles.

The article-search block provides a searchable knowledge base or help center. Users enter a query and see paginated results powered by the Search integration (e.g. Algolia). It is typically used on help center or knowledge base pages alongside category navigation.

- **Full-text search** – Query articles by keyword; integrates with Algolia or similar
- **Paginated results** – Navigate through search result pages
- **Configurable** – Block config from CMS; search index from integration
- **Articles + Search** – Requires both Articles and Search integrations

Content editors place the block and configure labels via CMS. Developers connect it to an Articles integration and a Search integration (e.g. Algolia) for index-backed search.

## Installation

```bash
npm install @o2s/blocks.article-search
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as ArticleSearch from '@o2s/blocks.article-search/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        ArticleSearch.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as ArticleSearch from '@o2s/blocks.article-search/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'article-search') {
            return (
                <ArticleSearch.ArticleSearchRenderer
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

Use the SDK to search articles:

```typescript
import { sdk } from '@o2s/blocks.article-search/sdk';

// SDK uses NEXT_PUBLIC_API_URL for the API base URL
const searchResults = await sdk.blocks.searchArticles(
    { query: 'search term', id: 'block-id' },
    { 'x-locale': 'en' },
    accessToken
);
```

## Configuration

This block requires the following integrations to be configured in `AppConfig`:

```typescript
import { Articles, CMS, Search } from '@o2s/configs.integrations';

export const AppConfig: ApiConfig = {
    integrations: {
        articles: Articles.ArticlesIntegrationConfig,  // Required
        cms: CMS.CmsIntegrationConfig,                 // Required
        search: Search.SearchIntegrationConfig,        // Optional (for enhanced search)
    },
};
```

## Environment Variables

The required environment variables depend on which integrations you're using:

- **For Algolia integration**: See `@o2s/integrations.algolia` documentation
- **For Strapi CMS**: See `@o2s/integrations.strapi-cms` documentation
- **For mocked integration**: No additional environment variables needed

## API

### Block Endpoint

```
GET /api/blocks/article-search/:id?query=search-term
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        articles: Article[];
        query: string;
    };
}
```

## Related Blocks

- `@o2s/blocks.article-list` - Display list of articles
- `@o2s/blocks.article` - Display single article

## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [article-search](https://storybook-o2s.openselfservice.com/?path=/story/blocks-articlesearch--default)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)
