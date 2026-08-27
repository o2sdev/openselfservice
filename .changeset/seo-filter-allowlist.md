---
'@o2s/utils.frontend': minor
'@o2s/blocks.product-list': patch
---

fix(frontend): decide indexing from a filter allowlist, not from any param

The page metadata treated every query param as a filter, so a link carrying `utm_source`, `gclid` or any other unrelated param dropped the page out of the index — and `?category=TOOLS&utm_source=x` lost its `?category=TOOLS` canonical as well. A campaign link to a category page was therefore worth nothing to a crawler.

Two allowlists in `@o2s/utils.frontend` now drive the decision: `Utils.Seo.INDEXABLE_FILTERS` for facets whose single value still describes a page, and `Utils.Seo.LISTING_PARAMS` for the params that change a listing without deserving an index entry. Anything outside both is ignored, and a facet keeps its canonical next to them — including next to a deep page, which now canonicalises to the facet listing rather than to the bare page.

The product list block renders its facet links from the same `INDEXABLE_FILTERS`, so the links and the canonical URLs can no longer drift apart; they were two lists kept in step by a comment.
