# @o2s/blocks.article

A block displaying a single article.

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)

## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [article](https://storybook-o2s.openselfservice.com/?path=/story/blocks-article--default)

## About This Block

The article block renders a single knowledge base or blog article with title, content, dates, and optional related content links. Content editors publish articles via the CMS (Strapi, Contentful, or Zendesk Help Center) and organize them by category. Articles are typically accessed by slug for SEO-friendly URLs.

- **Full article display** – Title, body content, publication and update dates
- **Slug-based routing** – Articles linked by URL slug for clean, shareable links
- **Related content** – Optional links to related articles or categories
- **Locale support** – Content rendered in the user's selected language

Content editors manage article content and metadata in the CMS. Developers get a ready-made article detail component that works with any Articles integration.

## Installation

```bash
npm install @o2s/blocks.article
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as Article from '@o2s/blocks.article/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        Article.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as Article from '@o2s/blocks.article/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'article') {
            return (
                <Article.ArticleRenderer
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

Use the SDK to fetch article data:

```typescript
import { getSdk } from '@o2s/blocks.article/sdk';

const sdk = getSdk('https://your-api-url.com');

const article = await sdk.blocks.getArticle(
    { slug: 'article-slug' },
    { 'x-locale': 'en' },
    accessToken
);
```

## Configuration

This block requires the following integrations to be configured in `AppConfig`:

```typescript
import { Articles, CMS } from '@o2s/configs.integrations';

export const AppConfig: ApiConfig = {
    integrations: {
        articles: Articles.ArticlesIntegrationConfig,  // Required
        cms: CMS.CmsIntegrationConfig,                // Required
    },
};
```

## Environment Variables

The required environment variables depend on which CMS integration you're using:

- **For Strapi CMS**: See `@o2s/integrations.strapi-cms` documentation
- **For Contentful CMS**: See `@o2s/integrations.contentful-cms` documentation
- **For mocked integration**: No additional environment variables needed

## API

### Block Endpoint

```
GET /api/blocks/article/:slug
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        id: string;
        slug: string;
        title: string;
        content: string;
        publishedAt: string;
    };
}
```

## Related Blocks

- `@o2s/blocks.article-list` - Display list of articles
- `@o2s/blocks.article-search` - Search articles
- `@o2s/blocks.category` - Display category with articles
