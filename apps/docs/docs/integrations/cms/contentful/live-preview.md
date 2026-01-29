---
sidebar_position: 500
---

# Live Preview

Contentful integration includes built-in support for Live Preview, which allows content editors to see their changes in real-time as they edit content in the Contentful web app. This feature enables a seamless content editing experience where changes are immediately reflected in the preview without requiring manual page refreshes.

## Implementation approach

Implementing Live Preview in a composable architecture presents some unique challenges:

1. **API composition layer** - Our architecture includes an API harmonization layer that aggregates and transforms data from various sources, including Contentful. This layer adds complexity because changes made in Contentful need to flow through this layer before they can be displayed in the preview.

2. **CMS-agnostic design** - We designed our architecture to be CMS-agnostic, allowing us to potentially switch to a different CMS in the future. However, Live Preview implementations are typically CMS-specific, making it challenging to create a generic solution.

3. **Data transformation** - Our mappers transform Contentful data into our application's normalized data model, which can make it difficult to map changes back to the original Contentful fields for Live Preview.

To address these challenges, we've implemented a **metadata pattern** that bridges our normalized data model with Contentful's structure, enabling real-time editing and inspection of content directly from the frontend.

## Metadata pattern

The metadata pattern is a crucial part of our Live Preview implementation. It serves as a bridge between our application's data model and Contentful's content structure, enabling real-time editing and inspection of content.

### Purpose

The metadata pattern:

1. Maps our internal property names back to the original Contentful field names, allowing the Live Preview SDK to know which fields to update when content is changed in the Contentful editor
2. Includes Contentful entry IDs, which are necessary to identify specific content entries in the Contentful system
3. For complex components with nested content (like FAQ items), maintains the hierarchical structure, ensuring that edits to nested content are properly tracked

### Structure

The metadata is only included when the application is in preview mode (when `isPreview` is `true`), ensuring that regular users don't receive unnecessary data.

Here's an example of how metadata is structured for a FAQ component:

```typescript
meta: isPreview
    ? {
          __id: data.sys.id,              // Contentful entry ID
          title: 'title',                  // Maps to Contentful 'title' field
          subtitle: 'subtitle',            // Maps to Contentful 'subtitle' field
          items: data.itemsCollection?.items.map((item) => ({
              __id: item.sys.id,           // Nested entry ID
              title: 'title',              // Maps to Contentful 'title' field
              content: 'content',          // Maps to Contentful 'content' field
          })),
          banner: data.banner
              ? {
                    __id: data.banner.sys.id,
                    title: 'title',
                    description: 'description',
                    button: 'link',
                }
              : undefined,
      }
    : undefined,
```

### How it works

The metadata object maps our internal property names to Contentful field names:

- `__id` - The Contentful entry ID for this component
- Property names (like `title`, `subtitle`) - Map to Contentful field names (as strings)

When a content editor clicks on an element in the preview, the Live Preview SDK uses this metadata to:

1. Identify which Contentful entry to edit (using `__id`)
2. Identify which field to edit (using the field name mapping)
3. Open the correct field in the Contentful editor

## LivePreviewProvider

The `LivePreviewProvider` is a React component that wraps your application and enables Live Preview functionality.

### Setup

First, wrap your application with the `LivePreviewProvider`:

```tsx
import { LivePreview } from '@o2s/configs.integrations/live-preview';

function App() {
    return (
        <LivePreview.Provider locale="en" enableInspectorMode={true} enableLiveUpdates={true}>
            {/* Your app content */}
        </LivePreview.Provider>
    );
}
```

### Configuration

