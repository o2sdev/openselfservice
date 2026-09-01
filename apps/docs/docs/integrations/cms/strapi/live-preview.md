---
sidebar_position: 500
---

# Live Preview

The Strapi integration supports Live Preview using Strapi's [Preview feature](https://docs.strapi.io/cms/features/preview). Editors open a page or component
inside the Strapi admin preview iframe and see draft content rendered by the real frontend. On supported blocks they can click text to edit it in place. The
preview updates as they type and refreshes on save.

:::info Requirements
Live Preview relies on Strapi's advanced preview, which requires Strapi Enterprise (Growth or Enterprise plan), version 5.12 or later. Without it the integration
still works normally; the preview features are simply inactive.
:::

## Implementation approach

Live Preview in a composable architecture faces the same challenges described for [Contentful](../contentful/live-preview.md): an API harmonization layer sits
between the CMS and the frontend, the architecture is CMS-agnostic, and mappers transform CMS data into a normalized model. Strapi adds one more constraint.

Strapi identifies editable fields on the frontend using Content Source Maps: metadata encoded as invisible characters (via [`@vercel/stega`](https://www.npmjs.com/package/@vercel/stega))
directly inside string values. A decoder script injected into the preview iframe reads those markers and wires up click-to-edit.

The catch is that Strapi only encodes source maps on its REST Content API. This integration fetches over GraphQL and normalizes the result, so it cannot use the
native encoder. Instead it produces the markers itself on the API Harmonization server, after mapping. The output is byte-identical to Strapi's own encoder, so the injected decoder
treats it exactly like native content.

This mechanism differs from Contentful:

|                         | Contentful                                                             | Strapi                                                        |
| ----------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------- |
| Field identity          | Separate `meta` object, read as `data-*` attributes via `useInspector` | Encoded in-band inside the string values (stega)              |
| Where it's produced     | `meta` built in the mapper                                             | Marker encoded on the API Harmonization server, after mapping |
| Frontend `useInspector` | Emits inspector attributes                                             | No-op (identity travels in the string)                        |

## How it works

1. The editor opens a preview in the Strapi admin. Strapi's `preview.handler` returns a frontend URL and loads it in an iframe (draft mode enabled).
2. The frontend fetches block data from the API Harmonization server with `preview: true`.
3. The API Harmonization server fetches draft content over GraphQL (`status: DRAFT`), runs the normal mapper, then runs a preview-only encode pass that embeds a source-map marker into
   each editable string.
4. The frontend renders the strings (markers are invisible). The `LivePreviewProvider` completes a handshake with Strapi, which injects its decoder script.
5. The decoder scans the DOM, decodes the markers, and enables highlight and click-to-edit. Typing in the side editor updates the preview live; saving refreshes it.

### The encode pass

Encoding happens after the mapper and after any cache read, so transformations can never strip the markers and cached bytes never contain stega. It lives in
`packages/integrations/strapi-cms/src/modules/cms/live-preview/encode-source-map.ts` and mirrors Strapi core's format exactly:

```typescript
import { vercelStegaCombine } from '@vercel/stega';

export const encodeField = (
    text: string,
    ctx: SourceMapContext,
    path: string,
    type: StrapiFieldType = 'string',
): string => {
    const strapiSource = new URLSearchParams();
    strapiSource.set('documentId', ctx.documentId); // owning entry (the component)
    strapiSource.set('type', type); // 'string', 'richtext', etc.
    strapiSource.set('path', ctx.basePath ? `${ctx.basePath}.${path}` : path); // e.g. content.0.items.2.title
    strapiSource.set('model', ctx.model); // e.g. api::component.component
    strapiSource.set('kind', ctx.kind); // collectionType
    if (ctx.locale) strapiSource.set('locale', ctx.locale);
    return vercelStegaCombine(text, { strapiSource: strapiSource.toString() }, false);
};
```

Each block's mapper exports an `encode<Block>(block, ctx)` next to its `map<Block>`, which wraps only the block's own, same-document, visible-text fields. For
example, the FAQ encoder:

```typescript
export const encodeFaqBlock = (
    block: CMS.Model.FaqBlock.FaqBlock,
    ctx: SourceMapContext,
): CMS.Model.FaqBlock.FaqBlock => {
    const enc = createFieldEncoder(ctx);
    return {
        ...block,
        title: enc(block.title, 'title'),
        subtitle: enc(block.subtitle, 'subtitle'),
        items: block.items?.map((item, i) => ({
            ...item,
            title: enc(item.title, `items.${i}.title`),
            content: enc(item.content, `items.${i}.description`, 'richtext'), // model `content` maps to Strapi `description`
        })),
        banner: block.banner
            ? {
                  ...block.banner,
                  title: enc(block.banner.title, 'banner.title'),
                  description: enc(block.banner.description, 'banner.description', 'richtext'),
              }
            : block.banner,
    };
};
```

The encoder is wired into the preview branch of `CmsService.getBlockConfig`:

```typescript
case 'FaqBlock': {
    if (toBooleanPreview(options.preview)) {
        return this.getBlock(options).pipe(
            map(mapFaqBlock),
            map((block) => encodeFaqBlock(block, this.sourceCtx(options))),
        );
    }
    return this.getCachedBlock(key, () => this.getBlock(options).pipe(map(mapFaqBlock)));
}
```

:::warning Only encode same-document, visible text
Never encode URLs, enum values, icon names, or IDs, because embedding invisible characters would corrupt them. Never encode text that belongs to a different
document (for example related categories or articles) with the block's `documentId`; that content is handled by the page and component editing model below.
:::

### Fetching draft content

Preview reads use GraphQL with `status: DRAFT`. Whether a token is needed depends on Strapi permissions:

- If the Strapi public role has `find` on the content types, `status: DRAFT` returns drafts with no token.
- If permissions are locked down (recommended for production, so drafts aren't world-readable), set `CMS_STRAPI_PREVIEW_TOKEN` to an API token with draft `find`
  permission. The API Harmonization server then sends it as a bearer token only in preview mode.

Draft content is not cached in preview mode.

## Page vs. component editing

O2S pages reference blocks via relations to a separate `component` collection, so each block is its own Strapi document. Strapi inline editing only works when the
clicked field belongs to the document currently open in the side editor. This produces two preview modes:

- Page preview (`api::page.page`): the whole page renders with draft content; block fields highlight but are not inline-editable. Clicking one shows "This field
  comes from a different document". Each block instead shows an "Edit block ↗" affordance (see below).
- Component preview (`api::component.component`): a single block renders and its fields are inline-editable, because that component is the open document.

### The "Edit block" affordance

On a page preview, hovering a block frames it with an outline and shows an "Edit block ↗" button that opens that block's own component preview (where inline
editing works) in a new tab. It is implemented by `LivePreview.BlockEditAffordance`, rendered per block in `renderBlocks` (draft mode only, and only when the app
is embedded in the admin iframe). It is suppressed for the block whose `documentId` matches the currently open document, so it never appears where inline editing
already works. Because it is keyed on `documentId`, it stays correct for any content that points to a different document.

## Frontend integration

### LivePreviewProvider

Unlike Contentful, the Strapi `LivePreviewProvider` implements the Strapi preview handshake rather than wrapping a vendor SDK. Wrap the app with it (the O2S
frontend already does this in the root layout):

```tsx
import { LivePreview } from '@o2s/configs.integrations/live-preview';

function App({ children }) {
    return <LivePreview.Provider enableLiveUpdates={isDraftModeEnabled}>{children}</LivePreview.Provider>;
}
```

In draft mode it:

1. posts `previewReady` to the parent (Strapi admin),
2. on `strapiScript`, injects Strapi's decoder script into `<head>`,
3. on `strapiUpdate`, calls `router.refresh()` so saves re-render with fresh draft data.

Because the injected script is evaluated in the page, `NEXT_PUBLIC_CMS_URL` is **required for preview**: incoming messages must come from the parent frame and match that origin before the script is injected. If it is not set, the provider fails closed and does not wire up the handshake at all.

### useInspector

`useInspector` is a no-op for Strapi, because field identity travels in-band via stega, so no data attributes are needed. Blocks can keep calling
`inspector(meta, 'field')` for cross-integration compatibility; it simply returns `{}`.

### Content Security Policy

In preview, the frontend must allow two things:

- Being framed by the Strapi admin origin, via `frame-ancestors 'self' <NEXT_PUBLIC_CMS_URL>`.
- Loading the decoder. Strapi's script dynamically imports `@vercel/stega` from `https://cdn.jsdelivr.net`, so if a restrictive `script-src` or `connect-src` is
  set it must include that host. Otherwise the decoder silently no-ops and no highlights appear.

### Environment variables (frontend / API Harmonization server)

| Variable                   | Where                    | Purpose                                                                                                                |
| -------------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_CMS_URL`      | frontend                 | Strapi admin origin: trusted source of preview messages and target of the "Edit block" links. **Required for preview** |
| `CMS_STRAPI_BASE_URL`      | API Harmonization server | Strapi base URL for GraphQL fetches                                                                                    |
| `CMS_STRAPI_PREVIEW_TOKEN` | API Harmonization server | Optional; API token for draft reads when the public role lacks `find`                                                  |

## Strapi configuration

On the Strapi project side, enable the Preview feature in `config/admin.ts` and allow the frontend to be embedded:

```typescript
// config/admin.ts
preview: {
    enabled: env.bool('PREVIEW_ENABLED', true),
    config: {
        allowedOrigins: [env('CLIENT_URL', 'http://localhost:3000')],
        async handler(uid, { documentId, locale, status }) {
            // api::page.page           maps to /{locale}/{slug}
            // api::component.component  maps to /{locale}/preview/component/{documentId}?type=<BlockType>
            // returns the frontend enable-draft / disable-draft URL (guarded by a shared secret)
        },
    },
},
```

```typescript
// config/middlewares.ts: allow the admin to iframe the frontend
{
    name: 'strapi::security',
    config: { contentSecurityPolicy: { useDefaults: true, directives: { 'frame-src': ["'self'", env('CLIENT_URL')] } } },
}
```

Strapi env: `PREVIEW_ENABLED`, `CLIENT_URL` (frontend origin), `PREVIEW_SECRET` (must match the frontend preview-route secret).

:::note
The separate `@strapi/plugin-content-source-map` plugin is not required, because the API Harmonization server self-encodes and the injected decoder decodes any `@vercel/stega` marker
regardless of who produced it.
:::

## Supported blocks

Edit-in-place is enabled for the same blocks as the Contentful integration:

| Block        | Encoded fields                                                                                |
| ------------ | --------------------------------------------------------------------------------------------- |
| FAQ          | `title`, `subtitle`, `items[].title`, `items[].content`, `banner.title`, `banner.description` |
| QuickLinks   | `title`, `description`, `items[].label`                                                       |
| TicketList   | `title`, `subtitle`, `noResults.title`, `noResults.description`                               |
| CategoryList | `title`, `description`                                                                        |
| ArticleList  | `title`, `description`                                                                        |

Other blocks render draft content in preview but are not click-to-edit (no encoder).

## Limitations

1. Requires Strapi Enterprise, version 5.12 or later.
2. Block fields are not inline-editable from a page preview, because blocks are separate documents. Use the "Edit block ↗" affordance to open the component preview, where editing works.
3. Rich-text fields are wrapped as a whole, so highlight granularity depends on how the value renders.
4. Each encoded field carries roughly 500 to 600 invisible characters, which only applies in preview mode.

## Additional resources

- [Strapi Preview feature](https://docs.strapi.io/cms/features/preview)
- [Contentful Live Preview](../contentful/live-preview.md): the metadata and data-attribute approach, for comparison.
