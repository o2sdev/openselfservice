---
'@o2s/utils.api-harmonization': minor
'@o2s/framework': minor
'@o2s/blocks.ticket-list': patch
'@o2s/blocks.order-list': patch
'@o2s/blocks.invoice-list': patch
'@o2s/blocks.notification-list': patch
'@o2s/blocks.product-list': patch
---

refactor(framework): one pagination resolver for the list blocks

Every list block carried its own copy of the same two helpers, turning a query's `limit`, `offset` and `page` into the window to fetch. `Utils.Pagination.resolvePagination` in `@o2s/utils.api-harmonization` replaces all five: it takes the pagination a URL can carry (`Models.Pagination.PaginatedQuery`, structurally satisfied by any block query, so a block no longer types the helper with its own class) plus the page size to fall back on, and returns the `limit` and `offset` to use. The query shape stays a model in `@o2s/framework`, while the resolving lives with the other API-side helpers.

`PaginatedQuery` is kept apart from `PaginationQuery`, which the domain modules extend: `page` is consumed by the block API and never reaches them, so advertising it in their contracts would promise integrations something they never receive.

Two behaviours change with the move. A page size counts only as a whole number of rows above zero, so `?limit=-5` falls back to the CMS config instead of travelling on as a negative limit; the unit tests for the new helper are what surfaced it.

And the fallback page size is no longer a single row. Four of the five blocks fell back to `limit: 1` when neither the query nor the CMS config named one — inherited, and reachable, because `pagination` is optional in the CMS block models, so an entry without it rendered a one-row list. `Utils.Pagination.DEFAULT_LIMIT` (10) is the shared fallback now; the product list keeps its own 12, which matches its three-column grid.
