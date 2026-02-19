# @o2s/blocks.category

A block displaying a category with its articles, including pagination and filtering capabilities.

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)

## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [category](https://storybook-o2s.openselfservice.com/?path=/story/blocks-category--default)

## About This Block

The category block renders a category landing page with its associated articles. Users can browse articles within that category, with pagination to load more. Content editors define categories in the CMS and assign articles to them. This block is commonly used for knowledge base sections (e.g. "Billing", "Technical Support").

- **Category + articles** – Category metadata and paginated article list
- **Load more** – Pagination to browse larger article sets
- **CMS-driven** – Category selection and block placement via CMS
- **Articles integration** – Uses Articles (and optionally Search) for content

Content editors create categories and assign articles. Developers get a category landing page that works with Strapi, Contentful, or Zendesk Help Center.

## Installation

```bash
npm install @o2s/blocks.category
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as Category from '@o2s/blocks.category/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        Category.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as Category from '@o2s/blocks.category/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'category') {
            return (
                <Category.CategoryRenderer
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

Use the SDK to fetch category data:

```typescript
import { getSdk } from '@o2s/blocks.category/sdk';

const sdk = getSdk('https://your-api-url.com');

const category = await sdk.blocks.getCategory(
    { slug: 'category-slug' },
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
        cms: CMS.CmsIntegrationConfig,                 // Required
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
GET /api/blocks/category/:slug
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
        articles: Article[];
        pagination: Pagination;
    };
}
```

## Related Blocks

- `@o2s/blocks.category-list` - Display list of categories
- `@o2s/blocks.article` - Display single article
