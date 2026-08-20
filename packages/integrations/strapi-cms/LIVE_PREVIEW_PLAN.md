# Strapi Live Preview — Implementation Plan (BFF self-encoding approach)

> Status: proposed plan (no implementation yet).
> Scope: enable Strapi Live Preview with edit-in-place, while **keeping the GraphQL
> fetch path** and **keeping the mappers clean** (no REST switch, no shape-munging).
> Coverage target: **parity with the Contentful integration** — edit-in-place on the same
> 5 blocks Contentful supports (FAQ, QuickLinks, TicketList, CategoryList, ArticleList), not
> a full live-preview rollout across every block.

---

## 1. Goal

Editors open a page inside Strapi's admin **Live Preview** iframe and:

1. see **draft** content rendered by our real frontend, and
2. **click any editable text** in the preview to jump straight to that entry in the
   Strapi Content Manager (edit-in-place).

We achieve (2) with **Content Source Maps** — invisible `@vercel/stega` markers embedded
in the rendered strings — but we **produce those markers ourselves on the BFF**, after
normalization, instead of relying on Strapi's native encoder.

---

## 2. Why self-encoding (decision recap)

- Strapi's native source-map encoding (`@strapi/plugin-content-source-map`,
  `encodeSourceMaps=true`) is **REST-only**. It cannot emit markers over GraphQL.
- Keeping GraphQL therefore **forces** us to encode ourselves — which is also the clean
  option: mappers stay untouched, and the one bit of "manipulation" lives in a single
  preview-gated pass.
- The marker payload is trivial and fully derivable. **Corrected in the Phase 0 spike**
  (read from `@strapi/core` `content-source-maps.js` — the earlier `{ origin, href }` guess
  was wrong). The real format is:

  ```js
  const strapiSource = new URLSearchParams();
  strapiSource.set('documentId', documentId);
  strapiSource.set('type', attributeType);         // 'string' | 'richtext' | ...
  strapiSource.set('path', pathWithIndices);        // e.g. 'content.0.items.2.title'
  strapiSource.set('model', uid);                   // e.g. 'api::component.component'
  strapiSource.set('kind', schemaKind);             // 'collectionType'
  strapiSource.set('locale', locale);
  vercelStegaCombine(value, { strapiSource: strapiSource.toString() }, false);
  ```

  We know all of these on the BFF, so our output is byte-identical to Strapi's own encoder.
  The injected client script decodes any marker, reads `strapiSource`, sets a
  `data-strapi-source` attribute, and drives click-to-edit off the `path`. See §2a.

### What we salvage vs. drop from the PoC (`feature/strapi-live-preview`, `6bfb3e22`)

| Salvage (integration-agnostic, good) | Drop (only needed for the REST/native path) |
|---|---|
| Frontend postMessage handshake container | `@strapi/client` REST `StrapiService` |
| `/api/preview` draft route pattern | `getBlockRest` |
| Env wiring (`CMS_STRAPI_BASE_URL`, secret) | `replaceKeysInObj` (shape shim) |
| Integration switch in `configs/integrations` | `POPULATE_BLOCKS` populate spec |

---

## 2a. Phase 0 spike — RESULTS (completed, 2026-08-20)

Run against the local Strapi at `http://localhost:1337` (repo: `C:\workspace\oss\my-strapi-project`,
Strapi **5.52.1 EE trial**, `cms-advanced-preview` feature present).

**✅ Make-or-break confirmed: self-encoding works.** The injected preview script
(`@strapi/content-manager/.../preview/controllers/previewScript.js`, `setupStegaDOMObserver`)
dynamically imports `@vercel/stega@0.1.2` from `https://cdn.jsdelivr.net`, scans all DOM text,
`vercelStegaDecode`s it, and wires click-to-edit for any marker carrying a `strapiSource` key.
**It is agnostic to who produced the marker** — our BFF-produced markers work identically.

**✅ Round-trip proven.** A Node harness encoded FAQ fields exactly as Strapi core does, pushed
them through the `flatted` cache + `JSON.stringify` wire hop, then decoded with the same
`@vercel/stega@0.1.2`: all fields recovered `strapiSource` (documentId + path), and
`vercelStegaClean` restored the exact original visible text. Non-encoded strings decode to
nothing (no false highlights).