The `LivePreviewProvider` accepts the following props (matching Contentful's `ContentfulLivePreviewInitConfig`):

- `locale` - The current locale
- `enableInspectorMode` - Whether to enable inspector mode (click to edit)
- `enableLiveUpdates` - Whether to enable live updates (real-time content changes)
- Additional Contentful Live Preview configuration options

### Environment variables

To use Live Preview, you need to set the `CF_PREVIEW_TOKEN` environment variable with your Contentful Preview API token. This token allows access to draft and unpublished content.

## useInspector hook

The `useInspector` hook is a custom hook that simplifies using Live Preview inspector mode in your components. It uses the metadata to create HTML attributes that the Contentful Live Preview SDK can use to highlight and edit the content.

### Usage

```tsx
import { LivePreview } from '@o2s/configs.integrations/live-preview';

function FaqItem({ item, meta }) {
    const inspector = LivePreview.useInspector();

    return (
        <div className="faq-item">
            <h3 {...inspector(meta, 'title')}>{item.title}</h3>
            <div {...inspector(meta, 'content')}>{item.content}</div>
        </div>
    );
}
```

### How it works

The `useInspector` hook:

1. Uses Contentful's `useContentfulInspectorMode` hook internally
2. Takes the metadata object and a field name
3. Generates HTML attributes (`data-contentful-entry-id` and `data-contentful-field-path`) that the Live Preview SDK uses
4. Returns these attributes as props that can be spread onto React elements

When a content editor clicks on an element with these attributes, they're taken directly to the corresponding field in the Contentful editor.

## Code examples

### Setting up LivePreviewProvider

```tsx
'use client';

import { LivePreview } from '@o2s/configs.integrations/live-preview';
import { useLocale } from 'next-intl';

export function Providers({ children }: { children: React.ReactNode }) {
    const locale = useLocale();

    return (
        <LivePreview.Provider locale={locale} enableInspectorMode={true} enableLiveUpdates={true}>
            {children}
        </LivePreview.Provider>
    );
}
```

### Using useInspector in components

```tsx
'use client';

import { LivePreview } from '@o2s/configs.integrations/live-preview';

interface FaqBlockProps {
    title?: string;
    subtitle?: string;
    items: Array<{ title: string; content: string }>;
    meta?: {
        __id: string;
        title: string;
        subtitle: string;
        items: Array<{ __id: string; title: string; content: string }>;
    };
}

export function FaqBlock({ title, subtitle, items, meta }: FaqBlockProps) {
    const inspector = LivePreview.useInspector();

    return (
        <div>
            {title && <h2 {...inspector(meta, 'title')}>{title}</h2>}
            {subtitle && <p {...inspector(meta, 'subtitle')}>{subtitle}</p>}
            <div>
                {items.map((item, index) => (
                    <div key={index}>
                        <h3 {...inspector(meta?.items?.[index], 'title')}>{item.title}</h3>
                        <div {...inspector(meta?.items?.[index], 'content')}>{item.content}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
```

### Metadata in mappers

Here's how metadata is added in a mapper:

```typescript
export const mapFaqBlock = ({
    isPreview,
    ...data
}: FaqComponentFragment & { isPreview?: boolean }): CMS.Model.FaqBlock.FaqBlock => {
    switch (data.__typename) {
        case 'BlockFaq':
            return {
                id: data.sys.id,
                title: data.title,
                subtitle: data.subtitle,
                items: data.itemsCollection?.items.map(
                    (item): CMS.Model.FaqBlock.FaqItem => ({
                        title: item.title!,
                        content: item.content!,
                    }),
                ),
                meta: isPreview
                    ? {
                          __id: data.sys.id,
                          title: 'title',
                          subtitle: 'subtitle',
                          items: data.itemsCollection?.items.map((item) => ({
                              __id: item.sys.id,
                              title: 'title',
                              content: 'content',
                          })),
                      }
                    : undefined,
            };
    }

    throw new NotFoundException();
};
```

## Best practices

1. **Only include metadata in preview mode** - Metadata should only be included when `isPreview` is `true` to avoid unnecessary data for regular users
2. **Maintain hierarchical structure** - For nested content, maintain the metadata hierarchy to ensure proper tracking
3. **Use useInspector consistently** - Use the `useInspector` hook consistently across all components that need Live Preview support
4. **Test with draft content** - Always test Live Preview with draft content to ensure the preview token is working correctly
5. **Handle missing metadata gracefully** - Components should handle cases where metadata is not available (regular users)

## Limitations

1. **CMS-specific implementation** - The current implementation is specific to Contentful and would need to be adapted for other CMSes
2. **Metadata overhead** - While metadata is only included in preview mode, it does add some overhead to the data structure
3. **Complex nested structures** - Very complex nested structures may require careful metadata mapping
4. **Real-time updates** - Live updates are currently not supported due to a different content structure on the frontend compared to the one returned from Contentful

## Additional resources

For a detailed implementation story and technical deep-dive, see our blog article: [Integrating Contentful with Live Preview into composable Next.js apps](/blog/integrating-contentful-with-live-preview-into-composable-nextjs-apps).
