---
'@o2s/framework': minor
'@o2s/ui': minor
'@o2s/blocks.product-list': minor
'@o2s/blocks.category': patch
---

feat(frontend): server-rendered, indexable URLs for list filters

Filter params reached the browser only: a page always rendered with the default filters and the client
replaced them afterwards, so `/products?category=TOOLS` served the full catalogue to anyone opening the
link (a crawler included) and every filtered variant canonicalised to the bare page.

`searchParams` now travel from the page through `renderBlocks` into the blocks (`BlockSearchParams` on
`BaseBlockProps`), and the product list resolves them into its query server-side. The block query takes
a 1-based `page` and turns it into an `offset` with the page size from the CMS config, which only the
API knows. With the server rendering the filtered state, the client's mount refetch is gone, so a
shared link costs one request instead of two.

Its params also lost the `product_` prefix: `useUrlFilters` accepts `filterKeys` in place of a
`namespace`, which is what a public, indexed list needs to have plain, linkable URLs. Facet values are
rendered as real links next to the filter controls, because a crawler follows `<a href>` and does not
operate a select, and `generateSeo` keeps the index clean: one value of one whitelisted facet is
self-canonical and indexable, while sorting, deep pages and facet combinations canonicalise back and
are marked `noindex, follow`.

Multi-value restore from the URL is now limited to toggle groups. A select writes a single string back
whatever `allowMultiple` says, so restoring an array into one only tripped React's `<select>` check.
