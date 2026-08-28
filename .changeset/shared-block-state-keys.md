---
'@o2s/ui': patch
'@o2s/blocks.ticket-list': patch
'@o2s/blocks.order-list': patch
'@o2s/blocks.invoice-list': patch
'@o2s/blocks.notification-list': patch
'@o2s/blocks.product-list': patch
---

refactor(ui): one list of the keys that describe a block rather than a filter

The same idea was written out three times, and the lists had drifted: the active-filter counter skipped `offset`, `limit` and `id`, the filter badges skipped those plus `viewMode`, and the URL serialisation skipped only `id` and `limit` while checking `offset` separately.

`BLOCK_STATE_KEYS` in `use-url-filters.utils` is now the single list, and the other two are derived from it: `DEFAULT_EXCLUDED_KEYS` drops the offset, because it is not left out of the URL but written as the 1-based `page`, and the badges add the view toggle, which is a display choice rather than a filter. The difference that used to be an accident is now one `filter` call with the reason next to it.

`parseFiltersFromSearchParams` is also generic over the block's query now, so it returns `Partial<TQuery>` and the five server components no longer cast its result. A query string carries no types, so the assertion happens once inside the helper instead of at every call site, and each call names the query it is building.
