# @o2s/blocks.category-list

Block for displaying a list of categories.

The category-list block displays a list of article categories, either all categories or a subset by IDs. It provides navigation to category landing pages and is typically used on knowledge base or help center index pages. Content editors control which categories appear (or show all) via CMS configuration.

- **List by IDs or all** – Filter to specific categories or show the full list
- **Navigation** – Links to each category's landing page
- **CMS-driven** – Block placement and category selection via CMS
- **Articles integration** – Uses Articles integration for category data

Content editors choose which categories to feature. Developers get a category index/navigation block that works with any Articles integration.

## Installation

```bash
npm install @o2s/blocks.category-list
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as CategoryList from '@o2s/blocks.category-list/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        CategoryList.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as CategoryList from '@o2s/blocks.category-list/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'category-list') {
            return (
                <CategoryList.CategoryListRenderer
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

Use the SDK to fetch category list:

```typescript
import { sdk } from '@o2s/blocks.category-list/sdk';

// SDK uses NEXT_PUBLIC_API_URL for the API base URL
const categoryList = await sdk.blocks.getCategoryList(
    { id: 'block-id' },
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
GET /api/blocks/category-list/:id
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        categories: Category[];
    };
}
```

## Related Blocks

- `@o2s/blocks.category` - Display single category with articles
- `@o2s/blocks.article-list` - Display articles


## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [category-list](https://storybook-o2s.openselfservice.com/?path=/story/blocks-categorylist--default)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)
