# @o2s/blocks.faq

A simple block displaying static content in the form of an FAQ.

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)

## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [faq](https://storybook-o2s.openselfservice.com/?path=/story/blocks-faq--default)

## About This Block

The faq block renders frequently asked questions in an accordion: users expand and collapse items to read answers. Content editors manage Q&A pairs entirely in the CMS—no code changes needed to add or edit questions. Commonly used for help sections, product FAQs, and support pages.

- **Accordion UI** – Expand/collapse individual FAQ items
- **CMS-driven** – All Q&A content managed in CMS
- **Locale support** – FAQ content in the user's language
- **Simple structure** – Question and answer pairs per entry

Content editors add, edit, and reorder FAQ entries in the CMS. Developers get a reusable FAQ component with no backend logic beyond CMS fetch.

## Installation

```bash
npm install @o2s/blocks.faq
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as Faq from '@o2s/blocks.faq/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        Faq.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as Faq from '@o2s/blocks.faq/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'faq') {
            return (
                <Faq.FaqRenderer
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

Use the SDK to fetch FAQ data:

```typescript
import { getSdk } from '@o2s/blocks.faq/sdk';

const sdk = getSdk('https://your-api-url.com');

const faq = await sdk.blocks.getFaq(
    { id: 'block-id' },
    { 'x-locale': 'en' },
    accessToken
);
```

## Configuration

This block requires the following integrations to be configured in `AppConfig`:

```typescript
import { CMS } from '@o2s/configs.integrations';

export const AppConfig: ApiConfig = {
    integrations: {
        cms: CMS.CmsIntegrationConfig,  // Required
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
GET /api/blocks/faq/:id
```

**Headers:**
- `x-locale`: Content locale (required)

**Response:**

```typescript
{
    id: string;
    data: {
        questions: FAQItem[];
    };
}
```

## Related Blocks

None
