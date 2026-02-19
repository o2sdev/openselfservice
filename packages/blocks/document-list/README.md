# @o2s/blocks.document-list

A simple block displaying static content in the form of an DocumentList.

The document-list block displays a list of documents (PDFs, files, etc.) managed in the CMS. Users can open or download documents. Content editors upload and organize documents, set titles, and optionally categorize them. Ideal for document libraries, download centers, and resource hubs.

- **Document library** – List of documents with titles and download/open links
- **CMS-managed** – Documents and metadata configured in CMS
- **Open or download** – Users access documents via links
- **Locale support** – Document lists can vary by locale

Content editors manage document metadata and links in the CMS. Developers get a document library block with no custom backend logic.

## Installation

```bash
npm install @o2s/blocks.document-list
```

## Usage

### Backend (API Harmonization)

Register the block in `app.module.ts`:

```typescript
import * as DocumentList from '@o2s/blocks.document-list/api-harmonization';
import { AppConfig } from './app.config';

@Module({
    imports: [
        DocumentList.Module.register(AppConfig),
    ],
})
export class AppModule {}
```

### Frontend

Register the block in `renderBlocks.tsx`:

```typescript
import * as DocumentList from '@o2s/blocks.document-list/frontend';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[]) => {
    return blocks.map((block) => {
        if (block.type === 'document-list') {
            return (
                <DocumentList.DocumentListRenderer
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

Use the SDK to fetch document list:

```typescript
import { getSdk } from '@o2s/blocks.document-list/sdk';

const sdk = getSdk('https://your-api-url.com');

const documentList = await sdk.blocks.getDocumentList(
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
GET /api/blocks/document-list/:id
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
        documents: Document[];
    };
}
```

## Related Blocks

None


## About Blocks in O2S

Blocks are self-contained, reusable UI components that combine harmonizing and frontend components into a single package. Each block is independently packaged as an NPM module and includes three primary parts: API Harmonization Module, Frontend Components, and SDK Methods. Blocks allow you to quickly add or remove functionality without impacting other components of the application.

- **See all blocks**: [Blocks Documentation](https://www.openselfservice.com/docs/main-components/blocks/)
- **View this block in Storybook**: [document-list](https://storybook-o2s.openselfservice.com/?path=/story/blocks-documentlist--default)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)