**⚠️ Finding 1 — payload format corrected.** Not `{ origin, href }`; it is
`{ strapiSource: <URLSearchParams> }` with `documentId, type, path, model, kind, locale`
(see §2). `path` must include **array indices mirroring the Strapi structure**
(`content.0.items.2.title`), because the side editor focuses fields by that path.

**⚠️ Finding 2 — document boundary (new, significant).** O2S pages reference blocks via
`oneToMany` relations to the `api::component.component` collection, so **each block is a
separate document from the page** that renders it. Strapi inline edit-in-place only works when
the previewed document owns the clicked field (else the admin shows a `DIFFERENT_DOCUMENT`
info toast). Consequences:
  - Previewing a **page** → visual preview + refresh work; component fields are cross-document
    and are **not inline-editable**.
  - Previewing a **component** entry → its fields **are** inline-editable, but a standalone
    block has no page URL. → needs a dedicated frontend route
    `/{locale}/preview/component/{documentId}` that renders the single block. This matches how
    O2S already fetches blocks (`sdk.blocks.getFaq({ id: componentId })`).
  - **Recommendation:** drive edit-in-place from **component-level** preview; keep page-level
    preview for whole-page visual review.

**⚠️ Finding 3 — new frontend requirements.** The decoder is an ESM dynamic import from
`cdn.jsdelivr.net`; the frontend CSP must allow it (`script-src`/`connect-src`) or the decoder
silently no-ops (its failure path is a swallowed `catch`). The frontend must also allow being
framed by the admin origin (`frame-ancestors http://localhost:1337`).

**✅ Confirmed.** GraphQL exposes `PublicationStatus { DRAFT, PUBLISHED }`, so `status: DRAFT`
is available over GraphQL (no REST needed for draft reads). Public handshake events are
`previewReady` / `strapiScript` / `strapiUpdate` — the PoC container already uses these.

**⚠️ Finding 4 — draft auth (verified live, corrects earlier assumption).** `status: DRAFT` is
the *selector* only; authorization is separate. Strapi's `find` permission covers **both**
statuses (there is no distinct "read draft" permission). Verified against the running instance:
  - Public role WITHOUT `find` → *all* reads Forbidden (published and draft).
  - Public role WITH `find` → `status: DRAFT` returns drafts **with no token**.
  So a preview API token is **optional**: needed only if the public role is locked down (e.g.
  production, where you don't want drafts world-readable). The BFF sends the token only when
  `CMS_STRAPI_PREVIEW_TOKEN` is set, so both modes work with no code change.

**ℹ️ Note — payload size.** Encoding inflates each field by ~500–600 invisible chars
(the whole `strapiSource` string is encoded per field). Preview-only, so acceptable, but avoid
encoding large/again-repeated fields unnecessarily.

**Strapi side set up by this spike** (needs a Strapi restart + a preview API token to be live):
  - `config/admin.ts` — `preview.enabled` + `allowedOrigins` + `handler` (routes `page` →
    real URL, `component` → the single-block preview route) via `config/get-preview-pathname.ts`.
  - `config/middlewares.ts` — `strapi::security` CSP `frame-src` allowing the frontend origin.
  - `.env` — `PREVIEW_ENABLED`, `CLIENT_URL=http://localhost:3000`, `PREVIEW_SECRET=secret`
    (matches the frontend's `CF_PREVIEW_SECRET`).

**In-browser (partial):** ✅ the app now renders inside the Strapi admin preview iframe
(preview handler + `allowedOrigins` + Strapi `frame-src` + frontend `frame-ancestors` all
verified live — the frontend CSP had to add the admin origin `http://localhost:1337`). Still
deferred to Phase 1 (needs handshake + stega code): the actual highlight/click-to-edit loop and
the rich-text granularity check (§8). The decode/format/transport are already proven
programmatically.

---

## 3. End-to-end flow (target)

```
Strapi admin (Live Preview iframe)
  │  preview handler → GET /api/preview?secret=…&url=/{locale}/{slug}&status=draft
  ▼
Next.js frontend
  1. /api/preview (or existing /api/enable-draft) → draftMode().enable()
  2. renderBlocks.tsx reads draftMode().isEnabled → isDraftModeEnabled
  3. Block server comp → sdk.blocks.getFaq({ id, preview: isDraftModeEnabled }, …)
  ▼
BFF (api-harmonization → strapi-cms CmsService)
  4. preview=true → GraphQL fetch with status: DRAFT (+ preview token)
  5. existing mapper → normalized O2S model (UNCHANGED)
  6. NEW: encodeSourceMap(normalized, meta, { uid, strapiUrl })  ← stega applied here, last
  ▼
Frontend renders strings (stega markers ride inside them, invisibly)
  7. Strapi's injected client script scans DOM, decodes markers, enables click-to-edit
  8. strapiUpdate message → router.refresh(); on save the loop repeats
```

Everything in steps 1–3 already exists on `main` (built for Contentful). The new work is
concentrated in steps 4–8.

---

## 4. Key existing integration points (verified)

- **Draft toggle:** `apps/frontend/src/app/api/enable-draft/route.ts` +
  `disable-draft/route.ts` (Next `draftMode()`, cookie override for iframe usage).
- **Draft propagation:** `apps/frontend/src/blocks/renderBlocks.tsx` reads
  `draftMode().isEnabled` and passes `isDraftModeEnabled` to every block.
- **Per-block fetch:** e.g. `packages/blocks/content/faq/src/frontend/Faq.server.tsx`
  calls `sdk.blocks.getFaq({ id, preview: isDraftModeEnabled }, …)`.
- **BFF param:** `CMS.Request.GetCmsParams.preview?: boolean`
  (`packages/framework/src/modules/cms/cms.request.ts`) already threads through to
  `CmsService.getBlockConfig`.
- **Meta model:** each block already declares editor coordinates, e.g.
  `FaqBlock extends Block.Block<Meta>` with `Meta { __id; title; subtitle; items[]; banner }`
  (`packages/framework/src/modules/cms/models/blocks/faq.model.ts`). The Contentful FAQ
  mapper already populates this. **We reuse this structure as the encoding allowlist.**
- **Frontend LP hooks:** `LivePreview.useInspector()` / `LivePreview.Provider` resolved via
  `@o2s/configs.integrations/live-preview` →
  `packages/configs/integrations/src/models/live-preview.ts` (currently → `mocked`).
- **GraphQL:** `getComponent(documentId, locale)` already selects `documentId`
  (`.../graphql/queries/getComponent.graphql`, `fragments/Component.graphql`). No `status`
  arg yet.

---

## 5. Architecture of the encoding pass

A single utility, meta-driven (allowlist), so mappers stay declarative and no non-editable
string (ids, URLs, enum values, `configurableTexts`) is ever corrupted.

**New file:** `packages/integrations/strapi-cms/src/modules/cms/live-preview/encode-source-map.ts`

Format matches Strapi core exactly (verified in the Phase 0 spike — see §2/§2a):

```ts
import { vercelStegaCombine } from '@vercel/stega';

interface FieldCoords {
    documentId: string;
    type: string;   // Strapi attribute type: 'string' | 'richtext' | 'text' | ...
    path: string;   // path WITH array indices, e.g. 'content.0.items.2.title'
    model: string;  // owning collection uid, e.g. 'api::component.component'
    kind: string;   // schema kind, e.g. 'collectionType'
    locale?: string;
}

export const encodeField = (text: string, c: FieldCoords): string => {
    const s = new URLSearchParams();
    s.set('documentId', c.documentId);
    s.set('type', c.type);
    s.set('path', c.path);
    s.set('model', c.model);
    s.set('kind', c.kind);
    if (c.locale) s.set('locale', c.locale);
    return vercelStegaCombine(text, { strapiSource: s.toString() }, false);
};

interface EncodeCtx {
    documentId: string;
    model: string;   // e.g. 'api::component.component'
    kind: string;    // 'collectionType'
    locale?: string;
    basePath: string; // dynamiczone base for the block, e.g. 'content.0'
}

/**
 * Walks `data` guided by `meta`; wraps only the string leaves declared in `meta`
 * with a stega marker, using each field's Strapi `path`. No-op when meta is undefined.
 */
export function encodeSourceMap<T>(data: T, meta: unknown, ctx: EncodeCtx): T {
    // for each editable field in meta → encodeField(data[field], { ...ctx, path, type })
    // recurse for items[i] (path `${basePath}.items.${i}.<field>`) and banner
    // rich text: handled per representation (see §8)
}
```

> **Meta now carries the Strapi `path`, not a Contentful fieldId.** For Strapi we repurpose the
> per-block `Meta` classes to declare each editable field's path (with indices) + attribute
> type. This is the encoding allowlist — non-editable strings (ids, URLs, enums,
> `configurableTexts`) simply aren't listed, so they're never corrupted.

**Call site** — `CmsService.getBlockConfig`, preview branch only. Encoding runs *after* the
mapper and *after* cache read, so transformations can never strip the markers and cached bytes
never contain stega (see §7). `documentId` = the component entry id; `model`/`kind` are constant
for block content (`api::component.component` / `collectionType`); `basePath` reflects the
dynamiczone slot (`content.0`).

```ts
const mapped = this.getBlock(options).pipe(map(mapFaqBlock));
return toBooleanPreview(options.preview)
    ? mapped.pipe(map((d) => encodeSourceMap(d, d.meta, {
          documentId: options.id, model: COMPONENT_UID, kind: 'collectionType',
          locale: options.locale, basePath: 'content.0',
      })))
    : mapped;
```

> For Strapi the frontend `useInspector` stays a no-op (identity is in-band). `meta` is used
> server-side only and can be stripped from the wire payload after encoding.

> **Document boundary (Finding 2):** the `documentId`/`model` above target the `component`
> entry. Inline edit works when that same component is the previewed document — i.e. from the
> `/{locale}/preview/component/{documentId}` route (§2a). Under page-level preview the fields
> are cross-document (visual preview only).

---

## 6. Draft fetching over GraphQL

1. Add `status` to the component query/fragment:
   - `getComponent($id: ID!, $locale: I18NLocaleCode!, $status: PublicationStatus)` and pass
     `status:` into `component(documentId, locale, status)`. Regenerate GraphQL types.
   - Same for page/header/footer/appConfig queries used in preview.
2. `GraphqlService`: accept an optional `preview`/`status` and, when previewing, set an
   `Authorization: Bearer <CMS_STRAPI_PREVIEW_TOKEN>` header **only if the token is configured**
   (see Finding 4 — with a public `find` grant no token is needed; the header is a
   locked-down/production fallback). Uses the SDK's per-request `requestHeaders` arg, not the
   shared client.
3. `CmsService`: map `options.preview` → `status: DRAFT` and thread it into every
   `graphqlService.*` call in the preview path.

---

## 7. Caching

- Namespace all preview cache keys (e.g. `component-<id>-<locale>-preview`) so draft content
  never collides with published content.
- Cache the **normalized, pre-encode** data only; run `encodeSourceMap` **after** the cache
  read on every request (encoding is cheap). Guarantees no stega bytes are persisted and no
  double-encoding.
- Simplest safe default for phase 1: **bypass cache entirely when `preview === true`.**

---

## 8. Rich text (the coverage ceiling)

Behaviour depends on our `RichText` representation of the field:

- **String / markdown** → wrap the whole value with one marker (coarse but works).
- **Structured AST / Strapi blocks JSON** → wrap the first text leaf per node, or accept
  block-level (not inline) granularity.

Decide the exact handling in the Phase 0 spike using the FAQ `content` / banner
`description` fields as the test case. Document the granularity limit explicitly.

---

## 9. Frontend changes

1. **Strapi `LivePreviewProvider`** — replace the current passthrough
   (`packages/integrations/strapi-cms/src/modules/cms/live-preview/LivePreviewProvider.tsx`)
   with the handshake (salvaged from the PoC `LivePreview.tsx`):
   - post `previewReady` to `window.parent`,
   - on `strapiScript` → inject `<script>` into `<head>`,
   - on `strapiUpdate` → `router.refresh()`,
   - strict `origin` check against `NEXT_PUBLIC_CMS_URL`.
2. **`useInspector` stays a no-op** — identity is in-band via stega; block code
   (`inspector(meta, 'title')` → `{}`) is untouched and stays cross-integration compatible.
3. **Mount the provider** in `apps/frontend/src/app/[locale]/layout.tsx` (only meaningful in
   draft mode; safe to always mount — it just listens).
4. **CSP** (two requirements, both confirmed in the spike):
   - `frame-ancestors` allowing the Strapi admin origin (`http://localhost:1337`) so the app
     can be embedded in the Live Preview iframe.
   - **`script-src`/`connect-src` must allow `https://cdn.jsdelivr.net`** — the injected
     decoder is an ESM dynamic import of `@vercel/stega@0.1.2` from that CDN. If the CSP blocks
     it, the decoder's `catch` swallows the error and **no highlights appear** (silent failure).
5. **Preview entry route** — reuse `/api/enable-draft` (or add `/api/preview` accepting
   `status`); Strapi's preview handler calls it with `secret` + target slug/locale.
6. **Component preview route (Finding 2)** — add `/{locale}/preview/component/{documentId}`
   that renders a single block by its component documentId (reusing the existing per-block
   server components). This is what makes **inline editing** work, because the previewed
   document then owns the fields. Page-level preview remains visual-only for block fields.

---

## 10. Integration selection

- `packages/configs/integrations/src/models/cms.ts` → `@o2s/integrations.strapi-cms`.
- `packages/configs/integrations/src/models/live-preview.ts` →
  `@o2s/integrations.strapi-cms/live-preview` (currently `mocked`).
- Add `@vercel/stega` to `packages/integrations/strapi-cms/package.json`.

---

## 11. Strapi side (repo: `C:\workspace\oss\my-strapi-project`) — DONE in Phase 0 spike

Strapi 5.52.1 EE trial with `cms-advanced-preview` present. Applied by the spike (needs a
Strapi **restart** + a **preview API token** to go live):

- `config/admin.ts` — `preview.enabled`, `allowedOrigins: [CLIENT_URL]`, and a `handler` that
  maps `api::page.page` → `/{locale}/{slug}` and `api::component.component` →
  `/{locale}/preview/component/{documentId}`, calling the frontend `enable-draft`/`disable-draft`
  route with `secret`.
- `config/get-preview-pathname.ts` — the uid→pathname mapping (documents Finding 2).
- `config/middlewares.ts` — `strapi::security` CSP `frame-src` allows the frontend origin so the
  admin can embed it.
- `.env` — `PREVIEW_ENABLED=true`, `CLIENT_URL=http://localhost:3000`, `PREVIEW_SECRET=secret`.

We do **not** install `@strapi/plugin-content-source-map` — we self-encode, and the spike
confirmed the injected decoder (part of `cms-advanced-preview`) decodes *any* `@vercel/stega`
marker regardless of origin. **Remaining Strapi task:** create an API token (or public-role
`find` on draft) for the BFF to read drafts, and restart Strapi to load the config.

---

## 12. Phased delivery

### Phase 0 — De-risking spike ✅ COMPLETE (see §2a for full results)
- ✅ Self-produced `@vercel/stega` markers are decoded by Strapi's injected script (source-agnostic).
  The fallback "ship our own decoder" is **not needed**.
- ✅ Payload format captured & corrected (`strapiSource` URLSearchParams, path with indices).
- ✅ Draft available over GraphQL via `status: DRAFT` (needs a preview token — public is Forbidden).
- ✅ Strapi Preview configured in `my-strapi-project`.
- ⚠️ Uncovered the document-boundary constraint (Finding 2) → drives the component preview route.
- ⏭️ Deferred to Phase 1 start (needs frontend switched + admin login): the in-browser visual
  loop, and the exact rich-text granularity check (§8) against a real FAQ `content` field.

### Phase 1 — Vertical slice (FAQ block) ✅ IMPLEMENTED
- ✅ GraphQL `status: DRAFT` plumbing; preview token optional (Finding 4). `getComponent`
  takes `status` + optional Bearer token; `getBlock` fetches draft uncached in preview.
- ✅ `encode-source-map.ts` (`encodeField`/`createFieldEncoder`) + `encodeFaqBlock` in the FAQ
  mapper; wired into the FAQ preview branch of `getBlockConfig` (encodes after mapping).
- ✅ Frontend `LivePreviewProvider` handshake (`previewReady`/`strapiScript`/`strapiUpdate`,
  origin-checked); integration switch (`configs/integrations` live-preview → strapi-cms; cms was
  already strapi-cms); `NEXT_PUBLIC_CMS_URL` + frontend `frame-ancestors` (done earlier).
- ✅ Component preview route `/[locale]/preview/component/[documentId]` for inline edit;
  Strapi handler derives the block type from the dynamiczone and passes `?type=`.
- ✅ Preview bypasses cache (§7). Type-checks, lints, builds clean.
- ⚠️ Codegen (`npm run generate`) is broken by a **pre-existing** `Unexpected Name
  "DIRECTIVE_DEFINITION"` error (reproduces on a bare `typescript`-only config with no
  introspection output, so it's a core codegen/`graphql` vs Strapi 5 schema incompatibility, not
  caused by the `$status` change). Fixing it needs a codegen/graphql toolchain up/downgrade that
  would churn the whole generated SDK, so it's tracked as a separate follow-up. Until then the two
  `generated/strapi.ts` spots for `status` are hand-patched to mirror the `.graphql` source (which
  stays the source of truth). A successful future regen reproduces the same output.
- ✅ **In-browser verification PASSED (2026-08-20).** Component-level preview
  (`api::component.component/{id}/preview`) renders the FAQ block; fields highlight; double-click
  opens Strapi's inline editor showing the exact path `content.0.title` (**no "different
  document"**); typing updates the preview live (`strapiFieldChange`). Confirms BFF self-encoding
  + handshake + decoder + inline edit all work together.
  - Page-level preview (`api::page.page/...`) shows highlights but double-click → "This field
    comes from a different document" — expected (Finding 2); use the component route for editing.
  - Note: a block whose `title` is null renders empty because `FaqPure` nests items under
    `{title && …}` (content quirk, not a preview bug).
- ⏭️ Minor: confirm rich-text (`items[].content`) highlight granularity (§8); investigate the
  Next.js dev "1 Issue" badge on the preview route (non-blocking).

### Workaround B1 — per-block "Edit block ↗" affordance ✅ IMPLEMENTED & VERIFIED
Addresses the page→component document boundary (Finding 2) without a model change: on a
**page** preview, hovering a block frames it with an **outline** and shows an "Edit block ↗"
button that opens that block's **component** preview — where inline editing works — in a new tab.
The outline makes it obvious which block the button refers to.
- `LivePreview.BlockEditAffordance` (new export on the live-preview interface): real in
  strapi-cms (opens `…/collection-types/api::component.component/{block.id}/preview`), no-op in
  mocked/contentful. Rendered by `renderBlocks` per block, gated on draft mode + shown only when
  embedded in the admin iframe (`window.top !== self`).
- Lives entirely in our iframe (frontend) — no Strapi admin internals touched.
- **Hover is tracked by cursor GEOMETRY, not CSS `:hover`.** Strapi's inline-edit highlights live
  in a fixed viewport overlay (`z-index: 9999`, `pointer-events: auto`); while the cursor is over
  one, the block wrapper never gets `:hover`, so a CSS-driven affordance flickered off exactly
  over editable text. A `pointermove` handler checks whether the pointer is inside the block's
  `getBoundingClientRect()` — immune to what's stacked on top.
- Verified: hover empty space OR highlighted text → outline frames the block + button stays
  visible; click → opens the correct component preview (QuickLinks block → its own component doc)
  in a new tab.
- Note: integration-package prettier parser rejects JSX *elements*; `BlockEditAffordance` uses
  `React.createElement` and the provider returns `children` directly (convention: see
  contentful-cms provider).
- **Suppressed by documentId match (✅ verified).** The affordance hides only for the block whose
  `documentId` equals the entry currently open in the side editor (parsed from the
  `…/preview/component/{documentId}` URL). So in a component preview the block's own button
  disappears (inline edit already works there), while on a page preview all blocks keep it.
  Keyed on documentId — **not** the route — so a block/relation pointing to a **different**
  document always keeps its affordance (future-safe for nested cross-document editing).
- **Relation audit (for nested editing):** FAQ / QuickLinks / TicketList are built purely from
  scalar + **embedded** `content.*` components (same document → all inline-editable in the
  component preview). **CategoryList / ArticleList** hold relations to *other* documents
  (`api::category.category`, `api::page.page`, articles); their own `title`/`description` are
  same-document, but the related items' text is cross-document. There are no per-relation
  affordances yet (affordance is per top-level block) — nested cross-document editing is a
  future enhancement, and the documentId-keyed suppression above is already compatible with it.

### Workaround B2 — edit a block *in full-page context* (FUTURE IMPROVEMENT, not planned yet)
B1 lets authors edit a block, but in **isolation** (the component preview renders only that one
block). B2 would let them edit a block while still seeing the **whole page** around it. Deferred
for now — captured here so we don't lose the design.

**How B2 differs from B1 (author's view):**
- B1: page preview (context, no editing) → click "Edit block ↗" → *isolated* block preview (edit).
- B2: page preview → click "Edit block ↗" → *full page* rendered, with **that one block editable
  inline** and the others still showing "Edit block ↗". Context **and** editing together.

**Key mechanism (why B2 is cheaper than it looks):** the Strapi side editor is bound to the
admin route (`…/api::component.component/{id}/preview`), **independent of what the iframe loads**.
So B2 needs no new render mode — the component preview handler just returns the **containing
page's** URL instead of the isolated block route. Then: iframe = full page (every block already
encoded), side editor = the component; the block whose encoded `documentId` matches the component
becomes inline-editable, the rest stay cross-document (keep the B1 button on them).

**What B2 would require:**
1. **Reverse lookup (component → containing page)** in the Strapi preview `handler`: find a page
   whose template slots reference this component's `documentId`; return `/{locale}/{pageSlug}`
   (draft). Keep the isolated `/preview/component/{id}` route as the fallback for orphan
   components (0 pages) or lookup failure.
2. **`?active={componentId}` on the page render** so `renderBlocks` hides the "Edit block ↗"
   button on the currently-editable block (and keeps it on the others).

**Wrinkles / trade-offs vs B1:**
- **Shared components are ambiguous** — a component reused on N pages has no single container;
  pick the first match (edits apply to the one document regardless, so context is only visual).
- **Highlight noise** — the full page encodes every block, so all highlight, but only the active
  one is editable (others → "different document" on double-click). Optional cleanup: thread an
  `activeComponentId` to the BFF so it encodes **only** the active block.
- **Page's own fields not editable in B2** — the side editor holds a *component*, so page-level
  fields (slug, SEO) aren't inline-editable (the inverse of B1's page preview). Usually fine
  since authors mostly edit block content.
- **Lookup cost** — a page scan per preview open; fine at demo scale, cache for large sites.

**Suggested first step if pursued:** spike the core assumption — point the handler's component
branch at the containing-page URL and confirm the matching block stays inline-editable inside a
full-page render — before building the reverse-lookup + `active` polish.

### Phase 2 — Roll out to the Contentful-supported blocks only
Scope: **parity with the Contentful integration**, not full coverage. Contentful currently
enables live preview on exactly the blocks whose mappers populate `meta`:

| Block | Contentful mapper (reference) | Strapi mapper to update |
|---|---|---|
| FAQ | `cms.faq.mapper.ts` | `cms.faq.mapper.ts` (done in Phase 1) |
| QuickLinks | `cms.quick-links.mapper.ts` | `cms.quick-links.mapper.ts` |
| TicketList | `cms.ticket-list.mapper.ts` | `cms.ticket-list.mapper.ts` |
| CategoryList | `cms.category-list.mapper.ts` | `cms.category-list.mapper.ts` |
| ArticleList | `cms.article-list.mapper.ts` | `cms.article-list.mapper.ts` |

✅ **IMPLEMENTED.** Each block's Strapi mapper now exports an `encode<Block>(block, ctx)` beside
its `map<Block>`, wired into a preview-encode branch in `getBlockConfig` (mirrors FAQ). Encoded
fields (same-document, visible text only — never URLs/enums/relations, which would break if
stega'd or are cross-document):
- **FAQ** — title, subtitle, items[].title, items[].content, banner.title, banner.description.
- **QuickLinks** — title, description, items[].label (`content.0.quickLinks.{i}.label`).
- **TicketList** — title, subtitle, noResults.title, noResults.description.
- **CategoryList** — title, description.
- **ArticleList** — title, description.

Not encoded (deliberately): TicketList column/field labels, `labels` (from the separate
configurable-texts single type → cross-document) and `detailsUrl` (URL); CategoryList/ArticleList
related `categories`/`articles`/`pages` (cross-document relations, names resolved elsewhere).
Builds + lints clean.

- **All other blocks remain out of scope** — they render draft content in preview but are not
  click-to-edit (no encoder).
- Header/footer/page/appConfig are also out of scope unless Contentful gains preview support
  for them first.

### Phase 3 — Hardening
- Origin/secret hardening, CSP review, error paths when not in an iframe.
- Perf check (encoding cost, draft token caching).
- Docs for editors + for adding `meta` to future blocks.

---

## 13. Risks & open questions

| Risk | Impact | Status after Phase 0 |
|---|---|---|
| ~~`strapiScript` decoder only handles Strapi-encoded content~~ | ~~High~~ | ✅ **Resolved** — decoder is source-agnostic; self-encoding works |
| ~~Marker lost through BFF→FE JSON / block transforms~~ | ~~Low~~ | ✅ **Resolved** — round-trip proven through flatted cache + JSON |
| Inline edit blocked across page→component document boundary | **High (UX)** | ⚠️ **Confirmed (Finding 2)** — drive edit from component preview route |
| Frontend CSP must allow `cdn.jsdelivr.net` or decoder silently no-ops | Medium | ⚠️ **New (Finding 3)** — add to `script-src`/`connect-src` |
| Rich-text marker survival / granularity | Medium — limits editable coverage | ⏭️ Open — check real FAQ `content` at Phase 1 start (§8) |
| Draft reads need auth token | Low | ✅ **Resolved (Finding 4)** — token OPTIONAL; public `find` makes `status: DRAFT` work token-less; token only for locked-down/prod |
| Encoding a URL/id/enum by mistake | Medium — broken links/routing | Mitigated — meta-driven allowlist (never wrap non-editable) |
| Payload size (~+500–600 bytes/field, invisible) | Low | Preview-only; don't encode large repeated fields |
| EE licensing (Live Preview is paid tier) | Product | Gate feature; keep mocked default for OSS demo |

---

## 14. File-change checklist

**BFF (`packages/integrations/strapi-cms`)**
- [ ] `package.json` — add `@vercel/stega`
- [ ] `src/modules/cms/live-preview/encode-source-map.ts` — new util
- [ ] `src/modules/cms/live-preview/LivePreviewProvider.tsx` — handshake (replace passthrough)
- [ ] `src/modules/cms/cms.service.ts` — preview branch: `status: DRAFT`, call `encodeSourceMap`, preview cache keys
- [ ] `src/modules/graphql/graphql.service.ts` — optional preview token / status header
- [ ] `src/modules/cms/graphql/**` — add `$status: PublicationStatus`, regenerate types
- [ ] `src/modules/cms/mappers/blocks/*.mapper.ts` — populate `meta` for the **5 Contentful-supported blocks only**: FAQ, QuickLinks, TicketList, CategoryList, ArticleList (FAQ first)

**Config**
- [ ] `packages/configs/integrations/src/models/cms.ts` → strapi-cms
- [ ] `packages/configs/integrations/src/models/live-preview.ts` → strapi-cms

**Frontend (`apps/frontend`)**
- [ ] `src/app/[locale]/layout.tsx` — mount Strapi provider
- [ ] `src/app/[locale]/preview/component/[documentId]/page.tsx` — single-block preview route (Finding 2)
- [ ] `src/app/api/preview/route.ts` (or reuse `enable-draft`) — accept `status`
- [ ] CSP `frame-ancestors` for the Strapi admin origin **+ allow `cdn.jsdelivr.net` in `script-src`/`connect-src`** (Finding 3)
- [ ] `.env` — `NEXT_PUBLIC_CMS_URL`, `PREVIEW_SECRET`/`CF_PREVIEW_SECRET`

**Strapi (`C:\workspace\oss\my-strapi-project`)**
- [x] EE Live Preview config — `config/admin.ts` handler + `allowedOrigins` (done in spike)
- [x] `config/get-preview-pathname.ts`, `config/middlewares.ts` CSP, `.env` (done in spike)
- [ ] Restart Strapi to load the new config
- [ ] Create preview API token (draft `find` permission) → set as `CMS_STRAPI_PREVIEW_TOKEN` on the BFF
```
